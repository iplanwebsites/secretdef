import { useState, useRef } from 'react';
import { useData } from 'vike-react/useData';
import { Badge } from '../../components/ui/badge';
import { CodeBlock, TerminalBlock, InstallCommand, fireConfettiFromElement } from '../../components/code-block';
import { Logo } from '../../components/logo';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { ArrowRight, Github, Package, Shield, Cpu, Blocks, Copy, Check, UserPlus, Monitor } from 'lucide-react';
import { cn } from '../../lib/utils';
import { UiPreview } from '../../components/ui-preview';
import type { Data } from './+data';

const agentPrompt = `Scan this codebase for all process.env usage. For each secret found, use defineSecrets() from "secretdef" to declare it — right in the file where it's used. The object key IS the env var name. Include:
- description: what it is, expected format/prefix, a dashboard URL to provision it
- validate: use a built-in validator (str, bool, num, email, host, port, url, json) or a custom function
- devDefault: a safe default for local development if applicable
- example: a sample value to show in error output (e.g. "sk_live_...")

Use useSecret() to access values — it throws structured errors with the var name, description, and dashboard URL, so missing secrets are obvious to both humans and AI agents.

Wire up validateSecrets() at the app entry point to catch missing secrets at startup.

Install: npm i secretdef
Docs: https://secretdef.com/docs`;

const defineCode = `// src/secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as openai } from '@secretdef/openai';

export const secrets = defineSecrets({
  ...openai,
  DATABASE_URL: {
    description: 'Postgres connection string',
    dashboard: 'https://console.neon.tech',
    validate: 'url',
    devDefault: 'postgresql://localhost:5432/myapp_dev',
  },
});`;

const explicitCode = `// src/env.ts — validate everything at startup
import { validateSecrets } from 'secretdef';
import { secrets as app } from './secrets';
import { secrets as db } from './modules/db/secrets';

export const env = validateSecrets({
  ...app,
  ...db,
});`;

const autoRegisterCode = `// Or use auto-register — less wiring, same result
import { validateSecrets } from 'secretdef';

import './secrets';
import './modules/db/secrets';

const env = validateSecrets();`;

const useSecretCode = `import { useSecret } from 'secretdef';

const key = useSecret('STRIPE_SECRET_KEY');
//
// If missing → throws with:
//   SecretNotAvailable: STRIPE_SECRET_KEY is not configured.
//     Environment variable: STRIPE_SECRET_KEY
//     Description:          Stripe API secret key
//     Where to find it:     https://dashboard.stripe.com/apikeys
//     Defined in:           src/secrets.ts
//     Current environment:  development
//     To fix: set STRIPE_SECRET_KEY in your environment or .env file.
//
// vs: TypeError: Cannot read properties of undefined`;

const prebuiltExample = `// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/openai';
// import '@secretdef/stripe';
// import '@secretdef/resend';

// Validates ALL secrets defined by the imports above
validateSecrets();`;

