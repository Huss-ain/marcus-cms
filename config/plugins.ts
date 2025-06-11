export default ({ env }) => {
  console.log('ALL ENV:', process.env);
  console.log('BUCKET:', env('R2_BUCKET'));
  
  return {
    upload: {
      config: {
        provider: 'strapi-provider-cloudflare-r2',
        providerOptions: {
          accountId: env('R2_ACCOUNT_ID'),
          accessKeyId: env('R2_ACCESS_KEY_ID'),
          secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          bucket: env('R2_BUCKET'),
          publicUrl: env('R2_PUBLIC_URL'),
        },
      },
    },
  };
};