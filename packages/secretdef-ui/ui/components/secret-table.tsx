import { useState, useCallback } from 'react';
import { Copy, Check, Eye, EyeOff, StickyNote, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { saveNote } from '../lib/api';
import { isRealFilePath, resolveSourcePath } from '../lib/utils';
import type { GeneratedSecret, EnvValue } from '../lib/types';

interface SecretTableProps {
  secrets: [string, GeneratedSecret][];
  envValues: Record<string, EnvValue>;
  notes: Record<string, string>;
  cwd: string;
  onNoteChanged: (key: string, note: string) => void;
}

const statusConfig = {
  ok: { label: 'ok', variant: 'success' as const },
  missing: { label: 'missing', variant: 'destructive' as const },
  invalid: { label: 'invalid', variant: 'warning' as const },
};

/** Shorten an absolute path for display: show last 2-3 segments */
function shortenPath(p: string): string {
  const parts = p.split('/');
  if (parts.length <= 3) return p;
  return '.../' + parts.slice(-3).join('/');
}


export function SecretTable({ secrets, envValues, notes, cwd, onNoteChanged }: SecretTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b">
            <th className="text-left font-medium text-muted-foreground px-3 py-2">Name</th>
            <th className="text-left font-medium text-muted-foreground px-3 py-2">Status</th>
            <th className="text-left font-medium text-muted-foreground px-3 py-2">Group</th>
            <th className="text-left font-medium text-muted-foreground px-3 py-2">Value</th>
            <th className="text-left font-medium text-muted-foreground px-3 py-2 hidden xl:table-cell">Source</th>
            <th className="text-left font-medium text-muted-foreground px-3 py-2 hidden lg:table-cell">Description</th>
            <th className="text-right font-medium text-muted-foreground px-3 py-2 w-20"></th>
          </tr>
        </thead>
        <tbody>
          {secrets.map(([key, sec]) => (
            <SecretRow
              key={key}
              name={key}
              secret={sec}
              envValue={envValues[sec.envVar]}
              note={notes[key]}
              cwd={cwd}
              onNoteChanged={onNoteChanged}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface SecretRowProps {
  name: string;
  secret: GeneratedSecret;
  envValue?: EnvValue;
  note?: string;
  cwd: string;
  onNoteChanged: (key: string, note: string) => void;
}

function SecretRow({ name, secret, envValue, note, cwd, onNoteChanged }: SecretRowProps) {
  const [copied, setCopied] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [editingNote, setEditingNote] = useState(false);
  const [noteValue, setNoteValue] = useState(note || '');

  const status = statusConfig[secret.status];

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(secret.envVar);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [secret.envVar]);

  const handleCopyPath = useCallback(async () => {
    if (!absolutePath) return;
    await navigator.clipboard.writeText(absolutePath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 1500);
  }, [absolutePath]);

  const absolutePath = secret.registeredBy ? resolveSourcePath(secret.registeredBy, cwd) : undefined;

  const handleOpenInVSCode = useCallback(() => {
    if (!absolutePath) return;
    window.open(`vscode://file/${absolutePath}`, '_blank');
  }, [absolutePath]);

  const handleNoteSave = useCallback(async () => {
    await saveNote(name, noteValue);
    onNoteChanged(name, noteValue);
    setEditingNote(false);
  }, [name, noteValue, onNoteChanged]);

  return (
    <>
      <tr className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
        {/* Name */}
        <td className="px-3 py-2">
          <code className="font-mono text-xs font-semibold">{name}</code>
          {secret.envVar !== name && (
            <span className="text-[10px] text-muted-foreground ml-1">({secret.envVar})</span>
          )}
        </td>

        {/* Status */}
        <td className="px-3 py-2">
          <Badge variant={status.variant} className="text-[10px] px-1.5 py-0">
            {status.label}
          </Badge>
        </td>

        {/* Group */}
        <td className="px-3 py-2 text-xs text-muted-foreground">
          {secret.group || '—'}
        </td>

        {/* Value */}
        <td className="px-3 py-2">
          {envValue && envValue.value !== null ? (
            <div className="flex items-center gap-1">
              <code className="font-mono text-xs truncate max-w-[180px]">
                {revealed ? envValue.value : envValue.masked}
              </code>
              <button
                onClick={() => setRevealed(!revealed)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                {revealed ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
              </button>
            </div>
          ) : (
            <span className="text-xs text-muted-foreground/50">—</span>
          )}
        </td>

        {/* Source file */}
        <td className="px-3 py-2 hidden xl:table-cell">
          {secret.registeredBy && isRealFilePath(secret.registeredBy) ? (
            <div className="flex items-center gap-1 min-w-0">
              <button
                onClick={handleOpenInVSCode}
                className="font-mono text-[11px] text-muted-foreground hover:text-primary truncate max-w-[200px] transition-colors"
                title={`Open in VS Code: ${absolutePath}`}
              >
                {shortenPath(secret.registeredBy)}
              </button>
              <button
                onClick={handleCopyPath}
                className="text-muted-foreground/40 hover:text-muted-foreground transition-colors shrink-0"
                title="Copy file path"
              >
                {copiedPath ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5" />}
              </button>
            </div>
          ) : (
            <span className="font-mono text-[11px] text-muted-foreground/50">
              {secret.registeredBy || '—'}
            </span>
          )}
        </td>

        {/* Description */}
        <td className="px-3 py-2 text-xs text-muted-foreground hidden lg:table-cell">
          <div className="flex items-center gap-1.5 max-w-[250px]">
            <span className="truncate">{secret.description || '—'}</span>
            {secret.dashboard && (
              <a
                href={secret.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                title={secret.dashboard}
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </td>

        {/* Actions */}
        <td className="px-3 py-2 text-right">
          <div className="flex items-center justify-end gap-0.5">
            <button
              onClick={() => setEditingNote(!editingNote)}
              className={`p-1 rounded transition-colors ${note ? 'text-primary' : 'text-muted-foreground/40 hover:text-muted-foreground'}`}
              title={note || 'Add note'}
            >
              <StickyNote className="h-3 w-3" />
            </button>
            <button
              onClick={handleCopy}
              className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
              title="Copy env var name"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
        </td>
      </tr>

      {/* Note editing row */}
      {editingNote && (
        <tr className="border-b last:border-b-0 bg-muted/20">
          <td colSpan={7} className="px-3 py-2">
            <div className="flex items-center gap-2 max-w-lg">
              <input
                className="flex-1 text-xs border rounded px-2 py-1 bg-background"
                value={noteValue}
                onChange={(e) => setNoteValue(e.target.value)}
                placeholder="Add a note..."
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleNoteSave();
                  if (e.key === 'Escape') setEditingNote(false);
                }}
              />
              <Button size="sm" variant="default" className="h-6 text-xs px-2" onClick={handleNoteSave}>
                Save
              </Button>
              <Button size="sm" variant="ghost" className="h-6 text-xs px-2" onClick={() => setEditingNote(false)}>
                Cancel
              </Button>
            </div>
            {note && (
              <p className="text-[10px] text-muted-foreground mt-1">Current: {note}</p>
            )}
          </td>
        </tr>
      )}
    </>
  );
}
