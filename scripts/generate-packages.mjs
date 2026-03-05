#!/usr/bin/env node
/**
 * Bulk-generate @secretdef/* packages from a structured data array.
 * Usage: node scripts/generate-packages.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const PACKAGES = join(ROOT, 'packages/@secretdef');

/**
 * Each entry: { name, title, secrets: { ENV_VAR: { description, dashboard, required? } } }
 * `required` defaults to true (omit from output). Set `required: false` for optional.
 * `validate` is optional (e.g. 'url').
 */
const services = [
  // ===== AI / ML: LLM Providers =====
  {
    name: 'google-vertex-ai', title: 'Google Vertex AI',
    secrets: {
      GOOGLE_CLOUD_PROJECT: { description: 'Google Cloud project ID', dashboard: 'https://console.cloud.google.com/vertex-ai' },
      GOOGLE_APPLICATION_CREDENTIALS: { description: 'Path to service account JSON key file', dashboard: 'https://console.cloud.google.com/iam-admin/serviceaccounts', required: false },
      VERTEX_AI_LOCATION: { description: 'Vertex AI region (e.g. us-central1)', dashboard: 'https://console.cloud.google.com/vertex-ai', required: false },
    },
  },
  {
    name: 'aws-bedrock', title: 'AWS Bedrock',
    secrets: {
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID', dashboard: 'https://console.aws.amazon.com/iam/home#/security_credentials' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key', dashboard: 'https://console.aws.amazon.com/iam/home#/security_credentials' },
      AWS_BEDROCK_REGION: { description: 'AWS region for Bedrock', dashboard: 'https://console.aws.amazon.com/bedrock', required: false },
    },
  },
  {
    name: 'azure-ai', title: 'Azure AI',
    secrets: {
      AZURE_AI_API_KEY: { description: 'Azure AI API key', dashboard: 'https://ai.azure.com' },
      AZURE_AI_ENDPOINT: { description: 'Azure AI endpoint URL', dashboard: 'https://ai.azure.com', validate: 'url' },
    },
  },
  {
    name: 'ollama', title: 'Ollama',
    secrets: {
      OLLAMA_HOST: { description: 'Ollama server host URL', dashboard: 'https://ollama.ai', required: false, validate: 'url' },
      OLLAMA_API_KEY: { description: 'Ollama API key (if auth enabled)', dashboard: 'https://ollama.ai', required: false },
    },
  },
  {
    name: 'cerebras', title: 'Cerebras',
    secrets: {
      CEREBRAS_API_KEY: { description: 'Cerebras API key', dashboard: 'https://cloud.cerebras.ai/platform/apikeys' },
    },
  },
  {
    name: 'sambanova', title: 'SambaNova',
    secrets: {
      SAMBANOVA_API_KEY: { description: 'SambaNova API key', dashboard: 'https://cloud.sambanova.ai/apis' },
    },
  },
  {
    name: 'novita-ai', title: 'Novita AI',
    secrets: {
      NOVITA_API_KEY: { description: 'Novita AI API key', dashboard: 'https://novita.ai/settings/key-management' },
    },
  },
  {
    name: 'ai21', title: 'AI21 Labs',
    secrets: {
      AI21_API_KEY: { description: 'AI21 Labs API key', dashboard: 'https://studio.ai21.com/account/api-key' },
    },
  },
  {
    name: 'comet-ml', title: 'Comet ML',
    secrets: {
      COMET_API_KEY: { description: 'Comet ML API key', dashboard: 'https://www.comet.com/account-settings/apiKeys' },
      COMET_WORKSPACE: { description: 'Comet workspace name', dashboard: 'https://www.comet.com', required: false },
      COMET_PROJECT_NAME: { description: 'Comet project name', dashboard: 'https://www.comet.com', required: false },
    },
  },
  {
    name: 'nvidia-nim', title: 'NVIDIA NIM',
    secrets: {
      NVIDIA_API_KEY: { description: 'NVIDIA API key', dashboard: 'https://build.nvidia.com/settings/api-keys' },
    },
  },
  {
    name: 'moonshot-ai', title: 'Moonshot AI',
    secrets: {
      MOONSHOT_API_KEY: { description: 'Moonshot AI API key', dashboard: 'https://platform.moonshot.cn/console/api-keys' },
    },
  },
  {
    name: 'alibaba-qwen', title: 'Alibaba Qwen (DashScope)',
    secrets: {
      DASHSCOPE_API_KEY: { description: 'DashScope API key for Qwen models', dashboard: 'https://dashscope.console.aliyun.com/apiKey' },
    },
  },
  {
    name: 'baidu-qianfan', title: 'Baidu Qianfan',
    secrets: {
      QIANFAN_API_KEY: { description: 'Qianfan API key', dashboard: 'https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application' },
      QIANFAN_SECRET_KEY: { description: 'Qianfan secret key', dashboard: 'https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application' },
    },
  },
  {
    name: 'writer-ai', title: 'Writer AI',
    secrets: {
      WRITER_API_KEY: { description: 'Writer AI API key', dashboard: 'https://dev.writer.com/api-guides/quickstart' },
    },
  },
  {
    name: 'luma-ai', title: 'Luma AI',
    secrets: {
      LUMAAI_API_KEY: { description: 'Luma AI API key', dashboard: 'https://lumalabs.ai/dream-machine/api/keys' },
    },
  },
  {
    name: 'black-forest-labs', title: 'Black Forest Labs (FLUX)',
    secrets: {
      BFL_API_KEY: { description: 'Black Forest Labs API key', dashboard: 'https://api.us1.bfl.ai' },
    },
  },
  {
    name: 'runware', title: 'Runware',
    secrets: {
      RUNWARE_API_KEY: { description: 'Runware API key', dashboard: 'https://my.runware.ai/account/api-keys' },
    },
  },
  {
    name: 'picovoice', title: 'Picovoice',
    secrets: {
      PICOVOICE_ACCESS_KEY: { description: 'Picovoice access key', dashboard: 'https://console.picovoice.ai' },
    },
  },
  {
    name: 'hume-ai', title: 'Hume AI',
    secrets: {
      HUME_API_KEY: { description: 'Hume AI API key', dashboard: 'https://platform.hume.ai/settings/keys' },
    },
  },
  {
    name: 'ideogram', title: 'Ideogram',
    secrets: {
      IDEOGRAM_API_KEY: { description: 'Ideogram API key', dashboard: 'https://ideogram.ai/manage-api' },
    },
  },

  // ===== AI Observability =====
  {
    name: 'langsmith', title: 'LangSmith',
    secrets: {
      LANGSMITH_API_KEY: { description: 'LangSmith API key', dashboard: 'https://smith.langchain.com/settings' },
      LANGCHAIN_PROJECT: { description: 'LangChain project name', dashboard: 'https://smith.langchain.com', required: false },
    },
  },
  {
    name: 'langfuse', title: 'Langfuse',
    secrets: {
      LANGFUSE_PUBLIC_KEY: { description: 'Langfuse public key', dashboard: 'https://cloud.langfuse.com/settings' },
      LANGFUSE_SECRET_KEY: { description: 'Langfuse secret key', dashboard: 'https://cloud.langfuse.com/settings' },
      LANGFUSE_BASEURL: { description: 'Langfuse base URL (self-hosted)', dashboard: 'https://cloud.langfuse.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'braintrust', title: 'Braintrust',
    secrets: {
      BRAINTRUST_API_KEY: { description: 'Braintrust API key', dashboard: 'https://www.braintrust.dev/app/settings/api-keys' },
    },
  },
  {
    name: 'arize-phoenix', title: 'Arize Phoenix',
    secrets: {
      PHOENIX_API_KEY: { description: 'Phoenix API key', dashboard: 'https://app.phoenix.arize.com' },
      PHOENIX_COLLECTOR_ENDPOINT: { description: 'Phoenix collector endpoint', dashboard: 'https://app.phoenix.arize.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'weights-biases', title: 'Weights & Biases',
    secrets: {
      WANDB_API_KEY: { description: 'W&B API key', dashboard: 'https://wandb.ai/authorize' },
      WANDB_PROJECT: { description: 'W&B project name', dashboard: 'https://wandb.ai', required: false },
      WANDB_ENTITY: { description: 'W&B entity (user or team)', dashboard: 'https://wandb.ai', required: false },
    },
  },
  {
    name: 'helicone', title: 'Helicone',
    secrets: {
      HELICONE_API_KEY: { description: 'Helicone API key', dashboard: 'https://www.helicone.ai/settings/api-keys' },
    },
  },
  {
    name: 'opik', title: 'Opik',
    secrets: {
      OPIK_API_KEY: { description: 'Opik API key', dashboard: 'https://www.comet.com/opik' },
      OPIK_WORKSPACE: { description: 'Opik workspace', dashboard: 'https://www.comet.com/opik', required: false },
    },
  },

  // ===== AI Infrastructure =====
  {
    name: 'runpod', title: 'RunPod',
    secrets: {
      RUNPOD_API_KEY: { description: 'RunPod API key', dashboard: 'https://www.runpod.io/console/user/settings' },
    },
  },
  {
    name: 'baseten', title: 'Baseten',
    secrets: {
      BASETEN_API_KEY: { description: 'Baseten API key', dashboard: 'https://app.baseten.co/settings/account/api_keys' },
    },
  },
  {
    name: 'banana-dev', title: 'Banana Dev',
    secrets: {
      BANANA_API_KEY: { description: 'Banana API key', dashboard: 'https://app.banana.dev' },
    },
  },
  {
    name: 'trieve', title: 'Trieve',
    secrets: {
      TRIEVE_API_KEY: { description: 'Trieve API key', dashboard: 'https://dashboard.trieve.ai' },
      TRIEVE_DATASET_ID: { description: 'Trieve dataset ID', dashboard: 'https://dashboard.trieve.ai' },
      TRIEVE_ORG_ID: { description: 'Trieve organization ID', dashboard: 'https://dashboard.trieve.ai', required: false },
    },
  },
  {
    name: 'vectara', title: 'Vectara',
    secrets: {
      VECTARA_CUSTOMER_ID: { description: 'Vectara customer ID', dashboard: 'https://console.vectara.com' },
      VECTARA_API_KEY: { description: 'Vectara API key', dashboard: 'https://console.vectara.com' },
    },
  },
  {
    name: 'carbon-ai', title: 'Carbon AI',
    secrets: {
      CARBON_API_KEY: { description: 'Carbon AI API key', dashboard: 'https://dashboard.carbon.ai' },
    },
  },

  // ===== Databases =====
  {
    name: 'xata', title: 'Xata',
    secrets: {
      XATA_API_KEY: { description: 'Xata API key', dashboard: 'https://app.xata.io/settings' },
      XATA_BRANCH: { description: 'Xata branch name', dashboard: 'https://app.xata.io', required: false },
      XATA_DATABASE_URL: { description: 'Xata database URL', dashboard: 'https://app.xata.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'aiven', title: 'Aiven',
    secrets: {
      AIVEN_TOKEN: { description: 'Aiven API token', dashboard: 'https://console.aiven.io/profile/auth' },
      AIVEN_PROJECT: { description: 'Aiven project name', dashboard: 'https://console.aiven.io', required: false },
    },
  },
  {
    name: 'render', title: 'Render',
    secrets: {
      RENDER_API_KEY: { description: 'Render API key', dashboard: 'https://dashboard.render.com/u/settings' },
    },
  },
  {
    name: 'fly', title: 'Fly.io',
    secrets: {
      FLY_API_TOKEN: { description: 'Fly.io API token', dashboard: 'https://fly.io/user/personal_access_tokens' },
    },
  },
  {
    name: 'singlestore', title: 'SingleStore',
    secrets: {
      SINGLESTORE_HOST: { description: 'SingleStore host', dashboard: 'https://portal.singlestore.com' },
      SINGLESTORE_USER: { description: 'SingleStore username', dashboard: 'https://portal.singlestore.com' },
      SINGLESTORE_PASSWORD: { description: 'SingleStore password', dashboard: 'https://portal.singlestore.com' },
      SINGLESTORE_DATABASE: { description: 'SingleStore database name', dashboard: 'https://portal.singlestore.com', required: false },
    },
  },
  {
    name: 'tidb-cloud', title: 'TiDB Cloud',
    secrets: {
      TIDB_HOST: { description: 'TiDB Cloud host', dashboard: 'https://tidbcloud.com' },
      TIDB_USER: { description: 'TiDB Cloud username', dashboard: 'https://tidbcloud.com' },
      TIDB_PASSWORD: { description: 'TiDB Cloud password', dashboard: 'https://tidbcloud.com' },
      TIDB_DATABASE: { description: 'TiDB database name', dashboard: 'https://tidbcloud.com', required: false },
    },
  },
  {
    name: 'yugabyte', title: 'YugabyteDB',
    secrets: {
      YUGABYTE_HOST: { description: 'YugabyteDB host', dashboard: 'https://cloud.yugabyte.com' },
      YUGABYTE_USER: { description: 'YugabyteDB username', dashboard: 'https://cloud.yugabyte.com' },
      YUGABYTE_PASSWORD: { description: 'YugabyteDB password', dashboard: 'https://cloud.yugabyte.com' },
      YUGABYTE_DATABASE: { description: 'YugabyteDB database name', dashboard: 'https://cloud.yugabyte.com', required: false },
    },
  },
  {
    name: 'nile', title: 'Nile',
    secrets: {
      NILE_API_KEY: { description: 'Nile API key', dashboard: 'https://console.thenile.dev' },
      NILE_WORKSPACE_SLUG: { description: 'Nile workspace slug', dashboard: 'https://console.thenile.dev' },
      NILE_DATABASE_NAME: { description: 'Nile database name', dashboard: 'https://console.thenile.dev' },
    },
  },
  {
    name: 'couchbase', title: 'Couchbase',
    secrets: {
      COUCHBASE_CONNECTION_STRING: { description: 'Couchbase connection string', dashboard: 'https://cloud.couchbase.com' },
      COUCHBASE_USERNAME: { description: 'Couchbase username', dashboard: 'https://cloud.couchbase.com' },
      COUCHBASE_PASSWORD: { description: 'Couchbase password', dashboard: 'https://cloud.couchbase.com' },
      COUCHBASE_BUCKET: { description: 'Couchbase bucket name', dashboard: 'https://cloud.couchbase.com', required: false },
    },
  },
  {
    name: 'cosmosdb', title: 'Azure Cosmos DB',
    secrets: {
      COSMOS_DB_ENDPOINT: { description: 'Cosmos DB endpoint URL', dashboard: 'https://portal.azure.com', validate: 'url' },
      COSMOS_DB_KEY: { description: 'Cosmos DB access key', dashboard: 'https://portal.azure.com' },
      COSMOS_DB_DATABASE_ID: { description: 'Cosmos DB database ID', dashboard: 'https://portal.azure.com', required: false },
    },
  },
  {
    name: 'neo4j', title: 'Neo4j',
    secrets: {
      NEO4J_URI: { description: 'Neo4j connection URI', dashboard: 'https://console.neo4j.io' },
      NEO4J_USERNAME: { description: 'Neo4j username', dashboard: 'https://console.neo4j.io' },
      NEO4J_PASSWORD: { description: 'Neo4j password', dashboard: 'https://console.neo4j.io' },
      NEO4J_DATABASE: { description: 'Neo4j database name', dashboard: 'https://console.neo4j.io', required: false },
    },
  },
  {
    name: 'tigergraph', title: 'TigerGraph',
    secrets: {
      TIGERGRAPH_HOST: { description: 'TigerGraph host', dashboard: 'https://tgcloud.io' },
      TIGERGRAPH_USERNAME: { description: 'TigerGraph username', dashboard: 'https://tgcloud.io' },
      TIGERGRAPH_PASSWORD: { description: 'TigerGraph password', dashboard: 'https://tgcloud.io' },
      TIGERGRAPH_GRAPH: { description: 'TigerGraph graph name', dashboard: 'https://tgcloud.io', required: false },
    },
  },
  {
    name: 'memgraph', title: 'Memgraph',
    secrets: {
      MEMGRAPH_HOST: { description: 'Memgraph host', dashboard: 'https://memgraph.com/cloud' },
      MEMGRAPH_PORT: { description: 'Memgraph port', dashboard: 'https://memgraph.com/cloud', required: false },
      MEMGRAPH_USERNAME: { description: 'Memgraph username', dashboard: 'https://memgraph.com/cloud', required: false },
      MEMGRAPH_PASSWORD: { description: 'Memgraph password', dashboard: 'https://memgraph.com/cloud', required: false },
    },
  },
  {
    name: 'surrealdb', title: 'SurrealDB',
    secrets: {
      SURREAL_URL: { description: 'SurrealDB URL', dashboard: 'https://surrealdb.com/cloud', validate: 'url' },
      SURREAL_USER: { description: 'SurrealDB username', dashboard: 'https://surrealdb.com/cloud' },
      SURREAL_PASS: { description: 'SurrealDB password', dashboard: 'https://surrealdb.com/cloud' },
      SURREAL_NS: { description: 'SurrealDB namespace', dashboard: 'https://surrealdb.com/cloud', required: false },
      SURREAL_DB: { description: 'SurrealDB database', dashboard: 'https://surrealdb.com/cloud', required: false },
    },
  },
  {
    name: 'influxdb', title: 'InfluxDB',
    secrets: {
      INFLUXDB_URL: { description: 'InfluxDB URL', dashboard: 'https://cloud2.influxdata.com', validate: 'url' },
      INFLUXDB_TOKEN: { description: 'InfluxDB API token', dashboard: 'https://cloud2.influxdata.com' },
      INFLUXDB_ORG: { description: 'InfluxDB organization', dashboard: 'https://cloud2.influxdata.com', required: false },
      INFLUXDB_BUCKET: { description: 'InfluxDB bucket name', dashboard: 'https://cloud2.influxdata.com', required: false },
    },
  },
  {
    name: 'timescale', title: 'Timescale',
    secrets: {
      TIMESCALE_SERVICE_URL: { description: 'Timescale service URL', dashboard: 'https://console.cloud.timescale.com', validate: 'url' },
    },
  },
  {
    name: 'questdb', title: 'QuestDB',
    secrets: {
      QUESTDB_HOST: { description: 'QuestDB host', dashboard: 'https://cloud.questdb.io' },
      QUESTDB_PORT: { description: 'QuestDB port', dashboard: 'https://cloud.questdb.io', required: false },
    },
  },
  {
    name: 'clickhouse', title: 'ClickHouse',
    secrets: {
      CLICKHOUSE_HOST: { description: 'ClickHouse host', dashboard: 'https://clickhouse.cloud' },
      CLICKHOUSE_USER: { description: 'ClickHouse username', dashboard: 'https://clickhouse.cloud' },
      CLICKHOUSE_PASSWORD: { description: 'ClickHouse password', dashboard: 'https://clickhouse.cloud' },
      CLICKHOUSE_DATABASE: { description: 'ClickHouse database name', dashboard: 'https://clickhouse.cloud', required: false },
    },
  },
  {
    name: 'databricks', title: 'Databricks',
    secrets: {
      DATABRICKS_HOST: { description: 'Databricks workspace URL', dashboard: 'https://accounts.cloud.databricks.com', validate: 'url' },
      DATABRICKS_TOKEN: { description: 'Databricks personal access token', dashboard: 'https://accounts.cloud.databricks.com' },
    },
  },
  {
    name: 'snowflake', title: 'Snowflake',
    secrets: {
      SNOWFLAKE_ACCOUNT: { description: 'Snowflake account identifier', dashboard: 'https://app.snowflake.com' },
      SNOWFLAKE_USER: { description: 'Snowflake username', dashboard: 'https://app.snowflake.com' },
      SNOWFLAKE_PASSWORD: { description: 'Snowflake password', dashboard: 'https://app.snowflake.com' },
      SNOWFLAKE_WAREHOUSE: { description: 'Snowflake warehouse name', dashboard: 'https://app.snowflake.com', required: false },
      SNOWFLAKE_DATABASE: { description: 'Snowflake database name', dashboard: 'https://app.snowflake.com', required: false },
    },
  },
  {
    name: 'bigquery', title: 'Google BigQuery',
    secrets: {
      BIGQUERY_PROJECT_ID: { description: 'Google Cloud project ID for BigQuery', dashboard: 'https://console.cloud.google.com/bigquery' },
      GOOGLE_APPLICATION_CREDENTIALS: { description: 'Path to service account JSON key', dashboard: 'https://console.cloud.google.com/iam-admin/serviceaccounts', required: false },
    },
  },
  {
    name: 'redshift', title: 'AWS Redshift',
    secrets: {
      REDSHIFT_HOST: { description: 'Redshift cluster endpoint', dashboard: 'https://console.aws.amazon.com/redshift' },
      REDSHIFT_USER: { description: 'Redshift username', dashboard: 'https://console.aws.amazon.com/redshift' },
      REDSHIFT_PASSWORD: { description: 'Redshift password', dashboard: 'https://console.aws.amazon.com/redshift' },
      REDSHIFT_DATABASE: { description: 'Redshift database name', dashboard: 'https://console.aws.amazon.com/redshift', required: false },
      REDSHIFT_PORT: { description: 'Redshift port', dashboard: 'https://console.aws.amazon.com/redshift', required: false },
    },
  },

  // ===== Object Storage =====
  {
    name: 'backblaze', title: 'Backblaze B2',
    secrets: {
      B2_APPLICATION_KEY_ID: { description: 'Backblaze B2 application key ID', dashboard: 'https://secure.backblaze.com/app_keys.htm' },
      B2_APPLICATION_KEY: { description: 'Backblaze B2 application key', dashboard: 'https://secure.backblaze.com/app_keys.htm' },
      B2_BUCKET_ID: { description: 'Backblaze B2 bucket ID', dashboard: 'https://secure.backblaze.com/b2_buckets.htm', required: false },
    },
  },
  {
    name: 'wasabi', title: 'Wasabi',
    secrets: {
      WASABI_ACCESS_KEY_ID: { description: 'Wasabi access key ID', dashboard: 'https://console.wasabisys.com' },
      WASABI_SECRET_ACCESS_KEY: { description: 'Wasabi secret access key', dashboard: 'https://console.wasabisys.com' },
      WASABI_REGION: { description: 'Wasabi region', dashboard: 'https://console.wasabisys.com', required: false },
    },
  },
  {
    name: 'bunnynet', title: 'Bunny.net',
    secrets: {
      BUNNY_API_KEY: { description: 'Bunny.net API key', dashboard: 'https://dash.bunny.net/account/apikey' },
      BUNNY_STORAGE_ZONE_NAME: { description: 'Bunny.net storage zone name', dashboard: 'https://dash.bunny.net', required: false },
      BUNNY_STORAGE_PASSWORD: { description: 'Bunny.net storage password', dashboard: 'https://dash.bunny.net', required: false },
    },
  },
  {
    name: 'uploadcare', title: 'Uploadcare',
    secrets: {
      UPLOADCARE_PUBLIC_KEY: { description: 'Uploadcare public key', dashboard: 'https://app.uploadcare.com/projects/-/api-keys/' },
      UPLOADCARE_SECRET_KEY: { description: 'Uploadcare secret key', dashboard: 'https://app.uploadcare.com/projects/-/api-keys/' },
    },
  },

  // ===== Payments / Fintech =====
  {
    name: 'recurly', title: 'Recurly',
    secrets: {
      RECURLY_API_KEY: { description: 'Recurly API key', dashboard: 'https://app.recurly.com/login' },
      RECURLY_SUBDOMAIN: { description: 'Recurly subdomain', dashboard: 'https://app.recurly.com', required: false },
    },
  },
  {
    name: 'zuora', title: 'Zuora',
    secrets: {
      ZUORA_CLIENT_ID: { description: 'Zuora OAuth client ID', dashboard: 'https://www.zuora.com/developer/api-references/' },
      ZUORA_CLIENT_SECRET: { description: 'Zuora OAuth client secret', dashboard: 'https://www.zuora.com/developer/api-references/' },
      ZUORA_BASE_URL: { description: 'Zuora API base URL', dashboard: 'https://www.zuora.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'gocardless', title: 'GoCardless',
    secrets: {
      GOCARDLESS_ACCESS_TOKEN: { description: 'GoCardless access token', dashboard: 'https://manage.gocardless.com/developers/access-tokens' },
      GOCARDLESS_ENVIRONMENT: { description: 'GoCardless environment (sandbox or live)', dashboard: 'https://manage.gocardless.com', required: false },
    },
  },
  {
    name: 'mollie', title: 'Mollie',
    secrets: {
      MOLLIE_API_KEY: { description: 'Mollie API key', dashboard: 'https://my.mollie.com/dashboard/developers/api-keys' },
    },
  },
  {
    name: 'klarna', title: 'Klarna',
    secrets: {
      KLARNA_USERNAME: { description: 'Klarna API username', dashboard: 'https://portal.klarna.com' },
      KLARNA_PASSWORD: { description: 'Klarna API password', dashboard: 'https://portal.klarna.com' },
      KLARNA_BASE_URL: { description: 'Klarna API base URL', dashboard: 'https://portal.klarna.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'worldpay', title: 'Worldpay',
    secrets: {
      WORLDPAY_SERVICE_KEY: { description: 'Worldpay service key', dashboard: 'https://online.worldpay.com/settings/api' },
      WORLDPAY_CLIENT_KEY: { description: 'Worldpay client key', dashboard: 'https://online.worldpay.com/settings/api', required: false },
    },
  },
  {
    name: 'authorize-net', title: 'Authorize.net',
    secrets: {
      AUTHORIZE_NET_API_LOGIN_ID: { description: 'Authorize.net API login ID', dashboard: 'https://developer.authorize.net' },
      AUTHORIZE_NET_TRANSACTION_KEY: { description: 'Authorize.net transaction key', dashboard: 'https://developer.authorize.net' },
    },
  },
  {
    name: 'paysafe', title: 'Paysafe',
    secrets: {
      PAYSAFE_API_KEY: { description: 'Paysafe API key', dashboard: 'https://developer.paysafe.com' },
      PAYSAFE_ACCOUNT_ID: { description: 'Paysafe account ID', dashboard: 'https://developer.paysafe.com', required: false },
    },
  },
  {
    name: 'nuvei', title: 'Nuvei',
    secrets: {
      NUVEI_MERCHANT_ID: { description: 'Nuvei merchant ID', dashboard: 'https://dashboard.nuvei.com' },
      NUVEI_MERCHANT_SITE_ID: { description: 'Nuvei merchant site ID', dashboard: 'https://dashboard.nuvei.com' },
      NUVEI_SECRET_KEY: { description: 'Nuvei secret key', dashboard: 'https://dashboard.nuvei.com' },
    },
  },
  {
    name: 'checkout-com', title: 'Checkout.com',
    secrets: {
      CHECKOUT_SECRET_KEY: { description: 'Checkout.com secret key', dashboard: 'https://dashboard.checkout.com/developers/keys' },
      CHECKOUT_PUBLIC_KEY: { description: 'Checkout.com public key', dashboard: 'https://dashboard.checkout.com/developers/keys', required: false },
    },
  },
  {
    name: 'lago', title: 'Lago',
    secrets: {
      LAGO_API_KEY: { description: 'Lago API key', dashboard: 'https://getlago.com' },
      LAGO_API_URL: { description: 'Lago API URL', dashboard: 'https://getlago.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'orb-billing', title: 'Orb Billing',
    secrets: {
      ORB_API_KEY: { description: 'Orb API key', dashboard: 'https://app.withorb.com/settings/api-keys' },
    },
  },
  {
    name: 'coinbase-commerce', title: 'Coinbase Commerce',
    secrets: {
      COINBASE_COMMERCE_API_KEY: { description: 'Coinbase Commerce API key', dashboard: 'https://commerce.coinbase.com/settings/security' },
      COINBASE_COMMERCE_WEBHOOK_SECRET: { description: 'Coinbase Commerce webhook secret', dashboard: 'https://commerce.coinbase.com/settings/security', required: false },
    },
  },
  {
    name: 'coinbase-advanced', title: 'Coinbase Advanced Trade',
    secrets: {
      COINBASE_API_KEY: { description: 'Coinbase API key', dashboard: 'https://www.coinbase.com/settings/api' },
      COINBASE_API_SECRET: { description: 'Coinbase API secret', dashboard: 'https://www.coinbase.com/settings/api' },
    },
  },
  {
    name: 'binance', title: 'Binance',
    secrets: {
      BINANCE_API_KEY: { description: 'Binance API key', dashboard: 'https://www.binance.com/en/my/settings/api-management' },
      BINANCE_API_SECRET: { description: 'Binance API secret', dashboard: 'https://www.binance.com/en/my/settings/api-management' },
    },
  },
  {
    name: 'wise', title: 'Wise',
    secrets: {
      WISE_API_TOKEN: { description: 'Wise API token', dashboard: 'https://wise.com/settings/api-tokens' },
      WISE_PROFILE_ID: { description: 'Wise profile ID', dashboard: 'https://wise.com', required: false },
    },
  },
  {
    name: 'open-exchange-rates', title: 'Open Exchange Rates',
    secrets: {
      OPEN_EXCHANGE_RATES_APP_ID: { description: 'Open Exchange Rates app ID', dashboard: 'https://openexchangerates.org/account/app-ids' },
    },
  },
  {
    name: 'fixer-io', title: 'Fixer.io',
    secrets: {
      FIXER_API_KEY: { description: 'Fixer.io API key', dashboard: 'https://fixer.io/dashboard' },
    },
  },

  // ===== Auth / Identity =====
  {
    name: 'magic-link', title: 'Magic',
    secrets: {
      MAGIC_SECRET_KEY: { description: 'Magic secret key', dashboard: 'https://dashboard.magic.link/app/all-apps' },
      MAGIC_PUBLISHABLE_KEY: { description: 'Magic publishable key', dashboard: 'https://dashboard.magic.link/app/all-apps', required: false },
    },
  },
  {
    name: 'ory', title: 'Ory',
    secrets: {
      ORY_SDK_URL: { description: 'Ory SDK URL', dashboard: 'https://console.ory.sh', validate: 'url' },
      ORY_API_KEY: { description: 'Ory API key', dashboard: 'https://console.ory.sh', required: false },
    },
  },
  {
    name: 'supertokens', title: 'SuperTokens',
    secrets: {
      SUPERTOKENS_CONNECTION_URI: { description: 'SuperTokens connection URI', dashboard: 'https://supertokens.com/dashboard', validate: 'url' },
      SUPERTOKENS_API_KEY: { description: 'SuperTokens API key', dashboard: 'https://supertokens.com/dashboard', required: false },
    },
  },
  {
    name: 'frontegg', title: 'Frontegg',
    secrets: {
      FRONTEGG_CLIENT_ID: { description: 'Frontegg client ID', dashboard: 'https://portal.frontegg.com' },
      FRONTEGG_API_KEY: { description: 'Frontegg API key', dashboard: 'https://portal.frontegg.com' },
    },
  },
  {
    name: 'hanko', title: 'Hanko',
    secrets: {
      HANKO_API_URL: { description: 'Hanko API URL', dashboard: 'https://cloud.hanko.io', validate: 'url' },
    },
  },
  {
    name: 'descope', title: 'Descope',
    secrets: {
      DESCOPE_PROJECT_ID: { description: 'Descope project ID', dashboard: 'https://app.descope.com/settings/company/access-tokens' },
      DESCOPE_MANAGEMENT_KEY: { description: 'Descope management key', dashboard: 'https://app.descope.com/settings/company/access-tokens', required: false },
    },
  },
  {
    name: 'passage', title: 'Passage by 1Password',
    secrets: {
      PASSAGE_APP_ID: { description: 'Passage app ID', dashboard: 'https://console.passage.id' },
      PASSAGE_API_KEY: { description: 'Passage API key', dashboard: 'https://console.passage.id', required: false },
    },
  },
  {
    name: 'propelauth', title: 'PropelAuth',
    secrets: {
      PROPELAUTH_AUTH_URL: { description: 'PropelAuth auth URL', dashboard: 'https://app.propelauth.com', validate: 'url' },
      PROPELAUTH_API_KEY: { description: 'PropelAuth API key', dashboard: 'https://app.propelauth.com' },
    },
  },
  {
    name: 'permit-io', title: 'Permit.io',
    secrets: {
      PERMIT_API_KEY: { description: 'Permit.io API key', dashboard: 'https://app.permit.io/settings/api-keys' },
    },
  },
  {
    name: 'persona', title: 'Persona',
    secrets: {
      PERSONA_API_KEY: { description: 'Persona API key', dashboard: 'https://withpersona.com/dashboard/api-keys' },
      PERSONA_WEBHOOK_SECRET: { description: 'Persona webhook secret', dashboard: 'https://withpersona.com/dashboard', required: false },
    },
  },
  {
    name: 'onfido', title: 'Onfido',
    secrets: {
      ONFIDO_API_TOKEN: { description: 'Onfido API token', dashboard: 'https://dashboard.onfido.com/api/tokens' },
      ONFIDO_REGION: { description: 'Onfido API region', dashboard: 'https://dashboard.onfido.com', required: false },
    },
  },
  {
    name: 'veriff', title: 'Veriff',
    secrets: {
      VERIFF_API_KEY: { description: 'Veriff API key', dashboard: 'https://station.veriff.com/integrations' },
      VERIFF_SECRET_KEY: { description: 'Veriff shared secret key', dashboard: 'https://station.veriff.com/integrations' },
    },
  },

  // ===== Email / Messaging =====
  {
    name: 'sparkpost', title: 'SparkPost',
    secrets: {
      SPARKPOST_API_KEY: { description: 'SparkPost API key', dashboard: 'https://app.sparkpost.com/account/api-keys' },
    },
  },
  {
    name: 'sendpulse', title: 'SendPulse',
    secrets: {
      SENDPULSE_API_ID: { description: 'SendPulse API user ID', dashboard: 'https://login.sendpulse.com/settings/api/' },
      SENDPULSE_API_SECRET: { description: 'SendPulse API secret', dashboard: 'https://login.sendpulse.com/settings/api/' },
    },
  },
  {
    name: 'mandrill', title: 'Mandrill (Mailchimp Transactional)',
    secrets: {
      MANDRILL_API_KEY: { description: 'Mandrill API key', dashboard: 'https://mandrillapp.com/settings' },
    },
  },
  {
    name: 'elastic-email', title: 'Elastic Email',
    secrets: {
      ELASTIC_EMAIL_API_KEY: { description: 'Elastic Email API key', dashboard: 'https://elasticemail.com/account/apikey' },
    },
  },
  {
    name: 'amazon-ses', title: 'Amazon SES',
    secrets: {
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID for SES', dashboard: 'https://console.aws.amazon.com/ses' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key for SES', dashboard: 'https://console.aws.amazon.com/ses' },
      AWS_SES_REGION: { description: 'AWS region for SES', dashboard: 'https://console.aws.amazon.com/ses', required: false },
    },
  },
  {
    name: 'infobip', title: 'Infobip',
    secrets: {
      INFOBIP_API_KEY: { description: 'Infobip API key', dashboard: 'https://portal.infobip.com/settings/accounts/api-key' },
      INFOBIP_BASE_URL: { description: 'Infobip base URL', dashboard: 'https://portal.infobip.com', validate: 'url' },
    },
  },
  {
    name: 'messagebird', title: 'MessageBird (Bird)',
    secrets: {
      MESSAGEBIRD_API_KEY: { description: 'MessageBird API key', dashboard: 'https://dashboard.messagebird.com/en/developers/access' },
    },
  },
  {
    name: 'sinch', title: 'Sinch',
    secrets: {
      SINCH_SERVICE_PLAN_ID: { description: 'Sinch service plan ID', dashboard: 'https://dashboard.sinch.com/settings/access-keys' },
      SINCH_API_TOKEN: { description: 'Sinch API token', dashboard: 'https://dashboard.sinch.com/settings/access-keys' },
    },
  },
  {
    name: 'bandwidth', title: 'Bandwidth',
    secrets: {
      BANDWIDTH_USERNAME: { description: 'Bandwidth API username', dashboard: 'https://dashboard.bandwidth.com' },
      BANDWIDTH_PASSWORD: { description: 'Bandwidth API password', dashboard: 'https://dashboard.bandwidth.com' },
      BANDWIDTH_ACCOUNT_ID: { description: 'Bandwidth account ID', dashboard: 'https://dashboard.bandwidth.com' },
    },
  },
  {
    name: 'mailersend', title: 'MailerSend',
    secrets: {
      MAILERSEND_API_TOKEN: { description: 'MailerSend API token', dashboard: 'https://app.mailersend.com/api-tokens' },
    },
  },
  {
    name: 'whatsapp-business', title: 'WhatsApp Business',
    secrets: {
      WHATSAPP_ACCESS_TOKEN: { description: 'WhatsApp Business access token', dashboard: 'https://developers.facebook.com/apps' },
      WHATSAPP_PHONE_NUMBER_ID: { description: 'WhatsApp phone number ID', dashboard: 'https://developers.facebook.com/apps' },
      WHATSAPP_BUSINESS_ACCOUNT_ID: { description: 'WhatsApp Business account ID', dashboard: 'https://developers.facebook.com/apps' },
    },
  },
  {
    name: 'ntfy', title: 'ntfy',
    secrets: {
      NTFY_URL: { description: 'ntfy server URL', dashboard: 'https://ntfy.sh', validate: 'url' },
      NTFY_TOKEN: { description: 'ntfy access token', dashboard: 'https://ntfy.sh', required: false },
    },
  },

  // ===== Analytics =====
  {
    name: 'june', title: 'June',
    secrets: {
      JUNE_API_KEY: { description: 'June analytics API key', dashboard: 'https://analytics.june.so/settings' },
    },
  },
  {
    name: 'heap', title: 'Heap',
    secrets: {
      HEAP_APP_ID: { description: 'Heap app ID', dashboard: 'https://heapanalytics.com/app/manage/account' },
      HEAP_API_KEY: { description: 'Heap server-side API key', dashboard: 'https://heapanalytics.com/app/manage/account', required: false },
    },
  },
  {
    name: 'fullstory', title: 'FullStory',
    secrets: {
      FULLSTORY_ORG_ID: { description: 'FullStory organization ID', dashboard: 'https://app.fullstory.com' },
      FULLSTORY_API_KEY: { description: 'FullStory API key', dashboard: 'https://app.fullstory.com', required: false },
    },
  },
  {
    name: 'logrocket', title: 'LogRocket',
    secrets: {
      LOGROCKET_APP_ID: { description: 'LogRocket app ID', dashboard: 'https://app.logrocket.com' },
    },
  },
  {
    name: 'hotjar', title: 'Hotjar',
    secrets: {
      HOTJAR_SITE_ID: { description: 'Hotjar site ID', dashboard: 'https://insights.hotjar.com/site/list' },
    },
  },
  {
    name: 'clarity', title: 'Microsoft Clarity',
    secrets: {
      CLARITY_PROJECT_ID: { description: 'Microsoft Clarity project ID', dashboard: 'https://clarity.microsoft.com/projects' },
    },
  },
  {
    name: 'rudderstack', title: 'RudderStack',
    secrets: {
      RUDDERSTACK_WRITE_KEY: { description: 'RudderStack write key', dashboard: 'https://app.rudderstack.com' },
      RUDDERSTACK_DATA_PLANE_URL: { description: 'RudderStack data plane URL', dashboard: 'https://app.rudderstack.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'plausible', title: 'Plausible Analytics',
    secrets: {
      PLAUSIBLE_SITE_ID: { description: 'Plausible site ID', dashboard: 'https://plausible.io/settings' },
      PLAUSIBLE_API_KEY: { description: 'Plausible API key', dashboard: 'https://plausible.io/settings/api-keys', required: false },
    },
  },
  {
    name: 'umami', title: 'Umami',
    secrets: {
      UMAMI_WEBSITE_ID: { description: 'Umami website ID', dashboard: 'https://app.umami.is/settings' },
      UMAMI_API_KEY: { description: 'Umami API key', dashboard: 'https://app.umami.is/settings', required: false },
    },
  },
  {
    name: 'fathom', title: 'Fathom Analytics',
    secrets: {
      FATHOM_SITE_ID: { description: 'Fathom site ID', dashboard: 'https://app.usefathom.com/settings' },
      FATHOM_API_KEY: { description: 'Fathom API key', dashboard: 'https://app.usefathom.com/settings', required: false },
    },
  },
  {
    name: 'pirsch', title: 'Pirsch',
    secrets: {
      PIRSCH_CLIENT_ID: { description: 'Pirsch client ID', dashboard: 'https://pirsch.io/settings/developer' },
      PIRSCH_CLIENT_SECRET: { description: 'Pirsch client secret', dashboard: 'https://pirsch.io/settings/developer' },
    },
  },
  {
    name: 'optimizely', title: 'Optimizely',
    secrets: {
      OPTIMIZELY_SDK_KEY: { description: 'Optimizely SDK key', dashboard: 'https://app.optimizely.com/v2/profile/api' },
      OPTIMIZELY_ACCESS_TOKEN: { description: 'Optimizely REST API access token', dashboard: 'https://app.optimizely.com/v2/profile/api', required: false },
    },
  },
  {
    name: 'eppo', title: 'Eppo',
    secrets: {
      EPPO_API_KEY: { description: 'Eppo API key', dashboard: 'https://eppo.cloud' },
    },
  },

  // ===== DevOps / Infrastructure =====
  {
    name: 'heroku', title: 'Heroku',
    secrets: {
      HEROKU_API_KEY: { description: 'Heroku API key', dashboard: 'https://dashboard.heroku.com/account' },
    },
  },
  {
    name: 'digitalocean', title: 'DigitalOcean',
    secrets: {
      DIGITALOCEAN_ACCESS_TOKEN: { description: 'DigitalOcean personal access token', dashboard: 'https://cloud.digitalocean.com/account/api/tokens' },
    },
  },
  {
    name: 'linode', title: 'Linode (Akamai Cloud)',
    secrets: {
      LINODE_TOKEN: { description: 'Linode personal access token', dashboard: 'https://cloud.linode.com/profile/tokens' },
    },
  },
  {
    name: 'vultr', title: 'Vultr',
    secrets: {
      VULTR_API_KEY: { description: 'Vultr API key', dashboard: 'https://my.vultr.com/settings/#settingsapi' },
    },
  },
  {
    name: 'hetzner', title: 'Hetzner Cloud',
    secrets: {
      HETZNER_API_TOKEN: { description: 'Hetzner Cloud API token', dashboard: 'https://console.hetzner.cloud' },
    },
  },
  {
    name: 'scaleway', title: 'Scaleway',
    secrets: {
      SCALEWAY_ACCESS_KEY: { description: 'Scaleway access key', dashboard: 'https://console.scaleway.com/iam/credentials' },
      SCALEWAY_SECRET_KEY: { description: 'Scaleway secret key', dashboard: 'https://console.scaleway.com/iam/credentials' },
      SCALEWAY_PROJECT_ID: { description: 'Scaleway project ID', dashboard: 'https://console.scaleway.com', required: false },
    },
  },
  {
    name: 'terraform-cloud', title: 'Terraform Cloud',
    secrets: {
      TFE_TOKEN: { description: 'Terraform Cloud API token', dashboard: 'https://app.terraform.io/app/settings/tokens' },
    },
  },
  {
    name: 'pulumi', title: 'Pulumi',
    secrets: {
      PULUMI_ACCESS_TOKEN: { description: 'Pulumi access token', dashboard: 'https://app.pulumi.com/account/tokens' },
    },
  },
  {
    name: 'buildkite', title: 'Buildkite',
    secrets: {
      BUILDKITE_API_TOKEN: { description: 'Buildkite API access token', dashboard: 'https://buildkite.com/user/api-access-tokens' },
      BUILDKITE_ORGANIZATION_SLUG: { description: 'Buildkite organization slug', dashboard: 'https://buildkite.com', required: false },
    },
  },
  {
    name: 'semaphore', title: 'Semaphore CI',
    secrets: {
      SEMAPHORE_API_TOKEN: { description: 'Semaphore CI API token', dashboard: 'https://id.semaphoreci.com' },
    },
  },
  {
    name: 'azure-devops', title: 'Azure DevOps',
    secrets: {
      AZURE_DEVOPS_ORG_URL: { description: 'Azure DevOps organization URL', dashboard: 'https://dev.azure.com', validate: 'url' },
      AZURE_DEVOPS_TOKEN: { description: 'Azure DevOps personal access token', dashboard: 'https://dev.azure.com' },
    },
  },
  {
    name: 'fastly', title: 'Fastly',
    secrets: {
      FASTLY_API_TOKEN: { description: 'Fastly API token', dashboard: 'https://manage.fastly.com/account/personal/tokens' },
      FASTLY_SERVICE_ID: { description: 'Fastly service ID', dashboard: 'https://manage.fastly.com', required: false },
    },
  },
  {
    name: 'northflank', title: 'Northflank',
    secrets: {
      NORTHFLANK_API_KEY: { description: 'Northflank API key', dashboard: 'https://app.northflank.com/user/account/api' },
    },
  },

  // ===== Monitoring / Observability =====
  {
    name: 'betterstack', title: 'Better Stack',
    secrets: {
      BETTERSTACK_API_TOKEN: { description: 'Better Stack API token', dashboard: 'https://betterstack.com/team/settings/api-tokens' },
    },
  },
  {
    name: 'checkly', title: 'Checkly',
    secrets: {
      CHECKLY_API_KEY: { description: 'Checkly API key', dashboard: 'https://app.checklyhq.com/settings/account/api-keys' },
      CHECKLY_ACCOUNT_ID: { description: 'Checkly account ID', dashboard: 'https://app.checklyhq.com', required: false },
    },
  },
  {
    name: 'uptimerobot', title: 'UptimeRobot',
    secrets: {
      UPTIMEROBOT_API_KEY: { description: 'UptimeRobot API key', dashboard: 'https://uptimerobot.com/dashboard' },
    },
  },
  {
    name: 'signoz', title: 'SigNoz',
    secrets: {
      SIGNOZ_ACCESS_TOKEN: { description: 'SigNoz access token', dashboard: 'https://app.signoz.io' },
      SIGNOZ_COLLECTOR_URL: { description: 'SigNoz collector URL', dashboard: 'https://app.signoz.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'coralogix', title: 'Coralogix',
    secrets: {
      CORALOGIX_API_KEY: { description: 'Coralogix API key', dashboard: 'https://dashboard.coralogix.com/#/acc/settings/api-keys' },
    },
  },
  {
    name: 'logzio', title: 'Logz.io',
    secrets: {
      LOGZIO_TOKEN: { description: 'Logz.io shipping token', dashboard: 'https://app.logz.io/#/dashboard/settings/api-tokens' },
      LOGZIO_REGION: { description: 'Logz.io region', dashboard: 'https://app.logz.io', required: false },
    },
  },
  {
    name: 'sumo-logic', title: 'Sumo Logic',
    secrets: {
      SUMO_LOGIC_ACCESS_ID: { description: 'Sumo Logic access ID', dashboard: 'https://service.sumologic.com/ui/#/preferences' },
      SUMO_LOGIC_ACCESS_KEY: { description: 'Sumo Logic access key', dashboard: 'https://service.sumologic.com/ui/#/preferences' },
    },
  },
  {
    name: 'raygun', title: 'Raygun',
    secrets: {
      RAYGUN_API_KEY: { description: 'Raygun API key', dashboard: 'https://app.raygun.com' },
    },
  },
  {
    name: 'airbrake', title: 'Airbrake',
    secrets: {
      AIRBRAKE_PROJECT_ID: { description: 'Airbrake project ID', dashboard: 'https://app.airbrake.io/projects' },
      AIRBRAKE_PROJECT_KEY: { description: 'Airbrake project key', dashboard: 'https://app.airbrake.io/projects' },
    },
  },
  {
    name: 'honeybadger', title: 'Honeybadger',
    secrets: {
      HONEYBADGER_API_KEY: { description: 'Honeybadger API key', dashboard: 'https://app.honeybadger.io/projects' },
    },
  },
  {
    name: 'glitchtip', title: 'GlitchTip',
    secrets: {
      GLITCHTIP_DSN: { description: 'GlitchTip DSN', dashboard: 'https://glitchtip.com' },
    },
  },
  {
    name: 'lumigo', title: 'Lumigo',
    secrets: {
      LUMIGO_TRACER_TOKEN: { description: 'Lumigo tracer token', dashboard: 'https://app.lumigo.io' },
    },
  },

  // ===== Security =====
  {
    name: 'semgrep', title: 'Semgrep',
    secrets: {
      SEMGREP_APP_TOKEN: { description: 'Semgrep app token', dashboard: 'https://semgrep.dev/orgs/-/settings/tokens' },
    },
  },
  {
    name: 'fossa', title: 'FOSSA',
    secrets: {
      FOSSA_API_KEY: { description: 'FOSSA API key', dashboard: 'https://app.fossa.com/account/settings/integrations/api_tokens' },
    },
  },
  {
    name: 'virus-total', title: 'VirusTotal',
    secrets: {
      VIRUSTOTAL_API_KEY: { description: 'VirusTotal API key', dashboard: 'https://www.virustotal.com/gui/home/upload' },
    },
  },
  {
    name: 'shodan', title: 'Shodan',
    secrets: {
      SHODAN_API_KEY: { description: 'Shodan API key', dashboard: 'https://account.shodan.io' },
    },
  },
  {
    name: 'crowdstrike', title: 'CrowdStrike',
    secrets: {
      CROWDSTRIKE_CLIENT_ID: { description: 'CrowdStrike client ID', dashboard: 'https://falcon.crowdstrike.com/support/api-clients-and-keys' },
      CROWDSTRIKE_CLIENT_SECRET: { description: 'CrowdStrike client secret', dashboard: 'https://falcon.crowdstrike.com/support/api-clients-and-keys' },
    },
  },

  // ===== Search =====
  {
    name: 'opensearch', title: 'OpenSearch',
    secrets: {
      OPENSEARCH_URL: { description: 'OpenSearch URL', dashboard: 'https://opensearch.org', validate: 'url' },
      OPENSEARCH_USERNAME: { description: 'OpenSearch username', dashboard: 'https://opensearch.org', required: false },
      OPENSEARCH_PASSWORD: { description: 'OpenSearch password', dashboard: 'https://opensearch.org', required: false },
    },
  },
  {
    name: 'swiftype', title: 'Swiftype',
    secrets: {
      SWIFTYPE_API_KEY: { description: 'Swiftype API key', dashboard: 'https://app.swiftype.com/account' },
      SWIFTYPE_ENGINE_NAME: { description: 'Swiftype engine name', dashboard: 'https://app.swiftype.com', required: false },
    },
  },

  // ===== CMS =====
  {
    name: 'payload-cms', title: 'Payload CMS',
    secrets: {
      PAYLOAD_SECRET: { description: 'Payload secret key', dashboard: 'https://payloadcms.com' },
      PAYLOAD_PUBLIC_SERVER_URL: { description: 'Payload public server URL', dashboard: 'https://payloadcms.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'ghost', title: 'Ghost',
    secrets: {
      GHOST_API_URL: { description: 'Ghost API URL', dashboard: 'https://ghost.org', validate: 'url' },
      GHOST_CONTENT_API_KEY: { description: 'Ghost Content API key', dashboard: 'https://ghost.org' },
      GHOST_ADMIN_API_KEY: { description: 'Ghost Admin API key', dashboard: 'https://ghost.org', required: false },
    },
  },
  {
    name: 'tina-cms', title: 'TinaCMS',
    secrets: {
      TINA_CLIENT_ID: { description: 'TinaCMS client ID', dashboard: 'https://tina.io/docs/tina-cloud/dashboard/overview/' },
      TINA_TOKEN: { description: 'TinaCMS token', dashboard: 'https://tina.io/docs/tina-cloud/dashboard/overview/' },
    },
  },
  {
    name: 'kontent-ai', title: 'Kontent.ai',
    secrets: {
      KONTENT_AI_ENVIRONMENT_ID: { description: 'Kontent.ai environment ID', dashboard: 'https://app.kontent.ai' },
      KONTENT_AI_API_KEY: { description: 'Kontent.ai Management API key', dashboard: 'https://app.kontent.ai', required: false },
    },
  },
  {
    name: 'cosmic', title: 'Cosmic',
    secrets: {
      COSMIC_BUCKET_SLUG: { description: 'Cosmic bucket slug', dashboard: 'https://app.cosmicjs.com' },
      COSMIC_READ_KEY: { description: 'Cosmic read key', dashboard: 'https://app.cosmicjs.com' },
      COSMIC_WRITE_KEY: { description: 'Cosmic write key', dashboard: 'https://app.cosmicjs.com', required: false },
    },
  },
  {
    name: 'flotiq', title: 'Flotiq',
    secrets: {
      FLOTIQ_API_KEY: { description: 'Flotiq API key', dashboard: 'https://editor.flotiq.com/api-keys.html' },
    },
  },
  {
    name: 'webflow', title: 'Webflow',
    secrets: {
      WEBFLOW_API_TOKEN: { description: 'Webflow API token', dashboard: 'https://webflow.com/dashboard' },
      WEBFLOW_SITE_ID: { description: 'Webflow site ID', dashboard: 'https://webflow.com/dashboard', required: false },
    },
  },

  // ===== Maps / Location =====
  {
    name: 'here-maps', title: 'HERE Maps',
    secrets: {
      HERE_API_KEY: { description: 'HERE Maps API key', dashboard: 'https://platform.here.com/admin/apps' },
    },
  },
  {
    name: 'tomtom', title: 'TomTom',
    secrets: {
      TOMTOM_API_KEY: { description: 'TomTom API key', dashboard: 'https://developer.tomtom.com/user/me/apps' },
    },
  },
  {
    name: 'geoapify', title: 'Geoapify',
    secrets: {
      GEOAPIFY_API_KEY: { description: 'Geoapify API key', dashboard: 'https://myprojects.geoapify.com' },
    },
  },
  {
    name: 'radar', title: 'Radar',
    secrets: {
      RADAR_SECRET_KEY: { description: 'Radar server secret key', dashboard: 'https://radar.com/dashboard/settings' },
      RADAR_PUBLISHABLE_KEY: { description: 'Radar publishable key', dashboard: 'https://radar.com/dashboard/settings', required: false },
    },
  },
  {
    name: 'locationiq', title: 'LocationIQ',
    secrets: {
      LOCATIONIQ_API_KEY: { description: 'LocationIQ API key', dashboard: 'https://my.locationiq.com/dashboard#accesstoken' },
    },
  },
  {
    name: 'opencage', title: 'OpenCage',
    secrets: {
      OPENCAGE_API_KEY: { description: 'OpenCage geocoding API key', dashboard: 'https://opencagedata.com/dashboard#api-keys' },
    },
  },
  {
    name: 'google-maps', title: 'Google Maps',
    secrets: {
      GOOGLE_MAPS_API_KEY: { description: 'Google Maps API key', dashboard: 'https://console.cloud.google.com/google/maps-apis/credentials' },
    },
  },
  {
    name: 'what3words', title: 'what3words',
    secrets: {
      W3W_API_KEY: { description: 'what3words API key', dashboard: 'https://developer.what3words.com/public-api' },
    },
  },

  // ===== Communication =====
  {
    name: 'daily', title: 'Daily',
    secrets: {
      DAILY_API_KEY: { description: 'Daily API key', dashboard: 'https://dashboard.daily.co/developers' },
    },
  },
  {
    name: 'videosdk', title: 'VideoSDK',
    secrets: {
      VIDEOSDK_API_KEY: { description: 'VideoSDK API key', dashboard: 'https://app.videosdk.live/api-keys' },
      VIDEOSDK_SECRET_KEY: { description: 'VideoSDK secret key', dashboard: 'https://app.videosdk.live/api-keys' },
    },
  },
  {
    name: '100ms', title: '100ms',
    secrets: {
      HMS_ACCESS_KEY: { description: '100ms access key', dashboard: 'https://dashboard.100ms.live/developer' },
      HMS_SECRET: { description: '100ms app secret', dashboard: 'https://dashboard.100ms.live/developer' },
    },
  },
  {
    name: 'whereby', title: 'Whereby',
    secrets: {
      WHEREBY_API_KEY: { description: 'Whereby API key', dashboard: 'https://whereby.com/user/settings/api' },
    },
  },
  {
    name: 'zoom', title: 'Zoom',
    secrets: {
      ZOOM_ACCOUNT_ID: { description: 'Zoom account ID', dashboard: 'https://marketplace.zoom.us/develop/create' },
      ZOOM_CLIENT_ID: { description: 'Zoom OAuth client ID', dashboard: 'https://marketplace.zoom.us/develop/create' },
      ZOOM_CLIENT_SECRET: { description: 'Zoom OAuth client secret', dashboard: 'https://marketplace.zoom.us/develop/create' },
    },
  },
  {
    name: 'ringcentral', title: 'RingCentral',
    secrets: {
      RINGCENTRAL_CLIENT_ID: { description: 'RingCentral client ID', dashboard: 'https://developers.ringcentral.com/console/apps' },
      RINGCENTRAL_CLIENT_SECRET: { description: 'RingCentral client secret', dashboard: 'https://developers.ringcentral.com/console/apps' },
      RINGCENTRAL_SERVER_URL: { description: 'RingCentral server URL', dashboard: 'https://developers.ringcentral.com', validate: 'url' },
    },
  },
  {
    name: 'microsoft-teams', title: 'Microsoft Teams',
    secrets: {
      TEAMS_BOT_ID: { description: 'Teams bot ID', dashboard: 'https://portal.azure.com' },
      TEAMS_BOT_PASSWORD: { description: 'Teams bot password', dashboard: 'https://portal.azure.com' },
    },
  },

  // ===== E-Commerce =====
  {
    name: 'bigcommerce', title: 'BigCommerce',
    secrets: {
      BIGCOMMERCE_STORE_HASH: { description: 'BigCommerce store hash', dashboard: 'https://developer.bigcommerce.com' },
      BIGCOMMERCE_ACCESS_TOKEN: { description: 'BigCommerce API access token', dashboard: 'https://developer.bigcommerce.com' },
    },
  },
  {
    name: 'woocommerce', title: 'WooCommerce',
    secrets: {
      WOOCOMMERCE_URL: { description: 'WooCommerce store URL', dashboard: 'https://woocommerce.com', validate: 'url' },
      WOOCOMMERCE_KEY: { description: 'WooCommerce consumer key', dashboard: 'https://woocommerce.com' },
      WOOCOMMERCE_SECRET: { description: 'WooCommerce consumer secret', dashboard: 'https://woocommerce.com' },
    },
  },
  {
    name: 'etsy', title: 'Etsy',
    secrets: {
      ETSY_API_KEY: { description: 'Etsy API key', dashboard: 'https://www.etsy.com/developers/your-apps' },
      ETSY_ACCESS_TOKEN: { description: 'Etsy OAuth access token', dashboard: 'https://www.etsy.com/developers/your-apps' },
    },
  },
  {
    name: 'shippo', title: 'Shippo',
    secrets: {
      SHIPPO_API_KEY: { description: 'Shippo API key', dashboard: 'https://app.goshippo.com/settings/api' },
    },
  },
  {
    name: 'shipstation', title: 'ShipStation',
    secrets: {
      SHIPSTATION_API_KEY: { description: 'ShipStation API key', dashboard: 'https://ship9.shipstation.com/settings/api' },
      SHIPSTATION_API_SECRET: { description: 'ShipStation API secret', dashboard: 'https://ship9.shipstation.com/settings/api' },
    },
  },
  {
    name: 'easypost', title: 'EasyPost',
    secrets: {
      EASYPOST_API_KEY: { description: 'EasyPost API key', dashboard: 'https://www.easypost.com/account/api-keys' },
    },
  },
  {
    name: 'taxjar', title: 'TaxJar',
    secrets: {
      TAXJAR_API_KEY: { description: 'TaxJar API key', dashboard: 'https://app.taxjar.com/account#api-access' },
    },
  },
  {
    name: 'avalara', title: 'Avalara',
    secrets: {
      AVALARA_USERNAME: { description: 'Avalara username', dashboard: 'https://developer.avalara.com' },
      AVALARA_PASSWORD: { description: 'Avalara password', dashboard: 'https://developer.avalara.com' },
      AVALARA_COMPANY_CODE: { description: 'Avalara company code', dashboard: 'https://developer.avalara.com', required: false },
    },
  },

  // ===== CRM / Marketing =====
  {
    name: 'pipedrive', title: 'Pipedrive',
    secrets: {
      PIPEDRIVE_API_TOKEN: { description: 'Pipedrive API token', dashboard: 'https://app.pipedrive.com/settings/api' },
    },
  },
  {
    name: 'zoho-crm', title: 'Zoho CRM',
    secrets: {
      ZOHO_CLIENT_ID: { description: 'Zoho OAuth client ID', dashboard: 'https://api-console.zoho.com' },
      ZOHO_CLIENT_SECRET: { description: 'Zoho OAuth client secret', dashboard: 'https://api-console.zoho.com' },
      ZOHO_REFRESH_TOKEN: { description: 'Zoho OAuth refresh token', dashboard: 'https://api-console.zoho.com' },
    },
  },
  {
    name: 'freshsales', title: 'Freshsales',
    secrets: {
      FRESHSALES_API_KEY: { description: 'Freshsales API key', dashboard: 'https://freshsales.io' },
      FRESHSALES_DOMAIN: { description: 'Freshsales account domain', dashboard: 'https://freshsales.io' },
    },
  },
  {
    name: 'close-crm', title: 'Close CRM',
    secrets: {
      CLOSEIO_API_KEY: { description: 'Close CRM API key', dashboard: 'https://app.close.com/settings/api-keys' },
    },
  },
  {
    name: 'monday-com', title: 'Monday.com',
    secrets: {
      MONDAY_API_KEY: { description: 'Monday.com API key', dashboard: 'https://monday.com/apps/manage/tokens' },
    },
  },
  {
    name: 'attio', title: 'Attio',
    secrets: {
      ATTIO_API_KEY: { description: 'Attio API key', dashboard: 'https://app.attio.com/settings/api-keys' },
    },
  },
  {
    name: 'active-campaign', title: 'ActiveCampaign',
    secrets: {
      ACTIVECAMPAIGN_URL: { description: 'ActiveCampaign API URL', dashboard: 'https://www.activecampaign.com', validate: 'url' },
      ACTIVECAMPAIGN_KEY: { description: 'ActiveCampaign API key', dashboard: 'https://www.activecampaign.com' },
    },
  },
  {
    name: 'convertkit', title: 'ConvertKit',
    secrets: {
      CONVERTKIT_API_KEY: { description: 'ConvertKit API key', dashboard: 'https://app.convertkit.com/account_settings/advanced_settings' },
      CONVERTKIT_API_SECRET: { description: 'ConvertKit API secret', dashboard: 'https://app.convertkit.com/account_settings/advanced_settings', required: false },
    },
  },
  {
    name: 'mailjet', title: 'Mailjet',
    secrets: {
      MAILJET_API_KEY: { description: 'Mailjet API key', dashboard: 'https://app.mailjet.com/account/api_keys' },
      MAILJET_API_SECRET: { description: 'Mailjet API secret', dashboard: 'https://app.mailjet.com/account/api_keys' },
    },
  },
  {
    name: 'drip', title: 'Drip',
    secrets: {
      DRIP_API_KEY: { description: 'Drip API key', dashboard: 'https://www.getdrip.com/user/edit' },
      DRIP_ACCOUNT_ID: { description: 'Drip account ID', dashboard: 'https://www.getdrip.com' },
    },
  },

  // ===== Support / Helpdesk =====
  {
    name: 'helpscout', title: 'Help Scout',
    secrets: {
      HELPSCOUT_API_KEY: { description: 'Help Scout API key', dashboard: 'https://secure.helpscout.net/settings/api' },
    },
  },
  {
    name: 'crisp', title: 'Crisp',
    secrets: {
      CRISP_IDENTIFIER: { description: 'Crisp token identifier', dashboard: 'https://app.crisp.chat/settings/plugin/9/' },
      CRISP_KEY: { description: 'Crisp token key', dashboard: 'https://app.crisp.chat/settings/plugin/9/' },
    },
  },
  {
    name: 'chatwoot', title: 'Chatwoot',
    secrets: {
      CHATWOOT_API_ACCESS_TOKEN: { description: 'Chatwoot API access token', dashboard: 'https://chatwoot.com' },
      CHATWOOT_BASE_URL: { description: 'Chatwoot base URL', dashboard: 'https://chatwoot.com', validate: 'url' },
    },
  },
  {
    name: 'gorgias', title: 'Gorgias',
    secrets: {
      GORGIAS_API_KEY: { description: 'Gorgias API key', dashboard: 'https://gorgias.com' },
      GORGIAS_ACCOUNT: { description: 'Gorgias account subdomain', dashboard: 'https://gorgias.com' },
    },
  },
  {
    name: 'plain', title: 'Plain',
    secrets: {
      PLAIN_API_KEY: { description: 'Plain API key', dashboard: 'https://app.plain.com/workspace/settings/api-keys' },
    },
  },

  // ===== Documents / PDF / E-Signature =====
  {
    name: 'docusign', title: 'DocuSign',
    secrets: {
      DOCUSIGN_INTEGRATION_KEY: { description: 'DocuSign integration key', dashboard: 'https://developers.docusign.com' },
      DOCUSIGN_USER_ID: { description: 'DocuSign user ID', dashboard: 'https://developers.docusign.com' },
      DOCUSIGN_ACCOUNT_ID: { description: 'DocuSign account ID', dashboard: 'https://developers.docusign.com' },
    },
  },
  {
    name: 'hellosign', title: 'Dropbox Sign (HelloSign)',
    secrets: {
      HELLOSIGN_API_KEY: { description: 'Dropbox Sign API key', dashboard: 'https://app.hellosign.com/api' },
    },
  },
  {
    name: 'pandadoc', title: 'PandaDoc',
    secrets: {
      PANDADOC_API_KEY: { description: 'PandaDoc API key', dashboard: 'https://app.pandadoc.com/a/#/settings/integrations/api' },
    },
  },
  {
    name: 'anvil', title: 'Anvil',
    secrets: {
      ANVIL_API_KEY: { description: 'Anvil API key', dashboard: 'https://www.useanvil.com/app/api' },
    },
  },
  {
    name: 'mindee', title: 'Mindee',
    secrets: {
      MINDEE_API_KEY: { description: 'Mindee API key', dashboard: 'https://platform.mindee.com/user/settings' },
    },
  },

  // ===== Translation =====
  {
    name: 'google-translate', title: 'Google Translate',
    secrets: {
      GOOGLE_TRANSLATE_API_KEY: { description: 'Google Translate API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'azure-translator', title: 'Azure Translator',
    secrets: {
      AZURE_TRANSLATOR_KEY: { description: 'Azure Translator API key', dashboard: 'https://portal.azure.com' },
      AZURE_TRANSLATOR_REGION: { description: 'Azure Translator region', dashboard: 'https://portal.azure.com' },
    },
  },
  {
    name: 'lokalise', title: 'Lokalise',
    secrets: {
      LOKALISE_API_TOKEN: { description: 'Lokalise API token', dashboard: 'https://app.lokalise.com/profile#api-tokens' },
      LOKALISE_PROJECT_ID: { description: 'Lokalise project ID', dashboard: 'https://app.lokalise.com', required: false },
    },
  },
  {
    name: 'crowdin', title: 'Crowdin',
    secrets: {
      CROWDIN_PERSONAL_TOKEN: { description: 'Crowdin personal access token', dashboard: 'https://crowdin.com/settings#api-key' },
      CROWDIN_PROJECT_ID: { description: 'Crowdin project ID', dashboard: 'https://crowdin.com', required: false },
    },
  },
  {
    name: 'transifex', title: 'Transifex',
    secrets: {
      TRANSIFEX_API_TOKEN: { description: 'Transifex API token', dashboard: 'https://app.transifex.com/user/settings/api/' },
    },
  },

  // ===== Web3 / Blockchain =====
  {
    name: 'alchemy', title: 'Alchemy',
    secrets: {
      ALCHEMY_API_KEY: { description: 'Alchemy API key', dashboard: 'https://dashboard.alchemy.com' },
    },
  },
  {
    name: 'quicknode', title: 'QuickNode',
    secrets: {
      QUICKNODE_ENDPOINT: { description: 'QuickNode endpoint URL', dashboard: 'https://dashboard.quicknode.com/endpoints', validate: 'url' },
    },
  },
  {
    name: 'infura', title: 'Infura',
    secrets: {
      INFURA_API_KEY: { description: 'Infura API key', dashboard: 'https://infura.io/dashboard' },
      INFURA_API_SECRET: { description: 'Infura API secret', dashboard: 'https://infura.io/dashboard', required: false },
    },
  },
  {
    name: 'moralis', title: 'Moralis',
    secrets: {
      MORALIS_API_KEY: { description: 'Moralis API key', dashboard: 'https://admin.moralis.io/settings/account' },
    },
  },
  {
    name: 'thirdweb', title: 'Thirdweb',
    secrets: {
      THIRDWEB_SECRET_KEY: { description: 'Thirdweb secret key', dashboard: 'https://thirdweb.com/dashboard/settings/api-keys' },
      THIRDWEB_CLIENT_ID: { description: 'Thirdweb client ID', dashboard: 'https://thirdweb.com/dashboard/settings/api-keys', required: false },
    },
  },
  {
    name: 'pinata', title: 'Pinata',
    secrets: {
      PINATA_JWT: { description: 'Pinata JWT token', dashboard: 'https://app.pinata.cloud/keys' },
      PINATA_API_KEY: { description: 'Pinata API key', dashboard: 'https://app.pinata.cloud/keys', required: false },
      PINATA_API_SECRET: { description: 'Pinata API secret', dashboard: 'https://app.pinata.cloud/keys', required: false },
    },
  },
  {
    name: 'etherscan', title: 'Etherscan',
    secrets: {
      ETHERSCAN_API_KEY: { description: 'Etherscan API key', dashboard: 'https://etherscan.io/myapikey' },
    },
  },

  // ===== Social Media =====
  {
    name: 'linkedin', title: 'LinkedIn',
    secrets: {
      LINKEDIN_CLIENT_ID: { description: 'LinkedIn OAuth client ID', dashboard: 'https://www.linkedin.com/developers/apps' },
      LINKEDIN_CLIENT_SECRET: { description: 'LinkedIn OAuth client secret', dashboard: 'https://www.linkedin.com/developers/apps' },
    },
  },
  {
    name: 'facebook', title: 'Facebook',
    secrets: {
      FACEBOOK_APP_ID: { description: 'Facebook app ID', dashboard: 'https://developers.facebook.com/apps' },
      FACEBOOK_APP_SECRET: { description: 'Facebook app secret', dashboard: 'https://developers.facebook.com/apps' },
    },
  },
  {
    name: 'instagram', title: 'Instagram',
    secrets: {
      INSTAGRAM_ACCESS_TOKEN: { description: 'Instagram Graph API access token', dashboard: 'https://developers.facebook.com/apps' },
    },
  },
  {
    name: 'tiktok', title: 'TikTok',
    secrets: {
      TIKTOK_CLIENT_KEY: { description: 'TikTok client key', dashboard: 'https://developers.tiktok.com/apps' },
      TIKTOK_CLIENT_SECRET: { description: 'TikTok client secret', dashboard: 'https://developers.tiktok.com/apps' },
    },
  },
  {
    name: 'reddit', title: 'Reddit',
    secrets: {
      REDDIT_CLIENT_ID: { description: 'Reddit OAuth client ID', dashboard: 'https://www.reddit.com/prefs/apps' },
      REDDIT_CLIENT_SECRET: { description: 'Reddit OAuth client secret', dashboard: 'https://www.reddit.com/prefs/apps' },
    },
  },
  {
    name: 'pinterest', title: 'Pinterest',
    secrets: {
      PINTEREST_CLIENT_ID: { description: 'Pinterest app ID', dashboard: 'https://developers.pinterest.com/apps/' },
      PINTEREST_CLIENT_SECRET: { description: 'Pinterest app secret', dashboard: 'https://developers.pinterest.com/apps/' },
    },
  },
  {
    name: 'youtube', title: 'YouTube',
    secrets: {
      YOUTUBE_API_KEY: { description: 'YouTube Data API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },

  // ===== Data Enrichment =====
  {
    name: 'clearbit', title: 'Clearbit',
    secrets: {
      CLEARBIT_API_KEY: { description: 'Clearbit API key', dashboard: 'https://dashboard.clearbit.com/api' },
    },
  },
  {
    name: 'people-data-labs', title: 'People Data Labs',
    secrets: {
      PDL_API_KEY: { description: 'People Data Labs API key', dashboard: 'https://dashboard.peopledatalabs.com/api-keys' },
    },
  },
  {
    name: 'apollo-io', title: 'Apollo.io',
    secrets: {
      APOLLO_API_KEY: { description: 'Apollo.io API key', dashboard: 'https://app.apollo.io/#/settings/integrations/api' },
    },
  },
  {
    name: 'hunter-io', title: 'Hunter.io',
    secrets: {
      HUNTER_API_KEY: { description: 'Hunter.io API key', dashboard: 'https://hunter.io/api-keys' },
    },
  },

  // ===== Scraping / Browser =====
  {
    name: 'browserbase', title: 'Browserbase',
    secrets: {
      BROWSERBASE_API_KEY: { description: 'Browserbase API key', dashboard: 'https://www.browserbase.com/overview' },
      BROWSERBASE_PROJECT_ID: { description: 'Browserbase project ID', dashboard: 'https://www.browserbase.com/overview' },
    },
  },
  {
    name: 'bright-data', title: 'Bright Data',
    secrets: {
      BRIGHT_DATA_API_TOKEN: { description: 'Bright Data API token', dashboard: 'https://brightdata.com/cp/zones' },
    },
  },
  {
    name: 'zenrows', title: 'ZenRows',
    secrets: {
      ZENROWS_API_KEY: { description: 'ZenRows API key', dashboard: 'https://app.zenrows.com' },
    },
  },
  {
    name: 'scraperapi', title: 'ScraperAPI',
    secrets: {
      SCRAPER_API_KEY: { description: 'ScraperAPI key', dashboard: 'https://www.scraperapi.com/dashboard' },
    },
  },
  {
    name: 'scrapingbee', title: 'ScrapingBee',
    secrets: {
      SCRAPINGBEE_API_KEY: { description: 'ScrapingBee API key', dashboard: 'https://app.scrapingbee.com' },
    },
  },

  // ===== Scheduling / Calendar =====
  {
    name: 'cal-com', title: 'Cal.com',
    secrets: {
      CAL_API_KEY: { description: 'Cal.com API key', dashboard: 'https://cal.com/settings/developer/api-keys' },
    },
  },
  {
    name: 'nylas', title: 'Nylas',
    secrets: {
      NYLAS_API_KEY: { description: 'Nylas API key', dashboard: 'https://dashboard.nylas.com' },
      NYLAS_GRANT_ID: { description: 'Nylas grant ID', dashboard: 'https://dashboard.nylas.com', required: false },
    },
  },
  {
    name: 'cronofy', title: 'Cronofy',
    secrets: {
      CRONOFY_CLIENT_ID: { description: 'Cronofy OAuth client ID', dashboard: 'https://app.cronofy.com/oauth/applications' },
      CRONOFY_CLIENT_SECRET: { description: 'Cronofy OAuth client secret', dashboard: 'https://app.cronofy.com/oauth/applications' },
    },
  },

  // ===== Forms / Surveys =====
  {
    name: 'typeform', title: 'Typeform',
    secrets: {
      TYPEFORM_PERSONAL_TOKEN: { description: 'Typeform personal access token', dashboard: 'https://admin.typeform.com/account/tokens' },
    },
  },
  {
    name: 'jotform', title: 'JotForm',
    secrets: {
      JOTFORM_API_KEY: { description: 'JotForm API key', dashboard: 'https://www.jotform.com/myaccount/api' },
    },
  },
  {
    name: 'formbricks', title: 'Formbricks',
    secrets: {
      FORMBRICKS_API_KEY: { description: 'Formbricks API key', dashboard: 'https://app.formbricks.com' },
      FORMBRICKS_ENVIRONMENT_ID: { description: 'Formbricks environment ID', dashboard: 'https://app.formbricks.com' },
    },
  },

  // ===== Game Backend =====
  {
    name: 'playfab', title: 'PlayFab',
    secrets: {
      PLAYFAB_TITLE_ID: { description: 'PlayFab title ID', dashboard: 'https://developer.playfab.com' },
      PLAYFAB_SECRET_KEY: { description: 'PlayFab developer secret key', dashboard: 'https://developer.playfab.com' },
    },
  },

  // ===== Workflow Automation =====
  {
    name: 'zapier', title: 'Zapier NLA',
    secrets: {
      ZAPIER_NLA_API_KEY: { description: 'Zapier NLA API key', dashboard: 'https://nla.zapier.com/credentials/' },
    },
  },
  {
    name: 'n8n', title: 'n8n',
    secrets: {
      N8N_API_KEY: { description: 'n8n API key', dashboard: 'https://n8n.io' },
      N8N_BASE_URL: { description: 'n8n instance base URL', dashboard: 'https://n8n.io', validate: 'url' },
    },
  },
  {
    name: 'pipedream', title: 'Pipedream',
    secrets: {
      PD_API_KEY: { description: 'Pipedream API key', dashboard: 'https://pipedream.com/accounts' },
    },
  },

  // ===== DNS / CDN =====
  {
    name: 'godaddy', title: 'GoDaddy',
    secrets: {
      GODADDY_API_KEY: { description: 'GoDaddy API key', dashboard: 'https://developer.godaddy.com/getstarted' },
      GODADDY_API_SECRET: { description: 'GoDaddy API secret', dashboard: 'https://developer.godaddy.com/getstarted' },
    },
  },
  {
    name: 'akamai', title: 'Akamai',
    secrets: {
      AKAMAI_HOST: { description: 'Akamai API host', dashboard: 'https://techdocs.akamai.com' },
      AKAMAI_CLIENT_TOKEN: { description: 'Akamai client token', dashboard: 'https://techdocs.akamai.com' },
      AKAMAI_CLIENT_SECRET: { description: 'Akamai client secret', dashboard: 'https://techdocs.akamai.com' },
      AKAMAI_ACCESS_TOKEN: { description: 'Akamai access token', dashboard: 'https://techdocs.akamai.com' },
    },
  },

  // ===== Content Moderation =====
  {
    name: 'sightengine', title: 'Sightengine',
    secrets: {
      SIGHTENGINE_API_USER: { description: 'Sightengine API user', dashboard: 'https://dashboard.sightengine.com/api-credentials' },
      SIGHTENGINE_API_SECRET: { description: 'Sightengine API secret', dashboard: 'https://dashboard.sightengine.com/api-credentials' },
    },
  },

  // ===== Feature Flags =====
  {
    name: 'devcycle', title: 'DevCycle',
    secrets: {
      DEVCYCLE_SERVER_SDK_KEY: { description: 'DevCycle server SDK key', dashboard: 'https://app.devcycle.com/r/environments' },
      DEVCYCLE_CLIENT_SDK_KEY: { description: 'DevCycle client SDK key', dashboard: 'https://app.devcycle.com/r/environments', required: false },
    },
  },
  {
    name: 'configcat', title: 'ConfigCat',
    secrets: {
      CONFIGCAT_SDK_KEY: { description: 'ConfigCat SDK key', dashboard: 'https://app.configcat.com/sdkkey' },
    },
  },
  {
    name: 'split-io', title: 'Split.io',
    secrets: {
      SPLIT_IO_API_KEY: { description: 'Split.io API key', dashboard: 'https://app.split.io/organization/apikeys' },
    },
  },

  // ===== Message Queues =====
  {
    name: 'confluent-kafka', title: 'Confluent Kafka',
    secrets: {
      CONFLUENT_BOOTSTRAP_SERVERS: { description: 'Confluent Kafka bootstrap servers', dashboard: 'https://confluent.cloud' },
      CONFLUENT_API_KEY: { description: 'Confluent Cloud API key', dashboard: 'https://confluent.cloud/settings/api-keys' },
      CONFLUENT_API_SECRET: { description: 'Confluent Cloud API secret', dashboard: 'https://confluent.cloud/settings/api-keys' },
    },
  },
  {
    name: 'upstash-kafka', title: 'Upstash Kafka',
    secrets: {
      UPSTASH_KAFKA_REST_URL: { description: 'Upstash Kafka REST URL', dashboard: 'https://console.upstash.com', validate: 'url' },
      UPSTASH_KAFKA_REST_USERNAME: { description: 'Upstash Kafka REST username', dashboard: 'https://console.upstash.com' },
      UPSTASH_KAFKA_REST_PASSWORD: { description: 'Upstash Kafka REST password', dashboard: 'https://console.upstash.com' },
    },
  },

  // ===== Compliance =====
  {
    name: 'onetrust', title: 'OneTrust',
    secrets: {
      ONETRUST_TOKEN: { description: 'OneTrust API token', dashboard: 'https://developer.onetrust.com' },
    },
  },
  {
    name: 'transcend', title: 'Transcend',
    secrets: {
      TRANSCEND_API_KEY: { description: 'Transcend API key', dashboard: 'https://app.transcend.io/settings' },
    },
  },

  // ===== Weather / Data =====
  {
    name: 'openweathermap', title: 'OpenWeatherMap',
    secrets: {
      OPENWEATHER_API_KEY: { description: 'OpenWeatherMap API key', dashboard: 'https://home.openweathermap.org/api_keys' },
    },
  },
  {
    name: 'nasa', title: 'NASA',
    secrets: {
      NASA_API_KEY: { description: 'NASA API key', dashboard: 'https://api.nasa.gov' },
    },
  },
  {
    name: 'newsapi', title: 'NewsAPI',
    secrets: {
      NEWS_API_KEY: { description: 'NewsAPI key', dashboard: 'https://newsapi.org/account' },
    },
  },

  // ===== Push Notifications =====
  {
    name: 'pushover', title: 'Pushover',
    secrets: {
      PUSHOVER_TOKEN: { description: 'Pushover application token', dashboard: 'https://pushover.net/apps' },
      PUSHOVER_USER: { description: 'Pushover user key', dashboard: 'https://pushover.net' },
    },
  },

  // ===== Real-time / IoT =====
  {
    name: 'pubnub', title: 'PubNub',
    secrets: {
      PUBNUB_PUBLISH_KEY: { description: 'PubNub publish key', dashboard: 'https://admin.pubnub.com' },
      PUBNUB_SUBSCRIBE_KEY: { description: 'PubNub subscribe key', dashboard: 'https://admin.pubnub.com' },
      PUBNUB_SECRET_KEY: { description: 'PubNub secret key', dashboard: 'https://admin.pubnub.com', required: false },
    },
  },

  // ===== IP / Geo =====
  {
    name: 'maxmind', title: 'MaxMind',
    secrets: {
      MAXMIND_ACCOUNT_ID: { description: 'MaxMind account ID', dashboard: 'https://www.maxmind.com/en/accounts/current/license-key' },
      MAXMIND_LICENSE_KEY: { description: 'MaxMind license key', dashboard: 'https://www.maxmind.com/en/accounts/current/license-key' },
    },
  },
  {
    name: 'ipstack', title: 'ipstack',
    secrets: {
      IPSTACK_API_KEY: { description: 'ipstack API key', dashboard: 'https://ipstack.com/dashboard' },
    },
  },

  // ===== Mail / Direct =====
  {
    name: 'lob', title: 'Lob',
    secrets: {
      LOB_API_KEY: { description: 'Lob API key', dashboard: 'https://dashboard.lob.com/settings/api-keys' },
    },
  },

  // ===== Misc Blockchain =====
  {
    name: 'crossmint', title: 'Crossmint',
    secrets: {
      CROSSMINT_API_KEY: { description: 'Crossmint API key', dashboard: 'https://www.crossmint.com/console/projects' },
    },
  },

  // ===== IoT =====
  {
    name: 'particle', title: 'Particle',
    secrets: {
      PARTICLE_ACCESS_TOKEN: { description: 'Particle access token', dashboard: 'https://console.particle.io' },
    },
  },
  {
    name: 'seam', title: 'Seam',
    secrets: {
      SEAM_API_KEY: { description: 'Seam API key', dashboard: 'https://console.seam.co' },
    },
  },

  // ===== Additional services not yet covered =====
  {
    name: 'google-calendar', title: 'Google Calendar',
    secrets: {
      GOOGLE_CALENDAR_CLIENT_ID: { description: 'Google Calendar OAuth client ID', dashboard: 'https://console.cloud.google.com/apis/credentials' },
      GOOGLE_CALENDAR_CLIENT_SECRET: { description: 'Google Calendar OAuth client secret', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'miro', title: 'Miro',
    secrets: {
      MIRO_ACCESS_TOKEN: { description: 'Miro access token', dashboard: 'https://miro.com/app/settings/user-profile/apps' },
    },
  },
  {
    name: 'elastic-cloud', title: 'Elastic Cloud',
    secrets: {
      ELASTIC_CLOUD_ID: { description: 'Elastic Cloud deployment ID', dashboard: 'https://cloud.elastic.co' },
      ELASTIC_API_KEY: { description: 'Elastic API key', dashboard: 'https://cloud.elastic.co' },
    },
  },
  {
    name: 'countly', title: 'Countly',
    secrets: {
      COUNTLY_APP_KEY: { description: 'Countly app key', dashboard: 'https://count.ly' },
      COUNTLY_SERVER_URL: { description: 'Countly server URL', dashboard: 'https://count.ly', validate: 'url' },
    },
  },
  {
    name: 'pendo', title: 'Pendo',
    secrets: {
      PENDO_API_KEY: { description: 'Pendo API key', dashboard: 'https://app.pendo.io/main/#/settings' },
    },
  },
  {
    name: 'jfrog-artifactory', title: 'JFrog Artifactory',
    secrets: {
      ARTIFACTORY_URL: { description: 'JFrog Artifactory URL', dashboard: 'https://jfrog.com', validate: 'url' },
      ARTIFACTORY_API_KEY: { description: 'JFrog Artifactory API key', dashboard: 'https://jfrog.com' },
    },
  },
  {
    name: 'recharge', title: 'Recharge',
    secrets: {
      RECHARGE_API_TOKEN: { description: 'Recharge API token', dashboard: 'https://apps.rechargepayments.com/developers' },
    },
  },
  {
    name: 'marketo', title: 'Marketo',
    secrets: {
      MARKETO_CLIENT_ID: { description: 'Marketo client ID', dashboard: 'https://developers.marketo.com' },
      MARKETO_CLIENT_SECRET: { description: 'Marketo client secret', dashboard: 'https://developers.marketo.com' },
      MARKETO_REST_ENDPOINT: { description: 'Marketo REST endpoint URL', dashboard: 'https://developers.marketo.com', validate: 'url' },
    },
  },
  {
    name: 'omnisend', title: 'Omnisend',
    secrets: {
      OMNISEND_API_KEY: { description: 'Omnisend API key', dashboard: 'https://app.omnisend.com/integrations/api-keys' },
    },
  },

  // ===== Additional batch to reach 500+ =====
  {
    name: 'mysql', title: 'MySQL',
    secrets: {
      MYSQL_HOST: { description: 'MySQL host', dashboard: 'https://dev.mysql.com' },
      MYSQL_USER: { description: 'MySQL username', dashboard: 'https://dev.mysql.com' },
      MYSQL_PASSWORD: { description: 'MySQL password', dashboard: 'https://dev.mysql.com' },
      MYSQL_DATABASE: { description: 'MySQL database name', dashboard: 'https://dev.mysql.com', required: false },
      MYSQL_PORT: { description: 'MySQL port', dashboard: 'https://dev.mysql.com', required: false },
    },
  },
  {
    name: 'trulioo', title: 'Trulioo',
    secrets: {
      TRULIOO_API_KEY: { description: 'Trulioo API key', dashboard: 'https://gateway.trulioo.com' },
    },
  },
  {
    name: 'socure', title: 'Socure',
    secrets: {
      SOCURE_API_KEY: { description: 'Socure API key', dashboard: 'https://developer.socure.com' },
    },
  },
  {
    name: 'seon', title: 'SEON',
    secrets: {
      SEON_LICENSE_KEY: { description: 'SEON license key', dashboard: 'https://admin.seon.io' },
    },
  },
  {
    name: 'jumio', title: 'Jumio',
    secrets: {
      JUMIO_API_TOKEN: { description: 'Jumio API token', dashboard: 'https://portal.jumio.com' },
      JUMIO_API_SECRET: { description: 'Jumio API secret', dashboard: 'https://portal.jumio.com' },
    },
  },
  {
    name: 'forte', title: 'Forte',
    secrets: {
      FORTE_API_ACCESS_ID: { description: 'Forte API access ID', dashboard: 'https://www.forte.net' },
      FORTE_SECURE_TRANSACTION_KEY: { description: 'Forte secure transaction key', dashboard: 'https://www.forte.net' },
    },
  },
  {
    name: 'finicity', title: 'Finicity',
    secrets: {
      FINICITY_APP_KEY: { description: 'Finicity app key', dashboard: 'https://developer.finicity.com' },
      FINICITY_PARTNER_ID: { description: 'Finicity partner ID', dashboard: 'https://developer.finicity.com' },
      FINICITY_PARTNER_SECRET: { description: 'Finicity partner secret', dashboard: 'https://developer.finicity.com' },
    },
  },
  {
    name: 'mx-platform', title: 'MX Platform',
    secrets: {
      MX_CLIENT_ID: { description: 'MX client ID', dashboard: 'https://dashboard.mx.com/client' },
      MX_API_KEY: { description: 'MX API key', dashboard: 'https://dashboard.mx.com/client' },
    },
  },
  {
    name: 'osso', title: 'Osso',
    secrets: {
      OSSO_BASE_URL: { description: 'Osso base URL', dashboard: 'https://ossoapp.com', validate: 'url' },
      OSSO_CLIENT_ID: { description: 'Osso OAuth client ID', dashboard: 'https://ossoapp.com' },
      OSSO_CLIENT_SECRET: { description: 'Osso OAuth client secret', dashboard: 'https://ossoapp.com' },
    },
  },
  {
    name: 'boxyhq-saml', title: 'BoxyHQ SAML Jackson',
    secrets: {
      BOXYHQ_SAML_API_KEY: { description: 'BoxyHQ SAML Jackson API key', dashboard: 'https://app.eu.boxyhq.com' },
      BOXYHQ_SAML_HOST: { description: 'BoxyHQ SAML Jackson host URL', dashboard: 'https://app.eu.boxyhq.com', validate: 'url' },
    },
  },
  {
    name: 'zoho-mail', title: 'Zoho Mail',
    secrets: {
      ZOHO_MAIL_CLIENT_ID: { description: 'Zoho Mail OAuth client ID', dashboard: 'https://api-console.zoho.com' },
      ZOHO_MAIL_CLIENT_SECRET: { description: 'Zoho Mail OAuth client secret', dashboard: 'https://api-console.zoho.com' },
      ZOHO_MAIL_REFRESH_TOKEN: { description: 'Zoho Mail OAuth refresh token', dashboard: 'https://api-console.zoho.com' },
    },
  },
  {
    name: 'notificationapi', title: 'NotificationAPI',
    secrets: {
      NOTIFICATIONAPI_CLIENT_ID: { description: 'NotificationAPI client ID', dashboard: 'https://app.notificationapi.com' },
      NOTIFICATIONAPI_CLIENT_SECRET: { description: 'NotificationAPI client secret', dashboard: 'https://app.notificationapi.com' },
    },
  },
  {
    name: 'suprsend', title: 'SuprSend',
    secrets: {
      SUPRSEND_WORKSPACE_KEY: { description: 'SuprSend workspace key', dashboard: 'https://app.suprsend.com/settings/developer' },
      SUPRSEND_WORKSPACE_SECRET: { description: 'SuprSend workspace secret', dashboard: 'https://app.suprsend.com/settings/developer' },
    },
  },
  {
    name: 'smartlook', title: 'Smartlook',
    secrets: {
      SMARTLOOK_PROJECT_KEY: { description: 'Smartlook project key', dashboard: 'https://app.smartlook.com' },
    },
  },
  {
    name: 'vwo', title: 'VWO',
    secrets: {
      VWO_ACCOUNT_ID: { description: 'VWO account ID', dashboard: 'https://app.vwo.com' },
      VWO_SDK_KEY: { description: 'VWO SDK key', dashboard: 'https://app.vwo.com' },
    },
  },
  {
    name: 'ab-tasty', title: 'AB Tasty',
    secrets: {
      AB_TASTY_API_KEY: { description: 'AB Tasty API key', dashboard: 'https://app.abtasty.com' },
    },
  },
  {
    name: 'appcues', title: 'Appcues',
    secrets: {
      APPCUES_ACCOUNT_ID: { description: 'Appcues account ID', dashboard: 'https://studio.appcues.com' },
    },
  },
  {
    name: 'ovhcloud', title: 'OVHcloud',
    secrets: {
      OVH_ENDPOINT: { description: 'OVHcloud API endpoint', dashboard: 'https://eu.api.ovh.com/createToken' },
      OVH_APPLICATION_KEY: { description: 'OVHcloud application key', dashboard: 'https://eu.api.ovh.com/createToken' },
      OVH_APPLICATION_SECRET: { description: 'OVHcloud application secret', dashboard: 'https://eu.api.ovh.com/createToken' },
      OVH_CONSUMER_KEY: { description: 'OVHcloud consumer key', dashboard: 'https://eu.api.ovh.com/createToken' },
    },
  },
  {
    name: 'spacelift', title: 'Spacelift',
    secrets: {
      SPACELIFT_API_KEY_ID: { description: 'Spacelift API key ID', dashboard: 'https://spacelift.io' },
      SPACELIFT_API_KEY_SECRET: { description: 'Spacelift API key secret', dashboard: 'https://spacelift.io' },
    },
  },
  {
    name: 'drone', title: 'Drone CI',
    secrets: {
      DRONE_SERVER: { description: 'Drone CI server URL', dashboard: 'https://drone.io', validate: 'url' },
      DRONE_TOKEN: { description: 'Drone CI API token', dashboard: 'https://drone.io' },
    },
  },
  {
    name: 'travis-ci', title: 'Travis CI',
    secrets: {
      TRAVIS_CI_TOKEN: { description: 'Travis CI API token', dashboard: 'https://app.travis-ci.com/account/preferences' },
    },
  },
  {
    name: 'buddy', title: 'Buddy',
    secrets: {
      BUDDY_TOKEN: { description: 'Buddy personal access token', dashboard: 'https://app.buddy.works' },
    },
  },
  {
    name: 'octopus-deploy', title: 'Octopus Deploy',
    secrets: {
      OCTOPUS_URL: { description: 'Octopus Deploy server URL', dashboard: 'https://octopus.com', validate: 'url' },
      OCTOPUS_API_KEY: { description: 'Octopus Deploy API key', dashboard: 'https://octopus.com' },
    },
  },
  {
    name: 'harbor', title: 'Harbor',
    secrets: {
      HARBOR_URL: { description: 'Harbor registry URL', dashboard: 'https://goharbor.io', validate: 'url' },
      HARBOR_USERNAME: { description: 'Harbor username', dashboard: 'https://goharbor.io' },
      HARBOR_PASSWORD: { description: 'Harbor password', dashboard: 'https://goharbor.io' },
    },
  },
  {
    name: 'freshping', title: 'Freshping',
    secrets: {
      FRESHPING_API_KEY: { description: 'Freshping API key', dashboard: 'https://app.freshping.io' },
    },
  },
  {
    name: 'statuscake', title: 'StatusCake',
    secrets: {
      STATUSCAKE_API_TOKEN: { description: 'StatusCake API token', dashboard: 'https://app.statuscake.com' },
    },
  },
  {
    name: 'pingdom', title: 'Pingdom',
    secrets: {
      PINGDOM_API_TOKEN: { description: 'Pingdom API token', dashboard: 'https://my.solarwinds.com' },
    },
  },
  {
    name: 'middleware-io', title: 'Middleware',
    secrets: {
      MIDDLEWARE_API_KEY: { description: 'Middleware API key', dashboard: 'https://app.middleware.io' },
    },
  },
  {
    name: 'logfire', title: 'Logfire',
    secrets: {
      LOGFIRE_TOKEN: { description: 'Logfire write token', dashboard: 'https://logfire.pydantic.dev' },
    },
  },
  {
    name: 'mezmo', title: 'Mezmo (LogDNA)',
    secrets: {
      MEZMO_API_KEY: { description: 'Mezmo API key', dashboard: 'https://app.mezmo.com/manage/profile' },
      MEZMO_INGESTION_KEY: { description: 'Mezmo ingestion key', dashboard: 'https://app.mezmo.com', required: false },
    },
  },
  {
    name: 'papertrail', title: 'Papertrail',
    secrets: {
      PAPERTRAIL_API_TOKEN: { description: 'Papertrail API token', dashboard: 'https://papertrailapp.com/account/profile' },
    },
  },
  {
    name: 'instana', title: 'Instana',
    secrets: {
      INSTANA_AGENT_KEY: { description: 'Instana agent key', dashboard: 'https://www.instana.com' },
      INSTANA_API_TOKEN: { description: 'Instana REST API token', dashboard: 'https://www.instana.com', required: false },
    },
  },
  {
    name: 'aikido', title: 'Aikido Security',
    secrets: {
      AIKIDO_TOKEN: { description: 'Aikido Security token', dashboard: 'https://app.aikido.dev' },
    },
  },
  {
    name: 'socket-security', title: 'Socket Security',
    secrets: {
      SOCKET_SECURITY_API_KEY: { description: 'Socket Security API key', dashboard: 'https://socket.dev/dashboard' },
    },
  },
  {
    name: 'checkmarx', title: 'Checkmarx',
    secrets: {
      CHECKMARX_BASE_URL: { description: 'Checkmarx base URL', dashboard: 'https://checkmarx.com', validate: 'url' },
      CHECKMARX_CLIENT_ID: { description: 'Checkmarx client ID', dashboard: 'https://checkmarx.com' },
      CHECKMARX_CLIENT_SECRET: { description: 'Checkmarx client secret', dashboard: 'https://checkmarx.com' },
    },
  },
  {
    name: 'wiz', title: 'Wiz',
    secrets: {
      WIZ_CLIENT_ID: { description: 'Wiz client ID', dashboard: 'https://app.wiz.io' },
      WIZ_CLIENT_SECRET: { description: 'Wiz client secret', dashboard: 'https://app.wiz.io' },
    },
  },
  {
    name: 'zinc-search', title: 'ZincSearch',
    secrets: {
      ZINC_HOST: { description: 'ZincSearch host URL', dashboard: 'https://zincsearch.com', validate: 'url' },
      ZINC_USER: { description: 'ZincSearch admin username', dashboard: 'https://zincsearch.com' },
      ZINC_PASSWORD: { description: 'ZincSearch admin password', dashboard: 'https://zincsearch.com' },
    },
  },
  {
    name: 'constructor-io', title: 'Constructor.io',
    secrets: {
      CONSTRUCTORIO_API_KEY: { description: 'Constructor.io API key', dashboard: 'https://constructor.io/dashboard' },
      CONSTRUCTORIO_API_TOKEN: { description: 'Constructor.io API token', dashboard: 'https://constructor.io/dashboard', required: false },
    },
  },
  {
    name: 'doofinder', title: 'Doofinder',
    secrets: {
      DOOFINDER_MANAGEMENT_TOKEN: { description: 'Doofinder management API token', dashboard: 'https://admin.doofinder.com' },
    },
  },
  {
    name: 'agility-cms', title: 'Agility CMS',
    secrets: {
      AGILITY_GUID: { description: 'Agility CMS GUID', dashboard: 'https://manager.agilitycms.com' },
      AGILITY_API_FETCH_KEY: { description: 'Agility CMS fetch API key', dashboard: 'https://manager.agilitycms.com' },
      AGILITY_API_PREVIEW_KEY: { description: 'Agility CMS preview API key', dashboard: 'https://manager.agilitycms.com', required: false },
    },
  },
  {
    name: 'stadia-maps', title: 'Stadia Maps',
    secrets: {
      STADIA_MAPS_API_KEY: { description: 'Stadia Maps API key', dashboard: 'https://client.stadiamaps.com' },
    },
  },
  {
    name: 'webex', title: 'Webex',
    secrets: {
      WEBEX_ACCESS_TOKEN: { description: 'Webex access token', dashboard: 'https://developer.webex.com/my-apps' },
    },
  },
  {
    name: 'magento', title: 'Magento',
    secrets: {
      MAGENTO_BASE_URL: { description: 'Magento store base URL', dashboard: 'https://magento.com', validate: 'url' },
      MAGENTO_ACCESS_TOKEN: { description: 'Magento integration access token', dashboard: 'https://magento.com' },
    },
  },
  {
    name: 'ebay', title: 'eBay',
    secrets: {
      EBAY_APP_ID: { description: 'eBay application ID (client ID)', dashboard: 'https://developer.ebay.com/my/keys' },
      EBAY_CERT_ID: { description: 'eBay certificate ID (client secret)', dashboard: 'https://developer.ebay.com/my/keys' },
      EBAY_AUTH_TOKEN: { description: 'eBay OAuth user token', dashboard: 'https://developer.ebay.com/my/keys' },
    },
  },
  {
    name: 'amazon-sp', title: 'Amazon Selling Partner',
    secrets: {
      AMAZON_SP_APP_CLIENT_ID: { description: 'Amazon SP API client ID', dashboard: 'https://sellercentral.amazon.com/apps/develop' },
      AMAZON_SP_APP_CLIENT_SECRET: { description: 'Amazon SP API client secret', dashboard: 'https://sellercentral.amazon.com/apps/develop' },
      AMAZON_SP_REFRESH_TOKEN: { description: 'Amazon SP API refresh token', dashboard: 'https://sellercentral.amazon.com/apps/develop' },
    },
  },
  {
    name: 'shipbob', title: 'ShipBob',
    secrets: {
      SHIPBOB_API_TOKEN: { description: 'ShipBob API token', dashboard: 'https://developer.shipbob.com' },
    },
  },
  {
    name: 'copper', title: 'Copper CRM',
    secrets: {
      COPPER_API_KEY: { description: 'Copper API key', dashboard: 'https://app.copper.com/settings/api-keys' },
      COPPER_USER_EMAIL: { description: 'Copper user email', dashboard: 'https://app.copper.com' },
    },
  },
  {
    name: 'affinity', title: 'Affinity',
    secrets: {
      AFFINITY_API_KEY: { description: 'Affinity API key', dashboard: 'https://api-docs.affinity.co' },
    },
  },
  {
    name: 'tawk-to', title: 'tawk.to',
    secrets: {
      TAWKTO_API_KEY: { description: 'tawk.to REST API key', dashboard: 'https://dashboard.tawk.to/settings/api' },
    },
  },
  {
    name: 'kustomer', title: 'Kustomer',
    secrets: {
      KUSTOMER_API_KEY: { description: 'Kustomer API key', dashboard: 'https://kustomer.com' },
    },
  },
  {
    name: 'signnow', title: 'signNow',
    secrets: {
      SIGNNOW_CLIENT_ID: { description: 'signNow OAuth client ID', dashboard: 'https://www.signnow.com/api' },
      SIGNNOW_CLIENT_SECRET: { description: 'signNow OAuth client secret', dashboard: 'https://www.signnow.com/api' },
    },
  },
  {
    name: 'signwell', title: 'SignWell',
    secrets: {
      SIGNWELL_API_KEY: { description: 'SignWell API key', dashboard: 'https://www.signwell.com/app/account/api' },
    },
  },
  {
    name: 'pdfco', title: 'PDF.co',
    secrets: {
      PDFCO_API_KEY: { description: 'PDF.co API key', dashboard: 'https://app.pdf.co/settings' },
    },
  },
  {
    name: 'phrase', title: 'Phrase',
    secrets: {
      PHRASE_ACCESS_TOKEN: { description: 'Phrase access token', dashboard: 'https://app.phrase.com/settings/oauth_access_tokens' },
    },
  },
  {
    name: 'locize', title: 'Locize',
    secrets: {
      LOCIZE_API_KEY: { description: 'Locize API key', dashboard: 'https://locize.app/settings/users' },
      LOCIZE_PROJECT_ID: { description: 'Locize project ID', dashboard: 'https://locize.app' },
    },
  },
  {
    name: 'tatum', title: 'Tatum',
    secrets: {
      TATUM_API_KEY: { description: 'Tatum API key', dashboard: 'https://dashboard.tatum.io' },
    },
  },
  {
    name: 'ankr', title: 'Ankr',
    secrets: {
      ANKR_API_KEY: { description: 'Ankr API key', dashboard: 'https://www.ankr.com' },
    },
  },
  {
    name: 'opensea', title: 'OpenSea',
    secrets: {
      OPENSEA_API_KEY: { description: 'OpenSea API key', dashboard: 'https://docs.opensea.io/reference/api-keys' },
    },
  },
  {
    name: 'ayrshare', title: 'Ayrshare',
    secrets: {
      AYRSHARE_API_KEY: { description: 'Ayrshare API key', dashboard: 'https://app.ayrshare.com/profile' },
    },
  },
  {
    name: 'proxycurl', title: 'Proxycurl',
    secrets: {
      PROXYCURL_API_KEY: { description: 'Proxycurl API key', dashboard: 'https://nubela.co/proxycurl/dashboard' },
    },
  },
  {
    name: 'snovio', title: 'Snov.io',
    secrets: {
      SNOVIO_USER_ID: { description: 'Snov.io user ID', dashboard: 'https://snov.io/api' },
      SNOVIO_API_KEY: { description: 'Snov.io API key', dashboard: 'https://snov.io/api' },
    },
  },
  {
    name: 'oxylabs', title: 'Oxylabs',
    secrets: {
      OXYLABS_USERNAME: { description: 'Oxylabs username', dashboard: 'https://dashboard.oxylabs.io' },
      OXYLABS_PASSWORD: { description: 'Oxylabs password', dashboard: 'https://dashboard.oxylabs.io' },
    },
  },
  {
    name: 'acuity', title: 'Acuity Scheduling',
    secrets: {
      ACUITY_USER_ID: { description: 'Acuity user ID', dashboard: 'https://acuityscheduling.com/api.php' },
      ACUITY_API_KEY: { description: 'Acuity API key', dashboard: 'https://acuityscheduling.com/api.php' },
    },
  },
  {
    name: 'surveymonkey', title: 'SurveyMonkey',
    secrets: {
      SURVEYMONKEY_ACCESS_TOKEN: { description: 'SurveyMonkey access token', dashboard: 'https://developer.surveymonkey.com/apps/' },
    },
  },
  {
    name: 'heroic-labs-nakama', title: 'Heroic Labs Nakama',
    secrets: {
      NAKAMA_SERVER_KEY: { description: 'Nakama server key', dashboard: 'https://heroiclabs.com' },
      NAKAMA_HOST: { description: 'Nakama server host', dashboard: 'https://heroiclabs.com' },
    },
  },
  {
    name: 'photon', title: 'Photon Engine',
    secrets: {
      PHOTON_APP_ID: { description: 'Photon application ID', dashboard: 'https://dashboard.photonengine.com/apps' },
    },
  },
  {
    name: 'make', title: 'Make (Integromat)',
    secrets: {
      MAKE_API_KEY: { description: 'Make API key', dashboard: 'https://www.make.com' },
    },
  },
  {
    name: 'workato', title: 'Workato',
    secrets: {
      WORKATO_API_TOKEN: { description: 'Workato API token', dashboard: 'https://app.workato.com' },
    },
  },
  {
    name: 'activepieces', title: 'Activepieces',
    secrets: {
      ACTIVEPIECES_API_KEY: { description: 'Activepieces API key', dashboard: 'https://cloud.activepieces.com' },
    },
  },
  {
    name: 'namecheap', title: 'Namecheap',
    secrets: {
      NAMECHEAP_API_USER: { description: 'Namecheap API username', dashboard: 'https://ap.www.namecheap.com/settings/tools/apiaccess' },
      NAMECHEAP_API_KEY: { description: 'Namecheap API key', dashboard: 'https://ap.www.namecheap.com/settings/tools/apiaccess' },
    },
  },
  {
    name: 'hive', title: 'Hive Moderation',
    secrets: {
      HIVE_API_KEY: { description: 'Hive Moderation API key', dashboard: 'https://hivemoderation.com/api_access' },
    },
  },
  {
    name: 'harness-ff', title: 'Harness Feature Flags',
    secrets: {
      HARNESS_SDK_KEY: { description: 'Harness Feature Flags SDK key', dashboard: 'https://app.harness.io' },
    },
  },
  {
    name: 'rabbitmq-cloud', title: 'CloudAMQP (RabbitMQ)',
    secrets: {
      CLOUDAMQP_URL: { description: 'CloudAMQP connection URL', dashboard: 'https://customer.cloudamqp.com', validate: 'url' },
    },
  },
  {
    name: 'azure-service-bus', title: 'Azure Service Bus',
    secrets: {
      AZURE_SERVICE_BUS_CONNECTION_STRING: { description: 'Azure Service Bus connection string', dashboard: 'https://portal.azure.com' },
    },
  },
  {
    name: 'didomi', title: 'Didomi',
    secrets: {
      DIDOMI_API_KEY: { description: 'Didomi API key', dashboard: 'https://console.didomi.io' },
      DIDOMI_SECRET_KEY: { description: 'Didomi secret key', dashboard: 'https://console.didomi.io' },
    },
  },
  {
    name: 'enzuzo', title: 'Enzuzo',
    secrets: {
      ENZUZO_API_KEY: { description: 'Enzuzo API key', dashboard: 'https://app.enzuzo.com' },
    },
  },
  {
    name: 'weatherapi', title: 'WeatherAPI',
    secrets: {
      WEATHERAPI_KEY: { description: 'WeatherAPI key', dashboard: 'https://www.weatherapi.com/my/' },
    },
  },
  {
    name: 'abstract-api', title: 'AbstractAPI',
    secrets: {
      ABSTRACTAPI_API_KEY: { description: 'AbstractAPI key', dashboard: 'https://app.abstractapi.com' },
    },
  },
  {
    name: 'ipgeolocation', title: 'ipgeolocation',
    secrets: {
      IPGEOLOCATION_API_KEY: { description: 'ipgeolocation API key', dashboard: 'https://app.ipgeolocation.io' },
    },
  },
  {
    name: 'spoonacular', title: 'Spoonacular',
    secrets: {
      SPOONACULAR_API_KEY: { description: 'Spoonacular API key', dashboard: 'https://spoonacular.com/food-api/console#Dashboard' },
    },
  },
  {
    name: 'gnews', title: 'GNews',
    secrets: {
      GNEWS_API_KEY: { description: 'GNews API key', dashboard: 'https://gnews.io/dashboard' },
    },
  },
  {
    name: 'mediastack', title: 'Mediastack',
    secrets: {
      MEDIASTACK_API_KEY: { description: 'Mediastack API key', dashboard: 'https://mediastack.com/dashboard' },
    },
  },
  {
    name: 'gotify', title: 'Gotify',
    secrets: {
      GOTIFY_URL: { description: 'Gotify server URL', dashboard: 'https://gotify.net', validate: 'url' },
      GOTIFY_TOKEN: { description: 'Gotify application token', dashboard: 'https://gotify.net' },
    },
  },
  {
    name: 'blynk', title: 'Blynk',
    secrets: {
      BLYNK_TOKEN: { description: 'Blynk auth token', dashboard: 'https://blynk.cloud' },
      BLYNK_SERVER: { description: 'Blynk server URL', dashboard: 'https://blynk.cloud', required: false, validate: 'url' },
    },
  },
  {
    name: 'liveagent', title: 'LiveAgent',
    secrets: {
      LIVEAGENT_API_KEY: { description: 'LiveAgent API key', dashboard: 'https://www.liveagent.com' },
      LIVEAGENT_DOMAIN: { description: 'LiveAgent domain', dashboard: 'https://www.liveagent.com' },
    },
  },
  {
    name: 'kayako', title: 'Kayako',
    secrets: {
      KAYAKO_URL: { description: 'Kayako instance URL', dashboard: 'https://kayako.com', validate: 'url' },
      KAYAKO_EMAIL: { description: 'Kayako admin email', dashboard: 'https://kayako.com' },
      KAYAKO_PASSWORD: { description: 'Kayako admin password', dashboard: 'https://kayako.com' },
    },
  },
  {
    name: 'azure-content-moderator', title: 'Azure Content Moderator',
    secrets: {
      AZURE_CONTENT_MODERATOR_KEY: { description: 'Azure Content Moderator key', dashboard: 'https://portal.azure.com' },
      AZURE_CONTENT_MODERATOR_ENDPOINT: { description: 'Azure Content Moderator endpoint', dashboard: 'https://portal.azure.com', validate: 'url' },
    },
  },
  {
    name: 'tisane', title: 'Tisane',
    secrets: {
      TISANE_API_KEY: { description: 'Tisane API key', dashboard: 'https://tisane.ai' },
    },
  },
  {
    name: 'coolify', title: 'Coolify',
    secrets: {
      COOLIFY_API_KEY: { description: 'Coolify API key', dashboard: 'https://coolify.io' },
      COOLIFY_API_URL: { description: 'Coolify API URL', dashboard: 'https://coolify.io', validate: 'url' },
    },
  },
  {
    name: 'qovery', title: 'Qovery',
    secrets: {
      QOVERY_TOKEN: { description: 'Qovery API token', dashboard: 'https://console.qovery.com/settings/api-tokens' },
    },
  },
  {
    name: 'platform-sh', title: 'Platform.sh',
    secrets: {
      PLATFORMSH_CLI_TOKEN: { description: 'Platform.sh CLI token', dashboard: 'https://accounts.platform.sh/user/settings' },
    },
  },
  {
    name: 'lacework', title: 'Lacework',
    secrets: {
      LACEWORK_API_KEY: { description: 'Lacework API key', dashboard: 'https://www.lacework.com' },
      LACEWORK_API_SECRET: { description: 'Lacework API secret', dashboard: 'https://www.lacework.com' },
      LACEWORK_ACCOUNT: { description: 'Lacework account name', dashboard: 'https://www.lacework.com' },
    },
  },
  {
    name: 'jfrog-xray', title: 'JFrog Xray',
    secrets: {
      JFROG_URL: { description: 'JFrog platform URL', dashboard: 'https://jfrog.com', validate: 'url' },
      JFROG_ACCESS_TOKEN: { description: 'JFrog access token', dashboard: 'https://jfrog.com' },
    },
  },
  {
    name: 'last9', title: 'Last9',
    secrets: {
      LAST9_API_KEY: { description: 'Last9 API key', dashboard: 'https://app.last9.io' },
      LAST9_CLUSTER_URL: { description: 'Last9 cluster URL', dashboard: 'https://app.last9.io', validate: 'url' },
    },
  },
  {
    name: 'numverify', title: 'numverify',
    secrets: {
      NUMVERIFY_API_KEY: { description: 'numverify API key', dashboard: 'https://numverify.com/dashboard' },
    },
  },
  {
    name: 'whoisxml', title: 'WhoisXML API',
    secrets: {
      WHOISXML_API_KEY: { description: 'WhoisXML API key', dashboard: 'https://user.whoisxmlapi.com/products' },
    },
  },
  {
    name: 'prestashop', title: 'PrestaShop',
    secrets: {
      PRESTASHOP_API_KEY: { description: 'PrestaShop webservice API key', dashboard: 'https://prestashop.com' },
      PRESTASHOP_API_URL: { description: 'PrestaShop store URL', dashboard: 'https://prestashop.com', validate: 'url' },
    },
  },
  {
    name: 'bigcommerce', title: 'BigCommerce',
    secrets: {
      BIGCOMMERCE_STORE_HASH: { description: 'BigCommerce store hash', dashboard: 'https://developer.bigcommerce.com' },
      BIGCOMMERCE_ACCESS_TOKEN: { description: 'BigCommerce access token', dashboard: 'https://developer.bigcommerce.com' },
    },
  },
  {
    name: 'bold-commerce', title: 'Bold Commerce',
    secrets: {
      BOLD_API_KEY: { description: 'Bold Commerce API key', dashboard: 'https://developers.boldcommerce.com' },
      BOLD_API_TOKEN: { description: 'Bold Commerce API token', dashboard: 'https://developers.boldcommerce.com' },
    },
  },
  {
    name: 'pardot', title: 'Pardot (Salesforce MCAE)',
    secrets: {
      PARDOT_CLIENT_ID: { description: 'Pardot client ID', dashboard: 'https://pi.pardot.com/api' },
      PARDOT_CLIENT_SECRET: { description: 'Pardot client secret', dashboard: 'https://pi.pardot.com/api' },
      PARDOT_BUSINESS_UNIT_ID: { description: 'Pardot business unit ID', dashboard: 'https://pi.pardot.com/api' },
    },
  },
  {
    name: 'docusign', title: 'DocuSign',
    secrets: {
      DOCUSIGN_INTEGRATION_KEY: { description: 'DocuSign integration key', dashboard: 'https://developers.docusign.com' },
      DOCUSIGN_USER_ID: { description: 'DocuSign user ID', dashboard: 'https://developers.docusign.com' },
      DOCUSIGN_ACCOUNT_ID: { description: 'DocuSign account ID', dashboard: 'https://developers.docusign.com' },
    },
  },
  {
    name: 'cloudmersive', title: 'Cloudmersive',
    secrets: {
      CLOUDMERSIVE_API_KEY: { description: 'Cloudmersive API key', dashboard: 'https://account.cloudmersive.com/keys' },
    },
  },
  {
    name: 'abbyy', title: 'ABBYY',
    secrets: {
      ABBYY_APP_ID: { description: 'ABBYY application ID', dashboard: 'https://www.abbyy.com' },
      ABBYY_APP_PASSWORD: { description: 'ABBYY application password', dashboard: 'https://www.abbyy.com' },
    },
  },
  {
    name: 'ocr-space', title: 'OCR.space',
    secrets: {
      OCR_SPACE_API_KEY: { description: 'OCR.space API key', dashboard: 'https://ocr.space/ocrapi/freekey' },
    },
  },
  {
    name: 'aws-translate', title: 'AWS Translate',
    secrets: {
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID for Translate', dashboard: 'https://console.aws.amazon.com/translate' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key for Translate', dashboard: 'https://console.aws.amazon.com/translate' },
      AWS_TRANSLATE_REGION: { description: 'AWS region for Translate', dashboard: 'https://console.aws.amazon.com/translate', required: false },
    },
  },
  {
    name: 'lingo-dev', title: 'Lingo.dev',
    secrets: {
      LINGO_API_KEY: { description: 'Lingo.dev API key', dashboard: 'https://lingo.dev/settings' },
    },
  },
  {
    name: 'nftstorage', title: 'NFT.Storage',
    secrets: {
      NFT_STORAGE_TOKEN: { description: 'NFT.Storage API token', dashboard: 'https://nft.storage/manage/' },
    },
  },
  {
    name: 'web3storage', title: 'Web3.Storage',
    secrets: {
      WEB3STORAGE_TOKEN: { description: 'Web3.Storage API token', dashboard: 'https://web3.storage/account' },
    },
  },
  {
    name: 'aws-iot-core', title: 'AWS IoT Core',
    secrets: {
      AWS_IOT_ENDPOINT: { description: 'AWS IoT endpoint', dashboard: 'https://console.aws.amazon.com/iot' },
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID for IoT', dashboard: 'https://console.aws.amazon.com/iot' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key for IoT', dashboard: 'https://console.aws.amazon.com/iot' },
    },
  },
  {
    name: 'prospeo', title: 'Prospeo',
    secrets: {
      PROSPEO_API_KEY: { description: 'Prospeo API key', dashboard: 'https://prospeo.io/api' },
    },
  },
  {
    name: 'lusha', title: 'Lusha',
    secrets: {
      LUSHA_API_KEY: { description: 'Lusha API key', dashboard: 'https://www.lusha.com/docs/' },
    },
  },
  {
    name: 'zoominfo', title: 'ZoomInfo',
    secrets: {
      ZOOMINFO_CLIENT_ID: { description: 'ZoomInfo client ID', dashboard: 'https://api.zoominfo.com' },
      ZOOMINFO_PRIVATE_KEY: { description: 'ZoomInfo private key', dashboard: 'https://api.zoominfo.com' },
    },
  },
  {
    name: 'beamable', title: 'Beamable',
    secrets: {
      BEAMABLE_CID: { description: 'Beamable customer ID', dashboard: 'https://portal.beamable.com' },
      BEAMABLE_PID: { description: 'Beamable project ID', dashboard: 'https://portal.beamable.com' },
      BEAMABLE_ACCESS_TOKEN: { description: 'Beamable access token', dashboard: 'https://portal.beamable.com' },
    },
  },
  {
    name: 'tray-io', title: 'Tray.io',
    secrets: {
      TRAY_ACCESS_TOKEN: { description: 'Tray.io access token', dashboard: 'https://app.tray.io' },
    },
  },
  {
    name: 'weatherstack', title: 'Weatherstack',
    secrets: {
      WEATHERSTACK_API_KEY: { description: 'Weatherstack API key', dashboard: 'https://weatherstack.com/dashboard' },
    },
  },
  {
    name: 'aws-route53', title: 'AWS Route 53',
    secrets: {
      AWS_ROUTE53_HOSTED_ZONE_ID: { description: 'Route 53 hosted zone ID', dashboard: 'https://console.aws.amazon.com/route53' },
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID for Route 53', dashboard: 'https://console.aws.amazon.com/route53' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key for Route 53', dashboard: 'https://console.aws.amazon.com/route53' },
    },
  },
  {
    name: 'amazon-sqs', title: 'Amazon SQS',
    secrets: {
      AWS_SQS_QUEUE_URL: { description: 'SQS queue URL', dashboard: 'https://console.aws.amazon.com/sqs', validate: 'url' },
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID for SQS', dashboard: 'https://console.aws.amazon.com/sqs' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key for SQS', dashboard: 'https://console.aws.amazon.com/sqs' },
    },
  },
  {
    name: 'amazon-sns', title: 'Amazon SNS',
    secrets: {
      AWS_SNS_TOPIC_ARN: { description: 'SNS topic ARN', dashboard: 'https://console.aws.amazon.com/sns' },
      AWS_ACCESS_KEY_ID: { description: 'AWS access key ID for SNS', dashboard: 'https://console.aws.amazon.com/sns' },
      AWS_SECRET_ACCESS_KEY: { description: 'AWS secret access key for SNS', dashboard: 'https://console.aws.amazon.com/sns' },
    },
  },
  {
    name: 'google-pubsub', title: 'Google Pub/Sub',
    secrets: {
      GOOGLE_CLOUD_PROJECT: { description: 'Google Cloud project ID for Pub/Sub', dashboard: 'https://console.cloud.google.com/cloudpubsub' },
      GOOGLE_APPLICATION_CREDENTIALS: { description: 'Path to GCP service account key', dashboard: 'https://console.cloud.google.com/iam-admin/serviceaccounts', required: false },
    },
  },
  {
    name: 'osano', title: 'Osano',
    secrets: {
      OSANO_CUSTOMER_ID: { description: 'Osano customer ID', dashboard: 'https://www.osano.com' },
    },
  },

  // ===== Batch: AI Search / Web Tools =====
  {
    name: 'tavily', title: 'Tavily',
    secrets: {
      TAVILY_API_KEY: { description: 'Tavily search API key', dashboard: 'https://app.tavily.com' },
    },
  },
  {
    name: 'exa', title: 'Exa',
    secrets: {
      EXA_API_KEY: { description: 'Exa search API key', dashboard: 'https://dashboard.exa.ai/api-keys' },
    },
  },
  {
    name: 'scrapfly', title: 'Scrapfly',
    secrets: {
      SCRAPFLY_KEY: { description: 'Scrapfly API key', dashboard: 'https://scrapfly.io/dashboard' },
    },
  },

  // ===== AI Memory / Context =====
  {
    name: 'zep', title: 'Zep',
    secrets: {
      ZEP_API_KEY: { description: 'Zep API key', dashboard: 'https://app.getzep.com' },
    },
  },
  {
    name: 'mem0', title: 'Mem0',
    secrets: {
      MEM0_API_KEY: { description: 'Mem0 API key', dashboard: 'https://app.mem0.ai/dashboard' },
    },
  },

  // ===== Document Processing =====
  {
    name: 'unstructured', title: 'Unstructured',
    secrets: {
      UNSTRUCTURED_API_KEY: { description: 'Unstructured API key', dashboard: 'https://app.unstructured.io' },
    },
  },
  {
    name: 'llama-cloud', title: 'LlamaCloud',
    secrets: {
      LLAMA_CLOUD_API_KEY: { description: 'LlamaCloud API key', dashboard: 'https://cloud.llamaindex.ai' },
    },
  },

  // ===== Voice / Speech AI =====
  {
    name: 'play-ht', title: 'PlayHT',
    secrets: {
      PLAY_HT_API_KEY: { description: 'PlayHT API key', dashboard: 'https://play.ht/studio/api-access' },
      PLAY_HT_USER_ID: { description: 'PlayHT user ID', dashboard: 'https://play.ht/studio/api-access' },
    },
  },
  {
    name: 'cartesia', title: 'Cartesia',
    secrets: {
      CARTESIA_API_KEY: { description: 'Cartesia API key', dashboard: 'https://play.cartesia.ai/keys' },
    },
  },
  {
    name: 'lmnt', title: 'LMNT',
    secrets: {
      LMNT_API_KEY: { description: 'LMNT speech API key', dashboard: 'https://app.lmnt.com/account' },
    },
  },
  {
    name: 'gladia', title: 'Gladia',
    secrets: {
      GLADIA_API_KEY: { description: 'Gladia transcription API key', dashboard: 'https://app.gladia.io/auth/signin' },
    },
  },
  {
    name: 'speechify', title: 'Speechify',
    secrets: {
      SPEECHIFY_API_KEY: { description: 'Speechify API key', dashboard: 'https://console.speechify.com' },
    },
  },
  {
    name: 'vapi', title: 'Vapi',
    secrets: {
      VAPI_API_KEY: { description: 'Vapi voice AI API key', dashboard: 'https://dashboard.vapi.ai' },
    },
  },
  {
    name: 'retell-ai', title: 'Retell AI',
    secrets: {
      RETELL_API_KEY: { description: 'Retell AI API key', dashboard: 'https://beta.retellai.com' },
    },
  },

  // ===== Video AI =====
  {
    name: 'twelve-labs', title: 'Twelve Labs',
    secrets: {
      TWELVE_LABS_API_KEY: { description: 'Twelve Labs video AI API key', dashboard: 'https://api.twelvelabs.io' },
    },
  },
  {
    name: 'synthesia', title: 'Synthesia',
    secrets: {
      SYNTHESIA_API_KEY: { description: 'Synthesia video API key', dashboard: 'https://www.synthesia.io/api' },
    },
  },
  {
    name: 'heygen', title: 'HeyGen',
    secrets: {
      HEYGEN_API_KEY: { description: 'HeyGen video API key', dashboard: 'https://app.heygen.com/settings' },
    },
  },
  {
    name: 'd-id', title: 'D-ID',
    secrets: {
      D_ID_API_KEY: { description: 'D-ID API key', dashboard: 'https://studio.d-id.com/account-settings' },
    },
  },
  {
    name: 'runway', title: 'Runway',
    secrets: {
      RUNWAYML_API_SECRET: { description: 'Runway API secret', dashboard: 'https://app.runwayml.com/account' },
    },
  },

  // ===== Image AI =====
  {
    name: 'krea', title: 'Krea',
    secrets: {
      KREA_API_KEY: { description: 'Krea image API key', dashboard: 'https://www.krea.ai' },
    },
  },
  {
    name: 'adobe-firefly', title: 'Adobe Firefly',
    secrets: {
      ADOBE_CLIENT_ID: { description: 'Adobe client ID', dashboard: 'https://developer.adobe.com/console' },
      ADOBE_CLIENT_SECRET: { description: 'Adobe client secret', dashboard: 'https://developer.adobe.com/console' },
    },
  },

  // ===== Unified / Integration APIs =====
  {
    name: 'nango', title: 'Nango',
    secrets: {
      NANGO_SECRET_KEY: { description: 'Nango secret key', dashboard: 'https://app.nango.dev/environment-settings' },
    },
  },
  {
    name: 'merge', title: 'Merge',
    secrets: {
      MERGE_API_KEY: { description: 'Merge API key', dashboard: 'https://app.merge.dev/keys' },
    },
  },
  {
    name: 'finch', title: 'Finch',
    secrets: {
      FINCH_CLIENT_ID: { description: 'Finch client ID', dashboard: 'https://developer.tryfinch.com' },
      FINCH_CLIENT_SECRET: { description: 'Finch client secret', dashboard: 'https://developer.tryfinch.com' },
      FINCH_WEBHOOK_SECRET: { description: 'Finch webhook secret', dashboard: 'https://developer.tryfinch.com', required: false },
    },
  },

  // ===== E-commerce =====
  {
    name: 'medusa', title: 'Medusa',
    secrets: {
      MEDUSA_BACKEND_URL: { description: 'Medusa backend URL', dashboard: 'https://medusajs.com', validate: 'url' },
      MEDUSA_PUBLISHABLE_KEY: { description: 'Medusa publishable API key', dashboard: 'https://medusajs.com', required: false },
    },
  },
  {
    name: 'saleor', title: 'Saleor',
    secrets: {
      SALEOR_API_URL: { description: 'Saleor GraphQL API URL', dashboard: 'https://cloud.saleor.io', validate: 'url' },
      SALEOR_APP_TOKEN: { description: 'Saleor app token', dashboard: 'https://cloud.saleor.io', required: false },
    },
  },

  // ===== Link / URL Management =====
  {
    name: 'dub', title: 'Dub',
    secrets: {
      DUB_API_KEY: { description: 'Dub API key', dashboard: 'https://app.dub.co/settings/tokens' },
    },
  },
  {
    name: 'short-io', title: 'Short.io',
    secrets: {
      SHORTIO_API_KEY: { description: 'Short.io API key', dashboard: 'https://app.short.io/settings/api' },
    },
  },
  {
    name: 'bitly', title: 'Bitly',
    secrets: {
      BITLY_ACCESS_TOKEN: { description: 'Bitly access token', dashboard: 'https://app.bitly.com/settings/api/' },
    },
  },

  // ===== Finance / Billing / Expense =====
  {
    name: 'gusto', title: 'Gusto',
    secrets: {
      GUSTO_CLIENT_ID: { description: 'Gusto OAuth client ID', dashboard: 'https://dev.gusto.com' },
      GUSTO_CLIENT_SECRET: { description: 'Gusto OAuth client secret', dashboard: 'https://dev.gusto.com' },
    },
  },
  {
    name: 'brex', title: 'Brex',
    secrets: {
      BREX_TOKEN: { description: 'Brex API token', dashboard: 'https://dashboard.brex.com/settings/developer' },
    },
  },
  {
    name: 'metronome', title: 'Metronome',
    secrets: {
      METRONOME_BEARER_TOKEN: { description: 'Metronome bearer token', dashboard: 'https://app.metronome.com' },
    },
  },
  {
    name: 'openmeter', title: 'OpenMeter',
    secrets: {
      OPENMETER_API_KEY: { description: 'OpenMeter API key', dashboard: 'https://openmeter.cloud' },
    },
  },
  {
    name: 'harvest', title: 'Harvest',
    secrets: {
      HARVEST_ACCOUNT_ID: { description: 'Harvest account ID', dashboard: 'https://id.getharvest.com/developers' },
      HARVEST_ACCESS_TOKEN: { description: 'Harvest personal access token', dashboard: 'https://id.getharvest.com/developers' },
    },
  },
  {
    name: 'rippling', title: 'Rippling',
    secrets: {
      RIPPLING_API_KEY: { description: 'Rippling API key', dashboard: 'https://app.rippling.com/company-settings/api-access' },
    },
  },

  // ===== Travel / Booking =====
  {
    name: 'amadeus', title: 'Amadeus',
    secrets: {
      AMADEUS_CLIENT_ID: { description: 'Amadeus API client ID', dashboard: 'https://developers.amadeus.com/my-apps' },
      AMADEUS_CLIENT_SECRET: { description: 'Amadeus API client secret', dashboard: 'https://developers.amadeus.com/my-apps' },
      AMADEUS_HOSTNAME: { description: 'Amadeus API hostname (test or production)', dashboard: 'https://developers.amadeus.com', required: false },
    },
  },

  // ===== Food / Delivery =====
  {
    name: 'doordash', title: 'DoorDash',
    secrets: {
      DOORDASH_DEVELOPER_ID: { description: 'DoorDash developer ID', dashboard: 'https://developer.doordash.com' },
      DOORDASH_KEY_ID: { description: 'DoorDash key ID', dashboard: 'https://developer.doordash.com' },
      DOORDASH_SIGNING_SECRET: { description: 'DoorDash signing secret', dashboard: 'https://developer.doordash.com' },
    },
  },

  // ===== Healthcare / FHIR =====
  {
    name: 'medplum', title: 'Medplum',
    secrets: {
      MEDPLUM_CLIENT_ID: { description: 'Medplum client ID', dashboard: 'https://app.medplum.com/admin/client' },
      MEDPLUM_CLIENT_SECRET: { description: 'Medplum client secret', dashboard: 'https://app.medplum.com/admin/client' },
      MEDPLUM_BASE_URL: { description: 'Medplum base URL', dashboard: 'https://app.medplum.com', required: false, validate: 'url' },
    },
  },

  // ===== Education =====
  {
    name: 'teachable', title: 'Teachable',
    secrets: {
      TEACHABLE_API_KEY: { description: 'Teachable API key', dashboard: 'https://teachable.com/settings/api' },
    },
  },

  // ===== Music / Audio =====
  {
    name: 'acrcloud', title: 'ACRCloud',
    secrets: {
      ACRCLOUD_ACCESS_KEY: { description: 'ACRCloud access key', dashboard: 'https://console.acrcloud.com' },
      ACRCLOUD_ACCESS_SECRET: { description: 'ACRCloud access secret', dashboard: 'https://console.acrcloud.com' },
      ACRCLOUD_HOST: { description: 'ACRCloud host', dashboard: 'https://console.acrcloud.com' },
    },
  },

  // ===== CDN =====
  {
    name: 'keycdn', title: 'KeyCDN',
    secrets: {
      KEYCDN_API_KEY: { description: 'KeyCDN API key', dashboard: 'https://www.keycdn.com/account' },
    },
  },

  // ===== API Gateway =====
  {
    name: 'tyk', title: 'Tyk',
    secrets: {
      TYK_GW_SECRET: { description: 'Tyk gateway secret', dashboard: 'https://tyk.io' },
    },
  },
  {
    name: 'kong', title: 'Kong',
    secrets: {
      KONG_ADMIN_TOKEN: { description: 'Kong admin API token', dashboard: 'https://cloud.konghq.com' },
    },
  },

  // ===== DAM =====
  {
    name: 'bynder', title: 'Bynder',
    secrets: {
      BYNDER_DOMAIN: { description: 'Bynder portal domain', dashboard: 'https://bynder.com' },
      BYNDER_CLIENT_ID: { description: 'Bynder OAuth client ID', dashboard: 'https://bynder.com' },
      BYNDER_CLIENT_SECRET: { description: 'Bynder OAuth client secret', dashboard: 'https://bynder.com' },
    },
  },

  // ===== Customer Analytics =====
  {
    name: 'churnzero', title: 'ChurnZero',
    secrets: {
      CHURNZERO_API_KEY: { description: 'ChurnZero API key', dashboard: 'https://app.churnzero.net' },
    },
  },

  // ===== SSO / Directory =====
  {
    name: 'jumpcloud', title: 'JumpCloud',
    secrets: {
      JUMPCLOUD_API_KEY: { description: 'JumpCloud API key', dashboard: 'https://console.jumpcloud.com' },
    },
  },

  // ===== Government / Open Data =====
  {
    name: 'fred', title: 'FRED (Federal Reserve)',
    secrets: {
      FRED_API_KEY: { description: 'FRED economic data API key', dashboard: 'https://fred.stlouisfed.org/docs/api/api_key.html' },
    },
  },
  {
    name: 'census', title: 'US Census',
    secrets: {
      CENSUS_API_KEY: { description: 'US Census API key', dashboard: 'https://api.census.gov/data/key_signup.html' },
    },
  },

  // ===== Notifications =====
  {
    name: 'plunk', title: 'Plunk',
    secrets: {
      PLUNK_API_KEY: { description: 'Plunk email API key', dashboard: 'https://www.useplunk.com/settings' },
    },
  },

  // ===== CRM / Sales =====
  {
    name: 'salesflare', title: 'Salesflare',
    secrets: {
      SALESFLARE_API_KEY: { description: 'Salesflare API key', dashboard: 'https://app.salesflare.com' },
    },
  },
  {
    name: 'keap', title: 'Keap (Infusionsoft)',
    secrets: {
      KEAP_CLIENT_ID: { description: 'Keap OAuth client ID', dashboard: 'https://developer.keap.com' },
      KEAP_CLIENT_SECRET: { description: 'Keap OAuth client secret', dashboard: 'https://developer.keap.com' },
    },
  },
  {
    name: 'folk', title: 'Folk CRM',
    secrets: {
      FOLK_API_KEY: { description: 'Folk CRM API key', dashboard: 'https://app.folk.app' },
    },
  },
  {
    name: 'streak', title: 'Streak',
    secrets: {
      STREAK_API_KEY: { description: 'Streak API key', dashboard: 'https://streak.com' },
    },
  },

  // ===== Project Management =====
  {
    name: 'clickup', title: 'ClickUp',
    secrets: {
      CLICKUP_API_KEY: { description: 'ClickUp personal API token', dashboard: 'https://app.clickup.com/settings/apps' },
    },
  },
  {
    name: 'wrike', title: 'Wrike',
    secrets: {
      WRIKE_PERM_ACCESS_TOKEN: { description: 'Wrike permanent access token', dashboard: 'https://www.wrike.com/apps/oauth/access' },
    },
  },
  {
    name: 'basecamp', title: 'Basecamp',
    secrets: {
      BASECAMP_CLIENT_ID: { description: 'Basecamp OAuth client ID', dashboard: 'https://launchpad.37signals.com/integrations' },
      BASECAMP_CLIENT_SECRET: { description: 'Basecamp OAuth client secret', dashboard: 'https://launchpad.37signals.com/integrations' },
    },
  },
  {
    name: 'smartsheet', title: 'Smartsheet',
    secrets: {
      SMARTSHEET_TOKEN: { description: 'Smartsheet API access token', dashboard: 'https://app.smartsheet.com/b/home' },
    },
  },
  {
    name: 'todoist', title: 'Todoist',
    secrets: {
      TODOIST_API_KEY: { description: 'Todoist API token', dashboard: 'https://todoist.com/prefs/integrations' },
    },
  },
  {
    name: 'asana', title: 'Asana',
    secrets: {
      ASANA_ACCESS_TOKEN: { description: 'Asana personal access token', dashboard: 'https://app.asana.com/0/developer-console' },
    },
  },
  {
    name: 'trello', title: 'Trello',
    secrets: {
      TRELLO_API_KEY: { description: 'Trello API key', dashboard: 'https://trello.com/power-ups/admin' },
      TRELLO_TOKEN: { description: 'Trello API token', dashboard: 'https://trello.com/power-ups/admin' },
    },
  },

  // ===== Analytics / Session Replay =====
  {
    name: 'mouseflow', title: 'Mouseflow',
    secrets: {
      MOUSEFLOW_API_KEY: { description: 'Mouseflow API key', dashboard: 'https://app.mouseflow.com/account' },
    },
  },

  // ===== Monitoring =====
  {
    name: 'opsgenie', title: 'OpsGenie',
    secrets: {
      OPSGENIE_API_KEY: { description: 'OpsGenie API key', dashboard: 'https://app.opsgenie.com/settings/api-key-management' },
    },
  },
  {
    name: 'statuspage', title: 'Statuspage (Atlassian)',
    secrets: {
      STATUSPAGE_API_KEY: { description: 'Statuspage API key', dashboard: 'https://manage.statuspage.io/organizations' },
      STATUSPAGE_PAGE_ID: { description: 'Statuspage page ID', dashboard: 'https://manage.statuspage.io', required: false },
    },
  },
  {
    name: 'site24x7', title: 'Site24x7',
    secrets: {
      SITE24X7_API_KEY: { description: 'Site24x7 API key', dashboard: 'https://www.site24x7.com/app/client' },
    },
  },

  // ===== Communication =====
  {
    name: 'signalwire', title: 'SignalWire',
    secrets: {
      SIGNALWIRE_PROJECT_ID: { description: 'SignalWire project ID', dashboard: 'https://signalwire.com' },
      SIGNALWIRE_TOKEN: { description: 'SignalWire API token', dashboard: 'https://signalwire.com' },
      SIGNALWIRE_SPACE: { description: 'SignalWire space name', dashboard: 'https://signalwire.com' },
    },
  },
  {
    name: 'openphone', title: 'OpenPhone',
    secrets: {
      OPENPHONE_API_KEY: { description: 'OpenPhone API key', dashboard: 'https://app.openphone.com/settings/api' },
    },
  },

  // ===== Marketing / Email =====
  {
    name: 'moosend', title: 'Moosend',
    secrets: {
      MOOSEND_API_KEY: { description: 'Moosend API key', dashboard: 'https://moosend.com' },
    },
  },
  {
    name: 'emailoctopus', title: 'EmailOctopus',
    secrets: {
      EMAILOCTOPUS_API_KEY: { description: 'EmailOctopus API key', dashboard: 'https://emailoctopus.com/api-documentation' },
    },
  },
  {
    name: 'beehiiv', title: 'beehiiv',
    secrets: {
      BEEHIIV_API_KEY: { description: 'beehiiv API key', dashboard: 'https://app.beehiiv.com/settings/integrations' },
    },
  },

  // ===== Chat / Support =====
  {
    name: 'tidio', title: 'Tidio',
    secrets: {
      TIDIO_API_KEY: { description: 'Tidio API key', dashboard: 'https://www.tidio.com/panel/settings/integration' },
    },
  },
  {
    name: 'userback', title: 'Userback',
    secrets: {
      USERBACK_ACCESS_TOKEN: { description: 'Userback access token', dashboard: 'https://app.userback.io' },
    },
  },

  // ===== Crypto / DeFi =====
  {
    name: 'helius', title: 'Helius (Solana)',
    secrets: {
      HELIUS_API_KEY: { description: 'Helius API key for Solana', dashboard: 'https://dashboard.helius.dev' },
    },
  },
  {
    name: 'coingecko', title: 'CoinGecko',
    secrets: {
      COINGECKO_API_KEY: { description: 'CoinGecko Pro API key', dashboard: 'https://www.coingecko.com/en/api/pricing' },
    },
  },
  {
    name: 'coinmarketcap', title: 'CoinMarketCap',
    secrets: {
      COINMARKETCAP_API_KEY: { description: 'CoinMarketCap API key', dashboard: 'https://pro.coinmarketcap.com/account' },
    },
  },
  {
    name: 'polygon-io', title: 'Polygon.io',
    secrets: {
      POLYGON_API_KEY: { description: 'Polygon.io stocks/crypto API key', dashboard: 'https://polygon.io/dashboard/api-keys' },
    },
  },
  {
    name: 'alpaca', title: 'Alpaca',
    secrets: {
      ALPACA_API_KEY_ID: { description: 'Alpaca API key ID', dashboard: 'https://app.alpaca.markets/paper/dashboard/overview' },
      ALPACA_SECRET_KEY: { description: 'Alpaca secret key', dashboard: 'https://app.alpaca.markets/paper/dashboard/overview' },
    },
  },

  // ===== Testing =====
  {
    name: 'browserstack', title: 'BrowserStack',
    secrets: {
      BROWSERSTACK_USERNAME: { description: 'BrowserStack username', dashboard: 'https://www.browserstack.com/accounts/settings' },
      BROWSERSTACK_ACCESS_KEY: { description: 'BrowserStack access key', dashboard: 'https://www.browserstack.com/accounts/settings' },
    },
  },
  {
    name: 'sauce-labs', title: 'Sauce Labs',
    secrets: {
      SAUCE_USERNAME: { description: 'Sauce Labs username', dashboard: 'https://accounts.saucelabs.com' },
      SAUCE_ACCESS_KEY: { description: 'Sauce Labs access key', dashboard: 'https://accounts.saucelabs.com' },
    },
  },
  {
    name: 'percy', title: 'Percy (BrowserStack)',
    secrets: {
      PERCY_TOKEN: { description: 'Percy token for visual testing', dashboard: 'https://percy.io' },
    },
  },
  {
    name: 'chromatic', title: 'Chromatic',
    secrets: {
      CHROMATIC_PROJECT_TOKEN: { description: 'Chromatic project token', dashboard: 'https://www.chromatic.com/manage' },
    },
  },
  {
    name: 'lambdatest', title: 'LambdaTest',
    secrets: {
      LT_USERNAME: { description: 'LambdaTest username', dashboard: 'https://accounts.lambdatest.com/detail/profile' },
      LT_ACCESS_KEY: { description: 'LambdaTest access key', dashboard: 'https://accounts.lambdatest.com/detail/profile' },
    },
  },

  // ===== Data pipeline / ETL =====
  {
    name: 'airbyte', title: 'Airbyte',
    secrets: {
      AIRBYTE_API_KEY: { description: 'Airbyte API key', dashboard: 'https://cloud.airbyte.com' },
    },
  },
  {
    name: 'hightouch', title: 'Hightouch',
    secrets: {
      HIGHTOUCH_API_KEY: { description: 'Hightouch API key', dashboard: 'https://app.hightouch.com/settings/api-keys' },
    },
  },
  {
    name: 'census-data', title: 'Census (Reverse ETL)',
    secrets: {
      CENSUS_SECRET_TOKEN: { description: 'Census API secret token', dashboard: 'https://app.getcensus.com' },
    },
  },
  {
    name: 'fivetran', title: 'Fivetran',
    secrets: {
      FIVETRAN_API_KEY: { description: 'Fivetran API key', dashboard: 'https://fivetran.com/account/settings' },
      FIVETRAN_API_SECRET: { description: 'Fivetran API secret', dashboard: 'https://fivetran.com/account/settings' },
    },
  },

  // ===== BI / Reporting =====
  {
    name: 'metabase', title: 'Metabase',
    secrets: {
      METABASE_SITE_URL: { description: 'Metabase instance URL', dashboard: 'https://metabase.com', validate: 'url' },
      METABASE_API_KEY: { description: 'Metabase API key', dashboard: 'https://metabase.com' },
    },
  },
  {
    name: 'preset', title: 'Preset (Superset Cloud)',
    secrets: {
      PRESET_API_TOKEN: { description: 'Preset API token', dashboard: 'https://manage.app.preset.io' },
      PRESET_API_SECRET: { description: 'Preset API secret', dashboard: 'https://manage.app.preset.io' },
    },
  },

  // ===== Chatbot / Conversational =====
  {
    name: 'botpress', title: 'Botpress',
    secrets: {
      BOTPRESS_TOKEN: { description: 'Botpress personal access token', dashboard: 'https://app.botpress.cloud' },
    },
  },
  {
    name: 'voiceflow', title: 'Voiceflow',
    secrets: {
      VOICEFLOW_API_KEY: { description: 'Voiceflow API key', dashboard: 'https://www.voiceflow.com' },
    },
  },
  {
    name: 'rasa', title: 'Rasa',
    secrets: {
      RASA_PRO_LICENSE: { description: 'Rasa Pro license key', dashboard: 'https://rasa.com' },
    },
  },

  // ===== Dev Environments =====
  {
    name: 'gitpod', title: 'Gitpod',
    secrets: {
      GITPOD_TOKEN: { description: 'Gitpod API token', dashboard: 'https://gitpod.io/access-control' },
    },
  },
  {
    name: 'codespaces', title: 'GitHub Codespaces',
    secrets: {
      CODESPACES_TOKEN: { description: 'Codespaces access token', dashboard: 'https://github.com/settings/tokens' },
    },
  },

  // ===== Backup =====
  {
    name: 'rewind-ai', title: 'Rewind Backups',
    secrets: {
      REWIND_API_KEY: { description: 'Rewind backup API key', dashboard: 'https://rewind.com' },
    },
  },

  // ===== Image Processing =====
  {
    name: 'imgix', title: 'imgix',
    secrets: {
      IMGIX_API_KEY: { description: 'imgix management API key', dashboard: 'https://dashboard.imgix.com/api-keys' },
      IMGIX_DOMAIN: { description: 'imgix source domain', dashboard: 'https://dashboard.imgix.com', required: false },
    },
  },
  {
    name: 'thumbor', title: 'Thumbor',
    secrets: {
      THUMBOR_SECURITY_KEY: { description: 'Thumbor security key', dashboard: 'https://thumbor.readthedocs.io' },
      THUMBOR_URL: { description: 'Thumbor server URL', dashboard: 'https://thumbor.readthedocs.io', validate: 'url' },
    },
  },

  // ===== File Conversion =====
  {
    name: 'convertapi', title: 'ConvertAPI',
    secrets: {
      CONVERTAPI_SECRET: { description: 'ConvertAPI secret', dashboard: 'https://www.convertapi.com/a/auth' },
    },
  },
  {
    name: 'cloudconvert', title: 'CloudConvert',
    secrets: {
      CLOUDCONVERT_API_KEY: { description: 'CloudConvert API key', dashboard: 'https://cloudconvert.com/dashboard/api/v2/keys' },
    },
  },

  // ===== Dropbox / Box / Cloud Storage =====
  {
    name: 'dropbox', title: 'Dropbox',
    secrets: {
      DROPBOX_ACCESS_TOKEN: { description: 'Dropbox access token', dashboard: 'https://www.dropbox.com/developers/apps' },
      DROPBOX_APP_KEY: { description: 'Dropbox app key', dashboard: 'https://www.dropbox.com/developers/apps', required: false },
      DROPBOX_APP_SECRET: { description: 'Dropbox app secret', dashboard: 'https://www.dropbox.com/developers/apps', required: false },
    },
  },
  {
    name: 'box', title: 'Box',
    secrets: {
      BOX_CLIENT_ID: { description: 'Box OAuth client ID', dashboard: 'https://app.box.com/developers/console' },
      BOX_CLIENT_SECRET: { description: 'Box OAuth client secret', dashboard: 'https://app.box.com/developers/console' },
    },
  },
  {
    name: 'google-drive', title: 'Google Drive',
    secrets: {
      GOOGLE_DRIVE_CLIENT_ID: { description: 'Google Drive OAuth client ID', dashboard: 'https://console.cloud.google.com/apis/credentials' },
      GOOGLE_DRIVE_CLIENT_SECRET: { description: 'Google Drive OAuth client secret', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'onedrive', title: 'OneDrive',
    secrets: {
      ONEDRIVE_CLIENT_ID: { description: 'OneDrive OAuth client ID', dashboard: 'https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps' },
      ONEDRIVE_CLIENT_SECRET: { description: 'OneDrive OAuth client secret', dashboard: 'https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps' },
    },
  },

  // ===== Automation / RPA =====
  {
    name: 'phantombuster', title: 'PhantomBuster',
    secrets: {
      PHANTOMBUSTER_API_KEY: { description: 'PhantomBuster API key', dashboard: 'https://phantombuster.com/api-store' },
    },
  },

  // ===== Payment / Billing (more) =====
  {
    name: 'polar', title: 'Polar',
    secrets: {
      POLAR_ACCESS_TOKEN: { description: 'Polar access token', dashboard: 'https://polar.sh/settings' },
    },
  },
  {
    name: 'creem', title: 'Creem',
    secrets: {
      CREEM_API_KEY: { description: 'Creem API key', dashboard: 'https://creem.io' },
    },
  },

  // ===== No-code / Backend =====
  {
    name: 'xano', title: 'Xano',
    secrets: {
      XANO_API_KEY: { description: 'Xano API key', dashboard: 'https://xano.com' },
    },
  },
  {
    name: 'pocketbase', title: 'PocketBase',
    secrets: {
      POCKETBASE_URL: { description: 'PocketBase URL', dashboard: 'https://pocketbase.io', validate: 'url' },
      POCKETBASE_ADMIN_EMAIL: { description: 'PocketBase admin email', dashboard: 'https://pocketbase.io', required: false },
      POCKETBASE_ADMIN_PASSWORD: { description: 'PocketBase admin password', dashboard: 'https://pocketbase.io', required: false },
    },
  },

  // ===== Observability (more) =====
  {
    name: 'highlight', title: 'Highlight.io',
    secrets: {
      HIGHLIGHT_PROJECT_ID: { description: 'Highlight project ID', dashboard: 'https://app.highlight.io' },
    },
  },

  // ===== Real Estate =====
  {
    name: 'attom-data', title: 'ATTOM Data',
    secrets: {
      ATTOM_API_KEY: { description: 'ATTOM property data API key', dashboard: 'https://api.developer.attomdata.com' },
    },
  },

  // ===== SMS / Messaging (more) =====
  {
    name: 'routee', title: 'Routee',
    secrets: {
      ROUTEE_APPLICATION_ID: { description: 'Routee application ID', dashboard: 'https://routee.net' },
      ROUTEE_APPLICATION_SECRET: { description: 'Routee application secret', dashboard: 'https://routee.net' },
    },
  },
  {
    name: 'zenvia', title: 'Zenvia',
    secrets: {
      ZENVIA_TOKEN: { description: 'Zenvia API token', dashboard: 'https://app.zenvia.com' },
    },
  },

  // ===== Scheduling (more) =====
  {
    name: 'calendly', title: 'Calendly',
    secrets: {
      CALENDLY_API_KEY: { description: 'Calendly personal access token', dashboard: 'https://calendly.com/integrations/api_webhooks' },
    },
  },

  // ===== Content / Headless CMS (more) =====
  {
    name: 'strapi', title: 'Strapi',
    secrets: {
      STRAPI_API_TOKEN: { description: 'Strapi API token', dashboard: 'https://strapi.io' },
      STRAPI_URL: { description: 'Strapi instance URL', dashboard: 'https://strapi.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'butter-cms', title: 'ButterCMS',
    secrets: {
      BUTTER_CMS_API_KEY: { description: 'ButterCMS API key', dashboard: 'https://buttercms.com/settings/' },
    },
  },
  {
    name: 'dato-cms', title: 'DatoCMS',
    secrets: {
      DATOCMS_API_TOKEN: { description: 'DatoCMS API token', dashboard: 'https://www.datocms.com/dashboard' },
    },
  },
  {
    name: 'caisy', title: 'Caisy',
    secrets: {
      CAISY_API_KEY: { description: 'Caisy API key', dashboard: 'https://app.caisy.io' },
    },
  },

  // ===== Cloud Storage (more) =====
  {
    name: 'minio', title: 'MinIO',
    secrets: {
      MINIO_ENDPOINT: { description: 'MinIO endpoint URL', dashboard: 'https://min.io', validate: 'url' },
      MINIO_ACCESS_KEY: { description: 'MinIO access key', dashboard: 'https://min.io' },
      MINIO_SECRET_KEY: { description: 'MinIO secret key', dashboard: 'https://min.io' },
    },
  },
  {
    name: 'r2', title: 'Cloudflare R2',
    secrets: {
      R2_ACCOUNT_ID: { description: 'Cloudflare account ID for R2', dashboard: 'https://dash.cloudflare.com' },
      R2_ACCESS_KEY_ID: { description: 'R2 access key ID', dashboard: 'https://dash.cloudflare.com' },
      R2_SECRET_ACCESS_KEY: { description: 'R2 secret access key', dashboard: 'https://dash.cloudflare.com' },
    },
  },

  // ===== Feature Management (more) =====
  {
    name: 'bucket', title: 'Bucket',
    secrets: {
      BUCKET_SECRET_KEY: { description: 'Bucket secret key', dashboard: 'https://app.bucket.co' },
    },
  },
  {
    name: 'flipt', title: 'Flipt',
    secrets: {
      FLIPT_API_TOKEN: { description: 'Flipt API token', dashboard: 'https://flipt.io' },
    },
  },

  // ===== Access Management =====
  {
    name: 'cerbos', title: 'Cerbos',
    secrets: {
      CERBOS_HUB_CLIENT_ID: { description: 'Cerbos Hub client ID', dashboard: 'https://hub.cerbos.dev' },
      CERBOS_HUB_CLIENT_SECRET: { description: 'Cerbos Hub client secret', dashboard: 'https://hub.cerbos.dev' },
    },
  },
  {
    name: 'openfga', title: 'OpenFGA',
    secrets: {
      FGA_API_URL: { description: 'OpenFGA API URL', dashboard: 'https://openfga.dev', validate: 'url' },
      FGA_STORE_ID: { description: 'OpenFGA store ID', dashboard: 'https://openfga.dev' },
      FGA_API_TOKEN: { description: 'OpenFGA API token', dashboard: 'https://openfga.dev', required: false },
    },
  },

  // ===== Error Tracking (more) =====
  {
    name: 'exceptionless', title: 'Exceptionless',
    secrets: {
      EXCEPTIONLESS_API_KEY: { description: 'Exceptionless API key', dashboard: 'https://exceptionless.com' },
    },
  },

  // ===== Rate Limiting / Security =====
  {
    name: 'unkey', title: 'Unkey',
    secrets: {
      UNKEY_ROOT_KEY: { description: 'Unkey root key', dashboard: 'https://app.unkey.com' },
    },
  },

  // ===== Geofencing / Location (more) =====
  {
    name: 'mapbox-search', title: 'Mapbox Search',
    secrets: {
      MAPBOX_SEARCH_TOKEN: { description: 'Mapbox Search API token', dashboard: 'https://account.mapbox.com/access-tokens/' },
    },
  },

  // ===== Misc APIs =====
  {
    name: 'giphy', title: 'GIPHY',
    secrets: {
      GIPHY_API_KEY: { description: 'GIPHY API key', dashboard: 'https://developers.giphy.com/dashboard/' },
    },
  },
  {
    name: 'unsplash', title: 'Unsplash',
    secrets: {
      UNSPLASH_ACCESS_KEY: { description: 'Unsplash access key', dashboard: 'https://unsplash.com/oauth/applications' },
    },
  },
  {
    name: 'pexels', title: 'Pexels',
    secrets: {
      PEXELS_API_KEY: { description: 'Pexels API key', dashboard: 'https://www.pexels.com/api/new/' },
    },
  },
  {
    name: 'twitch-ext', title: 'Twitch Extensions',
    secrets: {
      TWITCH_EXT_CLIENT_ID: { description: 'Twitch extension client ID', dashboard: 'https://dev.twitch.tv/console/extensions' },
      TWITCH_EXT_SECRET: { description: 'Twitch extension secret', dashboard: 'https://dev.twitch.tv/console/extensions' },
    },
  },
  {
    name: 'strava', title: 'Strava',
    secrets: {
      STRAVA_CLIENT_ID: { description: 'Strava API client ID', dashboard: 'https://www.strava.com/settings/api' },
      STRAVA_CLIENT_SECRET: { description: 'Strava API client secret', dashboard: 'https://www.strava.com/settings/api' },
    },
  },
  {
    name: 'fitbit', title: 'Fitbit',
    secrets: {
      FITBIT_CLIENT_ID: { description: 'Fitbit OAuth client ID', dashboard: 'https://dev.fitbit.com/apps' },
      FITBIT_CLIENT_SECRET: { description: 'Fitbit OAuth client secret', dashboard: 'https://dev.fitbit.com/apps' },
    },
  },
  {
    name: 'withings', title: 'Withings',
    secrets: {
      WITHINGS_CLIENT_ID: { description: 'Withings OAuth client ID', dashboard: 'https://developer.withings.com/dashboard' },
      WITHINGS_CLIENT_SECRET: { description: 'Withings OAuth client secret', dashboard: 'https://developer.withings.com/dashboard' },
    },
  },
  {
    name: 'oura', title: 'Oura Ring',
    secrets: {
      OURA_ACCESS_TOKEN: { description: 'Oura Ring personal access token', dashboard: 'https://cloud.ouraring.com/personal-access-tokens' },
    },
  },
  {
    name: 'tmdb', title: 'TMDB (The Movie Database)',
    secrets: {
      TMDB_API_KEY: { description: 'TMDB API key', dashboard: 'https://www.themoviedb.org/settings/api' },
    },
  },
  {
    name: 'omdb', title: 'OMDb',
    secrets: {
      OMDB_API_KEY: { description: 'OMDb API key', dashboard: 'https://www.omdbapi.com/apikey.aspx' },
    },
  },
  {
    name: 'rawg', title: 'RAWG (Video Games)',
    secrets: {
      RAWG_API_KEY: { description: 'RAWG video games API key', dashboard: 'https://rawg.io/apidocs' },
    },
  },
  {
    name: 'igdb', title: 'IGDB',
    secrets: {
      IGDB_CLIENT_ID: { description: 'IGDB (Twitch) client ID', dashboard: 'https://api-docs.igdb.com/#account-creation' },
      IGDB_CLIENT_SECRET: { description: 'IGDB (Twitch) client secret', dashboard: 'https://api-docs.igdb.com/#account-creation' },
    },
  },
  {
    name: 'yelp', title: 'Yelp Fusion',
    secrets: {
      YELP_API_KEY: { description: 'Yelp Fusion API key', dashboard: 'https://www.yelp.com/developers/v3/manage_app' },
    },
  },
  {
    name: 'foursquare', title: 'Foursquare',
    secrets: {
      FOURSQUARE_API_KEY: { description: 'Foursquare Places API key', dashboard: 'https://foursquare.com/developers/home' },
    },
  },
  {
    name: 'google-places', title: 'Google Places',
    secrets: {
      GOOGLE_PLACES_API_KEY: { description: 'Google Places API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'openai-whisper', title: 'OpenAI Whisper (self-hosted)',
    secrets: {
      WHISPER_API_URL: { description: 'Whisper API URL', dashboard: 'https://platform.openai.com', validate: 'url' },
      WHISPER_API_KEY: { description: 'Whisper API key', dashboard: 'https://platform.openai.com', required: false },
    },
  },
  {
    name: 'kokoro', title: 'Kokoro TTS',
    secrets: {
      KOKORO_API_KEY: { description: 'Kokoro TTS API key', dashboard: 'https://kokoro.ai' },
    },
  },
  {
    name: 'groqcloud', title: 'GroqCloud (Whisper)',
    secrets: {
      GROQ_WHISPER_API_KEY: { description: 'GroqCloud Whisper API key', dashboard: 'https://console.groq.com/keys' },
    },
  },

  // ===== Observability / Profiling =====
  {
    name: 'pyroscope', title: 'Pyroscope (Grafana)',
    secrets: {
      PYROSCOPE_SERVER_ADDRESS: { description: 'Pyroscope server address', dashboard: 'https://grafana.com/products/cloud/profiles/', validate: 'url' },
      PYROSCOPE_AUTH_TOKEN: { description: 'Pyroscope auth token', dashboard: 'https://grafana.com', required: false },
    },
  },

  // ===== Legal / Compliance =====
  {
    name: 'docassemble', title: 'Docassemble',
    secrets: {
      DOCASSEMBLE_API_KEY: { description: 'Docassemble API key', dashboard: 'https://docassemble.org' },
      DOCASSEMBLE_URL: { description: 'Docassemble server URL', dashboard: 'https://docassemble.org', validate: 'url' },
    },
  },

  // ===== Geolocation / IP (more) =====
  {
    name: 'ip2location', title: 'IP2Location',
    secrets: {
      IP2LOCATION_API_KEY: { description: 'IP2Location API key', dashboard: 'https://www.ip2location.io/dashboard' },
    },
  },

  // ===== Productivity / Docs =====
  {
    name: 'google-sheets', title: 'Google Sheets',
    secrets: {
      GOOGLE_SHEETS_CLIENT_EMAIL: { description: 'Google Sheets service account email', dashboard: 'https://console.cloud.google.com/apis/credentials' },
      GOOGLE_SHEETS_PRIVATE_KEY: { description: 'Google Sheets service account private key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'airtable-api', title: 'Airtable API',
    secrets: {
      AIRTABLE_PAT: { description: 'Airtable personal access token', dashboard: 'https://airtable.com/create/tokens' },
    },
  },

  // ===== More services batch =====
  // Cloud Providers - Specific Services
  {
    name: 'azure-blob', title: 'Azure Blob Storage',
    secrets: {
      AZURE_STORAGE_CONNECTION_STRING: { description: 'Azure Blob Storage connection string', dashboard: 'https://portal.azure.com' },
      AZURE_STORAGE_ACCOUNT_NAME: { description: 'Azure storage account name', dashboard: 'https://portal.azure.com', required: false },
      AZURE_STORAGE_ACCOUNT_KEY: { description: 'Azure storage account key', dashboard: 'https://portal.azure.com', required: false },
    },
  },
  {
    name: 'azure-functions', title: 'Azure Functions',
    secrets: {
      AZURE_FUNCTIONS_KEY: { description: 'Azure Functions host key', dashboard: 'https://portal.azure.com' },
    },
  },
  {
    name: 'azure-cognitive', title: 'Azure Cognitive Services',
    secrets: {
      AZURE_COGNITIVE_ENDPOINT: { description: 'Azure Cognitive Services endpoint', dashboard: 'https://portal.azure.com', validate: 'url' },
      AZURE_COGNITIVE_KEY: { description: 'Azure Cognitive Services key', dashboard: 'https://portal.azure.com' },
    },
  },
  {
    name: 'azure-search', title: 'Azure AI Search',
    secrets: {
      AZURE_SEARCH_ENDPOINT: { description: 'Azure AI Search endpoint', dashboard: 'https://portal.azure.com', validate: 'url' },
      AZURE_SEARCH_KEY: { description: 'Azure AI Search admin key', dashboard: 'https://portal.azure.com' },
    },
  },
  {
    name: 'azure-cosmos-nosql', title: 'Azure Cosmos DB NoSQL',
    secrets: {
      AZURE_COSMOS_ENDPOINT: { description: 'Azure Cosmos DB endpoint', dashboard: 'https://portal.azure.com', validate: 'url' },
      AZURE_COSMOS_KEY: { description: 'Azure Cosmos DB key', dashboard: 'https://portal.azure.com' },
    },
  },
  {
    name: 'gcp-storage', title: 'Google Cloud Storage',
    secrets: {
      GCS_BUCKET_NAME: { description: 'Google Cloud Storage bucket name', dashboard: 'https://console.cloud.google.com/storage' },
      GCS_PROJECT_ID: { description: 'GCP project ID for Cloud Storage', dashboard: 'https://console.cloud.google.com/storage', required: false },
    },
  },
  {
    name: 'gcp-vision', title: 'Google Cloud Vision',
    secrets: {
      GOOGLE_VISION_API_KEY: { description: 'Google Cloud Vision API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'gcp-speech', title: 'Google Cloud Speech-to-Text',
    secrets: {
      GOOGLE_SPEECH_API_KEY: { description: 'Google Cloud Speech API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'gcp-tts', title: 'Google Cloud Text-to-Speech',
    secrets: {
      GOOGLE_TTS_API_KEY: { description: 'Google Cloud Text-to-Speech API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },
  {
    name: 'oracle-cloud', title: 'Oracle Cloud',
    secrets: {
      OCI_TENANCY: { description: 'Oracle Cloud tenancy OCID', dashboard: 'https://cloud.oracle.com' },
      OCI_USER: { description: 'Oracle Cloud user OCID', dashboard: 'https://cloud.oracle.com' },
      OCI_FINGERPRINT: { description: 'Oracle Cloud API key fingerprint', dashboard: 'https://cloud.oracle.com' },
      OCI_PRIVATE_KEY: { description: 'Oracle Cloud API private key', dashboard: 'https://cloud.oracle.com' },
    },
  },
  {
    name: 'ibm-cloud', title: 'IBM Cloud',
    secrets: {
      IBM_CLOUD_API_KEY: { description: 'IBM Cloud API key', dashboard: 'https://cloud.ibm.com/iam/apikeys' },
    },
  },

  // Accounting / ERP / Invoicing
  {
    name: 'quickbooks', title: 'QuickBooks',
    secrets: {
      QUICKBOOKS_CLIENT_ID: { description: 'QuickBooks OAuth client ID', dashboard: 'https://developer.intuit.com/app/developer/dashboard' },
      QUICKBOOKS_CLIENT_SECRET: { description: 'QuickBooks OAuth client secret', dashboard: 'https://developer.intuit.com/app/developer/dashboard' },
    },
  },
  {
    name: 'xero', title: 'Xero',
    secrets: {
      XERO_CLIENT_ID: { description: 'Xero OAuth client ID', dashboard: 'https://developer.xero.com/app/manage' },
      XERO_CLIENT_SECRET: { description: 'Xero OAuth client secret', dashboard: 'https://developer.xero.com/app/manage' },
    },
  },
  {
    name: 'freshbooks', title: 'FreshBooks',
    secrets: {
      FRESHBOOKS_CLIENT_ID: { description: 'FreshBooks OAuth client ID', dashboard: 'https://my.freshbooks.com/#/developer' },
      FRESHBOOKS_CLIENT_SECRET: { description: 'FreshBooks OAuth client secret', dashboard: 'https://my.freshbooks.com/#/developer' },
    },
  },
  {
    name: 'wave', title: 'Wave Accounting',
    secrets: {
      WAVE_ACCESS_TOKEN: { description: 'Wave full access token', dashboard: 'https://developer.waveapps.com/hc/en-us/articles/360019762711' },
    },
  },
  {
    name: 'sage', title: 'Sage',
    secrets: {
      SAGE_CLIENT_ID: { description: 'Sage OAuth client ID', dashboard: 'https://developerselfservice.sageone.com' },
      SAGE_CLIENT_SECRET: { description: 'Sage OAuth client secret', dashboard: 'https://developerselfservice.sageone.com' },
    },
  },

  // HR / People / Payroll
  {
    name: 'bamboohr', title: 'BambooHR',
    secrets: {
      BAMBOOHR_API_KEY: { description: 'BambooHR API key', dashboard: 'https://www.bamboohr.com' },
      BAMBOOHR_SUBDOMAIN: { description: 'BambooHR company subdomain', dashboard: 'https://www.bamboohr.com' },
    },
  },
  {
    name: 'deel', title: 'Deel',
    secrets: {
      DEEL_API_TOKEN: { description: 'Deel API token', dashboard: 'https://app.deel.com/developer-hub' },
    },
  },
  {
    name: 'remote', title: 'Remote.com',
    secrets: {
      REMOTE_API_TOKEN: { description: 'Remote.com API token', dashboard: 'https://remote.com/dashboard/developer-hub' },
    },
  },
  {
    name: 'personio', title: 'Personio',
    secrets: {
      PERSONIO_CLIENT_ID: { description: 'Personio client ID', dashboard: 'https://www.personio.de' },
      PERSONIO_CLIENT_SECRET: { description: 'Personio client secret', dashboard: 'https://www.personio.de' },
    },
  },
  {
    name: 'hibob', title: 'HiBob',
    secrets: {
      HIBOB_SERVICE_USER_ID: { description: 'HiBob service user ID', dashboard: 'https://app.hibob.com' },
      HIBOB_TOKEN: { description: 'HiBob API token', dashboard: 'https://app.hibob.com' },
    },
  },

  // Accessibility
  {
    name: 'accessibe', title: 'accessiBe',
    secrets: {
      ACCESSIBE_API_KEY: { description: 'accessiBe API key', dashboard: 'https://accessibe.com' },
    },
  },

  // Logging / APM (more)
  {
    name: 'logsnag', title: 'LogSnag',
    secrets: {
      LOGSNAG_TOKEN: { description: 'LogSnag API token', dashboard: 'https://app.logsnag.com/dashboard/settings/api' },
    },
  },
  {
    name: 'baselime', title: 'Baselime',
    secrets: {
      BASELIME_API_KEY: { description: 'Baselime API key', dashboard: 'https://console.baselime.io' },
    },
  },

  // Communication (more)
  {
    name: 'stream-chat', title: 'Stream Chat',
    secrets: {
      STREAM_CHAT_API_KEY: { description: 'Stream Chat API key', dashboard: 'https://dashboard.getstream.io' },
      STREAM_CHAT_API_SECRET: { description: 'Stream Chat API secret', dashboard: 'https://dashboard.getstream.io' },
    },
  },
  {
    name: 'sendbird', title: 'Sendbird',
    secrets: {
      SENDBIRD_APP_ID: { description: 'Sendbird application ID', dashboard: 'https://dashboard.sendbird.com' },
      SENDBIRD_API_TOKEN: { description: 'Sendbird API token', dashboard: 'https://dashboard.sendbird.com' },
    },
  },
  {
    name: 'cometchat', title: 'CometChat',
    secrets: {
      COMETCHAT_APP_ID: { description: 'CometChat app ID', dashboard: 'https://app.cometchat.com' },
      COMETCHAT_AUTH_KEY: { description: 'CometChat auth key', dashboard: 'https://app.cometchat.com' },
      COMETCHAT_API_KEY: { description: 'CometChat REST API key', dashboard: 'https://app.cometchat.com', required: false },
    },
  },

  // Stock / Financial Data (more)
  {
    name: 'finnhub', title: 'Finnhub',
    secrets: {
      FINNHUB_API_KEY: { description: 'Finnhub stock API key', dashboard: 'https://finnhub.io/dashboard' },
    },
  },
  {
    name: 'alpha-vantage', title: 'Alpha Vantage',
    secrets: {
      ALPHA_VANTAGE_API_KEY: { description: 'Alpha Vantage API key', dashboard: 'https://www.alphavantage.co/support/#api-key' },
    },
  },
  {
    name: 'iex-cloud', title: 'IEX Cloud',
    secrets: {
      IEX_CLOUD_API_TOKEN: { description: 'IEX Cloud API token', dashboard: 'https://iexcloud.io/console/tokens' },
    },
  },

  // Webhooks / Events
  {
    name: 'ngrok', title: 'ngrok',
    secrets: {
      NGROK_AUTHTOKEN: { description: 'ngrok auth token', dashboard: 'https://dashboard.ngrok.com/get-started/your-authtoken' },
    },
  },

  // Customer Feedback
  {
    name: 'canny', title: 'Canny',
    secrets: {
      CANNY_API_KEY: { description: 'Canny API key', dashboard: 'https://canny.io/account/api' },
    },
  },
  {
    name: 'productboard', title: 'Productboard',
    secrets: {
      PRODUCTBOARD_API_TOKEN: { description: 'Productboard API token', dashboard: 'https://app.productboard.com' },
    },
  },

  // Referrals / Affiliates
  {
    name: 'rewardful', title: 'Rewardful',
    secrets: {
      REWARDFUL_API_SECRET: { description: 'Rewardful API secret', dashboard: 'https://www.rewardful.com' },
    },
  },
  {
    name: 'partnerstack', title: 'PartnerStack',
    secrets: {
      PARTNERSTACK_PUBLIC_KEY: { description: 'PartnerStack public key', dashboard: 'https://app.partnerstack.com' },
      PARTNERSTACK_SECRET_KEY: { description: 'PartnerStack secret key', dashboard: 'https://app.partnerstack.com' },
    },
  },

  // Customer Success
  {
    name: 'gainsight', title: 'Gainsight',
    secrets: {
      GAINSIGHT_API_KEY: { description: 'Gainsight API key', dashboard: 'https://gainsight.com' },
    },
  },
  {
    name: 'vitally', title: 'Vitally',
    secrets: {
      VITALLY_API_KEY: { description: 'Vitally API key', dashboard: 'https://app.vitally.io/settings/api-keys' },
    },
  },

  // No-code / Automation (more)
  {
    name: 'retool', title: 'Retool',
    secrets: {
      RETOOL_API_KEY: { description: 'Retool API key', dashboard: 'https://retool.com' },
    },
  },
  {
    name: 'appsmith', title: 'Appsmith',
    secrets: {
      APPSMITH_API_KEY: { description: 'Appsmith API key', dashboard: 'https://app.appsmith.com' },
    },
  },
  {
    name: 'budibase', title: 'Budibase',
    secrets: {
      BUDIBASE_API_KEY: { description: 'Budibase API key', dashboard: 'https://budibase.app' },
    },
  },

  // Database Tools / ORM
  {
    name: 'prisma-accelerate', title: 'Prisma Accelerate',
    secrets: {
      PRISMA_ACCELERATE_API_KEY: { description: 'Prisma Accelerate connection pooler API key', dashboard: 'https://console.prisma.io' },
    },
  },
  {
    name: 'prisma-pulse', title: 'Prisma Pulse',
    secrets: {
      PRISMA_PULSE_API_KEY: { description: 'Prisma Pulse real-time API key', dashboard: 'https://console.prisma.io' },
    },
  },

  // Security (more)
  {
    name: 'snyk-container', title: 'Snyk Container',
    secrets: {
      SNYK_CONTAINER_TOKEN: { description: 'Snyk Container scanning token', dashboard: 'https://app.snyk.io/account' },
    },
  },
  {
    name: 'aqua', title: 'Aqua Security',
    secrets: {
      AQUA_KEY: { description: 'Aqua Security API key', dashboard: 'https://www.aquasec.com' },
      AQUA_SECRET: { description: 'Aqua Security API secret', dashboard: 'https://www.aquasec.com' },
    },
  },
  {
    name: 'veracode', title: 'Veracode',
    secrets: {
      VERACODE_API_ID: { description: 'Veracode API ID', dashboard: 'https://web.analysiscenter.veracode.com' },
      VERACODE_API_KEY: { description: 'Veracode API key', dashboard: 'https://web.analysiscenter.veracode.com' },
    },
  },

  // Misc Productivity
  {
    name: 'slack-webhook', title: 'Slack Webhooks',
    secrets: {
      SLACK_WEBHOOK_URL: { description: 'Slack incoming webhook URL', dashboard: 'https://api.slack.com/apps', validate: 'url' },
    },
  },
  {
    name: 'discord-webhook', title: 'Discord Webhooks',
    secrets: {
      DISCORD_WEBHOOK_URL: { description: 'Discord webhook URL', dashboard: 'https://discord.com/developers/applications', validate: 'url' },
    },
  },

  // Content Delivery (more)
  {
    name: 'imgproxy', title: 'imgproxy',
    secrets: {
      IMGPROXY_KEY: { description: 'imgproxy hex-encoded key', dashboard: 'https://imgproxy.net' },
      IMGPROXY_SALT: { description: 'imgproxy hex-encoded salt', dashboard: 'https://imgproxy.net' },
      IMGPROXY_URL: { description: 'imgproxy base URL', dashboard: 'https://imgproxy.net', required: false, validate: 'url' },
    },
  },

  // Social / Community
  {
    name: 'orbit', title: 'Orbit (Community)',
    secrets: {
      ORBIT_API_KEY: { description: 'Orbit community API key', dashboard: 'https://app.orbit.love' },
      ORBIT_WORKSPACE_ID: { description: 'Orbit workspace ID', dashboard: 'https://app.orbit.love' },
    },
  },
  {
    name: 'common-room', title: 'Common Room',
    secrets: {
      COMMON_ROOM_API_TOKEN: { description: 'Common Room API token', dashboard: 'https://app.commonroom.io' },
    },
  },

  // Feedback / NPS
  {
    name: 'delighted', title: 'Delighted',
    secrets: {
      DELIGHTED_API_KEY: { description: 'Delighted NPS API key', dashboard: 'https://delighted.com/account/api' },
    },
  },
  {
    name: 'satismeter', title: 'SatisMeter',
    secrets: {
      SATISMETER_WRITE_KEY: { description: 'SatisMeter write key', dashboard: 'https://app.satismeter.com' },
    },
  },

  // Healthcare (more)
  {
    name: 'openmrs', title: 'OpenMRS',
    secrets: {
      OPENMRS_BASE_URL: { description: 'OpenMRS server base URL', dashboard: 'https://openmrs.org', validate: 'url' },
      OPENMRS_USERNAME: { description: 'OpenMRS username', dashboard: 'https://openmrs.org' },
      OPENMRS_PASSWORD: { description: 'OpenMRS password', dashboard: 'https://openmrs.org' },
    },
  },

  // Telephony
  {
    name: 'dialpad', title: 'Dialpad',
    secrets: {
      DIALPAD_API_KEY: { description: 'Dialpad API key', dashboard: 'https://dialpad.com/developer' },
    },
  },
  {
    name: 'aircall', title: 'Aircall',
    secrets: {
      AIRCALL_API_ID: { description: 'Aircall API ID', dashboard: 'https://dashboard.aircall.io/integrations/api-keys' },
      AIRCALL_API_TOKEN: { description: 'Aircall API token', dashboard: 'https://dashboard.aircall.io/integrations/api-keys' },
    },
  },

  // Knowledge Base
  {
    name: 'gitbook', title: 'GitBook',
    secrets: {
      GITBOOK_API_TOKEN: { description: 'GitBook API token', dashboard: 'https://app.gitbook.com/account/developer' },
    },
  },
  {
    name: 'readme', title: 'ReadMe',
    secrets: {
      README_API_KEY: { description: 'ReadMe API key', dashboard: 'https://dash.readme.com' },
    },
  },

  // Design Tools
  {
    name: 'figma', title: 'Figma',
    secrets: {
      FIGMA_ACCESS_TOKEN: { description: 'Figma personal access token', dashboard: 'https://www.figma.com/developers/api#access-tokens' },
    },
  },
  {
    name: 'canva', title: 'Canva',
    secrets: {
      CANVA_API_KEY: { description: 'Canva Connect API key', dashboard: 'https://www.canva.com/developers' },
    },
  },

  // Shipping / Logistics (more)
  {
    name: 'aftership', title: 'AfterShip',
    secrets: {
      AFTERSHIP_API_KEY: { description: 'AfterShip API key', dashboard: 'https://admin.aftership.com/settings/api-keys' },
    },
  },
  {
    name: 'flexport', title: 'Flexport',
    secrets: {
      FLEXPORT_API_KEY: { description: 'Flexport API key', dashboard: 'https://www.flexport.com/developer' },
    },
  },

  // Printing / Merch
  {
    name: 'printful', title: 'Printful',
    secrets: {
      PRINTFUL_API_KEY: { description: 'Printful API key', dashboard: 'https://www.printful.com/dashboard/developer/api' },
    },
  },
  {
    name: 'printify', title: 'Printify',
    secrets: {
      PRINTIFY_API_TOKEN: { description: 'Printify API token', dashboard: 'https://printify.com/app/account/api' },
    },
  },

  // SMS/VOIP
  {
    name: 'textmagic', title: 'TextMagic',
    secrets: {
      TEXTMAGIC_USERNAME: { description: 'TextMagic API username', dashboard: 'https://my.textmagic.com/online/api/rest-api/keys' },
      TEXTMAGIC_API_KEY: { description: 'TextMagic API key', dashboard: 'https://my.textmagic.com/online/api/rest-api/keys' },
    },
  },
  {
    name: 'clicksend', title: 'ClickSend',
    secrets: {
      CLICKSEND_USERNAME: { description: 'ClickSend API username', dashboard: 'https://dashboard.clicksend.com/account/subaccounts' },
      CLICKSEND_API_KEY: { description: 'ClickSend API key', dashboard: 'https://dashboard.clicksend.com/account/subaccounts' },
    },
  },

  // File / Doc Generation
  {
    name: 'carbone', title: 'Carbone',
    secrets: {
      CARBONE_API_KEY: { description: 'Carbone document generation API key', dashboard: 'https://account.carbone.io' },
    },
  },
  {
    name: 'docraptor', title: 'DocRaptor',
    secrets: {
      DOCRAPTOR_API_KEY: { description: 'DocRaptor PDF generation API key', dashboard: 'https://docraptor.com/documentation' },
    },
  },

  // Address / Postal
  {
    name: 'smarty', title: 'Smarty (SmartyStreets)',
    secrets: {
      SMARTY_AUTH_ID: { description: 'Smarty authentication ID', dashboard: 'https://www.smarty.com/account' },
      SMARTY_AUTH_TOKEN: { description: 'Smarty authentication token', dashboard: 'https://www.smarty.com/account' },
    },
  },
  {
    name: 'google-geocoding', title: 'Google Geocoding',
    secrets: {
      GOOGLE_GEOCODING_API_KEY: { description: 'Google Geocoding API key', dashboard: 'https://console.cloud.google.com/apis/credentials' },
    },
  },

  // Product Analytics (more)
  {
    name: 'amplitude-experiment', title: 'Amplitude Experiment',
    secrets: {
      AMPLITUDE_EXPERIMENT_KEY: { description: 'Amplitude Experiment deployment key', dashboard: 'https://app.amplitude.com' },
    },
  },

  // Scheduling (more)
  {
    name: 'savvycal', title: 'SavvyCal',
    secrets: {
      SAVVYCAL_API_KEY: { description: 'SavvyCal API key', dashboard: 'https://savvycal.com' },
    },
  },

  // Consent / Cookie
  {
    name: 'cookiebot', title: 'Cookiebot',
    secrets: {
      COOKIEBOT_ID: { description: 'Cookiebot domain group ID', dashboard: 'https://manage.cookiebot.com' },
    },
  },

  // Misc
  {
    name: 'resend-webhook', title: 'Resend Webhooks',
    secrets: {
      RESEND_WEBHOOK_SECRET: { description: 'Resend webhook signing secret', dashboard: 'https://resend.com/webhooks' },
    },
  },
  {
    name: 'vercel-blob', title: 'Vercel Blob',
    secrets: {
      BLOB_READ_WRITE_TOKEN: { description: 'Vercel Blob read-write token', dashboard: 'https://vercel.com/dashboard/stores' },
    },
  },
  {
    name: 'vercel-kv', title: 'Vercel KV',
    secrets: {
      KV_REST_API_URL: { description: 'Vercel KV REST API URL', dashboard: 'https://vercel.com/dashboard/stores', validate: 'url' },
      KV_REST_API_TOKEN: { description: 'Vercel KV REST API token', dashboard: 'https://vercel.com/dashboard/stores' },
    },
  },
  {
    name: 'vercel-postgres', title: 'Vercel Postgres',
    secrets: {
      POSTGRES_URL: { description: 'Vercel Postgres connection URL', dashboard: 'https://vercel.com/dashboard/stores', validate: 'url' },
    },
  },
  {
    name: 'neon-serverless', title: 'Neon Serverless',
    secrets: {
      NEON_DATABASE_URL: { description: 'Neon serverless connection string', dashboard: 'https://console.neon.tech', validate: 'url' },
    },
  },

  // Event Streaming / CDC
  {
    name: 'debezium', title: 'Debezium',
    secrets: {
      DEBEZIUM_CONNECT_URL: { description: 'Debezium Connect REST API URL', dashboard: 'https://debezium.io', validate: 'url' },
    },
  },
  {
    name: 'redpanda', title: 'Redpanda',
    secrets: {
      REDPANDA_BROKERS: { description: 'Redpanda broker addresses', dashboard: 'https://cloud.redpanda.com' },
      REDPANDA_USERNAME: { description: 'Redpanda SASL username', dashboard: 'https://cloud.redpanda.com', required: false },
      REDPANDA_PASSWORD: { description: 'Redpanda SASL password', dashboard: 'https://cloud.redpanda.com', required: false },
    },
  },

  // ===== Even more services =====
  // Serverless / Edge
  {
    name: 'cloudflare-workers', title: 'Cloudflare Workers',
    secrets: {
      CF_ACCOUNT_ID: { description: 'Cloudflare account ID for Workers', dashboard: 'https://dash.cloudflare.com' },
      CF_API_TOKEN: { description: 'Cloudflare API token for Workers', dashboard: 'https://dash.cloudflare.com/profile/api-tokens' },
    },
  },
  {
    name: 'deno-deploy', title: 'Deno Deploy',
    secrets: {
      DENO_DEPLOY_TOKEN: { description: 'Deno Deploy access token', dashboard: 'https://dash.deno.com/account#access-tokens' },
    },
  },
  {
    name: 'netlify-blobs', title: 'Netlify Blobs',
    secrets: {
      NETLIFY_BLOBS_CONTEXT: { description: 'Netlify Blobs deploy context', dashboard: 'https://app.netlify.com' },
    },
  },

  // Graph / API (more)
  {
    name: 'hasura', title: 'Hasura',
    secrets: {
      HASURA_GRAPHQL_ADMIN_SECRET: { description: 'Hasura admin secret', dashboard: 'https://cloud.hasura.io' },
      HASURA_GRAPHQL_ENDPOINT: { description: 'Hasura GraphQL endpoint', dashboard: 'https://cloud.hasura.io', validate: 'url' },
    },
  },
  {
    name: 'apollo-graphql', title: 'Apollo GraphQL',
    secrets: {
      APOLLO_KEY: { description: 'Apollo Studio API key', dashboard: 'https://studio.apollographql.com' },
      APOLLO_GRAPH_REF: { description: 'Apollo graph reference', dashboard: 'https://studio.apollographql.com', required: false },
    },
  },
  {
    name: 'stepzen', title: 'StepZen',
    secrets: {
      STEPZEN_API_KEY: { description: 'StepZen API key', dashboard: 'https://dashboard.stepzen.com' },
      STEPZEN_ACCOUNT: { description: 'StepZen account name', dashboard: 'https://dashboard.stepzen.com' },
    },
  },
  {
    name: 'grafbase', title: 'Grafbase',
    secrets: {
      GRAFBASE_API_KEY: { description: 'Grafbase API key', dashboard: 'https://grafbase.com/dashboard' },
    },
  },

  // Time tracking
  {
    name: 'toggl', title: 'Toggl Track',
    secrets: {
      TOGGL_API_TOKEN: { description: 'Toggl Track API token', dashboard: 'https://track.toggl.com/profile' },
    },
  },
  {
    name: 'clockify', title: 'Clockify',
    secrets: {
      CLOCKIFY_API_KEY: { description: 'Clockify API key', dashboard: 'https://app.clockify.me/user/settings' },
    },
  },

  // Inventory / POS
  {
    name: 'square-pos', title: 'Square POS',
    secrets: {
      SQUARE_ACCESS_TOKEN_POS: { description: 'Square POS access token', dashboard: 'https://developer.squareup.com/apps' },
    },
  },
  {
    name: 'lightspeed', title: 'Lightspeed',
    secrets: {
      LIGHTSPEED_API_KEY: { description: 'Lightspeed API key', dashboard: 'https://www.lightspeedhq.com' },
    },
  },
  {
    name: 'vend', title: 'Vend (Lightspeed X)',
    secrets: {
      VEND_API_TOKEN: { description: 'Vend personal token', dashboard: 'https://www.vendhq.com' },
    },
  },

  // Task Queues / Workers (more)
  {
    name: 'bullmq-cloud', title: 'BullMQ Pro',
    secrets: {
      BULLMQ_PRO_TOKEN: { description: 'BullMQ Pro license token', dashboard: 'https://bullmq.io' },
    },
  },

  // Email Verification
  {
    name: 'zerobounce', title: 'ZeroBounce',
    secrets: {
      ZEROBOUNCE_API_KEY: { description: 'ZeroBounce email verification API key', dashboard: 'https://www.zerobounce.net/members/apikeys/' },
    },
  },
  {
    name: 'neverbounce', title: 'NeverBounce',
    secrets: {
      NEVERBOUNCE_API_KEY: { description: 'NeverBounce API key', dashboard: 'https://app.neverbounce.com/settings/api' },
    },
  },
  {
    name: 'kickbox', title: 'Kickbox',
    secrets: {
      KICKBOX_API_KEY: { description: 'Kickbox email verification API key', dashboard: 'https://app.kickbox.com/settings/keys' },
    },
  },

  // CAPTCHA (more)
  {
    name: 'friendly-captcha', title: 'Friendly Captcha',
    secrets: {
      FRIENDLY_CAPTCHA_SITEKEY: { description: 'Friendly Captcha site key', dashboard: 'https://friendlycaptcha.com/dashboard' },
      FRIENDLY_CAPTCHA_SECRET: { description: 'Friendly Captcha secret key', dashboard: 'https://friendlycaptcha.com/dashboard' },
    },
  },

  // Mobile / Push
  {
    name: 'expo', title: 'Expo',
    secrets: {
      EXPO_TOKEN: { description: 'Expo access token', dashboard: 'https://expo.dev/settings/access-tokens' },
    },
  },
  {
    name: 'firebase-admin', title: 'Firebase Admin',
    secrets: {
      FIREBASE_ADMIN_SERVICE_ACCOUNT: { description: 'Firebase Admin service account JSON', dashboard: 'https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk' },
    },
  },
  {
    name: 'apns', title: 'Apple Push Notification Service',
    secrets: {
      APNS_KEY_ID: { description: 'APNs key ID', dashboard: 'https://developer.apple.com/account/resources/authkeys' },
      APNS_TEAM_ID: { description: 'Apple Developer team ID', dashboard: 'https://developer.apple.com/account' },
      APNS_AUTH_KEY: { description: 'APNs authentication key (.p8)', dashboard: 'https://developer.apple.com/account/resources/authkeys' },
    },
  },
  {
    name: 'fcm', title: 'Firebase Cloud Messaging',
    secrets: {
      FCM_SERVER_KEY: { description: 'FCM server key', dashboard: 'https://console.firebase.google.com/project/_/settings/cloudmessaging' },
    },
  },

  // Payments (more)
  {
    name: 'payhere', title: 'PayHere',
    secrets: {
      PAYHERE_MERCHANT_ID: { description: 'PayHere merchant ID', dashboard: 'https://sandbox.payhere.lk' },
      PAYHERE_MERCHANT_SECRET: { description: 'PayHere merchant secret', dashboard: 'https://sandbox.payhere.lk' },
    },
  },
  {
    name: 'paystack', title: 'Paystack',
    secrets: {
      PAYSTACK_SECRET_KEY: { description: 'Paystack secret key', dashboard: 'https://dashboard.paystack.com/#/settings/developers' },
      PAYSTACK_PUBLIC_KEY: { description: 'Paystack public key', dashboard: 'https://dashboard.paystack.com/#/settings/developers', required: false },
    },
  },
  {
    name: 'flutterwave', title: 'Flutterwave',
    secrets: {
      FLUTTERWAVE_SECRET_KEY: { description: 'Flutterwave secret key', dashboard: 'https://dashboard.flutterwave.com/dashboard/settings/apis' },
      FLUTTERWAVE_PUBLIC_KEY: { description: 'Flutterwave public key', dashboard: 'https://dashboard.flutterwave.com/dashboard/settings/apis', required: false },
    },
  },
  {
    name: 'pesapal', title: 'Pesapal',
    secrets: {
      PESAPAL_CONSUMER_KEY: { description: 'Pesapal consumer key', dashboard: 'https://www.pesapal.com' },
      PESAPAL_CONSUMER_SECRET: { description: 'Pesapal consumer secret', dashboard: 'https://www.pesapal.com' },
    },
  },
  {
    name: 'mercadopago', title: 'Mercado Pago',
    secrets: {
      MERCADOPAGO_ACCESS_TOKEN: { description: 'Mercado Pago access token', dashboard: 'https://www.mercadopago.com/developers' },
    },
  },
  {
    name: 'payu', title: 'PayU',
    secrets: {
      PAYU_MERCHANT_KEY: { description: 'PayU merchant key', dashboard: 'https://developer.payu.in' },
      PAYU_MERCHANT_SALT: { description: 'PayU merchant salt', dashboard: 'https://developer.payu.in' },
    },
  },

  // Caching
  {
    name: 'memcached-cloud', title: 'Memcached Cloud',
    secrets: {
      MEMCACHEDCLOUD_SERVERS: { description: 'Memcached Cloud server address', dashboard: 'https://app.redislabs.com' },
      MEMCACHEDCLOUD_USERNAME: { description: 'Memcached Cloud username', dashboard: 'https://app.redislabs.com' },
      MEMCACHEDCLOUD_PASSWORD: { description: 'Memcached Cloud password', dashboard: 'https://app.redislabs.com' },
    },
  },

  // AI Guardrails / Safety
  {
    name: 'guardrails-ai', title: 'Guardrails AI',
    secrets: {
      GUARDRAILS_API_KEY: { description: 'Guardrails AI API key', dashboard: 'https://hub.guardrailsai.com' },
    },
  },
  {
    name: 'lakera', title: 'Lakera Guard',
    secrets: {
      LAKERA_GUARD_API_KEY: { description: 'Lakera Guard API key', dashboard: 'https://platform.lakera.ai' },
    },
  },
  {
    name: 'rebuff', title: 'Rebuff AI',
    secrets: {
      REBUFF_API_TOKEN: { description: 'Rebuff prompt injection detection token', dashboard: 'https://rebuff.ai' },
    },
  },

  // AI Evaluation
  {
    name: 'promptfoo', title: 'Promptfoo',
    secrets: {
      PROMPTFOO_API_KEY: { description: 'Promptfoo API key', dashboard: 'https://www.promptfoo.dev' },
    },
  },

  // Document Signing (more)
  {
    name: 'adobe-sign', title: 'Adobe Acrobat Sign',
    secrets: {
      ADOBE_SIGN_CLIENT_ID: { description: 'Adobe Sign OAuth client ID', dashboard: 'https://secure.adobesign.com/account/accountSettingsPage' },
      ADOBE_SIGN_CLIENT_SECRET: { description: 'Adobe Sign OAuth client secret', dashboard: 'https://secure.adobesign.com/account/accountSettingsPage' },
    },
  },

  // Misc APIs (more)
  {
    name: 'github-copilot', title: 'GitHub Copilot',
    secrets: {
      GITHUB_COPILOT_TOKEN: { description: 'GitHub Copilot token', dashboard: 'https://github.com/settings/copilot' },
    },
  },
  {
    name: 'wolfram', title: 'Wolfram Alpha',
    secrets: {
      WOLFRAM_APP_ID: { description: 'Wolfram Alpha app ID', dashboard: 'https://developer.wolframalpha.com/portal/myapps/' },
    },
  },
  {
    name: 'exchangerate-api', title: 'ExchangeRate-API',
    secrets: {
      EXCHANGERATE_API_KEY: { description: 'ExchangeRate-API key', dashboard: 'https://www.exchangerate-api.com/docs/overview' },
    },
  },
  {
    name: 'currencylayer', title: 'Currencylayer',
    secrets: {
      CURRENCYLAYER_API_KEY: { description: 'Currencylayer API key', dashboard: 'https://currencylayer.com/dashboard' },
    },
  },
  {
    name: 'wakatime', title: 'WakaTime',
    secrets: {
      WAKATIME_API_KEY: { description: 'WakaTime API key', dashboard: 'https://wakatime.com/settings/account' },
    },
  },

  // Containerization / Orchestration
  {
    name: 'docker-hub', title: 'Docker Hub',
    secrets: {
      DOCKER_USERNAME: { description: 'Docker Hub username', dashboard: 'https://hub.docker.com/settings/security' },
      DOCKER_PASSWORD: { description: 'Docker Hub access token', dashboard: 'https://hub.docker.com/settings/security' },
    },
  },
  {
    name: 'github-packages', title: 'GitHub Packages',
    secrets: {
      GITHUB_PACKAGES_TOKEN: { description: 'GitHub personal access token for Packages', dashboard: 'https://github.com/settings/tokens' },
    },
  },

  // Internationalization (more)
  {
    name: 'weglot', title: 'Weglot',
    secrets: {
      WEGLOT_API_KEY: { description: 'Weglot API key', dashboard: 'https://dashboard.weglot.com' },
    },
  },
  {
    name: 'smartling', title: 'Smartling',
    secrets: {
      SMARTLING_USER_ID: { description: 'Smartling user identifier', dashboard: 'https://dashboard.smartling.com' },
      SMARTLING_USER_SECRET: { description: 'Smartling user secret', dashboard: 'https://dashboard.smartling.com' },
    },
  },

  // Review / Reputation
  {
    name: 'trustpilot', title: 'Trustpilot',
    secrets: {
      TRUSTPILOT_API_KEY: { description: 'Trustpilot API key', dashboard: 'https://businessapp.b2b.trustpilot.com' },
      TRUSTPILOT_SECRET: { description: 'Trustpilot API secret', dashboard: 'https://businessapp.b2b.trustpilot.com' },
    },
  },

  // Subscription / Membership
  {
    name: 'memberstack', title: 'Memberstack',
    secrets: {
      MEMBERSTACK_SECRET_KEY: { description: 'Memberstack secret key', dashboard: 'https://app.memberstack.com' },
    },
  },
  {
    name: 'outseta', title: 'Outseta',
    secrets: {
      OUTSETA_API_KEY: { description: 'Outseta API key', dashboard: 'https://outseta.com' },
      OUTSETA_API_SECRET: { description: 'Outseta API secret', dashboard: 'https://outseta.com' },
    },
  },
  // ── Batch 6: More SaaS, DevOps, Fintech, Security, Data ──
  {
    name: 'akeneo', title: 'Akeneo PIM',
    secrets: {
      AKENEO_CLIENT_ID: { description: 'Akeneo OAuth client ID', dashboard: 'https://help.akeneo.com/pim/serenity/articles/manage-your-connections.html' },
      AKENEO_SECRET: { description: 'Akeneo OAuth secret', dashboard: 'https://help.akeneo.com/pim/serenity/articles/manage-your-connections.html' },
      AKENEO_BASE_URL: { description: 'Akeneo PIM base URL', dashboard: 'https://help.akeneo.com', validate: 'url' },
    },
  },
  {
    name: 'apptio', title: 'Apptio',
    secrets: {
      APPTIO_API_KEY: { description: 'Apptio API key', dashboard: 'https://www.apptio.com' },
    },
  },
  {
    name: 'archive-org', title: 'Archive.org',
    secrets: {
      ARCHIVE_S3_ACCESS: { description: 'Archive.org S3-like access key', dashboard: 'https://archive.org/account/s3.php' },
      ARCHIVE_S3_SECRET: { description: 'Archive.org S3-like secret key', dashboard: 'https://archive.org/account/s3.php' },
    },
  },
  {
    name: 'argocd', title: 'Argo CD',
    secrets: {
      ARGOCD_AUTH_TOKEN: { description: 'Argo CD authentication token', dashboard: 'https://argo-cd.readthedocs.io' },
      ARGOCD_SERVER: { description: 'Argo CD server URL', dashboard: 'https://argo-cd.readthedocs.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'aserto', title: 'Aserto',
    secrets: {
      ASERTO_TENANT_ID: { description: 'Aserto tenant ID', dashboard: 'https://console.aserto.com' },
      ASERTO_API_KEY: { description: 'Aserto API key', dashboard: 'https://console.aserto.com' },
      ASERTO_AUTHORIZER_SERVICE_URL: { description: 'Aserto authorizer URL', dashboard: 'https://console.aserto.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'assembla', title: 'Assembla',
    secrets: {
      ASSEMBLA_API_KEY: { description: 'Assembla API key', dashboard: 'https://app.assembla.com/user/edit/manage_clients' },
      ASSEMBLA_API_SECRET: { description: 'Assembla API secret', dashboard: 'https://app.assembla.com/user/edit/manage_clients' },
    },
  },
  {
    name: 'athens-research', title: 'Athens Research',
    secrets: {
      ATHENS_API_KEY: { description: 'Athens Research API key', dashboard: 'https://athensresearch.io' },
    },
  },
  {
    name: 'autodesk', title: 'Autodesk',
    secrets: {
      AUTODESK_CLIENT_ID: { description: 'Autodesk Forge client ID', dashboard: 'https://aps.autodesk.com/myapps/' },
      AUTODESK_CLIENT_SECRET: { description: 'Autodesk Forge client secret', dashboard: 'https://aps.autodesk.com/myapps/' },
    },
  },
  {
    name: 'automate-io', title: 'Automate.io',
    secrets: {
      AUTOMATE_API_KEY: { description: 'Automate.io API key', dashboard: 'https://automate.io' },
    },
  },
  {
    name: 'aws-amplify', title: 'AWS Amplify',
    secrets: {
      AMPLIFY_APP_ID: { description: 'AWS Amplify app ID', dashboard: 'https://console.aws.amazon.com/amplify' },
      AMPLIFY_BRANCH: { description: 'AWS Amplify branch', dashboard: 'https://console.aws.amazon.com/amplify', required: false },
    },
  },
  {
    name: 'aws-ses-v2', title: 'AWS SES v2',
    secrets: {
      SES_REGION: { description: 'AWS SES region', dashboard: 'https://console.aws.amazon.com/ses' },
      SES_FROM_EMAIL: { description: 'Default sender email for SES', dashboard: 'https://console.aws.amazon.com/ses', required: false },
    },
  },
  {
    name: 'backendless', title: 'Backendless',
    secrets: {
      BACKENDLESS_APP_ID: { description: 'Backendless application ID', dashboard: 'https://develop.backendless.com' },
      BACKENDLESS_API_KEY: { description: 'Backendless API key', dashboard: 'https://develop.backendless.com' },
    },
  },
  {
    name: 'bark', title: 'Bark',
    secrets: {
      BARK_SERVER_URL: { description: 'Bark push notification server URL', dashboard: 'https://github.com/nicklockwood/Bark', validate: 'url' },
      BARK_DEVICE_KEY: { description: 'Bark device key', dashboard: 'https://github.com/nicklockwood/Bark' },
    },
  },
  {
    name: 'baremetrics', title: 'Baremetrics',
    secrets: {
      BAREMETRICS_API_KEY: { description: 'Baremetrics API key', dashboard: 'https://app.baremetrics.com/settings/api' },
    },
  },
  {
    name: 'baserow', title: 'Baserow',
    secrets: {
      BASEROW_TOKEN: { description: 'Baserow database token', dashboard: 'https://baserow.io/user-settings' },
      BASEROW_URL: { description: 'Baserow instance URL (self-hosted)', dashboard: 'https://baserow.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'beekeeper', title: 'Beekeeper Studio',
    secrets: {
      BEEKEEPER_LICENSE_KEY: { description: 'Beekeeper Studio license key', dashboard: 'https://www.beekeeperstudio.io' },
    },
  },
  {
    name: 'bettermode', title: 'Bettermode',
    secrets: {
      BETTERMODE_API_TOKEN: { description: 'Bettermode API token', dashboard: 'https://app.bettermode.com' },
      BETTERMODE_COMMUNITY_URL: { description: 'Bettermode community URL', dashboard: 'https://app.bettermode.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'bird', title: 'Bird (MessageBird)',
    secrets: {
      BIRD_ACCESS_KEY: { description: 'Bird API access key', dashboard: 'https://dashboard.bird.com' },
    },
  },
  {
    name: 'breezy-hr', title: 'Breezy HR',
    secrets: {
      BREEZY_API_KEY: { description: 'Breezy HR API key', dashboard: 'https://breezy.hr' },
      BREEZY_COMPANY_ID: { description: 'Breezy HR company ID', dashboard: 'https://breezy.hr', required: false },
    },
  },
  {
    name: 'bridgecrew', title: 'Bridgecrew',
    secrets: {
      BC_API_KEY: { description: 'Bridgecrew/Checkov API key', dashboard: 'https://www.bridgecrew.cloud' },
    },
  },
  {
    name: 'browserless', title: 'Browserless',
    secrets: {
      BROWSERLESS_TOKEN: { description: 'Browserless API token', dashboard: 'https://www.browserless.io/dashboard' },
      BROWSERLESS_URL: { description: 'Browserless instance URL', dashboard: 'https://www.browserless.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'bugsplat', title: 'BugSplat',
    secrets: {
      BUGSPLAT_CLIENT_ID: { description: 'BugSplat OAuth client ID', dashboard: 'https://app.bugsplat.com' },
      BUGSPLAT_CLIENT_SECRET: { description: 'BugSplat OAuth client secret', dashboard: 'https://app.bugsplat.com' },
    },
  },
  {
    name: 'canvaslms', title: 'Canvas LMS',
    secrets: {
      CANVAS_API_TOKEN: { description: 'Canvas LMS access token', dashboard: 'https://canvas.instructure.com/profile/settings' },
      CANVAS_BASE_URL: { description: 'Canvas LMS instance URL', dashboard: 'https://canvas.instructure.com', validate: 'url' },
    },
  },
  {
    name: 'castai', title: 'CAST AI',
    secrets: {
      CAST_API_KEY: { description: 'CAST AI API key', dashboard: 'https://console.cast.ai' },
    },
  },
  {
    name: 'chameleon', title: 'Chameleon',
    secrets: {
      CHAMELEON_API_KEY: { description: 'Chameleon API key', dashboard: 'https://app.chameleon.io' },
      CHAMELEON_SECRET_KEY: { description: 'Chameleon secret key', dashboard: 'https://app.chameleon.io' },
    },
  },
  {
    name: 'chargify', title: 'Chargify/Maxio',
    secrets: {
      CHARGIFY_API_KEY: { description: 'Chargify API key', dashboard: 'https://app.chargify.com' },
      CHARGIFY_SUBDOMAIN: { description: 'Chargify subdomain', dashboard: 'https://app.chargify.com', required: false },
    },
  },
  {
    name: 'chatwork', title: 'Chatwork',
    secrets: {
      CHATWORK_API_TOKEN: { description: 'Chatwork API token', dashboard: 'https://developer.chatwork.com/reference' },
    },
  },
  {
    name: 'chronosphere', title: 'Chronosphere',
    secrets: {
      CHRONOSPHERE_API_TOKEN: { description: 'Chronosphere API token', dashboard: 'https://chronosphere.io' },
      CHRONOSPHERE_ORG_NAME: { description: 'Chronosphere organization', dashboard: 'https://chronosphere.io', required: false },
    },
  },
  {
    name: 'civo', title: 'Civo',
    secrets: {
      CIVO_TOKEN: { description: 'Civo API token', dashboard: 'https://dashboard.civo.com/security' },
    },
  },
  {
    name: 'clarifai', title: 'Clarifai',
    secrets: {
      CLARIFAI_PAT: { description: 'Clarifai personal access token', dashboard: 'https://clarifai.com/settings/security' },
    },
  },
  {
    name: 'clevercloud', title: 'Clever Cloud',
    secrets: {
      CLEVER_TOKEN: { description: 'Clever Cloud API token', dashboard: 'https://console.clever-cloud.com' },
      CLEVER_SECRET: { description: 'Clever Cloud API secret', dashboard: 'https://console.clever-cloud.com' },
    },
  },
  {
    name: 'cloudamqp', title: 'CloudAMQP',
    secrets: {
      CLOUDAMQP_URL: { description: 'CloudAMQP connection URL', dashboard: 'https://customer.cloudamqp.com', validate: 'url' },
      CLOUDAMQP_APIKEY: { description: 'CloudAMQP API key', dashboard: 'https://customer.cloudamqp.com', required: false },
    },
  },
  {
    name: 'cloudsmith', title: 'Cloudsmith',
    secrets: {
      CLOUDSMITH_API_KEY: { description: 'Cloudsmith API key', dashboard: 'https://cloudsmith.io/user/settings/api/' },
    },
  },
  {
    name: 'cockpit', title: 'Cockpit CMS',
    secrets: {
      COCKPIT_API_TOKEN: { description: 'Cockpit CMS API token', dashboard: 'https://getcockpit.com' },
      COCKPIT_URL: { description: 'Cockpit CMS instance URL', dashboard: 'https://getcockpit.com', validate: 'url' },
    },
  },
  {
    name: 'coda', title: 'Coda',
    secrets: {
      CODA_API_KEY: { description: 'Coda API key', dashboard: 'https://coda.io/account' },
    },
  },
  {
    name: 'codacy', title: 'Codacy',
    secrets: {
      CODACY_API_TOKEN: { description: 'Codacy API token', dashboard: 'https://app.codacy.com/account/apiTokens' },
      CODACY_PROJECT_TOKEN: { description: 'Codacy project token', dashboard: 'https://app.codacy.com', required: false },
    },
  },
  {
    name: 'codemagic', title: 'Codemagic',
    secrets: {
      CODEMAGIC_API_TOKEN: { description: 'Codemagic API token', dashboard: 'https://codemagic.io/settings' },
    },
  },
  {
    name: 'codecov', title: 'Codecov',
    secrets: {
      CODECOV_TOKEN: { description: 'Codecov upload token', dashboard: 'https://app.codecov.io' },
    },
  },
  {
    name: 'codesandbox', title: 'CodeSandbox',
    secrets: {
      CODESANDBOX_TOKEN: { description: 'CodeSandbox API token', dashboard: 'https://codesandbox.io/dashboard/settings' },
    },
  },
  {
    name: 'commercetools', title: 'Commercetools',
    secrets: {
      CTP_CLIENT_ID: { description: 'Commercetools client ID', dashboard: 'https://mc.commercetools.com' },
      CTP_CLIENT_SECRET: { description: 'Commercetools client secret', dashboard: 'https://mc.commercetools.com' },
      CTP_PROJECT_KEY: { description: 'Commercetools project key', dashboard: 'https://mc.commercetools.com' },
      CTP_AUTH_URL: { description: 'Commercetools auth URL', dashboard: 'https://mc.commercetools.com', required: false, validate: 'url' },
      CTP_API_URL: { description: 'Commercetools API URL', dashboard: 'https://mc.commercetools.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'commento', title: 'Commento',
    secrets: {
      COMMENTO_ORIGIN: { description: 'Commento instance URL', dashboard: 'https://commento.io', validate: 'url' },
    },
  },
  {
    name: 'composio', title: 'Composio',
    secrets: {
      COMPOSIO_API_KEY: { description: 'Composio API key', dashboard: 'https://app.composio.dev' },
    },
  },
  {
    name: 'contrast-security', title: 'Contrast Security',
    secrets: {
      CONTRAST_API_KEY: { description: 'Contrast Security API key', dashboard: 'https://app.contrastsecurity.com' },
      CONTRAST_SERVICE_KEY: { description: 'Contrast Security service key', dashboard: 'https://app.contrastsecurity.com' },
      CONTRAST_ORG_UUID: { description: 'Contrast Security org UUID', dashboard: 'https://app.contrastsecurity.com', required: false },
    },
  },
  {
    name: 'cordova', title: 'Apache Cordova',
    secrets: {
      CORDOVA_KEY_STORE_PASSWORD: { description: 'Cordova keystore password for Android signing', dashboard: 'https://cordova.apache.org/docs' },
    },
  },
  {
    name: 'coreweave', title: 'CoreWeave',
    secrets: {
      COREWEAVE_API_TOKEN: { description: 'CoreWeave API token', dashboard: 'https://cloud.coreweave.com' },
    },
  },
  {
    name: 'crates-io', title: 'Crates.io',
    secrets: {
      CRATES_TOKEN: { description: 'Crates.io publish token', dashboard: 'https://crates.io/settings/tokens' },
    },
  },
  {
    name: 'crowdsec', title: 'CrowdSec',
    secrets: {
      CROWDSEC_API_KEY: { description: 'CrowdSec API key', dashboard: 'https://app.crowdsec.net' },
      CROWDSEC_URL: { description: 'CrowdSec LAPI URL', dashboard: 'https://app.crowdsec.net', required: false, validate: 'url' },
    },
  },
  {
    name: 'customer-io', title: 'Customer.io',
    secrets: {
      CUSTOMERIO_SITE_ID: { description: 'Customer.io site ID', dashboard: 'https://fly.customer.io/settings/api_credentials' },
      CUSTOMERIO_API_KEY: { description: 'Customer.io API key', dashboard: 'https://fly.customer.io/settings/api_credentials' },
      CUSTOMERIO_APP_API_KEY: { description: 'Customer.io App API key', dashboard: 'https://fly.customer.io/settings/api_credentials', required: false },
    },
  },
  {
    name: 'cypress-cloud', title: 'Cypress Cloud',
    secrets: {
      CYPRESS_RECORD_KEY: { description: 'Cypress Cloud record key', dashboard: 'https://cloud.cypress.io' },
    },
  },
  {
    name: 'dagster-cloud', title: 'Dagster Cloud',
    secrets: {
      DAGSTER_CLOUD_API_TOKEN: { description: 'Dagster Cloud API token', dashboard: 'https://dagster.cloud' },
      DAGSTER_CLOUD_URL: { description: 'Dagster Cloud URL', dashboard: 'https://dagster.cloud', required: false, validate: 'url' },
    },
  },
  {
    name: 'datahub', title: 'DataHub',
    secrets: {
      DATAHUB_GMS_TOKEN: { description: 'DataHub GMS auth token', dashboard: 'https://datahubproject.io' },
      DATAHUB_GMS_URL: { description: 'DataHub GMS server URL', dashboard: 'https://datahubproject.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'datagrid', title: 'DataGrid',
    secrets: {
      DATAGRID_API_KEY: { description: 'DataGrid API key', dashboard: 'https://datagrid.com' },
    },
  },
  {
    name: 'datocms', title: 'DatoCMS',
    secrets: {
      DATOCMS_API_TOKEN: { description: 'DatoCMS API token', dashboard: 'https://www.datocms.com/dashboard' },
      DATOCMS_PREVIEW_TOKEN: { description: 'DatoCMS preview token', dashboard: 'https://www.datocms.com/dashboard', required: false },
    },
  },
  {
    name: 'depot', title: 'Depot',
    secrets: {
      DEPOT_TOKEN: { description: 'Depot build token', dashboard: 'https://depot.dev' },
    },
  },
  {
    name: 'devrev', title: 'DevRev',
    secrets: {
      DEVREV_PAT: { description: 'DevRev personal access token', dashboard: 'https://devrev.ai' },
    },
  },
  {
    name: 'ditto', title: 'Ditto',
    secrets: {
      DITTO_APP_ID: { description: 'Ditto app ID', dashboard: 'https://portal.ditto.live' },
      DITTO_TOKEN: { description: 'Ditto auth token', dashboard: 'https://portal.ditto.live' },
    },
  },
  {
    name: 'doppio', title: 'Doppio',
    secrets: {
      DOPPIO_API_KEY: { description: 'Doppio API key for PDF/screenshot generation', dashboard: 'https://doppio.sh' },
    },
  },
  {
    name: 'dreamhost', title: 'DreamHost',
    secrets: {
      DREAMHOST_API_KEY: { description: 'DreamHost API key', dashboard: 'https://panel.dreamhost.com/index.cgi?tree=home.api' },
    },
  },
  {
    name: 'duffel', title: 'Duffel',
    secrets: {
      DUFFEL_ACCESS_TOKEN: { description: 'Duffel API access token', dashboard: 'https://app.duffel.com' },
    },
  },
  {
    name: 'earthengine', title: 'Google Earth Engine',
    secrets: {
      EE_SERVICE_ACCOUNT_EMAIL: { description: 'Earth Engine service account email', dashboard: 'https://code.earthengine.google.com' },
      EE_PRIVATE_KEY: { description: 'Earth Engine service account private key', dashboard: 'https://console.cloud.google.com/iam-admin/serviceaccounts' },
    },
  },
  {
    name: 'ecwid', title: 'Ecwid',
    secrets: {
      ECWID_STORE_ID: { description: 'Ecwid store ID', dashboard: 'https://my.ecwid.com' },
      ECWID_SECRET_TOKEN: { description: 'Ecwid secret API token', dashboard: 'https://my.ecwid.com/cp/CP.html#develop-apps' },
    },
  },
  {
    name: 'edgedb', title: 'EdgeDB',
    secrets: {
      EDGEDB_DSN: { description: 'EdgeDB connection DSN', dashboard: 'https://www.edgedb.com/cloud', validate: 'url' },
      EDGEDB_SECRET_KEY: { description: 'EdgeDB Cloud secret key', dashboard: 'https://www.edgedb.com/cloud', required: false },
    },
  },
  {
    name: 'elarian', title: 'Elarian',
    secrets: {
      ELARIAN_API_KEY: { description: 'Elarian API key', dashboard: 'https://app.elarian.com' },
      ELARIAN_ORG_ID: { description: 'Elarian organization ID', dashboard: 'https://app.elarian.com' },
    },
  },
  {
    name: 'emailjs', title: 'EmailJS',
    secrets: {
      EMAILJS_SERVICE_ID: { description: 'EmailJS service ID', dashboard: 'https://dashboard.emailjs.com' },
      EMAILJS_TEMPLATE_ID: { description: 'EmailJS template ID', dashboard: 'https://dashboard.emailjs.com' },
      EMAILJS_PUBLIC_KEY: { description: 'EmailJS public key', dashboard: 'https://dashboard.emailjs.com' },
    },
  },
  {
    name: 'emarsys', title: 'Emarsys',
    secrets: {
      EMARSYS_API_USERNAME: { description: 'Emarsys API username', dashboard: 'https://suite.emarsys.com' },
      EMARSYS_API_SECRET: { description: 'Emarsys API secret', dashboard: 'https://suite.emarsys.com' },
    },
  },
  {
    name: 'endor-labs', title: 'Endor Labs',
    secrets: {
      ENDOR_API_KEY: { description: 'Endor Labs API key', dashboard: 'https://app.endorlabs.com' },
      ENDOR_NAMESPACE: { description: 'Endor Labs namespace', dashboard: 'https://app.endorlabs.com', required: false },
    },
  },
  {
    name: 'envoy', title: 'Envoy',
    secrets: {
      ENVOY_CLIENT_ID: { description: 'Envoy OAuth client ID', dashboard: 'https://developers.envoy.com' },
      ENVOY_CLIENT_SECRET: { description: 'Envoy OAuth client secret', dashboard: 'https://developers.envoy.com' },
    },
  },
  {
    name: 'eventbrite', title: 'Eventbrite',
    secrets: {
      EVENTBRITE_API_KEY: { description: 'Eventbrite API key', dashboard: 'https://www.eventbrite.com/platform/api-keys' },
      EVENTBRITE_PRIVATE_TOKEN: { description: 'Eventbrite private token', dashboard: 'https://www.eventbrite.com/platform/api-keys', required: false },
    },
  },
  {
    name: 'everbridge', title: 'Everbridge',
    secrets: {
      EVERBRIDGE_USERNAME: { description: 'Everbridge API username', dashboard: 'https://manager.everbridge.net' },
      EVERBRIDGE_PASSWORD: { description: 'Everbridge API password', dashboard: 'https://manager.everbridge.net' },
    },
  },
  {
    name: 'evervault', title: 'Evervault',
    secrets: {
      EVERVAULT_API_KEY: { description: 'Evervault API key', dashboard: 'https://app.evervault.com' },
      EVERVAULT_APP_UUID: { description: 'Evervault app UUID', dashboard: 'https://app.evervault.com' },
    },
  },
  {
    name: 'exotel', title: 'Exotel',
    secrets: {
      EXOTEL_API_KEY: { description: 'Exotel API key', dashboard: 'https://my.exotel.com' },
      EXOTEL_API_TOKEN: { description: 'Exotel API token', dashboard: 'https://my.exotel.com' },
      EXOTEL_SID: { description: 'Exotel account SID', dashboard: 'https://my.exotel.com' },
    },
  },
  {
    name: 'faceplusplus', title: 'Face++',
    secrets: {
      FACEPP_API_KEY: { description: 'Face++ API key', dashboard: 'https://console.faceplusplus.com' },
      FACEPP_API_SECRET: { description: 'Face++ API secret', dashboard: 'https://console.faceplusplus.com' },
    },
  },
  {
    name: 'fastgen', title: 'Fastgen',
    secrets: {
      FASTGEN_API_KEY: { description: 'Fastgen API key', dashboard: 'https://fastgen.com' },
    },
  },
  {
    name: 'featurebase', title: 'Featurebase',
    secrets: {
      FEATUREBASE_API_KEY: { description: 'Featurebase API key', dashboard: 'https://featurebase.app' },
    },
  },
  {
    name: 'feedbin', title: 'Feedbin',
    secrets: {
      FEEDBIN_USERNAME: { description: 'Feedbin account email', dashboard: 'https://feedbin.com/settings' },
      FEEDBIN_PASSWORD: { description: 'Feedbin account password', dashboard: 'https://feedbin.com/settings' },
    },
  },
  {
    name: 'fibery', title: 'Fibery',
    secrets: {
      FIBERY_API_KEY: { description: 'Fibery API key', dashboard: 'https://fibery.io' },
      FIBERY_DOMAIN: { description: 'Fibery workspace domain', dashboard: 'https://fibery.io' },
    },
  },
  {
    name: 'fieldwire', title: 'Fieldwire',
    secrets: {
      FIELDWIRE_API_TOKEN: { description: 'Fieldwire API token', dashboard: 'https://app.fieldwire.com' },
    },
  },
  {
    name: 'file-io', title: 'File.io',
    secrets: {
      FILEIO_API_KEY: { description: 'File.io API key', dashboard: 'https://www.file.io/developers' },
    },
  },
  {
    name: 'flagright', title: 'Flagright',
    secrets: {
      FLAGRIGHT_API_KEY: { description: 'Flagright API key', dashboard: 'https://dashboard.flagright.com' },
    },
  },
  {
    name: 'flightaware', title: 'FlightAware',
    secrets: {
      FLIGHTAWARE_API_KEY: { description: 'FlightAware AeroAPI key', dashboard: 'https://www.flightaware.com/aeroapi/portal/' },
    },
  },
  {
    name: 'fondy', title: 'Fondy',
    secrets: {
      FONDY_MERCHANT_ID: { description: 'Fondy merchant ID', dashboard: 'https://portal.fondy.eu' },
      FONDY_PAYMENT_KEY: { description: 'Fondy payment key', dashboard: 'https://portal.fondy.eu' },
    },
  },
  {
    name: 'forter', title: 'Forter',
    secrets: {
      FORTER_SITE_ID: { description: 'Forter site ID', dashboard: 'https://portal.forter.com' },
      FORTER_SECRET_KEY: { description: 'Forter secret key', dashboard: 'https://portal.forter.com' },
    },
  },
  {
    name: 'frameio', title: 'Frame.io',
    secrets: {
      FRAMEIO_TOKEN: { description: 'Frame.io developer token', dashboard: 'https://developer.frame.io' },
    },
  },
  {
    name: 'freshservice', title: 'Freshservice',
    secrets: {
      FRESHSERVICE_API_KEY: { description: 'Freshservice API key', dashboard: 'https://support.freshservice.com' },
      FRESHSERVICE_DOMAIN: { description: 'Freshservice domain', dashboard: 'https://support.freshservice.com' },
    },
  },
  {
    name: 'frontapp', title: 'Front',
    secrets: {
      FRONT_API_TOKEN: { description: 'Front API token', dashboard: 'https://app.frontapp.com/settings/tools/api' },
    },
  },
  {
    name: 'functionland', title: 'Functionland',
    secrets: {
      FULA_API_KEY: { description: 'Functionland/Fula API key', dashboard: 'https://fx.land' },
    },
  },
  {
    name: 'gather', title: 'Gather',
    secrets: {
      GATHER_API_KEY: { description: 'Gather API key', dashboard: 'https://app.gather.town' },
      GATHER_SPACE_ID: { description: 'Gather space ID', dashboard: 'https://app.gather.town', required: false },
    },
  },
  {
    name: 'geckoboard', title: 'Geckoboard',
    secrets: {
      GECKOBOARD_API_KEY: { description: 'Geckoboard API key', dashboard: 'https://app.geckoboard.com/account/details' },
    },
  },
  {
    name: 'getstream', title: 'Stream (GetStream)',
    secrets: {
      GETSTREAM_API_KEY: { description: 'GetStream API key', dashboard: 'https://getstream.io/dashboard' },
      GETSTREAM_API_SECRET: { description: 'GetStream API secret', dashboard: 'https://getstream.io/dashboard' },
    },
  },
  {
    name: 'gist', title: 'Gist',
    secrets: {
      GIST_API_TOKEN: { description: 'Gist API token', dashboard: 'https://app.getgist.com' },
    },
  },
  {
    name: 'gitea', title: 'Gitea',
    secrets: {
      GITEA_TOKEN: { description: 'Gitea personal access token', dashboard: 'https://gitea.io' },
      GITEA_URL: { description: 'Gitea instance URL', dashboard: 'https://gitea.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'gitter', title: 'Gitter',
    secrets: {
      GITTER_TOKEN: { description: 'Gitter API token', dashboard: 'https://developer.gitter.im/docs/welcome' },
    },
  },
  {
    name: 'gleap', title: 'Gleap',
    secrets: {
      GLEAP_API_KEY: { description: 'Gleap API key', dashboard: 'https://app.gleap.io' },
    },
  },
  {
    name: 'globus', title: 'Globus',
    secrets: {
      GLOBUS_CLIENT_ID: { description: 'Globus OAuth client ID', dashboard: 'https://app.globus.org/settings/developers' },
      GLOBUS_CLIENT_SECRET: { description: 'Globus OAuth client secret', dashboard: 'https://app.globus.org/settings/developers' },
    },
  },
  {
    name: 'gocanvas', title: 'GoCanvas',
    secrets: {
      GOCANVAS_USERNAME: { description: 'GoCanvas API username', dashboard: 'https://www.gocanvas.com' },
      GOCANVAS_API_KEY: { description: 'GoCanvas API key', dashboard: 'https://www.gocanvas.com' },
    },
  },
  {
    name: 'google-analytics', title: 'Google Analytics',
    secrets: {
      GA_MEASUREMENT_ID: { description: 'Google Analytics measurement ID', dashboard: 'https://analytics.google.com' },
      GA_API_SECRET: { description: 'Google Analytics measurement protocol API secret', dashboard: 'https://analytics.google.com', required: false },
    },
  },
  {
    name: 'google-recaptcha', title: 'Google reCAPTCHA',
    secrets: {
      RECAPTCHA_SITE_KEY: { description: 'Google reCAPTCHA site key', dashboard: 'https://www.google.com/recaptcha/admin' },
      RECAPTCHA_SECRET_KEY: { description: 'Google reCAPTCHA secret key', dashboard: 'https://www.google.com/recaptcha/admin' },
    },
  },
  {
    name: 'gorse', title: 'Gorse',
    secrets: {
      GORSE_API_KEY: { description: 'Gorse recommendation API key', dashboard: 'https://gorse.io' },
      GORSE_URL: { description: 'Gorse server URL', dashboard: 'https://gorse.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'govuk-notify', title: 'GOV.UK Notify',
    secrets: {
      GOVUK_NOTIFY_API_KEY: { description: 'GOV.UK Notify API key', dashboard: 'https://www.notifications.service.gov.uk' },
    },
  },
  {
    name: 'grain', title: 'Grain',
    secrets: {
      GRAIN_API_TOKEN: { description: 'Grain API token', dashboard: 'https://grain.com' },
    },
  },
  {
    name: 'gravitee', title: 'Gravitee',
    secrets: {
      GRAVITEE_API_KEY: { description: 'Gravitee API management key', dashboard: 'https://cockpit.gravitee.io' },
      GRAVITEE_URL: { description: 'Gravitee management URL', dashboard: 'https://cockpit.gravitee.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'greenhouse', title: 'Greenhouse',
    secrets: {
      GREENHOUSE_API_KEY: { description: 'Greenhouse Harvest API key', dashboard: 'https://app.greenhouse.io' },
    },
  },
  {
    name: 'gridsome', title: 'Gridsome Cloud',
    secrets: {
      GRIDSOME_API_KEY: { description: 'Gridsome API key', dashboard: 'https://gridsome.org' },
    },
  },
  {
    name: 'gumroad', title: 'Gumroad',
    secrets: {
      GUMROAD_ACCESS_TOKEN: { description: 'Gumroad access token', dashboard: 'https://app.gumroad.com/settings/advanced' },
    },
  },
  {
    name: 'hashicorp-consul', title: 'HashiCorp Consul',
    secrets: {
      CONSUL_HTTP_TOKEN: { description: 'Consul ACL token', dashboard: 'https://www.consul.io' },
      CONSUL_HTTP_ADDR: { description: 'Consul server address', dashboard: 'https://www.consul.io', required: false },
    },
  },
  {
    name: 'hashicorp-nomad', title: 'HashiCorp Nomad',
    secrets: {
      NOMAD_TOKEN: { description: 'Nomad ACL token', dashboard: 'https://www.nomadproject.io' },
      NOMAD_ADDR: { description: 'Nomad server address', dashboard: 'https://www.nomadproject.io', required: false },
    },
  },
  {
    name: 'hashicorp-waypoint', title: 'HashiCorp Waypoint',
    secrets: {
      WAYPOINT_TOKEN: { description: 'Waypoint auth token', dashboard: 'https://www.waypointproject.io' },
      WAYPOINT_SERVER_ADDR: { description: 'Waypoint server address', dashboard: 'https://www.waypointproject.io', required: false },
    },
  },
  {
    name: 'hcloud', title: 'Hetzner Cloud CLI',
    secrets: {
      HCLOUD_TOKEN: { description: 'Hetzner Cloud API token', dashboard: 'https://console.hetzner.cloud' },
    },
  },
  {
    name: 'hellosign-api', title: 'Dropbox Sign (HelloSign) API',
    secrets: {
      HELLOSIGN_API_KEY: { description: 'Dropbox Sign API key', dashboard: 'https://app.hellosign.com/home/myAccount#api' },
    },
  },
  {
    name: 'hetzner-dns', title: 'Hetzner DNS',
    secrets: {
      HETZNER_DNS_TOKEN: { description: 'Hetzner DNS API token', dashboard: 'https://dns.hetzner.com/settings/api-token' },
    },
  },
  {
    name: 'hexnode', title: 'Hexnode',
    secrets: {
      HEXNODE_API_KEY: { description: 'Hexnode MDM API key', dashboard: 'https://hexnode.com' },
      HEXNODE_PORTAL: { description: 'Hexnode portal URL', dashboard: 'https://hexnode.com' },
    },
  },
  {
    name: 'hologram', title: 'Hologram',
    secrets: {
      HOLOGRAM_API_KEY: { description: 'Hologram IoT API key', dashboard: 'https://dashboard.hologram.io' },
    },
  },
  {
    name: 'hookdeck-api', title: 'Hookdeck API',
    secrets: {
      HOOKDECK_API_KEY: { description: 'Hookdeck API key', dashboard: 'https://dashboard.hookdeck.com' },
      HOOKDECK_SIGNING_SECRET: { description: 'Hookdeck webhook signing secret', dashboard: 'https://dashboard.hookdeck.com', required: false },
    },
  },
  {
    name: 'hopin', title: 'Hopin',
    secrets: {
      HOPIN_API_KEY: { description: 'Hopin API key', dashboard: 'https://app.hopin.com' },
    },
  },
  {
    name: 'html-css-to-image', title: 'HTML/CSS to Image',
    secrets: {
      HCTI_API_USER_ID: { description: 'HCTI user ID', dashboard: 'https://htmlcsstoimage.com/dashboard' },
      HCTI_API_KEY: { description: 'HCTI API key', dashboard: 'https://htmlcsstoimage.com/dashboard' },
    },
  },
  {
    name: 'hudu', title: 'Hudu',
    secrets: {
      HUDU_API_KEY: { description: 'Hudu API key', dashboard: 'https://app.huducloud.com' },
      HUDU_BASE_URL: { description: 'Hudu instance URL', dashboard: 'https://app.huducloud.com', validate: 'url' },
    },
  },
  {
    name: 'humanloop', title: 'Humanloop',
    secrets: {
      HUMANLOOP_API_KEY: { description: 'Humanloop API key', dashboard: 'https://app.humanloop.com' },
    },
  },
  {
    name: 'humio', title: 'Humio/LogScale',
    secrets: {
      HUMIO_TOKEN: { description: 'Humio/LogScale ingest token', dashboard: 'https://cloud.humio.com' },
      HUMIO_URL: { description: 'Humio/LogScale URL', dashboard: 'https://cloud.humio.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'hypertrack', title: 'HyperTrack',
    secrets: {
      HYPERTRACK_ACCOUNT_ID: { description: 'HyperTrack account ID', dashboard: 'https://dashboard.hypertrack.com' },
      HYPERTRACK_SECRET_KEY: { description: 'HyperTrack secret key', dashboard: 'https://dashboard.hypertrack.com' },
    },
  },
  {
    name: 'imageai', title: 'ImageAI',
    secrets: {
      IMAGEAI_API_KEY: { description: 'ImageAI API key', dashboard: 'https://imageai.io' },
    },
  },
  {
    name: 'imperva', title: 'Imperva',
    secrets: {
      IMPERVA_API_ID: { description: 'Imperva API identifier', dashboard: 'https://my.imperva.com' },
      IMPERVA_API_KEY: { description: 'Imperva API key', dashboard: 'https://my.imperva.com' },
    },
  },
  {
    name: 'incidentio', title: 'incident.io',
    secrets: {
      INCIDENTIO_API_KEY: { description: 'incident.io API key', dashboard: 'https://app.incident.io' },
    },
  },
  {
    name: 'indicio', title: 'Indicio',
    secrets: {
      INDICIO_API_KEY: { description: 'Indicio API key', dashboard: 'https://indicio.tech' },
    },
  },
  {
    name: 'infomaniak', title: 'Infomaniak',
    secrets: {
      INFOMANIAK_API_TOKEN: { description: 'Infomaniak API token', dashboard: 'https://manager.infomaniak.com' },
    },
  },
  {
    name: 'inkeep', title: 'Inkeep',
    secrets: {
      INKEEP_API_KEY: { description: 'Inkeep API key', dashboard: 'https://portal.inkeep.com' },
      INKEEP_INTEGRATION_ID: { description: 'Inkeep integration ID', dashboard: 'https://portal.inkeep.com' },
    },
  },
  {
    name: 'inspectlet', title: 'Inspectlet',
    secrets: {
      INSPECTLET_WID: { description: 'Inspectlet website ID', dashboard: 'https://www.inspectlet.com' },
    },
  },
  {
    name: 'interzoid', title: 'Interzoid',
    secrets: {
      INTERZOID_API_KEY: { description: 'Interzoid API key', dashboard: 'https://www.interzoid.com' },
    },
  },
  {
    name: 'ioredis-cloud', title: 'Redis Cloud (ioredis)',
    secrets: {
      REDIS_CLOUD_URL: { description: 'Redis Cloud connection URL', dashboard: 'https://app.redislabs.com', validate: 'url' },
      REDIS_CLOUD_PASSWORD: { description: 'Redis Cloud password', dashboard: 'https://app.redislabs.com', required: false },
    },
  },
  {
    name: 'iugu', title: 'Iugu',
    secrets: {
      IUGU_API_TOKEN: { description: 'Iugu API token', dashboard: 'https://alia.iugu.com' },
    },
  },
  {
    name: 'jamf', title: 'Jamf Pro',
    secrets: {
      JAMF_URL: { description: 'Jamf Pro server URL', dashboard: 'https://www.jamf.com', validate: 'url' },
      JAMF_CLIENT_ID: { description: 'Jamf Pro API client ID', dashboard: 'https://www.jamf.com' },
      JAMF_CLIENT_SECRET: { description: 'Jamf Pro API client secret', dashboard: 'https://www.jamf.com' },
    },
  },
  {
    name: 'jelastic', title: 'Jelastic',
    secrets: {
      JELASTIC_TOKEN: { description: 'Jelastic API token', dashboard: 'https://jelastic.com' },
      JELASTIC_URL: { description: 'Jelastic platform URL', dashboard: 'https://jelastic.com', validate: 'url' },
    },
  },
  {
    name: 'jotai', title: 'Jotai/Jotai Cloud',
    secrets: {
      JOTAI_CLOUD_API_KEY: { description: 'Jotai Cloud API key', dashboard: 'https://jotai.org' },
    },
  },
  {
    name: 'kagi', title: 'Kagi',
    secrets: {
      KAGI_API_KEY: { description: 'Kagi search API key', dashboard: 'https://kagi.com/settings?p=api' },
    },
  },
  {
    name: 'kaleyra', title: 'Kaleyra',
    secrets: {
      KALEYRA_API_KEY: { description: 'Kaleyra API key', dashboard: 'https://developers.kaleyra.io' },
      KALEYRA_SID: { description: 'Kaleyra account SID', dashboard: 'https://developers.kaleyra.io' },
    },
  },
  {
    name: 'katana', title: 'Katana MRP',
    secrets: {
      KATANA_API_KEY: { description: 'Katana MRP API key', dashboard: 'https://katanamrp.com' },
    },
  },
  {
    name: 'keen', title: 'Keen.io',
    secrets: {
      KEEN_PROJECT_ID: { description: 'Keen.io project ID', dashboard: 'https://keen.io/projects' },
      KEEN_WRITE_KEY: { description: 'Keen.io write key', dashboard: 'https://keen.io/projects' },
      KEEN_READ_KEY: { description: 'Keen.io read key', dashboard: 'https://keen.io/projects', required: false },
    },
  },
  {
    name: 'keypup', title: 'Keypup',
    secrets: {
      KEYPUP_API_KEY: { description: 'Keypup API key', dashboard: 'https://keypup.io' },
    },
  },
  {
    name: 'kintone', title: 'Kintone',
    secrets: {
      KINTONE_API_TOKEN: { description: 'Kintone API token', dashboard: 'https://kintone.dev' },
      KINTONE_BASE_URL: { description: 'Kintone instance URL', dashboard: 'https://kintone.dev', validate: 'url' },
    },
  },
  {
    name: 'kisi', title: 'Kisi',
    secrets: {
      KISI_API_KEY: { description: 'Kisi API key', dashboard: 'https://web.kisi.io' },
    },
  },
  {
    name: 'kit', title: 'Kit (ConvertKit)',
    secrets: {
      KIT_API_SECRET: { description: 'Kit (ConvertKit) API secret', dashboard: 'https://app.kit.com/account/edit' },
    },
  },
  {
    name: 'kontena', title: 'Kontena',
    secrets: {
      KONTENA_TOKEN: { description: 'Kontena authentication token', dashboard: 'https://kontena.io' },
    },
  },
  {
    name: 'koala', title: 'Koala',
    secrets: {
      KOALA_API_KEY: { description: 'Koala analytics API key', dashboard: 'https://app.getkoala.com' },
    },
  },
  {
    name: 'leanix', title: 'LeanIX',
    secrets: {
      LEANIX_API_TOKEN: { description: 'LeanIX API token', dashboard: 'https://app.leanix.net' },
      LEANIX_SUBDOMAIN: { description: 'LeanIX subdomain', dashboard: 'https://app.leanix.net', required: false },
    },
  },
  {
    name: 'lemlist', title: 'Lemlist',
    secrets: {
      LEMLIST_API_KEY: { description: 'Lemlist API key', dashboard: 'https://app.lemlist.com' },
    },
  },
  {
    name: 'lever', title: 'Lever',
    secrets: {
      LEVER_API_KEY: { description: 'Lever API key', dashboard: 'https://hire.lever.co/settings/integrations' },
    },
  },
  {
    name: 'lightstep', title: 'Lightstep/ServiceNow Observability',
    secrets: {
      LIGHTSTEP_ACCESS_TOKEN: { description: 'Lightstep access token', dashboard: 'https://app.lightstep.com' },
    },
  },
  {
    name: 'linuxserver', title: 'LinuxServer.io',
    secrets: {
      LSIO_API_KEY: { description: 'LinuxServer.io API key', dashboard: 'https://www.linuxserver.io' },
    },
  },
  {
    name: 'listmonk', title: 'Listmonk',
    secrets: {
      LISTMONK_URL: { description: 'Listmonk instance URL', dashboard: 'https://listmonk.app', validate: 'url' },
      LISTMONK_USERNAME: { description: 'Listmonk admin username', dashboard: 'https://listmonk.app' },
      LISTMONK_PASSWORD: { description: 'Listmonk admin password', dashboard: 'https://listmonk.app' },
    },
  },
  {
    name: 'lithic', title: 'Lithic',
    secrets: {
      LITHIC_API_KEY: { description: 'Lithic card issuing API key', dashboard: 'https://app.lithic.com' },
    },
  },
  {
    name: 'logdna', title: 'LogDNA/Mezmo',
    secrets: {
      LOGDNA_KEY: { description: 'LogDNA/Mezmo ingestion key', dashboard: 'https://app.logdna.com' },
    },
  },
  {
    name: 'loginradius', title: 'LoginRadius',
    secrets: {
      LOGINRADIUS_API_KEY: { description: 'LoginRadius API key', dashboard: 'https://dashboard.loginradius.com' },
      LOGINRADIUS_API_SECRET: { description: 'LoginRadius API secret', dashboard: 'https://dashboard.loginradius.com' },
      LOGINRADIUS_APP_NAME: { description: 'LoginRadius app name', dashboard: 'https://dashboard.loginradius.com', required: false },
    },
  },
  {
    name: 'loom', title: 'Loom',
    secrets: {
      LOOM_API_KEY: { description: 'Loom developer API key', dashboard: 'https://www.loom.com/developer-portal' },
    },
  },
  {
    name: 'lucidchart', title: 'Lucidchart',
    secrets: {
      LUCIDCHART_TOKEN: { description: 'Lucidchart API token', dashboard: 'https://lucid.app' },
    },
  },
  {
    name: 'lunchmoney', title: 'Lunch Money',
    secrets: {
      LUNCHMONEY_ACCESS_TOKEN: { description: 'Lunch Money API access token', dashboard: 'https://my.lunchmoney.app/developers' },
    },
  },
  {
    name: 'mailtrap', title: 'Mailtrap',
    secrets: {
      MAILTRAP_API_TOKEN: { description: 'Mailtrap API token', dashboard: 'https://mailtrap.io/api-tokens' },
    },
  },
  {
    name: 'managewp', title: 'ManageWP',
    secrets: {
      MANAGEWP_API_KEY: { description: 'ManageWP API key', dashboard: 'https://orion.managewp.com' },
    },
  },
  {
    name: 'manifest', title: 'Manifest',
    secrets: {
      MANIFEST_API_KEY: { description: 'Manifest API key', dashboard: 'https://manifest.build' },
    },
  },
  {
    name: 'marchex', title: 'Marchex',
    secrets: {
      MARCHEX_ACCOUNT_ID: { description: 'Marchex account ID', dashboard: 'https://www.marchex.com' },
      MARCHEX_API_KEY: { description: 'Marchex API key', dashboard: 'https://www.marchex.com' },
    },
  },
  {
    name: 'mastodon', title: 'Mastodon',
    secrets: {
      MASTODON_ACCESS_TOKEN: { description: 'Mastodon access token', dashboard: 'https://mastodon.social/settings/applications' },
      MASTODON_INSTANCE_URL: { description: 'Mastodon instance URL', dashboard: 'https://mastodon.social', validate: 'url' },
    },
  },
  {
    name: 'matrix', title: 'Matrix',
    secrets: {
      MATRIX_ACCESS_TOKEN: { description: 'Matrix access token', dashboard: 'https://element.io' },
      MATRIX_HOMESERVER_URL: { description: 'Matrix homeserver URL', dashboard: 'https://element.io', validate: 'url' },
    },
  },
  {
    name: 'maven', title: 'Maven Central',
    secrets: {
      MAVEN_USERNAME: { description: 'Maven Central username', dashboard: 'https://central.sonatype.com' },
      MAVEN_PASSWORD: { description: 'Maven Central password/token', dashboard: 'https://central.sonatype.com' },
      MAVEN_GPG_PASSPHRASE: { description: 'GPG passphrase for Maven signing', dashboard: 'https://central.sonatype.com', required: false },
    },
  },
  {
    name: 'messagebird-conversations', title: 'MessageBird Conversations',
    secrets: {
      MESSAGEBIRD_CONVERSATIONS_KEY: { description: 'MessageBird Conversations API key', dashboard: 'https://dashboard.messagebird.com' },
    },
  },
  {
    name: 'metaapi', title: 'MetaApi',
    secrets: {
      METAAPI_TOKEN: { description: 'MetaApi auth token', dashboard: 'https://app.metaapi.cloud' },
    },
  },
  {
    name: 'microsoft-graph', title: 'Microsoft Graph',
    secrets: {
      MSGRAPH_CLIENT_ID: { description: 'Microsoft Graph client ID', dashboard: 'https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps' },
      MSGRAPH_CLIENT_SECRET: { description: 'Microsoft Graph client secret', dashboard: 'https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps' },
      MSGRAPH_TENANT_ID: { description: 'Microsoft Graph tenant ID', dashboard: 'https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps' },
    },
  },
  {
    name: 'milvus', title: 'Milvus',
    secrets: {
      MILVUS_URI: { description: 'Milvus connection URI', dashboard: 'https://cloud.zilliz.com', validate: 'url' },
      MILVUS_TOKEN: { description: 'Milvus auth token', dashboard: 'https://cloud.zilliz.com', required: false },
    },
  },
  {
    name: 'mintlify', title: 'Mintlify',
    secrets: {
      MINTLIFY_API_KEY: { description: 'Mintlify API key', dashboard: 'https://mintlify.com/dashboard' },
    },
  },
  {
    name: 'moengage', title: 'MoEngage',
    secrets: {
      MOENGAGE_APP_ID: { description: 'MoEngage app ID', dashboard: 'https://dashboard.moengage.com' },
      MOENGAGE_API_KEY: { description: 'MoEngage API key', dashboard: 'https://dashboard.moengage.com' },
    },
  },
  {
    name: 'moesif', title: 'Moesif',
    secrets: {
      MOESIF_APPLICATION_ID: { description: 'Moesif application ID', dashboard: 'https://www.moesif.com/wrap/onboarding' },
    },
  },
  {
    name: 'momento', title: 'Momento',
    secrets: {
      MOMENTO_AUTH_TOKEN: { description: 'Momento auth token', dashboard: 'https://console.gomomento.com' },
    },
  },
  {
    name: 'mondoo', title: 'Mondoo',
    secrets: {
      MONDOO_CONFIG_BASE64: { description: 'Mondoo config (base64)', dashboard: 'https://console.mondoo.com' },
    },
  },
  {
    name: 'moov', title: 'Moov',
    secrets: {
      MOOV_SECRET_KEY: { description: 'Moov secret key', dashboard: 'https://dashboard.moov.io' },
      MOOV_PUBLIC_KEY: { description: 'Moov public key', dashboard: 'https://dashboard.moov.io', required: false },
    },
  },
  {
    name: 'mparticle', title: 'mParticle',
    secrets: {
      MPARTICLE_API_KEY: { description: 'mParticle API key', dashboard: 'https://app.mparticle.com' },
      MPARTICLE_API_SECRET: { description: 'mParticle API secret', dashboard: 'https://app.mparticle.com' },
    },
  },
  {
    name: 'mqtt', title: 'MQTT',
    secrets: {
      MQTT_BROKER_URL: { description: 'MQTT broker URL', dashboard: 'https://mosquitto.org', validate: 'url' },
      MQTT_USERNAME: { description: 'MQTT broker username', dashboard: 'https://mosquitto.org', required: false },
      MQTT_PASSWORD: { description: 'MQTT broker password', dashboard: 'https://mosquitto.org', required: false },
    },
  },
  {
    name: 'multiversx', title: 'MultiversX',
    secrets: {
      MULTIVERSX_API_KEY: { description: 'MultiversX API key', dashboard: 'https://multiversx.com' },
    },
  },
  {
    name: 'netlify-cms', title: 'Netlify CMS/Decap CMS',
    secrets: {
      NETLIFY_CMS_BACKEND_REPO: { description: 'Netlify CMS Git backend repo', dashboard: 'https://decapcms.org' },
    },
  },
  // ── Batch 7: Push past 1000 ──
  {
    name: 'nhost', title: 'Nhost',
    secrets: {
      NHOST_SUBDOMAIN: { description: 'Nhost project subdomain', dashboard: 'https://app.nhost.io' },
      NHOST_REGION: { description: 'Nhost project region', dashboard: 'https://app.nhost.io', required: false },
      NHOST_ADMIN_SECRET: { description: 'Nhost admin secret', dashboard: 'https://app.nhost.io' },
    },
  },
  {
    name: 'nightfall', title: 'Nightfall AI',
    secrets: {
      NIGHTFALL_API_KEY: { description: 'Nightfall AI API key', dashboard: 'https://app.nightfall.ai' },
    },
  },
  {
    name: 'nixtla', title: 'Nixtla',
    secrets: {
      NIXTLA_API_KEY: { description: 'Nixtla TimeGPT API key', dashboard: 'https://dashboard.nixtla.io' },
    },
  },
  {
    name: 'noco-db', title: 'NocoDB',
    secrets: {
      NOCODB_TOKEN: { description: 'NocoDB API token', dashboard: 'https://nocodb.com' },
      NOCODB_URL: { description: 'NocoDB instance URL', dashboard: 'https://nocodb.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'nomic', title: 'Nomic',
    secrets: {
      NOMIC_API_KEY: { description: 'Nomic Atlas API key', dashboard: 'https://atlas.nomic.ai' },
    },
  },
  {
    name: 'nordlayer', title: 'NordLayer',
    secrets: {
      NORDLAYER_API_TOKEN: { description: 'NordLayer API token', dashboard: 'https://nordlayer.com' },
    },
  },
  {
    name: 'noysi', title: 'Noysi',
    secrets: {
      NOYSI_API_TOKEN: { description: 'Noysi API token', dashboard: 'https://noysi.com' },
    },
  },
  {
    name: 'nuget', title: 'NuGet',
    secrets: {
      NUGET_API_KEY: { description: 'NuGet publish API key', dashboard: 'https://www.nuget.org/account/apikeys' },
    },
  },
  {
    name: 'obsidian-publish', title: 'Obsidian Publish',
    secrets: {
      OBSIDIAN_API_TOKEN: { description: 'Obsidian Publish API token', dashboard: 'https://obsidian.md' },
    },
  },
  {
    name: 'oci', title: 'Oracle Cloud Infrastructure CLI',
    secrets: {
      OCI_TENANCY: { description: 'OCI tenancy OCID', dashboard: 'https://cloud.oracle.com' },
      OCI_USER: { description: 'OCI user OCID', dashboard: 'https://cloud.oracle.com' },
      OCI_FINGERPRINT: { description: 'OCI API key fingerprint', dashboard: 'https://cloud.oracle.com' },
      OCI_KEY_FILE: { description: 'Path to OCI API private key', dashboard: 'https://cloud.oracle.com', required: false },
    },
  },
  {
    name: 'onepassword', title: '1Password',
    secrets: {
      OP_SERVICE_ACCOUNT_TOKEN: { description: '1Password service account token', dashboard: 'https://my.1password.com/developer-tools/infrastructure-secrets' },
      OP_CONNECT_HOST: { description: '1Password Connect server URL', dashboard: 'https://my.1password.com', required: false, validate: 'url' },
      OP_CONNECT_TOKEN: { description: '1Password Connect token', dashboard: 'https://my.1password.com', required: false },
    },
  },
  {
    name: 'openaq', title: 'OpenAQ',
    secrets: {
      OPENAQ_API_KEY: { description: 'OpenAQ air quality API key', dashboard: 'https://openaq.org' },
    },
  },
  {
    name: 'opendata', title: 'Open Data (data.gov)',
    secrets: {
      DATA_GOV_API_KEY: { description: 'Data.gov API key', dashboard: 'https://api.data.gov/signup/' },
    },
  },
  {
    name: 'openlibrary', title: 'Open Library',
    secrets: {
      OPENLIBRARY_KEY: { description: 'Open Library API key', dashboard: 'https://openlibrary.org/developers' },
    },
  },
  {
    name: 'opensea-stream', title: 'OpenSea Stream',
    secrets: {
      OPENSEA_STREAM_API_KEY: { description: 'OpenSea stream API key', dashboard: 'https://docs.opensea.io/reference/stream-api-overview' },
    },
  },
  {
    name: 'openverse', title: 'Openverse',
    secrets: {
      OPENVERSE_CLIENT_ID: { description: 'Openverse API client ID', dashboard: 'https://api.openverse.org' },
      OPENVERSE_CLIENT_SECRET: { description: 'Openverse API client secret', dashboard: 'https://api.openverse.org' },
    },
  },
  {
    name: 'opsramp', title: 'OpsRamp',
    secrets: {
      OPSRAMP_API_KEY: { description: 'OpsRamp API key', dashboard: 'https://www.opsramp.com' },
      OPSRAMP_API_SECRET: { description: 'OpsRamp API secret', dashboard: 'https://www.opsramp.com' },
    },
  },
  {
    name: 'order-desk', title: 'Order Desk',
    secrets: {
      ORDERDESK_STORE_ID: { description: 'Order Desk store ID', dashboard: 'https://app.orderdesk.me' },
      ORDERDESK_API_KEY: { description: 'Order Desk API key', dashboard: 'https://app.orderdesk.me' },
    },
  },
  {
    name: 'osquery', title: 'osquery/Fleet',
    secrets: {
      FLEET_API_TOKEN: { description: 'Fleet (osquery) API token', dashboard: 'https://fleetdm.com' },
      FLEET_URL: { description: 'Fleet server URL', dashboard: 'https://fleetdm.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'outreach', title: 'Outreach',
    secrets: {
      OUTREACH_CLIENT_ID: { description: 'Outreach OAuth client ID', dashboard: 'https://api.outreach.io' },
      OUTREACH_CLIENT_SECRET: { description: 'Outreach OAuth client secret', dashboard: 'https://api.outreach.io' },
    },
  },
  {
    name: 'owncloud', title: 'ownCloud',
    secrets: {
      OWNCLOUD_URL: { description: 'ownCloud instance URL', dashboard: 'https://owncloud.com', validate: 'url' },
      OWNCLOUD_USERNAME: { description: 'ownCloud username', dashboard: 'https://owncloud.com' },
      OWNCLOUD_PASSWORD: { description: 'ownCloud password', dashboard: 'https://owncloud.com' },
    },
  },
  {
    name: 'pabbly', title: 'Pabbly',
    secrets: {
      PABBLY_API_KEY: { description: 'Pabbly API key', dashboard: 'https://www.pabbly.com' },
    },
  },
  {
    name: 'pachama', title: 'Pachama',
    secrets: {
      PACHAMA_API_KEY: { description: 'Pachama API key', dashboard: 'https://pachama.com' },
    },
  },
  {
    name: 'packagecloud', title: 'Packagecloud',
    secrets: {
      PACKAGECLOUD_TOKEN: { description: 'Packagecloud API token', dashboard: 'https://packagecloud.io/api_token' },
    },
  },
  {
    name: 'pagseguro', title: 'PagSeguro',
    secrets: {
      PAGSEGURO_EMAIL: { description: 'PagSeguro account email', dashboard: 'https://pagseguro.uol.com.br' },
      PAGSEGURO_TOKEN: { description: 'PagSeguro API token', dashboard: 'https://pagseguro.uol.com.br' },
    },
  },
  {
    name: 'palantir', title: 'Palantir Foundry',
    secrets: {
      PALANTIR_TOKEN: { description: 'Palantir Foundry auth token', dashboard: 'https://www.palantir.com/palantir-foundry/' },
      PALANTIR_URL: { description: 'Palantir Foundry URL', dashboard: 'https://www.palantir.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'paperspace', title: 'Paperspace',
    secrets: {
      PAPERSPACE_API_KEY: { description: 'Paperspace API key', dashboard: 'https://console.paperspace.com' },
    },
  },
  {
    name: 'parse', title: 'Parse Server',
    secrets: {
      PARSE_APP_ID: { description: 'Parse application ID', dashboard: 'https://parseplatform.org' },
      PARSE_MASTER_KEY: { description: 'Parse master key', dashboard: 'https://parseplatform.org' },
      PARSE_SERVER_URL: { description: 'Parse server URL', dashboard: 'https://parseplatform.org', required: false, validate: 'url' },
    },
  },
  {
    name: 'payoneer', title: 'Payoneer',
    secrets: {
      PAYONEER_PROGRAM_ID: { description: 'Payoneer program ID', dashboard: 'https://payouts.payoneer.com' },
      PAYONEER_USERNAME: { description: 'Payoneer API username', dashboard: 'https://payouts.payoneer.com' },
      PAYONEER_PASSWORD: { description: 'Payoneer API password', dashboard: 'https://payouts.payoneer.com' },
    },
  },
  {
    name: 'payrex', title: 'PayRex',
    secrets: {
      PAYREX_SECRET_KEY: { description: 'PayRex secret key', dashboard: 'https://payrex.io' },
    },
  },
  {
    name: 'peaka', title: 'Peaka',
    secrets: {
      PEAKA_API_KEY: { description: 'Peaka API key', dashboard: 'https://peaka.com' },
    },
  },
  {
    name: 'peliqan', title: 'Peliqan',
    secrets: {
      PELIQAN_API_KEY: { description: 'Peliqan API key', dashboard: 'https://peliqan.io' },
    },
  },
  {
    name: 'pennylane', title: 'Pennylane',
    secrets: {
      PENNYLANE_API_KEY: { description: 'Pennylane API key', dashboard: 'https://www.pennylane.com' },
    },
  },
  {
    name: 'pexip', title: 'Pexip',
    secrets: {
      PEXIP_API_TOKEN: { description: 'Pexip management API token', dashboard: 'https://www.pexip.com' },
      PEXIP_URL: { description: 'Pexip management URL', dashboard: 'https://www.pexip.com', validate: 'url' },
    },
  },
  {
    name: 'pipefy', title: 'Pipefy',
    secrets: {
      PIPEFY_TOKEN: { description: 'Pipefy personal access token', dashboard: 'https://app.pipefy.com/tokens' },
    },
  },
  {
    name: 'pixabay', title: 'Pixabay',
    secrets: {
      PIXABAY_API_KEY: { description: 'Pixabay API key', dashboard: 'https://pixabay.com/api/docs/' },
    },
  },
  {
    name: 'pixela', title: 'Pixela',
    secrets: {
      PIXELA_USERNAME: { description: 'Pixela username', dashboard: 'https://pixe.la' },
      PIXELA_TOKEN: { description: 'Pixela token', dashboard: 'https://pixe.la' },
    },
  },
  {
    name: 'placekey', title: 'Placekey',
    secrets: {
      PLACEKEY_API_KEY: { description: 'Placekey API key', dashboard: 'https://www.placekey.io' },
    },
  },
  {
    name: 'planhat', title: 'Planhat',
    secrets: {
      PLANHAT_API_TOKEN: { description: 'Planhat API token', dashboard: 'https://app.planhat.com' },
      PLANHAT_TENANT_UUID: { description: 'Planhat tenant UUID', dashboard: 'https://app.planhat.com' },
    },
  },
  {
    name: 'plasmic', title: 'Plasmic',
    secrets: {
      PLASMIC_PROJECT_ID: { description: 'Plasmic project ID', dashboard: 'https://studio.plasmic.app' },
      PLASMIC_TOKEN: { description: 'Plasmic API token', dashboard: 'https://studio.plasmic.app' },
    },
  },
  {
    name: 'platypus', title: 'Platypus',
    secrets: {
      PLATYPUS_API_KEY: { description: 'Platypus API key', dashboard: 'https://www.platypus.co' },
    },
  },
  {
    name: 'plivo-sms', title: 'Plivo SMS',
    secrets: {
      PLIVO_SMS_AUTH_ID: { description: 'Plivo SMS auth ID', dashboard: 'https://console.plivo.com/dashboard/' },
      PLIVO_SMS_AUTH_TOKEN: { description: 'Plivo SMS auth token', dashboard: 'https://console.plivo.com/dashboard/' },
    },
  },
  {
    name: 'podio', title: 'Podio',
    secrets: {
      PODIO_CLIENT_ID: { description: 'Podio OAuth client ID', dashboard: 'https://podio.com/settings/api' },
      PODIO_CLIENT_SECRET: { description: 'Podio OAuth client secret', dashboard: 'https://podio.com/settings/api' },
    },
  },
  {
    name: 'polaris', title: 'Polaris',
    secrets: {
      POLARIS_API_KEY: { description: 'Polaris API key', dashboard: 'https://polaris.synopsys.com' },
      POLARIS_SERVER_URL: { description: 'Polaris server URL', dashboard: 'https://polaris.synopsys.com', validate: 'url' },
    },
  },
  {
    name: 'pollfish', title: 'Pollfish',
    secrets: {
      POLLFISH_API_KEY: { description: 'Pollfish API key', dashboard: 'https://www.pollfish.com/dashboard' },
    },
  },
  {
    name: 'polytomic', title: 'Polytomic',
    secrets: {
      POLYTOMIC_API_KEY: { description: 'Polytomic API key', dashboard: 'https://app.polytomic.com' },
      POLYTOMIC_DEPLOYMENT_URL: { description: 'Polytomic deployment URL', dashboard: 'https://app.polytomic.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'portainer', title: 'Portainer',
    secrets: {
      PORTAINER_API_KEY: { description: 'Portainer API key', dashboard: 'https://app.portainer.io' },
      PORTAINER_URL: { description: 'Portainer instance URL', dashboard: 'https://app.portainer.io', validate: 'url' },
    },
  },
  {
    name: 'postman', title: 'Postman',
    secrets: {
      POSTMAN_API_KEY: { description: 'Postman API key', dashboard: 'https://web.postman.co/settings/me/api-keys' },
    },
  },
  {
    name: 'powerbi', title: 'Power BI',
    secrets: {
      POWERBI_CLIENT_ID: { description: 'Power BI client ID', dashboard: 'https://app.powerbi.com' },
      POWERBI_CLIENT_SECRET: { description: 'Power BI client secret', dashboard: 'https://app.powerbi.com' },
      POWERBI_TENANT_ID: { description: 'Power BI tenant ID', dashboard: 'https://app.powerbi.com' },
    },
  },
  {
    name: 'prefect', title: 'Prefect',
    secrets: {
      PREFECT_API_KEY: { description: 'Prefect Cloud API key', dashboard: 'https://app.prefect.cloud' },
      PREFECT_API_URL: { description: 'Prefect API URL', dashboard: 'https://app.prefect.cloud', required: false, validate: 'url' },
    },
  },
  {
    name: 'prisma-cloud', title: 'Prisma Cloud',
    secrets: {
      PRISMA_CLOUD_ACCESS_KEY: { description: 'Prisma Cloud access key', dashboard: 'https://prismacloud.io' },
      PRISMA_CLOUD_SECRET_KEY: { description: 'Prisma Cloud secret key', dashboard: 'https://prismacloud.io' },
      PRISMA_CLOUD_API_URL: { description: 'Prisma Cloud API URL', dashboard: 'https://prismacloud.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'procreate', title: 'Procreate',
    secrets: {
      PROCREATE_API_KEY: { description: 'Procreate API key', dashboard: 'https://procreate.com' },
    },
  },
  {
    name: 'proofpoint', title: 'Proofpoint',
    secrets: {
      PROOFPOINT_SP: { description: 'Proofpoint service principal', dashboard: 'https://www.proofpoint.com' },
      PROOFPOINT_API_KEY: { description: 'Proofpoint API key', dashboard: 'https://www.proofpoint.com' },
    },
  },
  {
    name: 'protocol', title: 'Protocol',
    secrets: {
      PROTOCOL_API_KEY: { description: 'Protocol API key', dashboard: 'https://protocol.chat' },
    },
  },
  {
    name: 'proxmox', title: 'Proxmox',
    secrets: {
      PROXMOX_API_TOKEN: { description: 'Proxmox API token', dashboard: 'https://www.proxmox.com' },
      PROXMOX_URL: { description: 'Proxmox server URL', dashboard: 'https://www.proxmox.com', validate: 'url' },
    },
  },
  {
    name: 'pypi', title: 'PyPI',
    secrets: {
      PYPI_API_TOKEN: { description: 'PyPI API token', dashboard: 'https://pypi.org/manage/account/#api-tokens' },
    },
  },
  {
    name: 'quickbase', title: 'Quickbase',
    secrets: {
      QUICKBASE_USER_TOKEN: { description: 'Quickbase user token', dashboard: 'https://quickbase.com' },
      QUICKBASE_REALM: { description: 'Quickbase realm hostname', dashboard: 'https://quickbase.com' },
    },
  },
  {
    name: 'quotaguard', title: 'QuotaGuard',
    secrets: {
      QUOTAGUARD_URL: { description: 'QuotaGuard proxy URL', dashboard: 'https://www.quotaguard.com', validate: 'url' },
    },
  },
  {
    name: 'ramp', title: 'Ramp',
    secrets: {
      RAMP_CLIENT_ID: { description: 'Ramp OAuth client ID', dashboard: 'https://developer.ramp.com' },
      RAMP_CLIENT_SECRET: { description: 'Ramp OAuth client secret', dashboard: 'https://developer.ramp.com' },
    },
  },
  {
    name: 'rancher', title: 'Rancher',
    secrets: {
      RANCHER_ACCESS_KEY: { description: 'Rancher API access key', dashboard: 'https://rancher.com' },
      RANCHER_SECRET_KEY: { description: 'Rancher API secret key', dashboard: 'https://rancher.com' },
      RANCHER_SERVER_URL: { description: 'Rancher server URL', dashboard: 'https://rancher.com', validate: 'url' },
    },
  },
  {
    name: 'raven', title: 'Raven',
    secrets: {
      RAVEN_API_KEY: { description: 'Raven messaging API key', dashboard: 'https://ravenapp.dev' },
    },
  },
  {
    name: 'raycast', title: 'Raycast',
    secrets: {
      RAYCAST_API_TOKEN: { description: 'Raycast API token', dashboard: 'https://raycast.com' },
    },
  },
  {
    name: 'rebrandly', title: 'Rebrandly',
    secrets: {
      REBRANDLY_API_KEY: { description: 'Rebrandly API key', dashboard: 'https://app.rebrandly.com' },
    },
  },
  {
    name: 'recruitee', title: 'Recruitee',
    secrets: {
      RECRUITEE_API_TOKEN: { description: 'Recruitee API token', dashboard: 'https://app.recruitee.com' },
      RECRUITEE_COMPANY_ID: { description: 'Recruitee company ID', dashboard: 'https://app.recruitee.com' },
    },
  },
  {
    name: 'redocly', title: 'Redocly',
    secrets: {
      REDOCLY_API_KEY: { description: 'Redocly API key', dashboard: 'https://app.redocly.com' },
    },
  },
  {
    name: 'refersion', title: 'Refersion',
    secrets: {
      REFERSION_PUBLIC_KEY: { description: 'Refersion public key', dashboard: 'https://www.refersion.com' },
      REFERSION_SECRET_KEY: { description: 'Refersion secret key', dashboard: 'https://www.refersion.com' },
    },
  },
  {
    name: 'regal', title: 'Regal.io',
    secrets: {
      REGAL_API_KEY: { description: 'Regal.io API key', dashboard: 'https://app.regal.io' },
    },
  },
  {
    name: 'rememberizer', title: 'Rememberizer',
    secrets: {
      REMEMBERIZER_API_KEY: { description: 'Rememberizer API key', dashboard: 'https://rememberizer.ai' },
    },
  },
  {
    name: 'repairshopr', title: 'RepairShopr',
    secrets: {
      REPAIRSHOPR_API_KEY: { description: 'RepairShopr API key', dashboard: 'https://www.repairshopr.com' },
      REPAIRSHOPR_SUBDOMAIN: { description: 'RepairShopr subdomain', dashboard: 'https://www.repairshopr.com' },
    },
  },
  {
    name: 'replicache', title: 'Replicache',
    secrets: {
      REPLICACHE_LICENSE_KEY: { description: 'Replicache license key', dashboard: 'https://replicache.dev' },
    },
  },
  {
    name: 'replit', title: 'Replit',
    secrets: {
      REPLIT_TOKEN: { description: 'Replit API token', dashboard: 'https://replit.com' },
    },
  },
  {
    name: 'resy', title: 'Resy',
    secrets: {
      RESY_API_KEY: { description: 'Resy API key', dashboard: 'https://resy.com' },
    },
  },
  {
    name: 'retable', title: 'Retable',
    secrets: {
      RETABLE_API_KEY: { description: 'Retable API key', dashboard: 'https://www.retable.io' },
    },
  },
  {
    name: 'revenue-cat', title: 'RevenueCat',
    secrets: {
      REVENUECAT_API_KEY: { description: 'RevenueCat API key', dashboard: 'https://app.revenuecat.com' },
      REVENUECAT_SECRET_KEY: { description: 'RevenueCat secret API key', dashboard: 'https://app.revenuecat.com', required: false },
    },
  },
  {
    name: 'reviewboard', title: 'Review Board',
    secrets: {
      REVIEWBOARD_URL: { description: 'Review Board server URL', dashboard: 'https://www.reviewboard.org', validate: 'url' },
      REVIEWBOARD_API_TOKEN: { description: 'Review Board API token', dashboard: 'https://www.reviewboard.org' },
    },
  },
  {
    name: 'riskified', title: 'Riskified',
    secrets: {
      RISKIFIED_SHOP_DOMAIN: { description: 'Riskified shop domain', dashboard: 'https://app.riskified.com' },
      RISKIFIED_AUTH_TOKEN: { description: 'Riskified auth token', dashboard: 'https://app.riskified.com' },
    },
  },
  {
    name: 'roadie', title: 'Roadie',
    secrets: {
      ROADIE_API_TOKEN: { description: 'Roadie (Backstage) API token', dashboard: 'https://roadie.io' },
    },
  },
  {
    name: 'roboflow', title: 'Roboflow',
    secrets: {
      ROBOFLOW_API_KEY: { description: 'Roboflow API key', dashboard: 'https://app.roboflow.com' },
    },
  },
  {
    name: 'rocketreach', title: 'RocketReach',
    secrets: {
      ROCKETREACH_API_KEY: { description: 'RocketReach API key', dashboard: 'https://rocketreach.co/api' },
    },
  },
  {
    name: 'rockset', title: 'Rockset',
    secrets: {
      ROCKSET_API_KEY: { description: 'Rockset API key', dashboard: 'https://console.rockset.com' },
      ROCKSET_API_SERVER: { description: 'Rockset API server URL', dashboard: 'https://console.rockset.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'rootly', title: 'Rootly',
    secrets: {
      ROOTLY_API_KEY: { description: 'Rootly API key', dashboard: 'https://rootly.com' },
    },
  },
  {
    name: 'route4me', title: 'Route4Me',
    secrets: {
      ROUTE4ME_API_KEY: { description: 'Route4Me API key', dashboard: 'https://route4me.com' },
    },
  },
  {
    name: 'rowy', title: 'Rowy',
    secrets: {
      ROWY_SERVICE_ACCOUNT: { description: 'Rowy service account JSON (base64)', dashboard: 'https://rowy.io' },
    },
  },
  {
    name: 'rss2json', title: 'RSS2JSON',
    secrets: {
      RSS2JSON_API_KEY: { description: 'RSS2JSON API key', dashboard: 'https://rss2json.com' },
    },
  },
  {
    name: 'runscope', title: 'Runscope',
    secrets: {
      RUNSCOPE_ACCESS_TOKEN: { description: 'Runscope access token', dashboard: 'https://www.runscope.com/applications' },
    },
  },
  {
    name: 'safaricom', title: 'Safaricom M-Pesa',
    secrets: {
      MPESA_CONSUMER_KEY: { description: 'M-Pesa consumer key', dashboard: 'https://developer.safaricom.co.ke' },
      MPESA_CONSUMER_SECRET: { description: 'M-Pesa consumer secret', dashboard: 'https://developer.safaricom.co.ke' },
      MPESA_PASSKEY: { description: 'M-Pesa passkey', dashboard: 'https://developer.safaricom.co.ke', required: false },
    },
  },
  {
    name: 'sailthru', title: 'Sailthru',
    secrets: {
      SAILTHRU_API_KEY: { description: 'Sailthru API key', dashboard: 'https://my.sailthru.com' },
      SAILTHRU_API_SECRET: { description: 'Sailthru API secret', dashboard: 'https://my.sailthru.com' },
    },
  },
  {
    name: 'salesbricks', title: 'SalesBricks',
    secrets: {
      SALESBRICKS_API_KEY: { description: 'SalesBricks API key', dashboard: 'https://app.salesbricks.com' },
    },
  },
  {
    name: 'samsara', title: 'Samsara',
    secrets: {
      SAMSARA_API_TOKEN: { description: 'Samsara API token', dashboard: 'https://cloud.samsara.com' },
    },
  },
  {
    name: 'sap-hana', title: 'SAP HANA',
    secrets: {
      HANA_HOST: { description: 'SAP HANA host', dashboard: 'https://www.sap.com/products/hana.html' },
      HANA_PORT: { description: 'SAP HANA port', dashboard: 'https://www.sap.com/products/hana.html', required: false },
      HANA_USER: { description: 'SAP HANA user', dashboard: 'https://www.sap.com/products/hana.html' },
      HANA_PASSWORD: { description: 'SAP HANA password', dashboard: 'https://www.sap.com/products/hana.html' },
    },
  },
  {
    name: 'sardine', title: 'Sardine',
    secrets: {
      SARDINE_API_KEY: { description: 'Sardine fraud prevention API key', dashboard: 'https://sardine.ai' },
      SARDINE_SECRET_KEY: { description: 'Sardine secret key', dashboard: 'https://sardine.ai' },
    },
  },
  {
    name: 'scalr', title: 'Scalr',
    secrets: {
      SCALR_TOKEN: { description: 'Scalr Terraform API token', dashboard: 'https://scalr.com' },
      SCALR_HOSTNAME: { description: 'Scalr hostname', dashboard: 'https://scalr.com', required: false },
    },
  },
  {
    name: 'schnaq', title: 'Schnaq',
    secrets: {
      SCHNAQ_API_KEY: { description: 'Schnaq API key', dashboard: 'https://schnaq.com' },
    },
  },
  {
    name: 'screenly', title: 'Screenly',
    secrets: {
      SCREENLY_API_KEY: { description: 'Screenly API key', dashboard: 'https://login.screenly.io' },
    },
  },
  {
    name: 'seatable', title: 'SeaTable',
    secrets: {
      SEATABLE_API_TOKEN: { description: 'SeaTable API token', dashboard: 'https://cloud.seatable.io' },
      SEATABLE_URL: { description: 'SeaTable server URL', dashboard: 'https://cloud.seatable.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'secureframe', title: 'Secureframe',
    secrets: {
      SECUREFRAME_API_KEY: { description: 'Secureframe API key', dashboard: 'https://app.secureframe.com' },
    },
  },
  {
    name: 'seismic', title: 'Seismic',
    secrets: {
      SEISMIC_CLIENT_ID: { description: 'Seismic OAuth client ID', dashboard: 'https://seismic.com' },
      SEISMIC_CLIENT_SECRET: { description: 'Seismic OAuth client secret', dashboard: 'https://seismic.com' },
    },
  },
  {
    name: 'semrush', title: 'Semrush',
    secrets: {
      SEMRUSH_API_KEY: { description: 'Semrush API key', dashboard: 'https://www.semrush.com/accounts/profile/' },
    },
  },
  {
    name: 'servicem8', title: 'ServiceM8',
    secrets: {
      SERVICEM8_USERNAME: { description: 'ServiceM8 API username', dashboard: 'https://www.servicem8.com' },
      SERVICEM8_PASSWORD: { description: 'ServiceM8 API password', dashboard: 'https://www.servicem8.com' },
    },
  },
  {
    name: 'servicetitan', title: 'ServiceTitan',
    secrets: {
      SERVICETITAN_CLIENT_ID: { description: 'ServiceTitan client ID', dashboard: 'https://developer.servicetitan.io' },
      SERVICETITAN_CLIENT_SECRET: { description: 'ServiceTitan client secret', dashboard: 'https://developer.servicetitan.io' },
      SERVICETITAN_TENANT_ID: { description: 'ServiceTitan tenant ID', dashboard: 'https://developer.servicetitan.io' },
    },
  },
  {
    name: 'setmore', title: 'Setmore',
    secrets: {
      SETMORE_API_KEY: { description: 'Setmore API key', dashboard: 'https://www.setmore.com' },
    },
  },
  {
    name: 'sharetribe', title: 'Sharetribe',
    secrets: {
      SHARETRIBE_SDK_CLIENT_ID: { description: 'Sharetribe SDK client ID', dashboard: 'https://console.sharetribe.com' },
      SHARETRIBE_SDK_CLIENT_SECRET: { description: 'Sharetribe SDK client secret', dashboard: 'https://console.sharetribe.com', required: false },
    },
  },
  {
    name: 'sheetdb', title: 'SheetDB',
    secrets: {
      SHEETDB_API_ID: { description: 'SheetDB API ID', dashboard: 'https://sheetdb.io' },
    },
  },
  {
    name: 'sheetson', title: 'Sheetson',
    secrets: {
      SHEETSON_API_KEY: { description: 'Sheetson API key', dashboard: 'https://sheetson.com' },
    },
  },
  {
    name: 'sheety', title: 'Sheety',
    secrets: {
      SHEETY_TOKEN: { description: 'Sheety bearer token', dashboard: 'https://sheety.co' },
    },
  },
  {
    name: 'shipday', title: 'Shipday',
    secrets: {
      SHIPDAY_API_KEY: { description: 'Shipday API key', dashboard: 'https://www.shipday.com' },
    },
  },
  {
    name: 'shipengine', title: 'ShipEngine',
    secrets: {
      SHIPENGINE_API_KEY: { description: 'ShipEngine API key', dashboard: 'https://www.shipengine.com/account/api-management/' },
    },
  },
  {
    name: 'shopware', title: 'Shopware',
    secrets: {
      SHOPWARE_ACCESS_KEY: { description: 'Shopware API access key', dashboard: 'https://shopware.com' },
      SHOPWARE_SECRET_KEY: { description: 'Shopware API secret key', dashboard: 'https://shopware.com' },
      SHOPWARE_URL: { description: 'Shopware instance URL', dashboard: 'https://shopware.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'signalfx', title: 'SignalFx/Splunk Observability',
    secrets: {
      SIGNALFX_API_TOKEN: { description: 'SignalFx API access token', dashboard: 'https://app.signalfx.com' },
      SIGNALFX_REALM: { description: 'SignalFx realm', dashboard: 'https://app.signalfx.com', required: false },
    },
  },
  {
    name: 'signrequest', title: 'SignRequest',
    secrets: {
      SIGNREQUEST_API_TOKEN: { description: 'SignRequest API token', dashboard: 'https://signrequest.com' },
    },
  },
  {
    name: 'simpleanalytics', title: 'Simple Analytics',
    secrets: {
      SIMPLEANALYTICS_API_KEY: { description: 'Simple Analytics API key', dashboard: 'https://simpleanalytics.com/account#api' },
    },
  },
  {
    name: 'simplero', title: 'Simplero',
    secrets: {
      SIMPLERO_API_KEY: { description: 'Simplero API key', dashboard: 'https://simplero.com' },
    },
  },
  {
    name: 'simvoly', title: 'Simvoly',
    secrets: {
      SIMVOLY_API_KEY: { description: 'Simvoly API key', dashboard: 'https://simvoly.com' },
    },
  },
  {
    name: 'skyflow', title: 'Skyflow',
    secrets: {
      SKYFLOW_SERVICE_ACCOUNT: { description: 'Skyflow service account credentials JSON', dashboard: 'https://manage.skyflowapis.com' },
      SKYFLOW_VAULT_ID: { description: 'Skyflow vault ID', dashboard: 'https://manage.skyflowapis.com' },
      SKYFLOW_VAULT_URL: { description: 'Skyflow vault URL', dashboard: 'https://manage.skyflowapis.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'slapdash', title: 'Slapdash',
    secrets: {
      SLAPDASH_API_TOKEN: { description: 'Slapdash API token', dashboard: 'https://slapdash.com' },
    },
  },
  {
    name: 'slickplan', title: 'Slickplan',
    secrets: {
      SLICKPLAN_API_KEY: { description: 'Slickplan API key', dashboard: 'https://slickplan.com' },
    },
  },
  {
    name: 'smallpdf', title: 'Smallpdf',
    secrets: {
      SMALLPDF_API_KEY: { description: 'Smallpdf API key', dashboard: 'https://smallpdf.com' },
    },
  },
  {
    name: 'smartcar', title: 'Smartcar',
    secrets: {
      SMARTCAR_CLIENT_ID: { description: 'Smartcar OAuth client ID', dashboard: 'https://dashboard.smartcar.com' },
      SMARTCAR_CLIENT_SECRET: { description: 'Smartcar OAuth client secret', dashboard: 'https://dashboard.smartcar.com' },
      SMARTCAR_REDIRECT_URI: { description: 'Smartcar OAuth redirect URI', dashboard: 'https://dashboard.smartcar.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'smooch', title: 'Smooch/Sunshine Conversations',
    secrets: {
      SMOOCH_KEY_ID: { description: 'Smooch API key ID', dashboard: 'https://app.smooch.io' },
      SMOOCH_SECRET: { description: 'Smooch API secret', dashboard: 'https://app.smooch.io' },
    },
  },
  {
    name: 'snov', title: 'Snov.io API',
    secrets: {
      SNOV_CLIENT_ID: { description: 'Snov.io client ID', dashboard: 'https://app.snov.io/account/api' },
      SNOV_CLIENT_SECRET: { description: 'Snov.io client secret', dashboard: 'https://app.snov.io/account/api' },
    },
  },
  {
    name: 'socket-io', title: 'Socket.IO',
    secrets: {
      SOCKETIO_SERVER_URL: { description: 'Socket.IO server URL', dashboard: 'https://socket.io', validate: 'url' },
      SOCKETIO_AUTH_TOKEN: { description: 'Socket.IO auth token', dashboard: 'https://socket.io', required: false },
    },
  },
  {
    name: 'softr', title: 'Softr',
    secrets: {
      SOFTR_API_KEY: { description: 'Softr API key', dashboard: 'https://studio.softr.io' },
    },
  },
  {
    name: 'sonarcloud', title: 'SonarCloud',
    secrets: {
      SONARCLOUD_TOKEN: { description: 'SonarCloud token', dashboard: 'https://sonarcloud.io/account/security' },
    },
  },
  {
    name: 'sonder', title: 'Sonder',
    secrets: {
      SONDER_API_KEY: { description: 'Sonder API key', dashboard: 'https://sonder.io' },
    },
  },
  {
    name: 'speakeasy', title: 'Speakeasy',
    secrets: {
      SPEAKEASY_API_KEY: { description: 'Speakeasy API key', dashboard: 'https://app.speakeasyapi.dev' },
    },
  },
  {
    name: 'speechmatics', title: 'Speechmatics',
    secrets: {
      SPEECHMATICS_API_KEY: { description: 'Speechmatics API key', dashboard: 'https://portal.speechmatics.com' },
    },
  },
  {
    name: 'spiraldb', title: 'SpiralDB',
    secrets: {
      SPIRALDB_API_KEY: { description: 'SpiralDB API key', dashboard: 'https://spiraldb.com' },
    },
  },
  {
    name: 'spotinst', title: 'Spot by NetApp',
    secrets: {
      SPOTINST_TOKEN: { description: 'Spot by NetApp API token', dashboard: 'https://console.spotinst.com' },
      SPOTINST_ACCOUNT: { description: 'Spot account ID', dashboard: 'https://console.spotinst.com', required: false },
    },
  },
  {
    name: 'stackhawk', title: 'StackHawk',
    secrets: {
      HAWK_API_KEY: { description: 'StackHawk API key', dashboard: 'https://app.stackhawk.com' },
    },
  },
  {
    name: 'stackpath', title: 'StackPath',
    secrets: {
      STACKPATH_CLIENT_ID: { description: 'StackPath OAuth client ID', dashboard: 'https://control.stackpath.com' },
      STACKPATH_CLIENT_SECRET: { description: 'StackPath OAuth client secret', dashboard: 'https://control.stackpath.com' },
    },
  },
  {
    name: 'stackshare', title: 'StackShare',
    secrets: {
      STACKSHARE_API_KEY: { description: 'StackShare API key', dashboard: 'https://stackshare.io' },
    },
  },
  {
    name: 'stardog', title: 'Stardog',
    secrets: {
      STARDOG_URL: { description: 'Stardog server URL', dashboard: 'https://www.stardog.com', validate: 'url' },
      STARDOG_USERNAME: { description: 'Stardog username', dashboard: 'https://www.stardog.com' },
      STARDOG_PASSWORD: { description: 'Stardog password', dashboard: 'https://www.stardog.com' },
    },
  },
  {
    name: 'statuspage-api', title: 'Statuspage API',
    secrets: {
      STATUSPAGE_API_KEY: { description: 'Statuspage.io API key', dashboard: 'https://manage.statuspage.io/organizations' },
      STATUSPAGE_PAGE_ID: { description: 'Statuspage page ID', dashboard: 'https://manage.statuspage.io', required: false },
    },
  },
  {
    name: 'stenography', title: 'Stenography',
    secrets: {
      STENOGRAPHY_API_KEY: { description: 'Stenography API key', dashboard: 'https://stenography.dev' },
    },
  },
  {
    name: 'stepfunctions', title: 'AWS Step Functions',
    secrets: {
      STEP_FUNCTIONS_REGION: { description: 'AWS Step Functions region', dashboard: 'https://console.aws.amazon.com/states' },
    },
  },
  {
    name: 'stigg', title: 'Stigg',
    secrets: {
      STIGG_SERVER_API_KEY: { description: 'Stigg server API key', dashboard: 'https://app.stigg.io' },
      STIGG_CLIENT_API_KEY: { description: 'Stigg client API key', dashboard: 'https://app.stigg.io', required: false },
    },
  },
  {
    name: 'stockx', title: 'StockX',
    secrets: {
      STOCKX_API_KEY: { description: 'StockX API key', dashboard: 'https://developer.stockx.com' },
    },
  },
  {
    name: 'stonebranch', title: 'Stonebranch',
    secrets: {
      STONEBRANCH_URL: { description: 'Stonebranch Universal Controller URL', dashboard: 'https://www.stonebranch.com', validate: 'url' },
      STONEBRANCH_TOKEN: { description: 'Stonebranch API token', dashboard: 'https://www.stonebranch.com' },
    },
  },
  {
    name: 'storetasker', title: 'StoreTasker',
    secrets: {
      STORETASKER_API_KEY: { description: 'StoreTasker API key', dashboard: 'https://www.storetasker.com' },
    },
  },
  {
    name: 'stormglass', title: 'Storm Glass',
    secrets: {
      STORMGLASS_API_KEY: { description: 'Storm Glass weather API key', dashboard: 'https://stormglass.io' },
    },
  },
  {
    name: 'storylane', title: 'Storylane',
    secrets: {
      STORYLANE_API_KEY: { description: 'Storylane API key', dashboard: 'https://app.storylane.io' },
    },
  },
  {
    name: 'substack', title: 'Substack',
    secrets: {
      SUBSTACK_API_TOKEN: { description: 'Substack API token', dashboard: 'https://substack.com' },
    },
  },
  {
    name: 'superblocks', title: 'Superblocks',
    secrets: {
      SUPERBLOCKS_TOKEN: { description: 'Superblocks API token', dashboard: 'https://app.superblocks.com' },
    },
  },
  // ── Batch 8: More SaaS, APIs, fintech, health, gaming ──
  {
    name: 'superset', title: 'Apache Superset',
    secrets: {
      SUPERSET_SECRET_KEY: { description: 'Superset Flask secret key', dashboard: 'https://superset.apache.org' },
      SUPERSET_URL: { description: 'Superset instance URL', dashboard: 'https://superset.apache.org', required: false, validate: 'url' },
    },
  },
  {
    name: 'survicate', title: 'Survicate',
    secrets: {
      SURVICATE_WORKSPACE_KEY: { description: 'Survicate workspace key', dashboard: 'https://panel.survicate.com' },
    },
  },
  {
    name: 'synadia', title: 'Synadia/NATS',
    secrets: {
      NATS_URL: { description: 'NATS server URL', dashboard: 'https://synadia.com', validate: 'url' },
      NATS_CREDS: { description: 'NATS credentials file content', dashboard: 'https://synadia.com', required: false },
    },
  },
  {
    name: 'syncfusion', title: 'Syncfusion',
    secrets: {
      SYNCFUSION_LICENSE_KEY: { description: 'Syncfusion license key', dashboard: 'https://www.syncfusion.com/account/manage-licenses' },
    },
  },
  {
    name: 'taiga', title: 'Taiga',
    secrets: {
      TAIGA_URL: { description: 'Taiga instance URL', dashboard: 'https://taiga.io', validate: 'url' },
      TAIGA_AUTH_TOKEN: { description: 'Taiga auth token', dashboard: 'https://taiga.io' },
    },
  },
  {
    name: 'talend', title: 'Talend',
    secrets: {
      TALEND_API_KEY: { description: 'Talend Cloud API key', dashboard: 'https://cloud.talend.com' },
    },
  },
  {
    name: 'talon-one', title: 'Talon.One',
    secrets: {
      TALONONE_API_KEY: { description: 'Talon.One management API key', dashboard: 'https://app.talon.one' },
      TALONONE_BASE_URL: { description: 'Talon.One API base URL', dashboard: 'https://app.talon.one', required: false, validate: 'url' },
    },
  },
  {
    name: 'tanium', title: 'Tanium',
    secrets: {
      TANIUM_API_TOKEN: { description: 'Tanium API token', dashboard: 'https://www.tanium.com' },
      TANIUM_URL: { description: 'Tanium server URL', dashboard: 'https://www.tanium.com', validate: 'url' },
    },
  },
  {
    name: 'tapfiliate', title: 'Tapfiliate',
    secrets: {
      TAPFILIATE_API_KEY: { description: 'Tapfiliate API key', dashboard: 'https://tapfiliate.com' },
    },
  },
  {
    name: 'taplytics', title: 'Taplytics',
    secrets: {
      TAPLYTICS_SDK_KEY: { description: 'Taplytics SDK key', dashboard: 'https://taplytics.com' },
      TAPLYTICS_REST_API_KEY: { description: 'Taplytics REST API key', dashboard: 'https://taplytics.com', required: false },
    },
  },
  {
    name: 'telesign', title: 'TeleSign',
    secrets: {
      TELESIGN_CUSTOMER_ID: { description: 'TeleSign customer ID', dashboard: 'https://portal.telesign.com' },
      TELESIGN_API_KEY: { description: 'TeleSign API key', dashboard: 'https://portal.telesign.com' },
    },
  },
  {
    name: 'tenderly', title: 'Tenderly',
    secrets: {
      TENDERLY_ACCESS_KEY: { description: 'Tenderly access key', dashboard: 'https://dashboard.tenderly.co' },
      TENDERLY_ACCOUNT_SLUG: { description: 'Tenderly account slug', dashboard: 'https://dashboard.tenderly.co', required: false },
      TENDERLY_PROJECT_SLUG: { description: 'Tenderly project slug', dashboard: 'https://dashboard.tenderly.co', required: false },
    },
  },
  {
    name: 'termii', title: 'Termii',
    secrets: {
      TERMII_API_KEY: { description: 'Termii API key', dashboard: 'https://accounts.termii.com' },
    },
  },
  {
    name: 'thales', title: 'Thales CipherTrust',
    secrets: {
      CIPHERTRUST_URL: { description: 'CipherTrust Manager URL', dashboard: 'https://cpl.thalesgroup.com', validate: 'url' },
      CIPHERTRUST_USERNAME: { description: 'CipherTrust username', dashboard: 'https://cpl.thalesgroup.com' },
      CIPHERTRUST_PASSWORD: { description: 'CipherTrust password', dashboard: 'https://cpl.thalesgroup.com' },
    },
  },
  {
    name: 'tiger-beetle', title: 'TigerBeetle',
    secrets: {
      TIGERBEETLE_CLUSTER_ID: { description: 'TigerBeetle cluster ID', dashboard: 'https://tigerbeetle.com' },
      TIGERBEETLE_ADDRESSES: { description: 'TigerBeetle addresses', dashboard: 'https://tigerbeetle.com' },
    },
  },
  {
    name: 'tines', title: 'Tines',
    secrets: {
      TINES_API_KEY: { description: 'Tines API key', dashboard: 'https://www.tines.com' },
      TINES_TENANT_URL: { description: 'Tines tenant URL', dashboard: 'https://www.tines.com', validate: 'url' },
    },
  },
  {
    name: 'tipalti', title: 'Tipalti',
    secrets: {
      TIPALTI_API_KEY: { description: 'Tipalti API key', dashboard: 'https://tipalti.com' },
      TIPALTI_PAYER_NAME: { description: 'Tipalti payer name', dashboard: 'https://tipalti.com' },
    },
  },
  {
    name: 'tipe', title: 'Tipe',
    secrets: {
      TIPE_API_KEY: { description: 'Tipe CMS API key', dashboard: 'https://tipe.io' },
      TIPE_ORG_ID: { description: 'Tipe organization ID', dashboard: 'https://tipe.io' },
    },
  },
  {
    name: 'tonicai', title: 'Tonic.ai',
    secrets: {
      TONIC_API_KEY: { description: 'Tonic.ai API key', dashboard: 'https://app.tonic.ai' },
      TONIC_URL: { description: 'Tonic.ai instance URL', dashboard: 'https://app.tonic.ai', required: false, validate: 'url' },
    },
  },
  {
    name: 'toplyne', title: 'Toplyne',
    secrets: {
      TOPLYNE_API_KEY: { description: 'Toplyne API key', dashboard: 'https://app.toplyne.io' },
    },
  },
  {
    name: 'tower', title: 'Tower',
    secrets: {
      TOWER_API_KEY: { description: 'Tower API key', dashboard: 'https://tower.nf' },
    },
  },
  {
    name: 'traceable', title: 'Traceable AI',
    secrets: {
      TRACEABLE_API_TOKEN: { description: 'Traceable AI API token', dashboard: 'https://app.traceable.ai' },
    },
  },
  {
    name: 'traceloop', title: 'Traceloop',
    secrets: {
      TRACELOOP_API_KEY: { description: 'Traceloop API key', dashboard: 'https://app.traceloop.com' },
    },
  },
  {
    name: 'trackjs', title: 'TrackJS',
    secrets: {
      TRACKJS_TOKEN: { description: 'TrackJS application token', dashboard: 'https://my.trackjs.com' },
    },
  },
  {
    name: 'transloadit', title: 'Transloadit',
    secrets: {
      TRANSLOADIT_AUTH_KEY: { description: 'Transloadit auth key', dashboard: 'https://transloadit.com/accounts/credentials' },
      TRANSLOADIT_AUTH_SECRET: { description: 'Transloadit auth secret', dashboard: 'https://transloadit.com/accounts/credentials' },
    },
  },
  {
    name: 'tresata', title: 'Tresata',
    secrets: {
      TRESATA_API_KEY: { description: 'Tresata API key', dashboard: 'https://www.tresata.com' },
    },
  },
  {
    name: 'triggermesh', title: 'TriggerMesh',
    secrets: {
      TRIGGERMESH_TOKEN: { description: 'TriggerMesh API token', dashboard: 'https://www.triggermesh.com' },
    },
  },
  {
    name: 'tripletex', title: 'Tripletex',
    secrets: {
      TRIPLETEX_CONSUMER_TOKEN: { description: 'Tripletex consumer token', dashboard: 'https://tripletex.no' },
      TRIPLETEX_EMPLOYEE_TOKEN: { description: 'Tripletex employee token', dashboard: 'https://tripletex.no' },
    },
  },
  {
    name: 'trooptrack', title: 'TroopTrack',
    secrets: {
      TROOPTRACK_API_KEY: { description: 'TroopTrack API key', dashboard: 'https://trooptrack.com' },
    },
  },
  {
    name: 'trufflehog', title: 'TruffleHog',
    secrets: {
      TRUFFLEHOG_API_KEY: { description: 'TruffleHog API key', dashboard: 'https://trufflesecurity.com' },
    },
  },
  {
    name: 'tuya', title: 'Tuya IoT',
    secrets: {
      TUYA_ACCESS_ID: { description: 'Tuya IoT access ID', dashboard: 'https://iot.tuya.com' },
      TUYA_ACCESS_SECRET: { description: 'Tuya IoT access secret', dashboard: 'https://iot.tuya.com' },
    },
  },
  {
    name: 'twingate', title: 'Twingate',
    secrets: {
      TWINGATE_API_KEY: { description: 'Twingate API key', dashboard: 'https://www.twingate.com' },
      TWINGATE_NETWORK: { description: 'Twingate network name', dashboard: 'https://www.twingate.com', required: false },
    },
  },
  {
    name: 'typebot', title: 'Typebot',
    secrets: {
      TYPEBOT_TOKEN: { description: 'Typebot API token', dashboard: 'https://app.typebot.io' },
    },
  },
  {
    name: 'unbody', title: 'Unbody',
    secrets: {
      UNBODY_API_KEY: { description: 'Unbody API key', dashboard: 'https://app.unbody.io' },
      UNBODY_PROJECT_ID: { description: 'Unbody project ID', dashboard: 'https://app.unbody.io' },
    },
  },
  {
    name: 'upcloud', title: 'UpCloud',
    secrets: {
      UPCLOUD_USERNAME: { description: 'UpCloud API username', dashboard: 'https://hub.upcloud.com' },
      UPCLOUD_PASSWORD: { description: 'UpCloud API password', dashboard: 'https://hub.upcloud.com' },
    },
  },
  {
    name: 'upwork', title: 'Upwork',
    secrets: {
      UPWORK_API_KEY: { description: 'Upwork API key', dashboard: 'https://www.upwork.com/developer/keys/app' },
      UPWORK_API_SECRET: { description: 'Upwork API secret', dashboard: 'https://www.upwork.com/developer/keys/app' },
    },
  },
  {
    name: 'usabilla', title: 'Usabilla',
    secrets: {
      USABILLA_ACCESS_KEY: { description: 'Usabilla access key', dashboard: 'https://usabilla.com' },
      USABILLA_SECRET_KEY: { description: 'Usabilla secret key', dashboard: 'https://usabilla.com' },
    },
  },
  {
    name: 'userflow', title: 'Userflow',
    secrets: {
      USERFLOW_TOKEN: { description: 'Userflow API token', dashboard: 'https://userflow.com' },
    },
  },
  {
    name: 'userguiding', title: 'UserGuiding',
    secrets: {
      USERGUIDING_TOKEN: { description: 'UserGuiding token', dashboard: 'https://panel.userguiding.com' },
    },
  },
  {
    name: 'userpilot', title: 'Userpilot',
    secrets: {
      USERPILOT_TOKEN: { description: 'Userpilot API token', dashboard: 'https://app.userpilot.com' },
      USERPILOT_APP_ID: { description: 'Userpilot app ID', dashboard: 'https://app.userpilot.com', required: false },
    },
  },
  {
    name: 'uservoice', title: 'UserVoice',
    secrets: {
      USERVOICE_API_KEY: { description: 'UserVoice API key', dashboard: 'https://developer.uservoice.com' },
      USERVOICE_SUBDOMAIN: { description: 'UserVoice subdomain', dashboard: 'https://developer.uservoice.com' },
    },
  },
  {
    name: 'valimail', title: 'Valimail',
    secrets: {
      VALIMAIL_API_KEY: { description: 'Valimail API key', dashboard: 'https://app.valimail.com' },
    },
  },
  {
    name: 'valtown', title: 'Val Town',
    secrets: {
      VALTOWN_API_TOKEN: { description: 'Val Town API token', dashboard: 'https://www.val.town/settings/api' },
    },
  },
  {
    name: 'vapor', title: 'Laravel Vapor',
    secrets: {
      VAPOR_API_TOKEN: { description: 'Laravel Vapor API token', dashboard: 'https://vapor.laravel.com' },
    },
  },
  {
    name: 'venafi', title: 'Venafi',
    secrets: {
      VENAFI_TPP_URL: { description: 'Venafi TPP URL', dashboard: 'https://www.venafi.com', validate: 'url' },
      VENAFI_TPP_TOKEN: { description: 'Venafi TPP access token', dashboard: 'https://www.venafi.com' },
    },
  },
  {
    name: 'veritable', title: 'Veritable',
    secrets: {
      VERITABLE_API_KEY: { description: 'Veritable API key', dashboard: 'https://veritable.ai' },
    },
  },
  {
    name: 'verizon-media', title: 'Verizon Media',
    secrets: {
      VERIZON_MEDIA_API_KEY: { description: 'Verizon Media API key', dashboard: 'https://developer.verizonmedia.com' },
    },
  },
  {
    name: 'vestaboard', title: 'Vestaboard',
    secrets: {
      VESTABOARD_API_KEY: { description: 'Vestaboard API key', dashboard: 'https://www.vestaboard.com/developer' },
      VESTABOARD_API_SECRET: { description: 'Vestaboard API secret', dashboard: 'https://www.vestaboard.com/developer' },
    },
  },
  {
    name: 'viam', title: 'Viam',
    secrets: {
      VIAM_API_KEY: { description: 'Viam API key', dashboard: 'https://app.viam.com' },
      VIAM_API_KEY_ID: { description: 'Viam API key ID', dashboard: 'https://app.viam.com' },
    },
  },
  {
    name: 'vimeo', title: 'Vimeo',
    secrets: {
      VIMEO_ACCESS_TOKEN: { description: 'Vimeo access token', dashboard: 'https://developer.vimeo.com/apps' },
      VIMEO_CLIENT_ID: { description: 'Vimeo client ID', dashboard: 'https://developer.vimeo.com/apps', required: false },
      VIMEO_CLIENT_SECRET: { description: 'Vimeo client secret', dashboard: 'https://developer.vimeo.com/apps', required: false },
    },
  },
  {
    name: 'virtru', title: 'Virtru',
    secrets: {
      VIRTRU_APP_ID: { description: 'Virtru application ID', dashboard: 'https://developer.virtru.com' },
      VIRTRU_CLIENT_ID: { description: 'Virtru client ID', dashboard: 'https://developer.virtru.com', required: false },
    },
  },
  {
    name: 'visual-crossing', title: 'Visual Crossing Weather',
    secrets: {
      VISUAL_CROSSING_API_KEY: { description: 'Visual Crossing weather API key', dashboard: 'https://www.visualcrossing.com/account' },
    },
  },
  {
    name: 'voucherify', title: 'Voucherify',
    secrets: {
      VOUCHERIFY_APP_ID: { description: 'Voucherify app ID', dashboard: 'https://app.voucherify.io' },
      VOUCHERIFY_SECRET_KEY: { description: 'Voucherify secret key', dashboard: 'https://app.voucherify.io' },
    },
  },
  {
    name: 'vyond', title: 'Vyond',
    secrets: {
      VYOND_API_KEY: { description: 'Vyond API key', dashboard: 'https://www.vyond.com' },
    },
  },
  {
    name: 'wealthsimple', title: 'Wealthsimple',
    secrets: {
      WEALTHSIMPLE_CLIENT_ID: { description: 'Wealthsimple client ID', dashboard: 'https://www.wealthsimple.com' },
      WEALTHSIMPLE_CLIENT_SECRET: { description: 'Wealthsimple client secret', dashboard: 'https://www.wealthsimple.com' },
    },
  },
  {
    name: 'webiny', title: 'Webiny',
    secrets: {
      WEBINY_API_KEY: { description: 'Webiny API key', dashboard: 'https://www.webiny.com' },
    },
  },
  {
    name: 'webhook-site', title: 'Webhook.site',
    secrets: {
      WEBHOOK_SITE_TOKEN: { description: 'Webhook.site token/UUID', dashboard: 'https://webhook.site' },
    },
  },
  {
    name: 'whatnot', title: 'Whatnot',
    secrets: {
      WHATNOT_API_KEY: { description: 'Whatnot API key', dashboard: 'https://www.whatnot.com' },
    },
  },
  {
    name: 'whisk', title: 'Whisk',
    secrets: {
      WHISK_API_TOKEN: { description: 'Whisk food API token', dashboard: 'https://whisk.com/developer' },
    },
  },
  {
    name: 'wiremock', title: 'WireMock Cloud',
    secrets: {
      WIREMOCK_CLOUD_TOKEN: { description: 'WireMock Cloud API token', dashboard: 'https://app.wiremock.cloud' },
    },
  },
  {
    name: 'wizardlm', title: 'WizardLM',
    secrets: {
      WIZARDLM_API_KEY: { description: 'WizardLM API key', dashboard: 'https://wizardlm.github.io' },
    },
  },
  {
    name: 'wonderpush', title: 'WonderPush',
    secrets: {
      WONDERPUSH_ACCESS_TOKEN: { description: 'WonderPush access token', dashboard: 'https://dashboard.wonderpush.com' },
      WONDERPUSH_APPLICATION_ID: { description: 'WonderPush application ID', dashboard: 'https://dashboard.wonderpush.com', required: false },
    },
  },
  {
    name: 'woodpecker', title: 'Woodpecker CI',
    secrets: {
      WOODPECKER_TOKEN: { description: 'Woodpecker CI API token', dashboard: 'https://woodpecker-ci.org' },
      WOODPECKER_SERVER: { description: 'Woodpecker CI server URL', dashboard: 'https://woodpecker-ci.org', required: false, validate: 'url' },
    },
  },
  {
    name: 'workable', title: 'Workable',
    secrets: {
      WORKABLE_ACCESS_TOKEN: { description: 'Workable API access token', dashboard: 'https://www.workable.com' },
      WORKABLE_SUBDOMAIN: { description: 'Workable subdomain', dashboard: 'https://www.workable.com' },
    },
  },
  {
    name: 'workspace-one', title: 'VMware Workspace ONE',
    secrets: {
      WS1_API_KEY: { description: 'Workspace ONE UEM API key', dashboard: 'https://www.vmware.com/products/workspace-one.html' },
      WS1_API_URL: { description: 'Workspace ONE API URL', dashboard: 'https://www.vmware.com/products/workspace-one.html', validate: 'url' },
    },
  },
  {
    name: 'xmcloud', title: 'Sitecore XM Cloud',
    secrets: {
      SITECORE_API_KEY: { description: 'Sitecore XM Cloud API key', dashboard: 'https://portal.sitecorecloud.io' },
      SITECORE_EDGE_URL: { description: 'Sitecore Edge endpoint URL', dashboard: 'https://portal.sitecorecloud.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'xsolla', title: 'Xsolla',
    secrets: {
      XSOLLA_MERCHANT_ID: { description: 'Xsolla merchant ID', dashboard: 'https://publisher.xsolla.com' },
      XSOLLA_API_KEY: { description: 'Xsolla API key', dashboard: 'https://publisher.xsolla.com' },
    },
  },
  {
    name: 'yext', title: 'Yext',
    secrets: {
      YEXT_API_KEY: { description: 'Yext API key', dashboard: 'https://www.yext.com/s/account/accountsettings/apikeys' },
    },
  },
  {
    name: 'yotpo', title: 'Yotpo',
    secrets: {
      YOTPO_APP_KEY: { description: 'Yotpo app key', dashboard: 'https://settings.yotpo.com' },
      YOTPO_SECRET: { description: 'Yotpo secret', dashboard: 'https://settings.yotpo.com' },
    },
  },
  {
    name: 'yousign', title: 'Yousign',
    secrets: {
      YOUSIGN_API_KEY: { description: 'Yousign API key', dashboard: 'https://yousign.com' },
    },
  },
  {
    name: 'zammad', title: 'Zammad',
    secrets: {
      ZAMMAD_URL: { description: 'Zammad instance URL', dashboard: 'https://zammad.com', validate: 'url' },
      ZAMMAD_TOKEN: { description: 'Zammad API token', dashboard: 'https://zammad.com' },
    },
  },
  {
    name: 'zaprite', title: 'Zaprite',
    secrets: {
      ZAPRITE_API_KEY: { description: 'Zaprite API key', dashboard: 'https://zaprite.com' },
    },
  },
  {
    name: 'zenefits', title: 'Zenefits',
    secrets: {
      ZENEFITS_TOKEN: { description: 'Zenefits API token', dashboard: 'https://www.zenefits.com' },
    },
  },
  {
    name: 'zenhub', title: 'ZenHub',
    secrets: {
      ZENHUB_API_TOKEN: { description: 'ZenHub API token', dashboard: 'https://app.zenhub.com/settings/tokens' },
    },
  },
  {
    name: 'zenml', title: 'ZenML',
    secrets: {
      ZENML_API_KEY: { description: 'ZenML API key', dashboard: 'https://cloud.zenml.io' },
      ZENML_SERVER_URL: { description: 'ZenML server URL', dashboard: 'https://cloud.zenml.io', required: false, validate: 'url' },
    },
  },
  {
    name: 'zenphi', title: 'Zenphi',
    secrets: {
      ZENPHI_API_KEY: { description: 'Zenphi API key', dashboard: 'https://zenphi.com' },
    },
  },
  {
    name: 'zenserp', title: 'Zenserp',
    secrets: {
      ZENSERP_API_KEY: { description: 'Zenserp SERP API key', dashboard: 'https://zenserp.com' },
    },
  },
  {
    name: 'zerodha', title: 'Zerodha Kite',
    secrets: {
      KITE_API_KEY: { description: 'Zerodha Kite Connect API key', dashboard: 'https://kite.trade' },
      KITE_API_SECRET: { description: 'Zerodha Kite Connect API secret', dashboard: 'https://kite.trade' },
    },
  },
  {
    name: 'zeroheight', title: 'Zeroheight',
    secrets: {
      ZEROHEIGHT_TOKEN: { description: 'Zeroheight API token', dashboard: 'https://zeroheight.com' },
    },
  },
  {
    name: 'zitadel', title: 'ZITADEL',
    secrets: {
      ZITADEL_DOMAIN: { description: 'ZITADEL instance domain', dashboard: 'https://zitadel.com' },
      ZITADEL_API_KEY: { description: 'ZITADEL API key', dashboard: 'https://zitadel.com', required: false },
      ZITADEL_SERVICE_USER_TOKEN: { description: 'ZITADEL service user token', dashboard: 'https://zitadel.com', required: false },
    },
  },
  {
    name: 'zixflow', title: 'Zixflow',
    secrets: {
      ZIXFLOW_API_KEY: { description: 'Zixflow API key', dashboard: 'https://zixflow.com' },
    },
  },
  {
    name: 'zonos', title: 'Zonos',
    secrets: {
      ZONOS_API_KEY: { description: 'Zonos cross-border API key', dashboard: 'https://zonos.com' },
    },
  },
  {
    name: 'zora', title: 'Zora',
    secrets: {
      ZORA_API_KEY: { description: 'Zora NFT API key', dashboard: 'https://zora.co' },
    },
  },
  {
    name: 'zuplo', title: 'Zuplo',
    secrets: {
      ZUPLO_API_KEY: { description: 'Zuplo API key', dashboard: 'https://zuplo.com' },
    },
  },
  {
    name: 'zywave', title: 'Zywave',
    secrets: {
      ZYWAVE_API_KEY: { description: 'Zywave API key', dashboard: 'https://www.zywave.com' },
    },
  },
  // ── Batch 9: Gaming, Healthcare, Government, Education, Telecom, More DevOps ──
  {
    name: 'accuweather', title: 'AccuWeather',
    secrets: {
      ACCUWEATHER_API_KEY: { description: 'AccuWeather API key', dashboard: 'https://developer.accuweather.com' },
    },
  },
  {
    name: 'adzuna', title: 'Adzuna',
    secrets: {
      ADZUNA_APP_ID: { description: 'Adzuna application ID', dashboard: 'https://developer.adzuna.com' },
      ADZUNA_APP_KEY: { description: 'Adzuna application key', dashboard: 'https://developer.adzuna.com' },
    },
  },
  {
    name: 'agendize', title: 'Agendize',
    secrets: {
      AGENDIZE_API_KEY: { description: 'Agendize API key', dashboard: 'https://www.agendize.com' },
    },
  },
  {
    name: 'airvisual', title: 'IQAir AirVisual',
    secrets: {
      AIRVISUAL_API_KEY: { description: 'IQAir AirVisual API key', dashboard: 'https://www.iqair.com/air-pollution-data-api' },
    },
  },
  {
    name: 'aiven-kafka', title: 'Aiven for Apache Kafka',
    secrets: {
      AIVEN_KAFKA_URI: { description: 'Aiven Kafka connection URI', dashboard: 'https://console.aiven.io', validate: 'url' },
    },
  },
  {
    name: 'alloy', title: 'Alloy',
    secrets: {
      ALLOY_API_KEY: { description: 'Alloy identity verification API key', dashboard: 'https://dashboard.alloy.com' },
      ALLOY_API_SECRET: { description: 'Alloy API secret', dashboard: 'https://dashboard.alloy.com' },
    },
  },
  {
    name: 'ambassador', title: 'Ambassador',
    secrets: {
      AMBASSADOR_CLOUD_TOKEN: { description: 'Ambassador Cloud API token', dashboard: 'https://app.getambassador.io' },
    },
  },
  {
    name: 'amcharts', title: 'amCharts',
    secrets: {
      AMCHARTS_LICENSE: { description: 'amCharts license key', dashboard: 'https://www.amcharts.com/account/' },
    },
  },
  {
    name: 'anymail', title: 'Anymail',
    secrets: {
      ANYMAIL_API_KEY: { description: 'Anymail API key', dashboard: 'https://anymail.dev' },
    },
  },
  {
    name: 'apache-airflow', title: 'Apache Airflow',
    secrets: {
      AIRFLOW__CORE__FERNET_KEY: { description: 'Airflow Fernet encryption key', dashboard: 'https://airflow.apache.org' },
      AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: { description: 'Airflow database connection string', dashboard: 'https://airflow.apache.org', required: false },
    },
  },
  {
    name: 'apideck', title: 'Apideck',
    secrets: {
      APIDECK_API_KEY: { description: 'Apideck API key', dashboard: 'https://app.apideck.com' },
      APIDECK_APP_ID: { description: 'Apideck application ID', dashboard: 'https://app.apideck.com' },
    },
  },
  {
    name: 'apilayer', title: 'APILayer',
    secrets: {
      APILAYER_API_KEY: { description: 'APILayer API key', dashboard: 'https://apilayer.com' },
    },
  },
  {
    name: 'apimatic', title: 'APIMatic',
    secrets: {
      APIMATIC_API_KEY: { description: 'APIMatic API key', dashboard: 'https://www.apimatic.io' },
    },
  },
  {
    name: 'appbot', title: 'Appbot',
    secrets: {
      APPBOT_API_KEY: { description: 'Appbot API key', dashboard: 'https://appbot.co' },
    },
  },
  {
    name: 'appfigures', title: 'Appfigures',
    secrets: {
      APPFIGURES_CLIENT_KEY: { description: 'Appfigures client key', dashboard: 'https://appfigures.com' },
    },
  },
  {
    name: 'appfollow', title: 'AppFollow',
    secrets: {
      APPFOLLOW_API_KEY: { description: 'AppFollow API key', dashboard: 'https://appfollow.io' },
    },
  },
  {
    name: 'appetize', title: 'Appetize',
    secrets: {
      APPETIZE_API_TOKEN: { description: 'Appetize API token', dashboard: 'https://appetize.io' },
    },
  },
  {
    name: 'appmixer', title: 'Appmixer',
    secrets: {
      APPMIXER_API_KEY: { description: 'Appmixer API key', dashboard: 'https://www.appmixer.com' },
      APPMIXER_BASE_URL: { description: 'Appmixer base URL', dashboard: 'https://www.appmixer.com', required: false, validate: 'url' },
    },
  },
  {
    name: 'appneta', title: 'AppNeta',
    secrets: {
      APPNETA_API_KEY: { description: 'AppNeta API key', dashboard: 'https://www.appneta.com' },
    },
  },
  {
    name: 'aptible', title: 'Aptible',
    secrets: {
      APTIBLE_ACCESS_TOKEN: { description: 'Aptible access token', dashboard: 'https://dashboard.aptible.com' },
    },
  },
  {
    name: 'artsy', title: 'Artsy',
    secrets: {
      ARTSY_CLIENT_ID: { description: 'Artsy API client ID', dashboard: 'https://developers.artsy.net' },
      ARTSY_CLIENT_SECRET: { description: 'Artsy API client secret', dashboard: 'https://developers.artsy.net' },
    },
  },
  {
    name: 'astro-deploy', title: 'Astronomer (Astro)',
    secrets: {
      ASTRO_API_TOKEN: { description: 'Astronomer Astro API token', dashboard: 'https://cloud.astronomer.io' },
    },
  },
  {
    name: 'atlassian', title: 'Atlassian',
    secrets: {
      ATLASSIAN_API_TOKEN: { description: 'Atlassian API token', dashboard: 'https://id.atlassian.com/manage-profile/security/api-tokens' },
      ATLASSIAN_EMAIL: { description: 'Atlassian account email', dashboard: 'https://id.atlassian.com', required: false },
    },
  },
  {
    name: 'audd', title: 'AudD',
    secrets: {
      AUDD_API_TOKEN: { description: 'AudD music recognition API token', dashboard: 'https://audd.io' },
    },
  },
  {
    name: 'ayrshare-api', title: 'Ayrshare API',
    secrets: {
      AYRSHARE_API_KEY: { description: 'Ayrshare social media API key', dashboard: 'https://www.ayrshare.com' },
    },
  },
  {
    name: 'backlog', title: 'Backlog',
    secrets: {
      BACKLOG_API_KEY: { description: 'Backlog API key', dashboard: 'https://backlog.com' },
      BACKLOG_SPACE_KEY: { description: 'Backlog space key', dashboard: 'https://backlog.com' },
    },
  },
  {
    name: 'balena', title: 'Balena',
    secrets: {
      BALENA_API_KEY: { description: 'Balena API key', dashboard: 'https://dashboard.balena-cloud.com' },
    },
  },
  {
    name: 'bannerbear', title: 'Bannerbear',
    secrets: {
      BANNERBEAR_API_KEY: { description: 'Bannerbear API key', dashboard: 'https://www.bannerbear.com' },
    },
  },
  {
    name: 'bardo', title: 'Bardo',
    secrets: {
      BARDO_API_KEY: { description: 'Bardo API key', dashboard: 'https://bardo.ai' },
    },
  },
  {
    name: 'barkoders', title: 'Barkoders',
    secrets: {
      BARKODERS_LICENSE_KEY: { description: 'Barkoders barcode SDK license key', dashboard: 'https://barkoder.com' },
    },
  },
  {
    name: 'baton', title: 'Baton',
    secrets: {
      BATON_API_KEY: { description: 'Baton API key', dashboard: 'https://baton.io' },
    },
  },
  {
    name: 'beams', title: 'Pusher Beams',
    secrets: {
      BEAMS_INSTANCE_ID: { description: 'Pusher Beams instance ID', dashboard: 'https://dashboard.pusher.com/beams' },
      BEAMS_SECRET_KEY: { description: 'Pusher Beams secret key', dashboard: 'https://dashboard.pusher.com/beams' },
    },
  },
  {
    name: 'bento', title: 'Bento',
    secrets: {
      BENTO_SITE_UUID: { description: 'Bento site UUID', dashboard: 'https://app.bentonow.com' },
      BENTO_SECRET_KEY: { description: 'Bento secret key', dashboard: 'https://app.bentonow.com' },
      BENTO_PUBLISHABLE_KEY: { description: 'Bento publishable key', dashboard: 'https://app.bentonow.com', required: false },
    },
  },
  {
    name: 'billwerk', title: 'Billwerk+',
    secrets: {
      BILLWERK_API_KEY: { description: 'Billwerk+ API key', dashboard: 'https://www.billwerk.com' },
    },
  },
  {
    name: 'bitnami', title: 'Bitnami',
    secrets: {
      BITNAMI_API_KEY: { description: 'Bitnami API key', dashboard: 'https://bitnami.com' },
    },
  },
  {
    name: 'bizzabo', title: 'Bizzabo',
    secrets: {
      BIZZABO_API_KEY: { description: 'Bizzabo API key', dashboard: 'https://www.bizzabo.com' },
    },
  },
  {
    name: 'blackbaud', title: 'Blackbaud',
    secrets: {
      BLACKBAUD_SUBSCRIPTION_KEY: { description: 'Blackbaud SKY API subscription key', dashboard: 'https://developer.blackbaud.com' },
      BLACKBAUD_ACCESS_TOKEN: { description: 'Blackbaud OAuth access token', dashboard: 'https://developer.blackbaud.com', required: false },
    },
  },
  {
    name: 'block-eden', title: 'BlockEden',
    secrets: {
      BLOCKEDEN_API_KEY: { description: 'BlockEden API key', dashboard: 'https://blockeden.xyz' },
    },
  },
  {
    name: 'bloomerang', title: 'Bloomerang',
    secrets: {
      BLOOMERANG_API_KEY: { description: 'Bloomerang API key', dashboard: 'https://bloomerang.co' },
    },
  },
  {
    name: 'bluesnap', title: 'BlueSnap',
    secrets: {
      BLUESNAP_USERNAME: { description: 'BlueSnap API username', dashboard: 'https://www.bluesnap.com' },
      BLUESNAP_PASSWORD: { description: 'BlueSnap API password', dashboard: 'https://www.bluesnap.com' },
    },
  },
  {
    name: 'boardmix', title: 'Boardmix',
    secrets: {
      BOARDMIX_API_KEY: { description: 'Boardmix API key', dashboard: 'https://boardmix.com' },
    },
  },
  {
    name: 'bombbomb', title: 'BombBomb',
    secrets: {
      BOMBBOMB_API_KEY: { description: 'BombBomb API key', dashboard: 'https://bombbomb.com' },
    },
  },
  {
    name: 'bookeo', title: 'Bookeo',
    secrets: {
      BOOKEO_API_KEY: { description: 'Bookeo API key', dashboard: 'https://www.bookeo.com' },
      BOOKEO_SECRET_KEY: { description: 'Bookeo secret key', dashboard: 'https://www.bookeo.com' },
    },
  },
  {
    name: 'bosun', title: 'Bosun',
    secrets: {
      BOSUN_URL: { description: 'Bosun server URL', dashboard: 'https://bosun.org', validate: 'url' },
    },
  },
  {
    name: 'braincloud', title: 'brainCloud',
    secrets: {
      BRAINCLOUD_APP_ID: { description: 'brainCloud app ID', dashboard: 'https://portal.braincloudservers.com' },
      BRAINCLOUD_SECRET: { description: 'brainCloud app secret', dashboard: 'https://portal.braincloudservers.com' },
    },
  },
  {
    name: 'brandwatch', title: 'Brandwatch',
    secrets: {
      BRANDWATCH_API_KEY: { description: 'Brandwatch API key', dashboard: 'https://www.brandwatch.com' },
    },
  },
  {
    name: 'breadcrumbs', title: 'Breadcrumbs',
    secrets: {
      BREADCRUMBS_API_KEY: { description: 'Breadcrumbs lead scoring API key', dashboard: 'https://app.breadcrumbs.io' },
    },
  },
  {
    name: 'breezometer', title: 'BreezoMeter',
    secrets: {
      BREEZOMETER_API_KEY: { description: 'BreezoMeter air quality API key', dashboard: 'https://breezometer.com' },
    },
  },
  {
    name: 'bridger', title: 'Bridger',
    secrets: {
      BRIDGER_API_KEY: { description: 'Bridger API key', dashboard: 'https://bridger.io' },
    },
  },
  {
    name: 'byteplus', title: 'BytePlus',
    secrets: {
      BYTEPLUS_ACCESS_KEY: { description: 'BytePlus access key', dashboard: 'https://console.byteplus.com' },
      BYTEPLUS_SECRET_KEY: { description: 'BytePlus secret key', dashboard: 'https://console.byteplus.com' },
    },
  },
  {
    name: 'calabash', title: 'Calabash',
    secrets: {
      CALABASH_API_KEY: { description: 'Calabash API key', dashboard: 'https://calabash.co' },
    },
  },
  {
    name: 'camunda', title: 'Camunda',
    secrets: {
      CAMUNDA_CLIENT_ID: { description: 'Camunda Cloud client ID', dashboard: 'https://console.cloud.camunda.io' },
      CAMUNDA_CLIENT_SECRET: { description: 'Camunda Cloud client secret', dashboard: 'https://console.cloud.camunda.io' },
      CAMUNDA_CLUSTER_ID: { description: 'Camunda cluster ID', dashboard: 'https://console.cloud.camunda.io', required: false },
    },
  },
  {
    name: 'captchafox', title: 'CaptchaFox',
    secrets: {
      CAPTCHAFOX_SECRET: { description: 'CaptchaFox secret key', dashboard: 'https://portal.captchafox.com' },
      CAPTCHAFOX_SITE_KEY: { description: 'CaptchaFox site key', dashboard: 'https://portal.captchafox.com', required: false },
    },
  },
  {
    name: 'cargo', title: 'Cargo',
    secrets: {
      CARGO_REGISTRY_TOKEN: { description: 'Cargo alternate registry token', dashboard: 'https://doc.rust-lang.org/cargo/' },
    },
  },
  {
    name: 'cashfree', title: 'Cashfree',
    secrets: {
      CASHFREE_APP_ID: { description: 'Cashfree app ID', dashboard: 'https://merchant.cashfree.com' },
      CASHFREE_SECRET_KEY: { description: 'Cashfree secret key', dashboard: 'https://merchant.cashfree.com' },
    },
  },
  {
    name: 'cazena', title: 'Cazena',
    secrets: {
      CAZENA_API_KEY: { description: 'Cazena API key', dashboard: 'https://www.cazena.com' },
    },
  },
  {
    name: 'certn', title: 'Certn',
    secrets: {
      CERTN_API_KEY: { description: 'Certn background check API key', dashboard: 'https://certn.co' },
    },
  },
  {
    name: 'chainstack', title: 'Chainstack',
    secrets: {
      CHAINSTACK_API_KEY: { description: 'Chainstack API key', dashboard: 'https://console.chainstack.com' },
    },
  },
  {
    name: 'channeltalk', title: 'Channel Talk',
    secrets: {
      CHANNEL_PLUGIN_KEY: { description: 'Channel Talk plugin key', dashboard: 'https://desk.channel.io' },
      CHANNEL_ACCESS_SECRET: { description: 'Channel Talk access secret', dashboard: 'https://desk.channel.io', required: false },
    },
  },
  {
    name: 'chargepoint', title: 'ChargePoint',
    secrets: {
      CHARGEPOINT_API_KEY: { description: 'ChargePoint API key', dashboard: 'https://developer.chargepoint.com' },
    },
  },
  {
    name: 'chartmogul', title: 'ChartMogul',
    secrets: {
      CHARTMOGUL_API_KEY: { description: 'ChartMogul API key', dashboard: 'https://app.chartmogul.com' },
    },
  },
  {
    name: 'chatfuel', title: 'Chatfuel',
    secrets: {
      CHATFUEL_TOKEN: { description: 'Chatfuel API token', dashboard: 'https://chatfuel.com' },
    },
  },
  {
    name: 'chattermill', title: 'Chattermill',
    secrets: {
      CHATTERMILL_API_KEY: { description: 'Chattermill API key', dashboard: 'https://www.chattermill.com' },
    },
  },
  {
    name: 'clay', title: 'Clay',
    secrets: {
      CLAY_API_KEY: { description: 'Clay API key', dashboard: 'https://www.clay.com' },
    },
  },
  {
    name: 'clevertap', title: 'CleverTap',
    secrets: {
      CLEVERTAP_ACCOUNT_ID: { description: 'CleverTap account ID', dashboard: 'https://dashboard.clevertap.com' },
      CLEVERTAP_PASSCODE: { description: 'CleverTap account passcode', dashboard: 'https://dashboard.clevertap.com' },
    },
  },
  {
    name: 'clockwork', title: 'Clockwork SMS',
    secrets: {
      CLOCKWORK_API_KEY: { description: 'Clockwork SMS API key', dashboard: 'https://www.clockworksms.com' },
    },
  },
  {
    name: 'cloudeka', title: 'Cloudeka',
    secrets: {
      CLOUDEKA_API_KEY: { description: 'Cloudeka API key', dashboard: 'https://www.cloudeka.id' },
    },
  },
  {
    name: 'cloudflare-pages', title: 'Cloudflare Pages',
    secrets: {
      CF_PAGES_PROJECT: { description: 'Cloudflare Pages project name', dashboard: 'https://dash.cloudflare.com' },
      CF_ACCOUNT_ID: { description: 'Cloudflare account ID', dashboard: 'https://dash.cloudflare.com' },
    },
  },
  {
    name: 'cloudinary-upload', title: 'Cloudinary Upload',
    secrets: {
      CLOUDINARY_UPLOAD_PRESET: { description: 'Cloudinary upload preset', dashboard: 'https://console.cloudinary.com' },
    },
  },
  {
    name: 'codat', title: 'Codat',
    secrets: {
      CODAT_AUTH_HEADER: { description: 'Codat authorization header', dashboard: 'https://app.codat.io' },
    },
  },
  {
    name: 'coinapi', title: 'CoinAPI',
    secrets: {
      COINAPI_KEY: { description: 'CoinAPI key', dashboard: 'https://www.coinapi.io' },
    },
  },
  {
    name: 'coinstats', title: 'CoinStats',
    secrets: {
      COINSTATS_API_KEY: { description: 'CoinStats API key', dashboard: 'https://openapi.coinstats.app' },
    },
  },
  {
    name: 'commandbar', title: 'CommandBar',
    secrets: {
      COMMANDBAR_ORG_ID: { description: 'CommandBar organization ID', dashboard: 'https://app.commandbar.com' },
    },
  },
  {
    name: 'commusoft', title: 'Commusoft',
    secrets: {
      COMMUSOFT_API_KEY: { description: 'Commusoft API key', dashboard: 'https://www.commusoft.co.uk' },
    },
  },
  {
    name: 'conjur', title: 'CyberArk Conjur',
    secrets: {
      CONJUR_APPLIANCE_URL: { description: 'Conjur appliance URL', dashboard: 'https://www.conjur.org', validate: 'url' },
      CONJUR_ACCOUNT: { description: 'Conjur account name', dashboard: 'https://www.conjur.org' },
      CONJUR_AUTHN_API_KEY: { description: 'Conjur authentication API key', dashboard: 'https://www.conjur.org', required: false },
    },
  },
  {
    name: 'contenthub', title: 'ContentHub',
    secrets: {
      CONTENTHUB_API_KEY: { description: 'ContentHub API key', dashboard: 'https://contenthub.com' },
    },
  },
  {
    name: 'coralogix-rum', title: 'Coralogix RUM',
    secrets: {
      CORALOGIX_RUM_KEY: { description: 'Coralogix RUM key', dashboard: 'https://dashboard.coralogix.com' },
    },
  },
  {
    name: 'corrily', title: 'Corrily',
    secrets: {
      CORRILY_API_KEY: { description: 'Corrily pricing API key', dashboard: 'https://app.corrily.com' },
    },
  },
  {
    name: 'cradlepoint', title: 'Cradlepoint',
    secrets: {
      CRADLEPOINT_API_KEY: { description: 'Cradlepoint NetCloud API key', dashboard: 'https://www.cradlepoint.com' },
      CRADLEPOINT_API_ID: { description: 'Cradlepoint API ID', dashboard: 'https://www.cradlepoint.com' },
    },
  },
  {
    name: 'cratedb', title: 'CrateDB',
    secrets: {
      CRATEDB_HOST: { description: 'CrateDB host', dashboard: 'https://console.cratedb.cloud' },
      CRATEDB_USER: { description: 'CrateDB username', dashboard: 'https://console.cratedb.cloud' },
      CRATEDB_PASSWORD: { description: 'CrateDB password', dashboard: 'https://console.cratedb.cloud' },
    },
  },
  {
    name: 'criteo', title: 'Criteo',
    secrets: {
      CRITEO_CLIENT_ID: { description: 'Criteo client ID', dashboard: 'https://marketing.criteo.com' },
      CRITEO_CLIENT_SECRET: { description: 'Criteo client secret', dashboard: 'https://marketing.criteo.com' },
    },
  },
  {
    name: 'crossbeam', title: 'Crossbeam',
    secrets: {
      CROSSBEAM_API_KEY: { description: 'Crossbeam API key', dashboard: 'https://app.crossbeam.com' },
    },
  },
  {
    name: 'cruise', title: 'Cruise',
    secrets: {
      CRUISE_API_KEY: { description: 'Cruise API key', dashboard: 'https://www.getcruise.com' },
    },
  },
  {
    name: 'curated', title: 'Curated',
    secrets: {
      CURATED_API_KEY: { description: 'Curated newsletter API key', dashboard: 'https://curated.co' },
    },
  },
  {
    name: 'customerfields', title: 'Customer Fields',
    secrets: {
      CUSTOMERFIELDS_API_KEY: { description: 'Customer Fields API key', dashboard: 'https://customerfields.com' },
    },
  },
  {
    name: 'cybersource', title: 'CyberSource',
    secrets: {
      CYBERSOURCE_ACCESS_KEY: { description: 'CyberSource access key', dashboard: 'https://ebc2.cybersource.com' },
      CYBERSOURCE_SECRET_KEY: { description: 'CyberSource secret key', dashboard: 'https://ebc2.cybersource.com' },
      CYBERSOURCE_MERCHANT_ID: { description: 'CyberSource merchant ID', dashboard: 'https://ebc2.cybersource.com' },
    },
  },
  {
    name: 'dadata', title: 'DaData',
    secrets: {
      DADATA_API_KEY: { description: 'DaData API key', dashboard: 'https://dadata.ru' },
      DADATA_SECRET_KEY: { description: 'DaData secret key', dashboard: 'https://dadata.ru' },
    },
  },
  {
    name: 'dataware', title: 'Dataware',
    secrets: {
      DATAWARE_API_KEY: { description: 'Dataware API key', dashboard: 'https://dataware.io' },
    },
  },
  {
    name: 'daytona', title: 'Daytona',
    secrets: {
      DAYTONA_API_KEY: { description: 'Daytona dev environment API key', dashboard: 'https://www.daytona.io' },
    },
  },
  {
    name: 'demio', title: 'Demio',
    secrets: {
      DEMIO_API_KEY: { description: 'Demio webinar API key', dashboard: 'https://my.demio.com' },
      DEMIO_API_SECRET: { description: 'Demio API secret', dashboard: 'https://my.demio.com' },
    },
  },
  {
    name: 'departures-board', title: 'Transport API',
    secrets: {
      TRANSPORT_API_ID: { description: 'Transport API app ID', dashboard: 'https://developer.transportapi.com' },
      TRANSPORT_API_KEY: { description: 'Transport API app key', dashboard: 'https://developer.transportapi.com' },
    },
  },
  {
    name: 'detectify', title: 'Detectify',
    secrets: {
      DETECTIFY_API_KEY: { description: 'Detectify API key', dashboard: 'https://detectify.com' },
    },
  },
  {
    name: 'devhub', title: 'DevHub',
    secrets: {
      DEVHUB_API_KEY: { description: 'DevHub API key', dashboard: 'https://devhub.io' },
    },
  },
  {
    name: 'diffbot', title: 'Diffbot',
    secrets: {
      DIFFBOT_TOKEN: { description: 'Diffbot API token', dashboard: 'https://app.diffbot.com' },
    },
  },
  {
    name: 'dinero', title: 'Dinero',
    secrets: {
      DINERO_API_KEY: { description: 'Dinero API key', dashboard: 'https://dinero.dk' },
    },
  },
  {
    name: 'discourse', title: 'Discourse',
    secrets: {
      DISCOURSE_API_KEY: { description: 'Discourse API key', dashboard: 'https://www.discourse.org' },
      DISCOURSE_URL: { description: 'Discourse forum URL', dashboard: 'https://www.discourse.org', validate: 'url' },
    },
  },
  {
    name: 'docebo', title: 'Docebo',
    secrets: {
      DOCEBO_CLIENT_ID: { description: 'Docebo OAuth client ID', dashboard: 'https://www.docebo.com' },
      DOCEBO_CLIENT_SECRET: { description: 'Docebo OAuth client secret', dashboard: 'https://www.docebo.com' },
      DOCEBO_BASE_URL: { description: 'Docebo platform URL', dashboard: 'https://www.docebo.com', validate: 'url' },
    },
  },
  {
    name: 'documo', title: 'Documo',
    secrets: {
      DOCUMO_API_KEY: { description: 'Documo API key', dashboard: 'https://www.documo.com' },
    },
  },
  {
    name: 'doordash-drive', title: 'DoorDash Drive',
    secrets: {
      DOORDASH_DEVELOPER_ID: { description: 'DoorDash developer ID', dashboard: 'https://developer.doordash.com' },
      DOORDASH_KEY_ID: { description: 'DoorDash key ID', dashboard: 'https://developer.doordash.com' },
      DOORDASH_SIGNING_SECRET: { description: 'DoorDash signing secret', dashboard: 'https://developer.doordash.com' },
    },
  },
  {
    name: 'dotdigital', title: 'Dotdigital',
    secrets: {
      DOTDIGITAL_USERNAME: { description: 'Dotdigital API username', dashboard: 'https://dotdigital.com' },
      DOTDIGITAL_PASSWORD: { description: 'Dotdigital API password', dashboard: 'https://dotdigital.com' },
    },
  },
  {
    name: 'dragonfly', title: 'Dragonfly',
    secrets: {
      DRAGONFLY_URL: { description: 'Dragonfly (Redis-compatible) URL', dashboard: 'https://www.dragonflydb.io', validate: 'url' },
      DRAGONFLY_PASSWORD: { description: 'Dragonfly password', dashboard: 'https://www.dragonflydb.io', required: false },
    },
  },
  {
    name: 'drift', title: 'Drift',
    secrets: {
      DRIFT_API_TOKEN: { description: 'Drift API token', dashboard: 'https://devdocs.drift.com' },
    },
  },
  {
    name: 'dwolla', title: 'Dwolla',
    secrets: {
      DWOLLA_KEY: { description: 'Dwolla API key', dashboard: 'https://dashboard.dwolla.com' },
      DWOLLA_SECRET: { description: 'Dwolla API secret', dashboard: 'https://dashboard.dwolla.com' },
      DWOLLA_ENVIRONMENT: { description: 'Dwolla environment (sandbox/production)', dashboard: 'https://dashboard.dwolla.com', required: false },
    },
  },
  {
    name: 'dynata', title: 'Dynata',
    secrets: {
      DYNATA_API_KEY: { description: 'Dynata API key', dashboard: 'https://www.dynata.com' },
    },
  },
  {
    name: 'edamam', title: 'Edamam',
    secrets: {
      EDAMAM_APP_ID: { description: 'Edamam application ID', dashboard: 'https://developer.edamam.com' },
      EDAMAM_APP_KEY: { description: 'Edamam application key', dashboard: 'https://developer.edamam.com' },
    },
  },
  {
    name: 'eigen', title: 'Eigen Technologies',
    secrets: {
      EIGEN_API_KEY: { description: 'Eigen Technologies API key', dashboard: 'https://www.eigentech.com' },
    },
  },
  {
    name: 'elastic-path', title: 'Elastic Path',
    secrets: {
      EPCC_CLIENT_ID: { description: 'Elastic Path Commerce Cloud client ID', dashboard: 'https://euwest.cm.elasticpath.com' },
      EPCC_CLIENT_SECRET: { description: 'Elastic Path Commerce Cloud client secret', dashboard: 'https://euwest.cm.elasticpath.com' },
    },
  },
  {
    name: 'elementary', title: 'Elementary',
    secrets: {
      ELEMENTARY_API_KEY: { description: 'Elementary data observability API key', dashboard: 'https://www.elementary-data.com' },
    },
  },
  {
    name: 'embassy', title: 'Embassy',
    secrets: {
      EMBASSY_API_KEY: { description: 'Embassy API key', dashboard: 'https://embassy.dev' },
    },
  },
];

function generateIndexTs(service) {
  const lines = [`import { defineSecrets } from 'secretdef';`, '', `export const secrets = defineSecrets({`];

  const entries = Object.entries(service.secrets);
  for (const [key, spec] of entries) {
    const props = [];
    props.push(`    description: '${spec.description.replace(/'/g, "\\'")}'`);
    props.push(`    dashboard: '${spec.dashboard}'`);
    if (spec.validate) props.push(`    validate: '${spec.validate}'`);
    if (spec.required === false) props.push(`    required: false`);
    lines.push(`  ${key}: {`);
    lines.push(props.join(',\n') + ',');
    lines.push(`  },`);
  }

  lines.push(`});`, '');
  return lines.join('\n');
}

function generateReadme(service) {
  const secretsTable = Object.entries(service.secrets)
    .map(([key, spec]) => `| \`${key}\` | ${spec.description} | ${spec.required === false ? 'No' : 'Yes'} |`)
    .join('\n');

  return `# @secretdef/${service.name}

Like \`@types\` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **${service.title}** environment variables.

## Install

\`\`\`bash
npm install @secretdef/${service.name} secretdef
\`\`\`

## Usage

\`\`\`ts
import { validateSecrets } from 'secretdef';
import '@secretdef/${service.name}';

validateSecrets();
\`\`\`

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
${secretsTable}

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
`;
}

const TSUP_CONFIG = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['secretdef'],
});
`;

const TSCONFIG = JSON.stringify({
  extends: '../../../tsconfig.json',
  include: ['index.ts'],
}, null, 2) + '\n';

function generatePackageJson(name, title) {
  return JSON.stringify({
    name: `@secretdef/${name}`,
    version: '0.0.1',
    description: `Secret definitions for ${title}`,
    type: 'module',
    main: './dist/index.cjs',
    module: './dist/index.js',
    types: './dist/index.d.ts',
    exports: {
      '.': {
        import: { types: './dist/index.d.ts', default: './dist/index.js' },
        require: { types: './dist/index.d.cts', default: './dist/index.cjs' },
      },
    },
    files: ['dist', 'README.md'],
    scripts: { build: 'tsup', clean: 'rm -rf dist' },
    peerDependencies: { secretdef: '>=0.0.3' },
    devDependencies: { secretdef: 'workspace:*', tsup: '^8.3.0', typescript: '^5.7.0' },
    license: 'MIT',
    homepage: 'https://secretdef.com',
    repository: {
      type: 'git',
      url: 'https://github.com/iplanwebsites/secretdef',
      directory: `packages/@secretdef/${name}`,
    },
    publishConfig: { access: 'public' },
    sideEffects: true,
  }, null, 2) + '\n';
}

// Packages that conflict with existing ones (duplicate env var keys)
const SKIP = new Set([
  'cloudamqp',       // conflicts with rabbitmq-cloud (CLOUDAMQP_URL)
  'datocms',         // conflicts with dato-cms (DATOCMS_API_TOKEN)
  'hellosign-api',   // conflicts with hellosign (HELLOSIGN_API_KEY)
  'oci',             // conflicts with oracle-cloud (OCI_TENANCY)
  'google-recaptcha',// conflicts with recaptcha (RECAPTCHA_SECRET_KEY)
  'statuspage-api',  // conflicts with statuspage (STATUSPAGE_API_KEY)
  'ayrshare-api',    // conflicts with ayrshare (AYRSHARE_API_KEY)
  'cloudflare-pages', // conflicts with cloudflare-workers (CF_ACCOUNT_ID)
  'doordash-drive',  // conflicts with doordash (DOORDASH_DEVELOPER_ID)
]);

// Main
const existing = new Set();
try {
  const { readdirSync } = await import('node:fs');
  for (const d of readdirSync(PACKAGES)) existing.add(d);
} catch {}

let created = 0;
let skipped = 0;

for (const svc of services) {
  if (existing.has(svc.name) || SKIP.has(svc.name)) {
    skipped++;
    continue;
  }

  const dir = join(PACKAGES, svc.name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.ts'), generateIndexTs(svc));
  writeFileSync(join(dir, 'package.json'), generatePackageJson(svc.name, svc.title));
  writeFileSync(join(dir, 'tsup.config.ts'), TSUP_CONFIG);
  writeFileSync(join(dir, 'tsconfig.json'), TSCONFIG);
  writeFileSync(join(dir, 'README.md'), generateReadme(svc));
  created++;
}

// Backfill tsup.config.ts and README.md for existing packages
let backfilledTsup = 0;
let backfilledReadme = 0;
const svcByName = new Map(services.map(s => [s.name, s]));
const { readdirSync: readdir2 } = await import('node:fs');
for (const d of readdir2(PACKAGES)) {
  const indexPath = join(PACKAGES, d, 'index.ts');
  if (!existsSync(indexPath)) continue;

  const tsupPath = join(PACKAGES, d, 'tsup.config.ts');
  if (!existsSync(tsupPath)) {
    writeFileSync(tsupPath, TSUP_CONFIG);
    backfilledTsup++;
  }

  const tsconfigPath = join(PACKAGES, d, 'tsconfig.json');
  if (!existsSync(tsconfigPath)) {
    writeFileSync(tsconfigPath, TSCONFIG);
    backfilledTsup++; // count together
  }

  const readmePath = join(PACKAGES, d, 'README.md');
  if (!existsSync(readmePath) && svcByName.has(d)) {
    writeFileSync(readmePath, generateReadme(svcByName.get(d)));
    backfilledReadme++;
  }
}

console.log(`Done! Created ${created} packages, skipped ${skipped} (already exist).`);
console.log(`Backfilled: ${backfilledTsup} tsup configs, ${backfilledReadme} READMEs.`);
console.log(`Total services in script: ${services.length}`);
