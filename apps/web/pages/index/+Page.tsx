import { useState } from 'react';
import { useData } from 'vike-react/useData';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CodeBlock, TerminalBlock, InstallCommand } from '../../components/code-block';
import { Logo } from '../../components/logo';
import { ArrowRight, Github, Package, Shield, Cpu, Blocks, Copy, Check } from 'lucide-react';
import type { Data } from './+data';

const agentPrompt = `Scan this codebase for all process.env usage. For each secret found, use defineSecrets() from "secretdef" to declare it — right in the file where it's used. Include:
- envVar: the environment variable name
- description: what it is, expected format/prefix, a dashboard URL to provision it
- envOverrides: if dev/staging use different keys or have defaults

Use useSecret() to access values — it throws structured errors with the var name, description, and dashboard URL, so missing secrets are obvious to both humans and AI agents.

Wire up validateSecrets() at the app entry point to catch missing secrets at startup.

Install: npm i secretdef
Docs: https://secretdef.com/docs`;

const defineCode = `// src/secrets.ts
import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    envVar: 'STRIPE_SECRET_KEY',
    description: 'Stripe API secret key. Starts with sk_live_ (not pk_). ' +
      'https://dashboard.stripe.com/apikeys',
    envOverrides: {
      development: { envVar: 'STRIPE_TEST_SECRET_KEY' },
    },
  },
  DATABASE_URL: {
    envVar: 'DATABASE_URL',
    description: 'Postgres connection string — format: postgresql://user:pass@host/db',
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
import { enableAutoRegister, validateSecrets } from 'secretdef';
enableAutoRegister();

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

export default function Page() {
  const { packages } = useData<Data>();
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <Logo className="text-lg mb-12" />

      {/* Hero */}
      <div className="flex items-center gap-2 mb-6">
        <Badge variant="secondary">like @types for env vars</Badge>
        <Badge variant="outline">agent-friendly</Badge>
        <Badge variant="outline">devops simplified</Badge>
        <Badge variant="outline">open</Badge>
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
        Your app has secret dependencies.{' '}
        <span className="text-primary">Declare them.</span>
      </h1>

      <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
        Every service you integrate needs API keys, tokens, and connection strings.{' '}
        <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">secretdef</code> is a standard way for modules to declare which secrets they need
        and where to get them.
      </p>

      <div className="mt-8">
        <InstallCommand command="npm i secretdef" />
      </div>

      {/* Quick start */}
      <QuickStartBlock />

      {/* Problem cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <ProblemCard
          icon={<Shield className="h-5 w-5 text-destructive" />}
          title="Deploys fail with useless errors"
          description="TypeError: Cannot read properties of undefined tells you nothing. You redeploy 3 times before you find the missing key."
        />
        <ProblemCard
          icon={<Package className="h-5 w-5 text-amber-500" />}
          title="Nobody knows what's provisioned"
          description="Is Stripe set up in staging? Which Supabase project is prod pointing at? Where do you get a Resend key?"
        />
        <ProblemCard
          icon={<Cpu className="h-5 w-5 text-primary" />}
          title="AI agents hit a wall"
          description="Cursor and Claude Code scaffold integrations in seconds — then crash on a missing env var with a generic TypeError."
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

      {/* Dev vs prod */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Doesn't block your dev server
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

      {/* AI agents — moved up */}
      <Card className="mt-16 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            Built for AI agents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Agents read the structured errors to self-resolve missing secrets — env var name,
            dashboard URL, registering file, all in one message.
            And when generating integrations, they write rich <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> descriptions
            with format hints, provisioning links, and common gotchas.
          </p>
        </CardContent>
      </Card>

      {/* useSecret — reframed */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Actionable errors at the point of use
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">process.env.KEY</code> returns <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">undefined</code> silently.{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">useSecret('KEY')</code> tells
          you what's wrong, where to find the value, and which file declared the requirement.
        </p>
        <div className="mt-4">
          <CodeBlock code={useSecretCode} language="typescript" filename="src/modules/stripe/client.ts" />
        </div>
      </div>

      {/* Errors that fix themselves */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground">
          Errors that fix themselves
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          The descriptions you write show up verbatim in error output.
          A dashboard link and a format hint turn a debugging session into a copy-paste fix —
          or let Claude Code figure it out on its own.
        </p>

        <div className="mt-6 space-y-3">
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

      {/* Modules should declare their secrets */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Blocks className="h-7 w-7 text-primary" />
          Every module declares its secrets
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Your database module knows it needs <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">DATABASE_URL</code>.
          Your payment code knows it needs a Stripe key. When each module ships a{' '}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">secrets.ts</code>,
          the whole app's requirements become discoverable, validated, and documented — automatically.
        </p>
        <p className="mt-3 text-muted-foreground">
          For services that don't ship their own definitions yet, the community maintains
          ready-made <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> packages:
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <SdkPackage key={pkg.name} name={pkg.name} npm={pkg.npm} />
          ))}
        </div>

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

      {/* CTA */}
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
          Zero-dependency. ~2KB. Works with any secrets provider.
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

function SdkPackage({ name, npm }: { name: string; npm: string }) {
  return (
    <div className="flex flex-col rounded-lg border border-border/50 px-3 py-2.5 bg-card gap-1 opacity-60">
      <div className="flex items-center justify-between gap-2">
        <code className="text-sm font-mono font-semibold text-foreground truncate">{name}</code>
        <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">soon</span>
      </div>
      <span className="text-xs text-muted-foreground font-mono truncate">↳ {npm}</span>
    </div>
  );
}

function QuickStartBlock() {
  const [tab, setTab] = useState<'prompt' | 'skill'>('prompt');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(agentPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* */ }
  };

  return (
    <div className="mt-10 rounded-lg border border-border bg-card p-5">
      <h2 className="text-lg font-bold text-foreground">Quick start with AI</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Paste this prompt into Claude Code, Cursor, Codex, or any AI coding tool.
        It'll scan your codebase and generate all the secret definitions for you.
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setTab('prompt')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            tab === 'prompt'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          Copy prompt
        </button>
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
      </div>

      {tab === 'prompt' && (
        <div className="mt-3">
          <div className="relative rounded-lg bg-[#0d1117] border border-border p-4">
            <button
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

      {tab === 'skill' && (
        <div className="mt-3 space-y-3">
          <div className="rounded-lg bg-[#0d1117] border border-border p-3 font-mono text-sm text-gray-300">
            <span className="text-gray-500 select-none">$ </span>npx skills add iplanwebsites/secretdef
          </div>
          <p className="text-sm text-muted-foreground">
            Installs the skill for all detected AI tools in your project. Then just say:
          </p>
          <div className="rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 text-sm italic text-foreground">
            Create secret definitions. Ensure all secrets have definitions.
          </div>
        </div>
      )}
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