const sdkExamples = {
  openai: {
    label: 'OpenAI',
    subtitle: 'Just import + useSecret()',
    code: `import OpenAI from 'openai';
import { useSecret } from 'secretdef';
import '@secretdef/openai';

// useSecret() throws a rich error if OPENAI_API_KEY is missing
const openai = new OpenAI({ apiKey: useSecret('OPENAI_API_KEY') });`,
    highlightLines: [2, 3, 6],
    terminal: {
      error: '❌ 1 secret problem [env=production]:',
      details: `  🔑 OPENAI_API_KEY — missing
     OpenAI API key
     dashboard: https://platform.openai.com/api-keys
     defined in: @secretdef/openai`,
    },
  },
  resend: {
    label: 'Resend',
    subtitle: 'Zero-config import',
    code: `import { Resend } from 'resend';
import '@secretdef/resend';

// That's it. validateSecrets() at your entry point
// catches missing RESEND_API_KEY at startup.
const resend = new Resend(process.env.RESEND_API_KEY);`,
    highlightLines: [2],
    terminal: {
      error: '❌ 1 secret problem [env=production]:',
      details: `  🔑 RESEND_API_KEY — missing
     Resend API key
     dashboard: https://resend.com/api-keys
     defined in: @secretdef/resend`,
    },
  },
  stripe: {
    label: 'Stripe',
    subtitle: 'Explicit validation + your own secrets',
    code: `import Stripe from 'stripe';
import { defineSecrets, validateSecrets } from 'secretdef';
import { secrets as stripe } from '@secretdef/stripe';

const env = validateSecrets({
  ...stripe,
  ...defineSecrets({
    STRIPE_WEBHOOK_SECRET: {
      description: 'Order fulfillment webhook',
      dashboard: 'https://dashboard.stripe.com/webhooks',
    },
  }),
});
const client = new Stripe(env.STRIPE_SECRET_KEY);`,
    highlightLines: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
    terminal: {
      error: '❌ 2 secret problems [env=production]:',
      details: `  🔑 STRIPE_SECRET_KEY — missing
     Stripe API secret key
     dashboard: https://dashboard.stripe.com/apikeys
     defined in: @secretdef/stripe

  🔑 STRIPE_WEBHOOK_SECRET — missing
     Order fulfillment webhook
     dashboard: https://dashboard.stripe.com/webhooks
     defined in: server.ts`,
    },
  },
  database: {
    label: 'DB + dev DB',
    subtitle: 'Local dev fallback with devDefault',
    code: `import { defineSecrets, validateSecrets } from 'secretdef';

const env = validateSecrets(defineSecrets({
  DATABASE_URL: {
    description: 'Postgres connection string',
    dashboard: 'https://console.neon.tech',
    validate: 'url',
    devDefault: 'postgresql://localhost:5432/myapp_dev',
  },
}));
// In development: DATABASE_URL resolves to devDefault — no warning.
// In production: devDefault doesn't apply — must set the real value.`,
    highlightLines: [1, 3, 4, 5, 6, 7, 8, 9],
    terminal: {
      error: '❌ 1 secret problem [env=production]:',
      details: `  🔑 DATABASE_URL — missing
     Postgres connection string
     dashboard: https://console.neon.tech
     defined in: src/secrets.ts

  Add to your .env file:

    DATABASE_URL=`,
    },
  },
  custom: {
    label: 'Custom var',
    subtitle: 'Any internal service or API key',
    code: `import { defineSecrets, validateSecrets } from 'secretdef';

const env = validateSecrets(defineSecrets({
  BOGUS_KEY: {
    description: 'Internal rate-limiter service on CF Workers',
    dashboard: 'https://dash.cloudflare.com/workers/bogus',
    validate: 'str',
    example: 'bogus_live_abc123...',
  },
}));

const res = await fetch('https://bogus-worker.workers.dev', {
  headers: { Authorization: \`Bearer \${env.BOGUS_KEY}\` },
});`,
    highlightLines: [1, 3, 4, 5, 6, 7, 8, 9],
    terminal: {
      error: '❌ 1 secret problem [env=production]:',
      details: `  🔑 BOGUS_KEY — missing
     Internal rate-limiter service on CF Workers
     dashboard: https://dash.cloudflare.com/workers/bogus
     example: bogus_live_abc123...
     defined in: src/secrets.ts`,
    },
  },
} as const;

