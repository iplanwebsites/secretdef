import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { cn } from '../lib/utils';
import { Copy, Check } from 'lucide-react';

export function fireConfettiFromElement(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;
  const colors = ['#E8630A', '#F59E0B', '#F97316', '#DC2626', '#FBBF24', '#FB923C'];
  const defaults = { origin: { x, y }, disableForReducedMotion: true, colors };
  confetti({ ...defaults, particleCount: 30, spread: 60, startVelocity: 35, angle: 90 });
  confetti({ ...defaults, particleCount: 15, spread: 80, startVelocity: 45, angle: 60 });
  confetti({ ...defaults, particleCount: 15, spread: 80, startVelocity: 45, angle: 120 });
}

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  /** 1-based line numbers to highlight in green (added lines) */
  highlightLines?: number[];
}

export function CodeBlock({ code, language = 'typescript', filename, className, highlightLines }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let cancelled = false;
    import('shiki').then(({ codeToHtml }) => {
      codeToHtml(code.trim(), {
        lang: language,
        theme: 'github-dark',
        decorations: highlightLines?.map((line) => ({
          start: { line: line - 1, character: 0 },
          end: { line: line - 1, character: Infinity },
          properties: { class: 'line-highlight-add' },
        })),
      }).then((html) => {
        if (!cancelled) setHighlightedHtml(html);
      });
    });
    return () => { cancelled = true; };
  }, [code, language, highlightLines]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      if (buttonRef.current) fireConfettiFromElement(buttonRef.current);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div className={cn('relative group rounded-xl overflow-hidden border border-border bg-[#0d1117]', className)}>
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
          <span className="text-xs font-medium text-gray-400">
            {filename || language}
          </span>
          <button
            ref={buttonRef}
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed">
        {highlightedHtml ? (
          <div
            className="[&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:!bg-transparent [&_.line-highlight-add]:bg-green-500/15 [&_.line-highlight-add]:border-l-2 [&_.line-highlight-add]:border-green-400 [&_.line-highlight-add]:pl-3 [&_.line-highlight-add]:-ml-3"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <pre className="text-gray-300">
            <code>{code.trim()}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

interface InstallCommandProps {
  command: string;
}

export function InstallCommand({ command }: InstallCommandProps) {
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (buttonRef.current) fireConfettiFromElement(buttonRef.current);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }, [command]);

  return (
    <div className="inline-flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-2.5">
      <span className="text-muted-foreground font-mono text-sm select-none">$</span>
      <code className="font-mono text-sm text-foreground">{command}</code>
      <button
        ref={buttonRef}
        onClick={handleCopy}
        className={cn(
          'px-2 py-0.5 rounded text-xs font-medium cursor-pointer transition-colors',
          copied
            ? 'bg-accent text-accent-foreground border border-accent'
            : 'bg-muted border border-border text-muted-foreground hover:bg-border hover:text-foreground',
        )}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

interface TerminalBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalBlock({ children, className }: TerminalBlockProps) {
  return (
    <div className={cn('rounded-xl overflow-hidden border border-border bg-[#0d1117]', className)}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-500 ml-2">Terminal</span>
      </div>
      <div className="p-4 text-sm font-mono leading-relaxed">
        {children}
      </div>
    </div>
  );
}
