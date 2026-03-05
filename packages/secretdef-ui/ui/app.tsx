import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/header';
import { Dashboard } from './components/dashboard';
import { EmptyState } from './components/empty-state';
import { fetchSecrets, fetchMeta } from './lib/api';
import type { Snapshot, EnvValue } from './lib/types';

export function App() {
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [envValues, setEnvValues] = useState<Record<string, EnvValue>>({});
  const [cwd, setCwd] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const load = useCallback(async () => {
    try {
      setError(undefined);
      const [secretsData, metaData] = await Promise.all([fetchSecrets(), fetchMeta()]);
      setSnapshots(secretsData.snapshots);
      setNotes(secretsData.notes);
      setEnvValues(secretsData.envValues);
      setCwd(metaData.cwd);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleNoteChanged = useCallback((key: string, note: string) => {
    setNotes((prev) => {
      const next = { ...prev };
      if (note) {
        next[key] = note;
      } else {
        delete next[key];
      }
      return next;
    });
  }, []);

  const hasSecrets = snapshots.some((s) => Object.keys(s.secrets).length > 0);

  return (
    <div className="min-h-screen">
      <Header cwd={cwd} />
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-16">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      ) : !hasSecrets ? (
        <EmptyState />
      ) : (
        <Dashboard
          snapshots={snapshots}
          notes={notes}
          envValues={envValues}
          onRefresh={load}
          onNoteChanged={handleNoteChanged}
        />
      )}
    </div>
  );
}
