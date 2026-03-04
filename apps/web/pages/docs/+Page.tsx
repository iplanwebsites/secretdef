import { Badge } from '../../components/ui/badge';
import { CodeBlock, TerminalBlock } from '../../components/code-block';
import { Logo } from '../../components/logo';

const installCode = `npm i secretdef
# or
pnpm add secretdef`;

const defineBasicCode = `// src/secrets.ts
import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_URL: {
    description: 'Postgres connection string — check your hosting dashboard',
    validate: 'url',
    devDefault: 'postgresql://localhost:5432/myapp_dev',
  },
  STRIPE_SECRET_KEY: {
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    example: 'sk_live_...',
    validate: 'str',
    environments: {
      development: { default: 'sk_test_placeholder' },
    },
  },
  ANALYTICS_KEY: {
    description: 'Analytics write key',
    required: false,
  },
});`;

const autoRegisterCode = `// src/index.ts
import { enableAutoRegister, validateSecrets } from 'secretdef';
enableAutoRegister();

// Import your secrets files — each defineSecrets call auto-registers
import './secrets';
import './modules/db/secrets';
import './modules/email/secrets';

// One call checks everything
const env = validateSecrets();`;

const explicitCode = `// src/env.ts
import { validateSecrets } from 'secretdef';
import { secrets as app } from './secrets';
import { secrets as db } from './modules/db/secrets';
import { secrets as email } from './modules/email/secrets';

export const env = validateSecrets({
  ...app,
  ...db,
  ...email,
});`;

const useSecretCode = `import { useSecret } from 'secretdef';

// Instead of: process.env.STRIPE_SECRET_KEY  (returns undefined silently)
const key = useSecret('STRIPE_SECRET_KEY');   // throws with actionable error if missing`;

const useSecretExplicitCode = `import { useSecret } from 'secretdef';
import { secrets } from './secrets';

// Pass an explicit map — no global registry needed
const key = useSecret('STRIPE_SECRET_KEY', secrets);`;

const secretSpecCode = `// The object key IS the env var name
type SecretSpec = {
  description?: string;        // Human-readable — include a dashboard URL!
  required?: boolean;          // Default: true
  validate?: SecretValidation; // Built-in name or custom function
  choices?: string[];          // Allowlist of valid values
  example?: string;            // Example value shown in errors
  devDefault?: string;         // Default for non-production environments
  group?: string;              // Group label in validation output
  environments?: {             // Per-environment overrides
    [env: string]: {
      envVar?: string;         // Different env var name for this environment
      required?: boolean;      // Override required flag
      default?: string;        // Override default value
    };
  };
};

// String shorthand also works:
defineSecrets({ MY_KEY: 'description text' });
// → equivalent to { MY_KEY: { description: 'description text' } }`;

const validationCode = `import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PORT: {
    description: 'Server port',
    validate: 'port',          // built-in: port (0-65535)
    devDefault: '3000',
  },
  ADMIN_EMAIL: {
    description: 'Admin notification address',
    validate: 'email',         // built-in: email
  },
  LOG_LEVEL: {
    description: 'Logging verbosity',
    choices: ['debug', 'info', 'warn', 'error'],
    devDefault: 'debug',
  },
  SERVICE_CONFIG: {
    description: 'JSON config blob from dashboard',
    validate: 'json',          // built-in: parses JSON
  },
  CUSTOM_TOKEN: {
    description: 'Must start with tok_',
    validate: (v) => {         // custom function
      if (!v.startsWith('tok_')) throw new Error('Must start with tok_');
      return v;
    },
  },
});`;

const builtinValidatorsCode = `// Built-in validators:
// str    — non-empty string
// bool   — true/false/t/f/1/0/yes/no/on/off
// num    — any number
// email  — basic email format
// host   — domain name or IP address
// port   — integer 0-65535
// url    — valid URL (via new URL())
// json   — valid JSON (via JSON.parse())`;

