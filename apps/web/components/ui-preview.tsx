import { Badge } from './ui/badge';

const mockRows = [
  { name: 'OPENAI_API_KEY', status: 'ok' as const, group: 'ai' },
  { name: 'STRIPE_SECRET_KEY', status: 'missing' as const, group: 'payments' },
  { name: 'DATABASE_URL', status: 'ok' as const, group: 'db' },
  { name: 'RESEND_API_KEY', status: 'ok' as const, group: 'email' },
  { name: 'STRIPE_WEBHOOK_SECRET', status: 'missing' as const, group: 'payments' },
  { name: 'SENTRY_DSN', status: 'ok' as const, group: 'monitoring' },
  { name: 'REDIS_URL', status: 'ok' as const, group: 'db' },
  { name: 'CLERK_SECRET_KEY', status: 'invalid' as const, group: 'auth' },
  { name: 'ANALYTICS_KEY', status: 'ok' as const, group: 'monitoring' },
];

const statusVariant = {
  ok: 'success' as const,
  missing: 'destructive' as const,
  invalid: 'warning' as const,
};

const okCount = mockRows.filter(r => r.status === 'ok').length;
const missingCount = mockRows.filter(r => r.status !== 'ok').length;

export function UiPreview() {
  return (
    <div className="rounded-xl border border-border bg-[#0a0a0b] shadow-2xl overflow-hidden select-none pointer-events-none">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-[#111113]">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-primary/80" />
          <span className="text-sm font-bold text-gray-200">secretdef</span>
          <Badge variant="warning" className="text-[9px] px-1 py-0">experimental</Badge>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>{mockRows.length} secrets</span>
          <span className="text-green-500">{okCount} ok</span>
          <span className="text-red-400">{missingCount} issues</span>
        </div>
      </div>

      {/* Mini table */}
      <div className="overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-gray-500 border-b border-border/30">
              <th className="text-left font-medium px-4 py-1.5">Name</th>
              <th className="text-left font-medium px-2 py-1.5">Status</th>
              <th className="text-left font-medium px-2 py-1.5 hidden sm:table-cell">Group</th>
              <th className="text-left font-medium px-2 py-1.5 hidden sm:table-cell">Value</th>
            </tr>
          </thead>
          <tbody>
            {mockRows.map((row) => (
              <tr key={row.name} className="border-b border-border/20 last:border-b-0">
                <td className="px-4 py-1.5">
                  <code className="font-mono text-[11px] text-gray-300">{row.name}</code>
                </td>
                <td className="px-2 py-1.5">
                  <Badge variant={statusVariant[row.status]} className="text-[9px] px-1 py-0">
                    {row.status}
                  </Badge>
                </td>
                <td className="px-2 py-1.5 text-gray-500 hidden sm:table-cell">{row.group}</td>
                <td className="px-2 py-1.5 hidden sm:table-cell">
                  {row.status === 'ok' ? (
                    <code className="font-mono text-[10px] text-gray-600">••••••••</code>
                  ) : (
                    <span className="text-gray-600">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
