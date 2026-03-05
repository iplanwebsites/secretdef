import { FileQuestion } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function EmptyState() {
  return (
    <Card className="max-w-lg mx-auto mt-16">
      <CardContent className="pt-6 text-center">
        <FileQuestion className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-lg font-semibold mb-2">No secrets found</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Run your application with <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">validateSecrets()</code> in
          development mode to generate the data file.
        </p>
        <div className="bg-muted rounded-lg p-4 text-left">
          <pre className="text-xs font-mono text-muted-foreground">
{`// In your app entry:
import { validateSecrets } from 'secretdef';

validateSecrets();
// This creates .secretdef/generated-*.json`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
