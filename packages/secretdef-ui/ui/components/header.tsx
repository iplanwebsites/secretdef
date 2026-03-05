import { KeyRound, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

interface HeaderProps {
  cwd?: string;
}

export function Header({ cwd }: HeaderProps) {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <KeyRound className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">secretdef</span>
          <Badge variant="warning" className="text-[10px]">
            experimental
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          {cwd && (
            <span className="text-sm text-muted-foreground font-mono truncate max-w-[400px] hidden md:inline">
              {cwd}
            </span>
          )}
          <nav className="flex items-center gap-3 text-sm">
            <a
              href="https://secretdef.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/iplanwebsites/secretdef"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