export default function Page() {
  const { packages, integrations } = useData<Data>();
  const topOrder = [
    'openai', 'anthropic', 'stripe', 'aws', 'google-genai',
    'supabase', 'clerk', 'resend', 'vercel', 'cloudflare',
    'firebase', 'twilio', 'sendgrid', 'github', 'sentry',
    'auth0', 'redis', 'mongodb', 'postmark', 'groq',
    'mistral', 'replicate', 'pinecone', 'neon', 'upstash',
    'planetscale', 'datadog', 'algolia', 'contentful', 'sanity',
    'shopify', 'slack', 'discord', 'linear', 'livekit',
    'azure-openai', 'cohere', 'turso', 'deepgram', 'pusher',
  ];
  const topPackages = topOrder
    .map(name => packages.find(p => p.name === name && p.top))
    .filter(Boolean) as typeof packages;
  const featuredPackages = packages.filter(p => p.featured && !p.top);
  const totalCount = packages.length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-12">
        <Logo className="text-lg" />
      </div>

      {/* Hero */}
      <div className="mb-6">
        <Badge variant="secondary">Born from agentic chaos</Badge>
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
        Ship faster with{' '}
        <span className="text-primary">declarative secrets</span>
      </h1>

      <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
        Define what your app needs. Validate at startup. Get actionable errors instead of cryptic crashes.
      </p>

      <div className="mt-6">
        <InstallCommand command="npm i secretdef" />
      </div>

      {/* Who it's for */}
      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Developers</span> — stop guessing which env vars your app needs
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Teams</span> — onboard new devs in minutes, not hours
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">AI agents</span> — structured errors they can read and act on
        </div>
      </div>

      {/* Before/after comparison */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {/* WITHOUT secretdef — browser console style */}
        <div className="rounded-xl border border-red-500/30 bg-[#1e1e1e] overflow-hidden shadow-lg">
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#333] bg-[#252526]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">Without secretdef</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
              <span className="px-1.5 py-0.5 rounded bg-[#333] text-gray-400">Console</span>
            </div>
          </div>
          <div className="p-3 space-y-1">
            {/* Error log line */}
            <div className="flex items-start gap-2 rounded px-2 py-1.5 bg-red-500/10 border-l-2 border-red-500">
              <span className="text-red-400 text-xs mt-0.5 shrink-0">✕</span>
              <div className="font-mono text-xs leading-relaxed">
                <span className="text-red-300 font-semibold">Uncaught TypeError</span>
                <span className="text-red-300/80">: Cannot read properties of undefined (reading 'split')</span>
                <div className="mt-1 text-gray-500">
                  at processPayment (<span className="text-blue-400">billing.ts</span>:14:23)<br />
                  at handleCheckout (<span className="text-blue-400">checkout.ts</span>:8:5)<br />
                  at async Router.handle (<span className="text-blue-400">router.ts</span>:42:3)
                </div>
              </div>
            </div>
            {/* Second vague error */}
            <div className="flex items-start gap-2 rounded px-2 py-1.5 bg-red-500/10 border-l-2 border-red-500">
              <span className="text-red-400 text-xs mt-0.5 shrink-0">✕</span>
              <div className="font-mono text-xs leading-relaxed">
                <span className="text-red-300/80">POST /api/checkout </span>
                <span className="text-red-400 font-semibold">500</span>
                <span className="text-gray-500"> (Internal Server Error)</span>
              </div>
            </div>
            {/* Sad empty state */}
            <div className="pt-2 pb-1 text-center">
              <p className="text-[10px] text-gray-600 italic">Which key? Where to get it? Good luck.</p>
            </div>
          </div>
        </div>

        {/* WITH secretdef — browser console style */}
        <div className="rounded-xl border border-primary/30 bg-[#1e1e1e] overflow-hidden shadow-lg">
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#333] bg-[#252526]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400">With secretdef</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
              <span className="px-1.5 py-0.5 rounded bg-[#333] text-gray-400">Console</span>
            </div>
          </div>
          <div className="p-3 space-y-1">
            {/* Header log */}
            <div className="flex items-start gap-2 rounded px-2 py-1.5 bg-red-500/10 border-l-2 border-red-500">
              <span className="text-red-400 text-xs mt-0.5 shrink-0">✕</span>
              <span className="font-mono text-xs text-red-300 font-semibold">1 secret problem [env=production]:</span>
            </div>
            {/* Secret detail */}
            <div className="rounded px-2 py-2 bg-[#252526] border border-[#333]">
              <div className="font-mono text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-red-400">🔑</span>
                  <span className="text-white font-semibold">STRIPE_SECRET_KEY</span>
                  <span className="text-gray-500">— missing</span>
                </div>
                <div className="pl-5 space-y-0.5 text-gray-400">
                  <div>Stripe API secret key</div>
                  <div>
                    <span className="text-gray-500">dashboard: </span>
                    <a href="https://dashboard.stripe.com/apikeys" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline pointer-events-auto">
                      https://dashboard.stripe.com/apikeys
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">defined in: </span>
                    <span className="text-gray-300">src/secrets.ts</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Process exit */}
            <div className="flex items-start gap-2 rounded px-2 py-1.5 bg-red-500/5 border-l-2 border-red-500/50">
              <span className="text-red-400/60 text-xs mt-0.5 shrink-0">●</span>
              <span className="font-mono text-xs text-red-400/70">Process exited with code 1</span>
            </div>
            {/* Happy state */}
            <div className="pt-2 pb-1 text-center">
              <p className="text-[10px] text-gray-500 italic">Name, description, link — fix it in seconds.</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground italic">
        Not a vault. Not a secrets manager. Works alongside Doppler, Vault, Infisical, or plain .env files.
        Zero dependencies. ~2KB.
      </p>

      {/* Personal story */}
      <div className="mt-12 mx-auto max-w-2xl rounded-xl border border-border bg-muted/30 px-8 py-6 text-center">
        <p className="text-lg font-semibold text-foreground">
          I ship code 10x faster now. So I debug 10x more missing secrets.
        </p>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            AI agents write integrations in minutes. Stripe, Resend, a new database — done before lunch.
            But every deploy became the same loop: crash, check logs, guess which env var is missing,
            find the right dashboard, provision the key, redeploy.
          </p>
          <p>
            I tried <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">infra.md</code>,
            then <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">CLAUDE.md</code>, then Notion.
            None of it was <em>there</em> when I needed it — in the terminal, at the moment of failure.
            My agents couldn't read any of it.
          </p>
          <p>
            So I put the documentation <em>in the code</em>. One call at startup validates everything.
            The error message <em>is</em> the documentation — for me, for my agent, for the next person who touches this codebase.
          </p>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          — <a href="https://x.com/iplanwebsites" className="text-primary hover:underline">Felix Menard</a>, creator of secretdef
        </p>
      </div>

      {/* Quick start */}
      <QuickStartBlock />

      {/* Problem cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <ProblemCard
          icon={<Shield className="h-5 w-5 text-destructive" />}
          title="3 redeploys. 1 missing key."
          description="TypeError: Cannot read properties of undefined — you guess, redeploy, wait, repeat."
        />
        <ProblemCard
          icon={<Package className="h-5 w-5 text-amber-500" />}
          title="Is Stripe set up in staging?"
          description="Which keys exist where? Who has the token? Where's the connection string? Nobody knows until it breaks."
        />
        <ProblemCard
          icon={<Cpu className="h-5 w-5 text-primary" />}
          title="Your agent is stuck."
          description="It doesn't know which key is missing, where to find it, or how to provision it. Give it context and a good agent can browse the dashboard or run a CLI to get the key itself."
        />
        <ProblemCard
          icon={<UserPlus className="h-5 w-5 text-green-500" />}
          title="Onboarding takes a full day"
          description="New dev. Stale .env.example. 40 keys. No descriptions. Half are for services you stopped using a year ago."
        />
      </div>

      {/* How it works */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          How it works
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          You list the secrets your app needs — the env var name, a description,
          and where to get the value. At startup, one call checks everything
          and tells you exactly what's missing.
        </p>
      </div>

      {/* Step 1: Define */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-foreground">
          <span className="text-primary mr-2">1.</span>List what your app needs
        </h3>
        <div className="mt-4">
          <CodeBlock code={defineCode} language="typescript" filename="src/secrets.ts" />
        </div>
      </div>

      {/* Step 2: Validate — explicit first */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-foreground">
          <span className="text-primary mr-2">2.</span>Validate at startup
        </h3>
        <div className="mt-4">
          <CodeBlock code={explicitCode} language="typescript" filename="src/env.ts" />
        </div>
        <details className="mt-4">
          <summary className="text-sm font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
            Prefer less wiring? Use auto-register instead
          </summary>
          <div className="mt-3">
            <CodeBlock code={autoRegisterCode} language="typescript" filename="src/index.ts" />
          </div>
        </details>
      </div>

      {/* Step 3: Error output — the hero moment */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-foreground">
          <span className="text-primary mr-2">3.</span>Get actionable errors instead of cryptic crashes
        </h3>
        <div className="mt-4">
          <TerminalBlock>
            <div className="text-red-400">{'❌ 2 secret problems [env=production]:'}</div>
            <div className="text-gray-300 mt-2">
              {'  🔑 STRIPE_SECRET_KEY — missing'}<br />
              {'     Stripe API secret key'}<br />
              {'     dashboard: https://dashboard.stripe.com/apikeys'}<br />
              {'     defined in: src/secrets.ts'}<br />
              <br />
              {'  🔑 DATABASE_URL — missing'}<br />
              {'     Postgres connection string'}<br />
              {'     dashboard: https://console.neon.tech'}<br />
              {'     defined in: src/modules/db/secrets.ts'}
            </div>
            <div className="text-gray-400 mt-2">
              {'  Add to your .env file:'}<br />
              {'    STRIPE_SECRET_KEY='}<br />
              {'    DATABASE_URL='}
            </div>
          </TerminalBlock>
        </div>
      </div>

      {/* Pre-built package example */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Using a service? Just import its package.
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Community <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> packages
          ship ready-made definitions for popular services. Install, import, done.
        </p>

        <div className="mt-4">
          <InstallCommand command="npm i openai @secretdef/openai secretdef" />
        </div>

        <div className="mt-4">
          <CodeBlock
            code={prebuiltExample}
            language="typescript"
            filename="src/index.ts"
            highlightLines={[2, 4, 8]}
          />
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          That's it. All 7 OpenAI env vars — <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">OPENAI_API_KEY</code>,{' '}
          <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">OPENAI_ORG_ID</code>, and more — are now validated at startup
          with descriptions, dashboard links, and format hints.
        </p>
      </div>

      {/* Dev vs prod — #7 renamed */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Strict in prod. Flexible in dev.
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">secretdef</code> adapts to the environment. You don't need every secret configured
          to start working locally.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4 bg-card">
            <div className="text-sm font-semibold text-foreground">Production</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Missing required secrets print an error table and exit the process. No surprises in prod.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4 bg-card">
            <div className="text-sm font-semibold text-foreground">Development</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Missing secrets print a warning. The server starts. They throw only when
              code actually reads the missing value.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4 bg-card">
            <div className="text-sm font-semibold text-foreground">At point of use</div>
            <p className="mt-1 text-sm text-muted-foreground">
              <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">useSecret()</code> throws
              a structured error with the var name, description, and dashboard URL.
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard UI */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Monitor className="h-7 w-7 text-primary" />
          Dashboard UI
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          See all your secrets at a glance. One command.
        </p>
        <div className="mt-4">
          <InstallCommand command="npx secretdef ui" />
        </div>
        <div className="mt-6">
          <UiPreview />
        </div>
        <p className="mt-3 text-sm text-muted-foreground italic">
          This is a preview — run <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">npx secretdef ui</code> for the real thing.
        </p>
      </div>

      {/* SDK example with tabs */}
      <SdkExampleBlock />

      {/* useSecret() — point-of-use errors */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Every error tells you how to fix it
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">process.env.KEY</code> returns <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">undefined</code> silently.{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">useSecret('KEY')</code> tells
          you what's wrong, where to find the value, and which file declared it. Your agent reads the same output and knows exactly what to do.
        </p>
        <div className="mt-4">
          <CodeBlock code={useSecretCode} language="typescript" filename="src/modules/stripe/client.ts" />
        </div>
      </div>

      {/* Modules should declare their secrets */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Blocks className="h-7 w-7 text-primary" />
          Every module declares its secrets
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Your database module knows it needs <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">DATABASE_URL</code>.
          Your payment code knows it needs a Stripe key. When each module ships secret definitions,
          the whole app's requirements become discoverable, validated, and documented — automatically.
        </p>
        <p className="mt-3 text-muted-foreground">
          For services that don't ship their own definitions yet, the community maintains{' '}
          <span className="text-foreground font-semibold">{totalCount.toLocaleString()}+</span>{' '}
          ready-made <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> packages.
          Here are some popular ones:
        </p>

        {/* Top-tier: rich cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topPackages.map((pkg) => (
            <SdkPackage key={pkg.name} name={`@secretdef/${pkg.name}`} title={pkg.title} npm={pkg.npm!} />
          ))}
        </div>

        {/* Remaining featured: compact multi-column text list */}
        {featuredPackages.length > 0 && (
          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-3">
              Plus {featuredPackages.length} more verified packages:
            </p>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-x-4">
              {featuredPackages.map((pkg) => (
                <a
                  key={pkg.name}
                  href={`https://www.npmjs.com/package/@secretdef/${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5 truncate"
                >
                  {pkg.title || pkg.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            Added secret definitions to your SDK or service?
            Open a PR to add it to the supported list — help others discover it.
          </p>
          <a
            href="https://github.com/iplanwebsites/secretdef/edit/main/apps/web/data/integrations.json"
            className="inline-flex items-center gap-2 shrink-0 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Add your service <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Native integrations */}
      {integrations.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Blocks className="h-7 w-7 text-green-500" />
            Native integrations
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            These libraries ship their own <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">defineSecrets()</code> calls
            natively — just install and import, no <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> package needed.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col rounded-lg border border-green-500/30 px-3 py-2.5 bg-card gap-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">{integration.title}</span>
                  <span className="text-[10px] font-semibold text-green-500 border border-green-500/30 rounded px-1.5 py-0.5">Native</span>
                </div>
                <p className="text-xs text-muted-foreground">{integration.description}</p>
                <div className="flex gap-3 text-xs text-muted-foreground font-mono">
                  <a href={`https://www.npmjs.com/package/${integration.npm}`} target="_blank" rel="noopener noreferrer" className="truncate hover:text-foreground transition-colors">{integration.npm}</a>
                  {integration.repo && (
                    <a href={`https://github.com/${integration.repo}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
                      <Github className="h-3 w-3" /> repo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <p className="text-sm text-muted-foreground flex-1">
              Ship your own secret definitions? Add your library to the list.
            </p>
            <a
              href="https://github.com/iplanwebsites/secretdef/edit/main/apps/web/data/integrations.json"
              className="inline-flex items-center gap-2 shrink-0 rounded-lg bg-green-600 px-4 py-2 text-sm text-white font-semibold hover:bg-green-700 transition"
            >
              Add your library <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Full community package directory */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Package className="h-7 w-7 text-primary" />
          {totalCount.toLocaleString()} community packages
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Every service below has a ready-made <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> package
          you can install today. Each one declares the environment variables the service needs — descriptions, dashboard links, and validation rules included.
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {packages.map((pkg) => (
            <a
              key={pkg.name}
              href={`https://www.npmjs.com/package/@secretdef/${pkg.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-block text-xs font-mono px-2 py-1 rounded-md border transition-colors",
                pkg.featured
                  ? "border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5"
                  : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5"
              )}
            >
              {pkg.name}
            </a>
          ))}
        </div>
      </div>

      {/* CTA — #12 footer upgrades */}
      <div className="mt-16 text-center">
        <div className="flex justify-center">
          <InstallCommand command="npm i secretdef" />
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Read the docs <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/iplanwebsites/secretdef"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-foreground font-semibold hover:bg-accent transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-sm text-muted-foreground text-center">
          Zero dependencies. ~2KB. MIT licensed.
        </p>
      </div>
    </div>
  );
}


function generatePrompt(name: string, npm: string) {
  return `Install ${name} and wire it into this codebase:
1. npm i secretdef ${name}
2. Find where "${npm}" is imported and process.env is used for its config. Import the secrets from "${name}" and use them instead of raw process.env access.
3. In the server/app entry point, import validateSecrets from "secretdef" and call it with the imported secrets so missing keys are caught at startup — not at runtime.

This requires editing at least 2 files: where the SDK is used, and the app entry point.`;
}

function ProblemCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="hover:border-primary/30 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function SdkPackage({ name, title, npm }: { name: string; title?: string; npm: string }) {
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatePrompt(name, npm));
      setCopied(true);
      if (buttonRef.current) fireConfettiFromElement(buttonRef.current);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* */ }
  };

  return (
    <div className="flex flex-col rounded-lg border border-primary/30 px-3 py-2.5 bg-card gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-foreground">{title || name}</span>
        <button
          ref={buttonRef}
          onClick={handleCopy}
          className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground border border-border rounded px-1.5 py-0.5 transition-colors cursor-pointer"
        >
          {copied ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5" />}
          {copied ? 'Copied!' : 'Copy prompt'}
        </button>
      </div>
      <div className="flex flex-col gap-0.5 text-xs text-muted-foreground font-mono">
        <a href={`https://www.npmjs.com/package/${name}`} target="_blank" rel="noopener noreferrer" className="truncate hover:text-foreground transition-colors">{name}</a>
        <a href={`https://www.npmjs.com/package/${npm}`} target="_blank" rel="noopener noreferrer" className="truncate hover:text-foreground transition-colors">↳ {npm}</a>
      </div>
    </div>
  );
}

function QuickStartBlock() {
  const [tab, setTab] = useState<'skill' | 'prompt'>('skill');
  const [copied, setCopied] = useState(false);
  const [skillCopied, setSkillCopied] = useState(false);
  const [sayCopied, setSayCopied] = useState(false);
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const skillCopyButtonRef = useRef<HTMLButtonElement>(null);
  const sayCopyButtonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(agentPrompt);
      setCopied(true);
      if (copyButtonRef.current) fireConfettiFromElement(copyButtonRef.current);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* */ }
  };

  const handleSkillCopy = async () => {
    try {
      await navigator.clipboard.writeText('npx skills add iplanwebsites/secretdef');
      setSkillCopied(true);
      if (skillCopyButtonRef.current) fireConfettiFromElement(skillCopyButtonRef.current);
      setTimeout(() => setSkillCopied(false), 1500);
    } catch { /* */ }
  };

  const sayText = 'Create secret definitions. Ensure all secrets have definitions.';
  const handleSayCopy = async () => {
    try {
      await navigator.clipboard.writeText(sayText);
      setSayCopied(true);
      if (sayCopyButtonRef.current) fireConfettiFromElement(sayCopyButtonRef.current);
      setTimeout(() => setSayCopied(false), 1500);
    } catch { /* */ }
  };

  return (
    <div id="quick-start" className="mt-10 rounded-lg border border-border bg-card p-5">
      <h2 className="text-lg font-bold text-foreground">Quick start with AI</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Install the skill, then tell your AI agent to create secret definitions. Works with Claude Code, Cursor, Codex, and more.
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setTab('skill')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            tab === 'skill'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          Install as skill
        </button>
        <button
          onClick={() => setTab('prompt')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            tab === 'prompt'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          Copy prompt manually
        </button>
      </div>

      {tab === 'skill' && (
        <div className="mt-3 space-y-3">
          <div className="relative rounded-lg bg-[#0d1117] border border-border p-3 font-mono text-sm text-gray-300">
            <button
              ref={skillCopyButtonRef}
              onClick={handleSkillCopy}
              className="absolute top-2.5 right-3 flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
            >
              {skillCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {skillCopied ? 'Copied' : 'Copy'}
            </button>
            <span className="text-gray-500 select-none">$ </span>npx skills add iplanwebsites/secretdef
          </div>
          <p className="text-sm text-muted-foreground">
            Installs the skill for all detected AI tools in your project. Then just say:
          </p>
          <div className="relative rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 pr-16 text-sm italic text-foreground">
            {sayText}
            <button
              ref={sayCopyButtonRef}
              onClick={handleSayCopy}
              className="absolute top-2.5 right-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {sayCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {sayCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      {tab === 'prompt' && (
        <div className="mt-3">
          <div className="relative rounded-lg bg-[#0d1117] border border-border p-4">
            <button
              ref={copyButtonRef}
              onClick={handleCopy}
              className="absolute top-3 right-3 flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap leading-relaxed pr-16">{agentPrompt}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

type SdkKey = keyof typeof sdkExamples;
const sdkKeys = Object.keys(sdkExamples) as SdkKey[];

function SdkExampleBlock() {
  const [active, setActive] = useState<SdkKey>('openai');
  const example = sdkExamples[active];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-foreground">
        Two lines. Fail at startup, not at 2am.
      </h2>
      <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
        Most SDKs already read <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">process.env</code> internally.
        Add two lines and missing keys fail on server start — not when a user hits the code path.
      </p>

      <div className="mt-6 flex gap-2 flex-wrap">
        {sdkKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              active === key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {sdkExamples[key].label}
          </button>
        ))}
      </div>

      <p className="mt-3 text-sm text-muted-foreground italic">{example.subtitle}</p>

      <div className="mt-3 grid gap-3 lg:grid-cols-2 items-start">
        <CodeBlock
          code={example.code}
          language="typescript"
          filename="server.ts"
          highlightLines={[...example.highlightLines]}
        />

        <div className={cn(
          'rounded-xl border p-4 text-[13px] font-mono leading-relaxed bg-[#0d1117]',
          example.terminal.isWarning
            ? 'border-yellow-500/30'
            : 'border-red-500/30',
        )}>
          <div className={cn(
            'text-xs font-semibold uppercase tracking-wider mb-3',
            example.terminal.isWarning ? 'text-yellow-400' : 'text-red-400',
          )}>
            {example.terminal.isWarning ? 'Dev warning' : 'Startup error'}
          </div>
          <div className={example.terminal.isWarning ? 'text-yellow-300/90' : 'text-red-300/90'}>{example.terminal.error}</div>
          <div className="text-gray-300 mt-2 whitespace-pre-line">
            {example.terminal.details}
          </div>
          {!example.terminal.isWarning && (
            <div className="text-red-400 mt-3 pt-2 border-t border-red-500/20">{'Process exited with code 1'}</div>
          )}
          {example.terminal.isWarning && (
            <div className="text-green-400 mt-3 pt-2 border-t border-yellow-500/20">{'Server started on port 3000 ✓'}</div>
          )}
        </div>
      </div>
    </div>
  );
}