const environmentsCode = `export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    example: 'sk_live_...',
    devDefault: 'sk_test_placeholder',   // shorthand for environments.development.default
  },
  STRIPE_WEBHOOK_SECRET: {
    description: 'Webhook signing secret',
    environments: {
      development: {
        required: false,        // optional in dev
        default: 'whsec_test',  // fallback value
      },
    },
  },
});`;

const moduleSecretsCode = `// src/modules/db/secrets.ts — lives next to your DB code
import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_URL: {
    description: 'Postgres connection string',
  },
  DATABASE_POOL_SIZE: {
    description: 'Connection pool size',
    required: false,
  },
});`;

const claudeMdCode = `# CLAUDE.md
# Add secretdef info so Claude understands your secret setup

## Secrets
This project uses \`secretdef\` to declare environment variable requirements.
Secret definitions live in \`src/secrets.ts\` and per-module files.

Run \`validateSecrets()\` at startup (see src/index.ts).
Use \`useSecret('KEY')\` instead of \`process.env.KEY\`.

If you see SecretNotAvailableError, read the error — it tells you
the env var name, where to get it, and which file registered it.`;

const claudeMdErrorCode = `SecretNotAvailableError: STRIPE_SECRET_KEY is not available

  env var:     STRIPE_SECRET_KEY
  description: Stripe API secret key. Starts with sk_live_
  dashboard:   https://dashboard.stripe.com/apikeys
  registered:  src/secrets.ts
  environment: development

  → Set STRIPE_SECRET_KEY in .env or your hosting dashboard`;

const skillStructureCode = `# Install the skill via npx:
npx skills add iplanwebsites/secretdef

# It installs to your project:
.claude/skills/secretdef/SKILL.md   # Claude Code
.cursor/skills/secretdef/SKILL.md   # Cursor
# ... auto-detected for each agent`;

const envFromCode = `import type { EnvFrom } from 'secretdef';
import { secrets } from './secrets';

// Derive a typed env object from your definitions
type Env = EnvFrom<typeof secrets>;
// = { DATABASE_URL: string; STRIPE_KEY: string; ANALYTICS_KEY: string }`;

const processEnvAugmentCode = `// src/env.d.ts — create this file once
import type { EnvFrom } from 'secretdef';
import { secrets } from './secrets';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvFrom<typeof secrets> {}
  }
}`;

