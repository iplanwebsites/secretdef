import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OTEL_EXPORTER_OTLP_ENDPOINT: {
    description: 'OpenTelemetry OTLP exporter endpoint',
    dashboard: 'https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/',
    validate: 'url',
  },
  OTEL_EXPORTER_OTLP_HEADERS: {
    description: 'OpenTelemetry OTLP exporter headers',
    dashboard: 'https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/',
    required: false,
  },
  OTEL_SERVICE_NAME: {
    description: 'OpenTelemetry service name',
    dashboard: 'https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/',
    required: false,
  },
});
