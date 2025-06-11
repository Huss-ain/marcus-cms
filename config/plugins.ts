export default ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('R2_ACCESS_KEY_ID'),
          secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          endpoint: env('R2_ENDPOINT'), // e.g. https://<accountid>.r2.cloudflarestorage.com
          region: 'auto',
          params: {
            Bucket: env('R2_BUCKET'),
          },
          s3ForcePathStyle: true,
          // Optionally add publicUrl if you want public links
          publicUrl: env('R2_PUBLIC_URL'),
        },
      },
    },
  });