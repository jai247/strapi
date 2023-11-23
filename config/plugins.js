module.exports = ({ env }) => ({
  // enable a plugin that doesn't require any configuration
  i18n: true,

  'open-ai': {
    enabled: true,
    config: {
      API_TOKEN: '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',
    },
  },
  'test-open-ai': {
    enabled: true,
    resolve: './src/plugins/test-open-ai'
  },
  "open-ai-embeddings": {
    enabled: true,
    config: {
      openAiApiKey: env("OPEN_AI_API_KEY"),
      openAiModelName: env("OPEN_AI_MODEL_NAME"),
      pineconeApiKey: env("PINECONE_API_KEY"),
      pineconeApiEnv: env("PINECONE_API_ENV"),
      pineconeIndex: env("PINECONE_INDEX"),
    },
  },

 
});