import { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { secretsToSpec } from '../lib/spec-format';
import type { GeneratedSecret } from '../lib/types';

interface SpecViewProps {
  secrets: [string, GeneratedSecret][];
}

export function SpecView({ secrets }: SpecViewProps) {
  const [copied, setCopied] = useState(false);
  const code = secretsToSpec(secrets);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="border rounded-lg overflow-hidden bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <span className="text-xs font-medium text-gray-400">secrets.ts</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs text-gray-400 hover:text-gray-200"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed text-gray-300 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