const multiModuleAugmentCode = `// src/env.d.ts — combine multiple modules
import type { EnvFrom } from 'secretdef';
import { secrets as app } from './secrets';
import { secrets as db } from './modules/db/secrets';
import { secrets as email } from './modules/email/secrets';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends
      EnvFrom<typeof app>,
      EnvFrom<typeof db>,
      EnvFrom<typeof email> {}
  }
}`;

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Logo className="text-lg mb-12" />

      <h1 className="text-4xl font-bold text-foreground">Documentation</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Everything you need to know about secretdef. It's a small library — this is the whole doc.
      </p>

      {/* TOC */}
      <nav className="mt-8 p-4 bg-muted/50 rounded-lg">
        <div className="text-sm font-semibold text-foreground mb-2">On this page</div>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li><a href="#install" className="hover:text-foreground transition-colors">Install</a></li>
          <li><a href="#quick-start-ai" className="hover:text-foreground transition-colors">Quick start with AI</a></li>
          <li><a href="#define" className="hover:text-foreground transition-colors">Define your secrets</a></li>
          <li><a href="#validate" className="hover:text-foreground transition-colors">Validate at startup</a></li>
          <li><a href="#use-secret" className="hover:text-foreground transition-colors">Read secrets with useSecret()</a></li>
          <li><a href="#validation" className="hover:text-foreground transition-colors">Validation</a></li>
          <li><a href="#env-overrides" className="hover:text-foreground transition-colors">Environment overrides &amp; dev defaults</a></li>
          <li><a href="#examples" className="hover:text-foreground transition-colors">Framework examples</a></li>
          <li><a href="#api" className="hover:text-foreground transition-colors">API reference</a></li>
          <li><a href="#best-practices" className="hover:text-foreground transition-colors">Best practices</a></li>
          <li><a href="#typescript" className="hover:text-foreground transition-colors">TypeScript integration <span className="text-[10px] text-yellow-500 ml-1">experimental</span></a></li>
          <li><a href="#comparison" className="hover:text-foreground transition-colors">Comparison with alternatives <span className="text-[10px] text-yellow-500 ml-1">experimental</span></a></li>
          <li><a href="#claude-md" className="hover:text-foreground transition-colors">CLAUDE.md integration</a></li>
          <li><a href="#claude-skill" className="hover:text-foreground transition-colors">Claude Code skill</a></li>
          <li><a href="#community-packages" className="hover:text-foreground transition-colors">Community packages</a></li>
        </ul>
      </nav>

      {/* Install */}
      <section id="install" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Install</h2>
        <div className="mt-4">
          <CodeBlock code={installCode} language="bash" filename="Terminal" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Zero dependencies. Works with Node.js, Bun, Deno. ~2KB minified.
        </p>
      </section>

      {/* Quick start with AI */}
      <section id="quick-start-ai" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Quick start with AI</h2>
        <p className="mt-3 text-muted-foreground">
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">secretdef</code> includes
          an Agent Skill that works with Claude Code, Cursor, Codex, and other AI coding tools.
        </p>
        <div className="mt-4">
          <CodeBlock code={`npx skills add iplanwebsites/secretdef`} language="bash" filename="Terminal" />
        </div>
        <p className="mt-4 text-muted-foreground">
          Then open your project and tell the AI:
        </p>
        <div className="mt-2 rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 text-sm italic text-foreground">
          Create secret definitions. Ensure all secrets have definitions.
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          The skill scans your codebase for <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">process.env</code> usage,
          generates <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> calls
          with rich descriptions, and wires up validation at startup.
        </p>
      </section>

      {/* Define */}
      <section id="define" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Define your secrets</h2>
        <p className="mt-3 text-muted-foreground">
          Create a <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">secrets.ts</code> file
          listing the environment variables your app (or module) needs. Include a description
          and a dashboard URL so anyone — human or AI — knows where to get the value.
        </p>
        <div className="mt-4">
          <CodeBlock code={defineBasicCode} language="typescript" filename="src/secrets.ts" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> returns
          the same specs object as pure data. It does nothing at runtime unless auto-register is enabled.
        </p>
      </section>

      {/* Validate */}
      <section id="validate" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Validate at startup</h2>
        <p className="mt-3 text-muted-foreground">
          Call <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">validateSecrets()</code> once
          at app startup. It checks every declared secret against the environment and returns
          a typed map of resolved values.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground">
            Auto-register <Badge variant="default" className="ml-2 text-[10px]">easy</Badge>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Call <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">enableAutoRegister()</code> once.
            Every <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> call
            automatically pushes its specs to a global registry. Then <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">validateSecrets()</code> with
            no arguments checks them all.
          </p>
          <div className="mt-3">
            <CodeBlock code={autoRegisterCode} language="typescript" filename="src/index.ts" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground">
            Explicit spreading <Badge variant="outline" className="ml-2 text-[10px]">structured</Badge>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            For full control with no global state, spread each module's exports into a single call.
          </p>
          <div className="mt-3">
            <CodeBlock code={explicitCode} language="typescript" filename="src/env.ts" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground">Validation behavior</h3>
          <div className="mt-3">
            <TerminalBlock>
              <div className="text-red-400">{'🔴 Missing 2 secret(s) [env=production]:'}</div>
              <div className="text-gray-300 mt-2">
                {'  ✗ STRIPE_SECRET_KEY'}<br />
                {'    Stripe API secret key — https://dashboard.stripe.com/apikeys'}<br />
                {'    registered by: src/secrets.ts'}<br />
                <br />
                {'  ✗ DATABASE_URL'}<br />
                {'    Postgres connection string'}<br />
                {'    registered by: src/modules/db/secrets.ts'}
              </div>
            </TerminalBlock>
          </div>
          <ul className="mt-4 text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Production:</strong> missing required secrets print an error table and call <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">process.exit(1)</code>.</li>
            <li><strong className="text-foreground">Development:</strong> missing secrets print a warning. The server starts — they'll throw if accessed at runtime via <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">useSecret()</code>.</li>
          </ul>
        </div>
      </section>

      {/* useSecret */}
      <section id="use-secret" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Read secrets with useSecret()</h2>
        <p className="mt-3 text-muted-foreground">
          A drop-in replacement for <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">process.env.KEY</code>.
          Returns the value or throws a structured error with the var name, description, dashboard URL,
          and which file registered it.
        </p>
        <div className="mt-4">
          <CodeBlock code={useSecretCode} language="typescript" filename="src/modules/stripe/client.ts" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          With explicit spreading, pass the specs map directly:
        </p>
        <div className="mt-3">
          <CodeBlock code={useSecretExplicitCode} language="typescript" filename="src/modules/stripe/client.ts" />
        </div>
      </section>

      {/* Validation */}
      <section id="validation" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Validation</h2>
        <p className="mt-3 text-muted-foreground">
          Add <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">validate</code> to
          check that a secret's value has the right format. Use a built-in validator name or pass a custom function.
          Add <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">choices</code> to
          restrict to an allowlist.
        </p>
        <div className="mt-4">
          <CodeBlock code={validationCode} language="typescript" filename="src/secrets.ts" />
        </div>
        <div className="mt-4">
          <CodeBlock code={builtinValidatorsCode} language="typescript" filename="Built-in validators" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Validation runs during <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">validateSecrets()</code> and <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">useSecret()</code>.
          Invalid values appear in the same error/warning table as missing secrets.
        </p>
      </section>

      {/* environments */}
      <section id="env-overrides" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Environment overrides &amp; dev defaults</h2>
        <p className="mt-3 text-muted-foreground">
          Use <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">devDefault</code> for
          a quick default outside production, or <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">environments</code> for
          fine-grained control per environment (different required flag, default value, or env var name).
          The environment is read from <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">NODE_ENV</code>.
        </p>
        <div className="mt-4">
          <CodeBlock code={environmentsCode} language="typescript" filename="src/secrets.ts" />
        </div>
      </section>

      {/* Framework examples */}
      <section id="examples" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Framework examples</h2>
        <p className="mt-3 text-muted-foreground">
          The repo includes complete working examples for Express, Hono, and Next.js in
          the <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">examples/</code> directory.
          Each one shows the same pattern:
        </p>
        <ul className="mt-4 text-sm text-muted-foreground space-y-1">
          <li><strong className="text-foreground">secrets.ts</strong> — declares secrets with <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code></li>
          <li><strong className="text-foreground">server.ts</strong> — calls <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">validateSecrets</code> at startup, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">useSecret</code> at point of use</li>
          <li><strong className="text-foreground">tests</strong> — covers clean start, missing warnings, production errors, dev defaults, and runtime throws</li>
        </ul>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Framework</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Run</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground font-mono text-xs">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Express</td>
                <td className="py-2"><code>pnpm --filter secretdef-example-express dev</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Hono</td>
                <td className="py-2"><code>pnpm --filter secretdef-example-hono dev</code></td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Next.js</td>
                <td className="py-2"><code>pnpm --filter secretdef-example-nextjs dev</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Try <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">dev:ok</code> (all secrets set), <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">dev:missing</code> (missing in dev — warns), and <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">dev:production</code> (missing in prod — exits) to see the different behaviors.
        </p>
      </section>

      {/* API Reference */}
      <section id="api" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">API reference</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-mono text-base font-semibold text-foreground">
              defineSecrets(specs)
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Declares secret requirements. Returns the same <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">Record&lt;string, SecretSpec&gt;</code> you
              passed in. If <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">enableAutoRegister()</code> was
              called first, also pushes specs to the global registry.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-base font-semibold text-foreground">
              validateSecrets(specs?, env?, options?)
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Validates an explicit specs map, or the auto-registry if no map is passed. Returns
              a <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">Record&lt;string, string&gt;</code> of
              resolved values. In production, missing required secrets exit the process. In development, they warn.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-base font-semibold text-foreground">
              useSecret(key, specs?)
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Reads a single secret. Returns the string value or throws
              a <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">SecretNotAvailableError</code> with
              structured context (env var, description, URL, registering file).
              Pass an explicit specs map or omit to use the auto-registry.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-base font-semibold text-foreground">
              enableAutoRegister()
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Opt-in. After calling this, every <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> call
              also pushes its specs to a global registry. Call once at the top of your app, before imports.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-base font-semibold text-foreground">
              builtinValidators
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Record of all built-in validator functions (<code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">str</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">bool</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">num</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">email</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">host</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">port</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">url</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">json</code>).
              Exported for advanced use — typically you just pass the name as a string to <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">validate</code>.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-base font-semibold text-foreground">
              SecretSpec
            </h3>
            <div className="mt-2">
              <CodeBlock code={secretSpecCode} language="typescript" filename="types" />
            </div>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Best practices</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong className="text-foreground">Define secrets where they're used.</strong>
            <span className="text-sm text-muted-foreground ml-1">
              Put Stripe secrets next to your Stripe code, DB secrets next to your database module.
              Definitions that live far from usage drift and go stale.
            </span>
          </li>
          <li>
            <strong className="text-foreground">Use useSecret() instead of process.env.</strong>
            <span className="text-sm text-muted-foreground ml-1">
              <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">process.env.X</code> returns <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">undefined</code> silently. <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">useSecret('X')</code> tells
              you exactly what's wrong and how to fix it.
            </span>
          </li>
          <li>
            <strong className="text-foreground">Always include a description with a URL.</strong>
            <span className="text-sm text-muted-foreground ml-1">
              Future you, your teammates, and AI agents will thank you.
              A dashboard link turns a 10-minute scavenger hunt into a single click.
            </span>
          </li>
          <li>
            <strong className="text-foreground">Use environments for dev/staging differences.</strong>
            <span className="text-sm text-muted-foreground ml-1">
              Stripe test keys, local database URLs, optional webhooks — declare the
              differences per environment instead of documenting them elsewhere.
            </span>
          </li>
          <li>
            <strong className="text-foreground">One secrets.ts per module, not one giant file.</strong>
            <span className="text-sm text-muted-foreground ml-1">
              Each module owns its secret definitions. Auto-register or explicit spreading
              collects them at the top level.
            </span>
          </li>
        </ul>
        <div className="mt-6">
          <h3 className="text-base font-semibold text-foreground">Example project structure</h3>
          <div className="mt-3">
            <CodeBlock code={moduleSecretsCode} language="typescript" filename="src/modules/db/secrets.ts" />
          </div>
        </div>
      </section>

      {/* TypeScript integration */}
      <section id="typescript" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">TypeScript integration <Badge variant="outline" className="ml-2 text-[10px] text-yellow-500 border-yellow-500/50">experimental</Badge></h2>
        <p className="mt-3 text-muted-foreground">
          secretdef preserves your secret keys as literal types. Use the{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">EnvFrom</code> type helper to
          derive a typed environment object from your definitions — no code generation needed.
        </p>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-foreground">EnvFrom type helper</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Maps every key from your <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> call to <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">string</code>.
          </p>
          <div className="mt-3">
            <CodeBlock code={envFromCode} language="typescript" filename="src/env.ts" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-foreground">Augment process.env</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Get autocomplete on <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">process.env</code> across
            your entire project. Create this file once — it stays in sync automatically because it
            references your <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">secrets</code> object.
          </p>
          <div className="mt-3">
            <CodeBlock code={processEnvAugmentCode} language="typescript" filename="src/env.d.ts" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-foreground">Multiple modules</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Combine secrets from multiple modules with{' '}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">extends</code>:
          </p>
          <div className="mt-3">
            <CodeBlock code={multiModuleAugmentCode} language="typescript" filename="src/env.d.ts" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Now <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">process.env.DATABASE_URL</code> autocompletes
            everywhere, and <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">validateSecrets()</code> catches
            missing values at runtime. One source of truth, both type safety and runtime validation.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Comparison with alternatives <Badge variant="outline" className="ml-2 text-[10px] text-yellow-500 border-yellow-500/50">experimental</Badge></h2>
        <p className="mt-3 text-muted-foreground">
          There's no standard way to declare secret requirements in the JS/TS ecosystem.
          Here's how secretdef compares to common approaches.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Approach</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Type safety</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Runtime validation</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Descriptions / URLs</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Shareable via npm</th>
                <th className="text-left py-2 font-semibold text-foreground">AI-readable errors</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">secretdef</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 text-green-400">Yes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">env.d.ts</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 text-red-400">No</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">.env.example</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-yellow-400">Comments only</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 text-red-400">No</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">Zod + process.env</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-yellow-400">Manual</td>
                <td className="py-3 text-red-400">No</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">envalid</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-green-400">Yes</td>
                <td className="py-3 pr-4 text-yellow-400">desc only</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 text-red-400">No</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">process.env.X</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 pr-4 text-red-400">No</td>
                <td className="py-3 text-red-400">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">env.d.ts</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              TypeScript ambient declarations for <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">ProcessEnv</code>.
              Great for autocomplete, but erased at compile time — no runtime checks, no metadata, and not shareable across packages.
              secretdef can complement <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">env.d.ts</code> (or even generate one).
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">.env.example</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A convention for documenting env vars in a flat file. No runtime effect, no validation,
              and comments tend to go stale. Useful as a quick reference but doesn't prevent startup failures.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Zod + process.env</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Parsing <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">process.env</code> through a Zod schema gives type safety and validation,
              but lacks structured metadata (descriptions, dashboard URLs, source file tracking) and
              isn't designed to be shared across packages.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">envalid</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A solid validation library with <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">desc</code> support.
              secretdef adds dashboard URLs, per-environment overrides, AI-readable error output,
              and the <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">@secretdef/*</code> ecosystem for sharing definitions across projects.
            </p>
          </div>
        </div>
      </section>

      {/* CLAUDE.md */}
      <section id="claude-md" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">CLAUDE.md integration</h2>
        <p className="mt-3 text-muted-foreground">
          secretdef is designed to work with AI coding agents like{' '}
          <a href="https://claude.ai/code" className="text-primary hover:underline">Claude Code</a>.
          Add a note about your secret setup to your project's{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">CLAUDE.md</code> so
          Claude understands how your app manages secrets.
        </p>
        <div className="mt-4">
          <CodeBlock code={claudeMdCode} language="markdown" filename="CLAUDE.md (add to your project)" />
        </div>

        <h3 className="mt-6 text-lg font-semibold text-foreground">How it works with AI agents</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          When an AI agent encounters a missing secret, secretdef's structured error output gives it
          everything needed to fix the problem — no guessing, no searching through docs:
        </p>
        <div className="mt-3">
          <TerminalBlock>
            <div className="text-red-400">{'SecretNotAvailableError: STRIPE_SECRET_KEY is not available'}</div>
            <div className="text-gray-300 mt-2">
              {'  env var:     STRIPE_SECRET_KEY'}<br />
              {'  description: Stripe API secret key. Starts with sk_live_'}<br />
              {'  dashboard:   https://dashboard.stripe.com/apikeys'}<br />
              {'  registered:  src/secrets.ts'}<br />
              {'  environment: development'}<br />
              <br />
              {'  → Set STRIPE_SECRET_KEY in .env or your hosting dashboard'}
            </div>
          </TerminalBlock>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          The agent reads the env var name, the dashboard URL, and the fix instruction.
          Combined with the <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">CLAUDE.md</code> context
          and the bundled skill, Claude can resolve missing secrets without asking you.
        </p>
      </section>

      {/* Claude Code skill */}
      <section id="claude-skill" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Claude Code skill</h2>
        <p className="mt-3 text-muted-foreground">
          secretdef ships with a{' '}
          <a href="https://code.claude.com/docs/en/skills" className="text-primary hover:underline">Claude Code skill</a>{' '}
          that teaches Claude how to define secrets, fix <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">SecretNotAvailableError</code>,
          and follow best practices — automatically.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Run <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">npx skills add iplanwebsites/secretdef</code> to
          install the skill. It auto-detects your AI tools (Claude Code, Cursor, Codex, etc.)
          and installs to the right location.
        </p>
        <div className="mt-4">
          <CodeBlock code={skillStructureCode} language="bash" filename="File layout" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          When Claude encounters a missing secret error, it reads the structured error output
          and knows exactly which env var to set, where to find the value, and which file
          registered the requirement. The skill also helps Claude write good{' '}
          <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">defineSecrets</code> calls
          with descriptive, actionable descriptions.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Follows the{' '}
          <a href="https://agentskills.io" className="text-primary hover:underline">Agent Skills</a>{' '}
          open standard — works with any AI tool that supports it.
        </p>
      </section>

      {/* Community packages */}
      <section id="community-packages" className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Community packages</h2>
        <p className="mt-3 text-muted-foreground">
          Like <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@types</code> for TypeScript, <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@secretdef/*</code> packages
          provide ready-made definitions for popular services. These are community-maintained — contributions welcome.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Most SDKs don't hardcode which env vars they read. These packages represent common
          conventions, not guarantees. Verify against your SDK, or define your own.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-2 font-semibold text-foreground">Packages</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Payment</td>
                <td className="py-2"><code className="text-xs">@secretdef/stripe</code>, <code className="text-xs">@secretdef/paypal</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Auth</td>
                <td className="py-2"><code className="text-xs">@secretdef/auth0</code>, <code className="text-xs">@secretdef/clerk</code>, <code className="text-xs">@secretdef/supabase</code>, <code className="text-xs">@secretdef/firebase</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Email</td>
                <td className="py-2"><code className="text-xs">@secretdef/sendgrid</code>, <code className="text-xs">@secretdef/resend</code>, <code className="text-xs">@secretdef/postmark</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">AI</td>
                <td className="py-2"><code className="text-xs">@secretdef/openai</code>, <code className="text-xs">@secretdef/anthropic</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Cloud</td>
                <td className="py-2"><code className="text-xs">@secretdef/aws</code>, <code className="text-xs">@secretdef/gcp</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Database</td>
                <td className="py-2"><code className="text-xs">@secretdef/planetscale</code>, <code className="text-xs">@secretdef/neon</code>, <code className="text-xs">@secretdef/turso</code></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Messaging</td>
                <td className="py-2"><code className="text-xs">@secretdef/twilio</code></td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Analytics</td>
                <td className="py-2"><code className="text-xs">@secretdef/segment</code>, <code className="text-xs">@secretdef/mixpanel</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
        <p>
          <a href="https://github.com/iplanwebsites/secretdef" className="hover:text-foreground transition-colors">GitHub</a>
          {' · '}
          <a href="https://www.npmjs.com/package/secretdef" className="hover:text-foreground transition-colors">npm</a>
          {' · '}
          MIT License
        </p>
      </div>
    </div>
  );
}
