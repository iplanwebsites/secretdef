import { useState, useCallback } from 'react';
import { Copy, Check, StickyNote, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { saveNote } from '../lib/api';
import { isRealFilePath, resolveSourcePath } from '../lib/utils';
import type { GeneratedSecret, EnvValue } from '../lib/types';

interface SecretCardProps {
  name: string;
  secret: GeneratedSecret;
  envValue?: EnvValue;
  note?: string;
  cwd: string;
  onNoteChanged: (key: string, note: string) => void;
}

const statusConfig = {
  ok: { label: 'configured', variant: 'success' as const },
  missing: { label: 'missing', variant: 'destructive' as const },
  invalid: { label: 'invalid', variant: 'warning' as const },
};

export function SecretCard({ name, secret, envValue, note, cwd, onNoteChanged }: SecretCardProps) {
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [editingNote, setEditingNote] = useState(false);
  const [noteValue, setNoteValue] = useState(note || '');

  const status = statusConfig[secret.status];

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(secret.envVar);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [secret.envVar]);

  const handleNoteSave = useCallback(async () => {
    await saveNote(name, noteValue);
    onNoteChanged(name, noteValue);
    setEditingNote(false);
  }, [name, noteValue, onNoteChanged]);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <code className="font-mono text-sm font-semibold truncate">{name}</code>
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={handleCopy}>
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {secret.description && (
          <p className="text-muted-foreground">{secret.description}</p>
        )}
        {secret.dashboard && (
          <a
            href={secret.dashboard}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline transition-colors"
          >
            Open dashboard <ExternalLink className="h-3 w-3" />
          </a>
        )}

        {/* Value display */}
        {envValue && envValue.value !== null && (
          <div className="flex items-center gap-1.5">
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded truncate max-w-[200px]">
              {revealed ? envValue.value : envValue.masked}
            </code>
            <button
              onClick={() => setRevealed(!revealed)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {revealed ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            </button>
          </div>
        )}

        {secret.envVar !== name && (
          <p className="text-xs text-muted-foreground">
            env var: <code className="font-mono">{secret.envVar}</code>
          </p>
        )}
        {secret.example && (
          <p className="text-xs text-muted-foreground">
            example: <code className="font-mono bg-muted px-1 py-0.5 rounded">{secret.example}</code>
          </p>
        )}
        {secret.validate && (
          <p className="text-xs text-muted-foreground">
            type: <code className="font-mono">{secret.validate}</code>
          </p>
        )}
        {secret.validationError && (
          <p className="text-xs text-destructive">{secret.validationError}</p>
        )}
        {secret.registeredBy && isRealFilePath(secret.registeredBy) ? (
          <p className="text-xs text-muted-foreground truncate">
            from:{' '}
            <button
              className="font-mono hover:text-primary transition-colors"
              onClick={() => window.open(`vscode://file/${resolveSourcePath(secret.registeredBy!, cwd)}`, '_blank')}
              title={`Open in VS Code: ${resolveSourcePath(secret.registeredBy!, cwd)}`}
            >
              {secret.registeredBy}
            </button>
          </p>
        ) : secret.registeredBy ? (
          <p className="text-xs text-muted-foreground/50 truncate">
            from: <span className="font-mono">{secret.registeredBy}</span>
          </p>
        ) : null}

        {/* Notes */}
        <div className="pt-1">
          {editingNote ? (
            <div className="space-y-1">
              <textarea
                className="w-full text-xs border rounded-md p-2 bg-background resize-none"
                rows={2}
                value={noteValue}
                onChange={(e) => setNoteValue(e.target.value)}
                placeholder="Add a note..."
                autoFocus
              />
              <div className="flex gap-1">
                <Button size="sm" variant="default" className="h-6 text-xs px-2" onClick={handleNoteSave}>
                  Save
                </Button>
                <Button size="sm" variant="ghost" className="h-6 text-xs px-2" onClick={() => setEditingNote(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : note ? (
            <button
              className="flex items-start gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              onClick={() => setEditingNote(true)}
            >
              <StickyNote className="h-3 w-3 mt-0.5 shrink-0" />
              <span>{note}</span>
            </button>
          ) : (
            <button
              className="flex items-center gap-1 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer"
              onClick={() => setEditingNote(true)}
            >
              <StickyNote className="h-3 w-3" />
              <span>Add note</span>
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
