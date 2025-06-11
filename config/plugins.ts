export default ({ env }) => ({
    upload: {
      config: {
        provider: 'strapi-provider-cloudflare-r2',
        providerOptions: {
          accountId: env('R2_ACCOUNT_ID'),
          accessKeyId: env('R2_ACCESS_KEY_ID'),         // <-- v0.3.0 expects these
          secretAccessKey: env('R2_SECRET_ACCESS_KEY'), // <-- v0.3.0 expects these
          bucket: env('R2_BUCKET'),
          publicUrl: env('R2_PUBLIC_URL'),
        },
      },
    },
  });