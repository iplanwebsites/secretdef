import { useState, useRef } from 'react';
import { useData } from 'vike-react/useData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CodeBlock, TerminalBlock, InstallCommand, fireConfettiFromElement } from '../../components/code-block';
import { Logo } from '../../components/logo';
import { ArrowRight, Github, Package, Shield, Cpu, Blocks, Copy, Check, UserPlus } from 'lucide-react';
import { cn } from '../../lib/utils';
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

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    example: 'sk_live_...',
    validate: 'str',
    devDefault: 'sk_test_placeholder',
  },
  DATABASE_URL: {
    description: 'Postgres connection string — format: postgresql://user:pass@host/db',
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
//     To fix: set STRIPE_SECRET_KEY in your .env file.
//
// vs: TypeError: Cannot read properties of undefined`;

const prebuiltExample = `// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/openai';
// import '@secretdef/stripe';
// import '@secretdef/resend';

// Validates ALL secrets registered by the imports above
validateSecrets();`;

const sdkExamples = {
  resend: {
    label: 'Resend',
    subtitle: 'Just import — zero config',
    code: `import { Resend } from 'resend';
import '@secretdef/resend';

// That's it. validateSecrets() at your entry point
// catches missing RESEND_API_KEY at startup.
const resend = new Resend(process.env.RESEND_API_KEY);`,
    highlightLines: [2],
    terminal: {
      error: '🔴 Missing 1 secret(s) [env=production]:',
      details: `  ✗ RESEND_API_KEY
    Email notifications service — https://resend.com/api-keys
    from: @secretdef/resend`,
    },
  },
  openai: {
    label: 'OpenAI',
    subtitle: 'Validated reads with useSecret()',
    code: `import OpenAI from 'openai';
import { useSecret } from 'secretdef';
import '@secretdef/openai';

// useSecret() throws a rich error if OPENAI_API_KEY is missing
const openai = new OpenAI({ apiKey: useSecret('OPENAI_API_KEY') });`,
    highlightLines: [2, 3, 6],
    terminal: {
      error: '🔴 Missing 1 secret(s) [env=production]:',
      details: `  ✗ OPENAI_API_KEY
    LLM inference provider — https://platform.openai.com/api-keys
    from: @secretdef/openai`,
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
      description: 'Order fulfillment webhook — https://dashboard.stripe.com/webhooks',
    },
  }),
});
const client = new Stripe(env.STRIPE_SECRET_KEY);`,
    highlightLines: [2, 3, 5, 6, 7, 8, 9, 10, 11],
    terminal: {
      error: '🔴 Missing 2 secret(s) [env=production]:',
      details: `  ✗ STRIPE_SECRET_KEY
    Merch store payment account — https://dashboard.stripe.com/apikeys
    from: @secretdef/stripe

  ✗ STRIPE_WEBHOOK_SECRET
    Order fulfillment webhook — https://dashboard.stripe.com/webhooks
    from: server.ts`,
    },
  },
  anthropic: {
    label: 'Anthropic',
    subtitle: 'Multiple packages, one validateSecrets()',
    code: `import Anthropic from '@anthropic-ai/sdk';
import { validateSecrets } from 'secretdef';
import '@secretdef/anthropic';
import '@secretdef/resend';

// One call validates secrets from ALL imported packages
const env = validateSecrets();
const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });`,
    highlightLines: [2, 3, 4, 7],
    terminal: {
      error: '🔴 Missing 2 secret(s) [env=production]:',
      details: `  ✗ ANTHROPIC_API_KEY
    AI assistant backend — https://console.anthropic.com/settings/keys
    from: @secretdef/anthropic

  ✗ RESEND_API_KEY
    Email notifications service — https://resend.com/api-keys
    from: @secretdef/resend`,
    },
  },
  database: {
    label: 'DB + dev DB',
    subtitle: 'Local dev fallback with devDefault',
    code: `import { defineSecrets, validateSecrets } from 'secretdef';

const env = validateSecrets(defineSecrets({
  DATABASE_URL: {
    description: 'Postgres connection — https://console.neon.tech',
    validate: 'url',
    devDefault: 'postgresql://localhost:5432/myapp_dev',
  },
}));`,
    highlightLines: [1, 3, 4, 5, 6, 7, 8],
    terminal: {
      isWarning: true,
      error: '⚠️  1 secret(s) using devDefault [env=development]:',
      details: `  ⚠ DATABASE_URL — using devDefault
    → postgresql://localhost:5432/myapp_dev
    Postgres connection — https://console.neon.tech
    from: src/secrets.ts`,
    },
  },
  custom: {
    label: 'Custom var',
    subtitle: 'Any internal service or API key',
    code: `import { defineSecrets, validateSecrets } from 'secretdef';

const env = validateSecrets(defineSecrets({
  BOGUS_KEY: {
    description: 'Internal rate-limiter service on CF Workers'
      + ' — https://dash.cloudflare.com/workers/bogus',
    validate: 'str',
    example: 'bogus_live_abc123...',
  },
}));

