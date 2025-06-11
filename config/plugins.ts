export default ({ env }) => {
    console.log('ALL ENV:', process.env);
    console.log('BUCKET:', env('R2_BUCKET'));
    console.log('PROVIDER:', require('strapi-provider-cloudflare-r2'));
    
    return {
      upload: {
        config: {
          provider: 'strapi-provider-cloudflare-r2',
          providerOptions: {
            accountId: env('R2_ACCOUNT_ID'),
            accessKey: env('R2_ACCESS_KEY_ID'),      // <-- CHANGE HERE
            secretKey: env('R2_SECRET_ACCESS_KEY'),  // <-- CHANGE HERE
            bucket: env('R2_BUCKET'),
            publicUrl: env('R2_PUBLIC_URL'),
          },
        },
      },
    };
  };