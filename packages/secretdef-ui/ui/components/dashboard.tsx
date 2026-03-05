import { useState, useMemo, useCallback } from 'react';
import {
  RefreshCw, CheckCircle2, XCircle, AlertTriangle,
  LayoutGrid, TableProperties, ClipboardCopy, Check, Code,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { SecretCard } from './secret-card';
import { SecretTable } from './secret-table';
import { SpecView } from './spec-view';
import type { Snapshot, EnvValue, ViewMode } from '../lib/types';

interface DashboardProps {
  snapshots: Snapshot[];
  notes: Record<string, string>;
  envValues: Record<string, EnvValue>;
  onRefresh: () => void;
  onNoteChanged: (key: string, note: string) => void;
}

export function Dashboard({ snapshots, notes, envValues, onRefresh, onNoteChanged }: DashboardProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [view, setView] = useState<ViewMode>('table');
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const snapshot = snapshots[activeTab] || snapshots[0];
  if (!snapshot) return null;

  const allSecrets = Object.entries(snapshot.secrets);

  // Collect unique groups
  const groups = useMemo(() => {
    const set = new Set<string>();
    for (const [, s] of allSecrets) {
      if (s.group) set.add(s.group);
    }
    return Array.from(set).sort();
  }, [allSecrets]);

  // Filter by active group
  const secrets = useMemo(() => {
    if (!activeGroup) return allSecrets;
    return allSecrets.filter(([, s]) => s.group === activeGroup);
  }, [allSecrets, activeGroup]);

  const stats = useMemo(() => {
    const total = allSecrets.length;
    const ok = allSecrets.filter(([, s]) => s.status === 'ok').length;
    const missing = allSecrets.filter(([, s]) => s.status === 'missing').length;
    const invalid = allSecrets.filter(([, s]) => s.status === 'invalid').length;
    return { total, ok, missing, invalid };
  }, [allSecrets]);

  const handleCopyAll = useCallback(async () => {
    const lines = allSecrets.map(([key, sec]) => {
      const ev = envValues[sec.envVar];
      const val = ev?.value ?? '';
      return `${sec.envVar}=${val}`;
    });
    await navigator.clipboard.writeText(lines.join('\n'));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  }, [allSecrets, envValues]);

  // Group secrets for card view
  const grouped = useMemo(() => {
    const groupMap = new Map<string, typeof secrets>();
    const ungrouped: typeof secrets = [];
    for (const entry of secrets) {
      const group = entry[1].group;
      if (group) {
        if (!groupMap.has(group)) groupMap.set(group, []);
        groupMap.get(group)!.push(entry);
      } else {
        ungrouped.push(entry);
      }
    }
    return { groups: groupMap, ungrouped };
  }, [secrets]);

  return (
    <div className="container mx-auto px-6 py-6">
      {/* Tabs for multiple snapshots */}
      {snapshots.length > 1 && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {snapshots.map((snap, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-3 py-1.5 rounded-md text-sm font-mono transition-colors ${
                i === activeTab
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
            >
              {snap.label}
            </button>
          ))}
        </div>
      )}

      {/* Stats bar + controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="font-semibold">{stats.total}</span>
            <span className="text-muted-foreground">secrets</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            <span>{stats.ok}</span>
          </div>
          {stats.missing > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-destructive">
              <XCircle className="h-4 w-4" />
              <span>{stats.missing}</span>
            </div>
          )}
          {stats.invalid > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-yellow-700">
              <AlertTriangle className="h-4 w-4" />
              <span>{stats.invalid}</span>
            </div>
          )}
          <Badge variant="outline" className="text-xs font-mono">
            {snapshot.environment}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleCopyAll}>
            {copiedAll ? <Check className="h-3.5 w-3.5 mr-1.5" /> : <ClipboardCopy className="h-3.5 w-3.5 mr-1.5" />}
            {copiedAll ? 'Copied' : 'Copy .env'}
          </Button>
          <div className="flex border rounded-md">
            <button
              onClick={() => setView('table')}
              className={`p-1.5 transition-colors ${view === 'table' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              title="Table view"
            >
              <TableProperties className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('cards')}
              className={`p-1.5 transition-colors ${view === 'cards' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              title="Card view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('spec')}
              className={`p-1.5 transition-colors ${view === 'spec' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              title="Spec view (defineSecrets code)"
            >
              <Code className="h-4 w-4" />
            </button>
          </div>
          <Button variant="outline" size="sm" onClick={onRefresh}>
            <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Group filter chips */}
      {groups.length > 0 && (
        <div className="flex gap-1.5 mb-4 flex-wrap">
          <button
            onClick={() => setActiveGroup(null)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
              !activeGroup
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent'
            }`}
          >
            All
          </button>
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(activeGroup === g ? null : g)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                activeGroup === g
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      )}

      {/* Info line */}
      {snapshot.entryFile && (
        <p className="text-xs text-muted-foreground mb-4 font-mono truncate">
          Entry: {snapshot.entryFile}
          <span className="mx-2">&middot;</span>
          Generated: {new Date(snapshot.generatedAt).toLocaleString()}
        </p>
      )}

      {/* Table view */}
      {view === 'table' && (
        <SecretTable
          secrets={secrets}
          envValues={envValues}
          notes={notes}
          cwd={snapshot.cwd}
          onNoteChanged={onNoteChanged}
        />
      )}

      {/* Spec view */}
      {view === 'spec' && (
        <SpecView secrets={secrets} />
      )}

      {/* Card view */}
      {view === 'cards' && (
        <>
          {Array.from(grouped.groups.entries()).map(([group, entries]) => (
            <div key={group} className="mb-8">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {entries.map(([key, sec]) => (
                  <SecretCard
                    key={key}
                    name={key}
                    secret={sec}
                    envValue={envValues[sec.envVar]}
                    note={notes[key]}
                    cwd={snapshot.cwd}
                    onNoteChanged={onNoteChanged}
                  />
                ))}
              </div>
            </div>
          ))}

          {grouped.ungrouped.length > 0 && (
            <div className="mb-8">
              {grouped.groups.size > 0 && (
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Other
                </h2>
              )}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped.ungrouped.map(([key, sec]) => (
                  <SecretCard
                    key={key}
                    name={key}
                    secret={sec}
                    envValue={envValues[sec.envVar]}
                    note={notes[key]}
                    cwd={snapshot.cwd}
                    onNoteChanged={onNoteChanged}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