const res = await fetch('https://bogus-worker.workers.dev', {
  headers: { Authorization: \`Bearer \${env.BOGUS_KEY}\` },
});`,
    highlightLines: [1, 3, 4, 5, 6, 7, 8, 9],
    terminal: {
      error: '🔴 Missing 1 secret(s) [env=production]:',
      details: `  ✗ BOGUS_KEY
    Internal rate-limiter service on CF Workers
    → https://dash.cloudflare.com/workers/bogus
    example: bogus_live_abc123...
    from: src/secrets.ts`,
    },
  },
  ambiguous: {
    label: 'Ambiguous keys',
    subtitle: 'Clarify confusing env var names with descriptions',
    code: `import { defineSecrets, validateSecrets } from 'secretdef';

const env = validateSecrets(defineSecrets({
  AWS_ACCESS_KEY_ID: {
    description: 'Public identifier (not the secret!) — IAM → Users'
      + ' → Security credentials — https://console.aws.amazon.com/iam',
  },
  AWS_SECRET_ACCESS_KEY: {
    description: 'Private key (shown once at creation, cannot be retrieved'
      + ' later) — rotate via IAM → Users → Security credentials',
  },
  AWS_REGION: {
    description: 'Deployment region, e.g. us-east-1. Must match your'
      + ' S3 bucket region — not the same as NEXT_PUBLIC_AWS_REGION',
    devDefault: 'us-east-1',
  },
}));`,
    highlightLines: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    terminal: {
      error: '🔴 Missing 2 secret(s) [env=production]:',
      details: `  ✗ AWS_ACCESS_KEY_ID
    Public identifier (not the secret!) — IAM → Users
    → https://console.aws.amazon.com/iam
    from: src/secrets.ts

  ✗ AWS_SECRET_ACCESS_KEY
    Private key (shown once at creation, cannot be
    retrieved later) — rotate via IAM → Security credentials
    from: src/secrets.ts

  ✓ AWS_REGION — set`,
    },
  },
} as const;

export default function Page() {
  const { packages } = useData<Data>();
  const hasEnvVarsPackages = packages.filter(p => p.hasEnvVars);
  const soonCount = packages.filter(p => !p.hasEnvVars).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-12">
        <Logo className="text-lg" />
      </div>

      {/* Hero */}
      <div className="mb-6">
        <Badge variant="secondary">@types for your env vars</Badge>
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
        Your app has secret dependencies.{' '}
        <span className="text-primary">Declare them</span>
      </h1>

      <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
        Define required API keys, tokens, and connection strings.{' '}
        Give your AI agent the context to fix everything.
       
      </p>

      <p className="mt-3 text-sm text-muted-foreground italic">
        Not a vault. Not a secrets manager. Works alongside Doppler, Vault, Infisical, or plain .env files.
         {' '} 
         <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">secretdef</code> is a standard way for modules to declare what they need
        and where to get them.

      </p>

      <div className="mt-8">
        <InstallCommand command="npm i secretdef" />
      </div>

      {/* Before/after comparison — #3 */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-[#0d1117] p-4">
          <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">Without secretdef</div>
          <pre className="font-mono text-sm text-gray-400 whitespace-pre-wrap leading-relaxed">
{`TypeError: Cannot read properties
of undefined (reading 'split')
    at /app/src/billing.ts:14:23`}
          </pre>
        </div>
        <div className="rounded-lg border border-primary/30 bg-[#0d1117] p-4">
          <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-3">With secretdef</div>
          <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
<span className="text-red-400">{'  ✗ STRIPE_SECRET_KEY'}</span>
{`    Stripe API secret key
    → https://dashboard.stripe.com/apikeys
    from: src/secrets.ts`}
          </pre>
        </div>
      </div>

      {/* Who it's for — #11 */}
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

      {/* Quick start */}
      <QuickStartBlock />

      {/* Problem cards — #6 sharpened copy + #10 4th card */}
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
            <div className="text-red-400">{'🔴 Missing 2 secret(s) [env=production]:'}</div>
            <div className="text-gray-300 mt-2">
              {'  ✗ STRIPE_SECRET_KEY'}<br />
              {'    Stripe API secret key. Starts with sk_live_ (not pk_).'}<br />
              {'    → https://dashboard.stripe.com/apikeys'}<br />
              {'    from: src/secrets.ts'}<br />
              <br />
              {'  ✗ DATABASE_URL'}<br />
              {'    Postgres connection string — format: postgresql://user:pass@host/db'}<br />
              {'    from: src/modules/db/secrets.ts'}
            </div>
            <div className="text-green-400 mt-2">
              {'  ✓ STRIPE_WEBHOOK_SECRET — set  (from: src/secrets.ts)'}
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

      {/* SDK example with tabs */}
      <SdkExampleBlock />

      {/* AI agents — #4 elevated to full section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Cpu className="h-7 w-7 text-primary" />
          Built for AI agents
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Claude Code, Cursor, Codex, and Gemini CLI generate integrations fast — but crash
          on missing env vars with zero context. secretdef gives them structured errors
          they can read and act on.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5 bg-card">
            <div className="text-sm font-semibold text-destructive uppercase tracking-wider mb-3">Without secretdef</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>1. Agent generates Stripe integration</p>
              <p>2. <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">TypeError: Cannot read properties of undefined</code></p>
              <p>3. Agent retries blindly, no context</p>
              <p>4. Fails again — human intervenes</p>
            </div>
          </div>
          <div className="rounded-lg border border-primary/30 p-5 bg-primary/5">
            <div className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-3">With secretdef</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>1. Agent generates Stripe integration</p>
              <p>2. Structured error: var name + description + dashboard URL</p>
              <p>3. Agent reads error, knows exactly what's needed</p>
              <p>4. Agent self-resolves — continues building</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Use the <a href="#quick-start" className="text-primary hover:underline">Quick start prompt</a> above to
          add secretdef to any project with a single paste.
        </p>
      </div>

      {/* Rich errors everywhere — #9 merged useSecret + description examples */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Every error tells you how to fix it
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">process.env.KEY</code> returns <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">undefined</code> silently.{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">useSecret('KEY')</code> tells
          you what's wrong, where to find the value, and which file declared the requirement.
        </p>
        <div className="mt-4">
          <CodeBlock code={useSecretCode} language="typescript" filename="src/modules/stripe/client.ts" />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          The descriptions you write show up verbatim in error output.
          A dashboard link and a format hint turn a debugging session into a copy-paste fix.
          These descriptions aren't just for humans — when Claude Code hits a missing secret, it reads this and knows exactly what to do.
        </p>

        <div className="mt-4 space-y-3">
          <DescriptionExample
            envVar="STRIPE_SECRET_KEY"
            description="Stripe API secret key. Starts with sk_live_ (prod) or sk_test_ (dev). Not the publishable key (pk_). Provision at https://dashboard.stripe.com/apikeys — requires Admin role."
          />
          <DescriptionExample
            envVar="CLERK_SECRET_KEY"
            description="Clerk backend API key. Starts with sk_live_ or sk_test_. Dashboard: https://dashboard.clerk.com → API Keys. Not the publishable frontend key (pk_)."
          />
          <DescriptionExample
            envVar="DATABASE_URL"
            description="Postgres connection string, format: postgresql://user:pass@host:5432/db. Neon: https://console.neon.tech → Connection Details. Supabase: Settings → Database → URI. Use the pooler URL for serverless."
          />
        </div>
      </div>

      {/* Modules should declare their secrets — #8 only show hasEnvVars packages */}
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
          For services that don't ship their own definitions yet, the community maintains
          ready-made <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> packages:
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hasEnvVarsPackages.map((pkg) => (
            <SdkPackage key={pkg.name} name={pkg.name} title={pkg.title} npm={pkg.npm} hasEnvVars={pkg.hasEnvVars} />
          ))}
        </div>

        {soonCount > 0 && (
          <p className="mt-4 text-sm text-muted-foreground">
            +{soonCount} more packages coming soon.{' '}
            <a
              href="https://github.com/iplanwebsites/secretdef/edit/main/registry.yaml"
              className="text-primary hover:underline"
            >
              Add yours
            </a>
          </p>
        )}

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            Added secret definitions to your SDK or service?
            Open a PR to add it to the supported list — help others discover it.
          </p>
          <a
            href="https://github.com/iplanwebsites/secretdef/edit/main/registry.yaml"
            className="inline-flex items-center gap-2 shrink-0 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Add your service <ArrowRight className="h-3.5 w-3.5" />
          </a>
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
          Zero-dependency. ~2KB. Works alongside Doppler, Vault, AWS Secrets Manager, or plain .env files.
        </p>
      </div>
    </div>
  );
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

function generatePrompt(name: string, npm: string) {
  return `Install ${name} and wire it into this codebase:
1. npm i secretdef ${name}
2. Find where "${npm}" is imported and process.env is used for its config. Import the secrets from "${name}" and use them instead of raw process.env access.
3. In the server/app entry point, import validateSecrets from "secretdef" and call it with the imported secrets so missing keys are caught at startup — not at runtime.

This requires editing at least 2 files: where the SDK is used, and the app entry point.`;
}

function SdkPackage({ name, title, npm, hasEnvVars }: { name: string; title?: string; npm: string; hasEnvVars?: boolean }) {
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

  if (!hasEnvVars) {
    return (
      <div className="flex flex-col rounded-lg border border-border/50 px-3 py-2.5 bg-card gap-1.5 opacity-50">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{title || name}</span>
          <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">soon</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono truncate">
          <a href={`https://www.npmjs.com/package/${npm}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{npm}</a>
        </span>
      </div>
    );
  }

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
  const [active, setActive] = useState<SdkKey>('resend');
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

function DescriptionExample({ envVar, description }: { envVar: string; description: string }) {
  return (
    <div className="bg-[#0d1117] rounded-xl p-4 border border-border">
      <div className="text-xs font-mono text-primary font-semibold">{envVar}</div>
      <p className="mt-1 text-sm font-mono text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
