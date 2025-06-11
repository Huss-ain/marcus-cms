export default ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env('R2_ACCESS_KEY_ID'),
              secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
            },
            endpoint: env('R2_ENDPOINT'),
            region: 'auto',
            signatureVersion: 'v4',
            forcePathStyle: true,
          },
          params: {
            Bucket: env('R2_BUCKET'),
          },
          // ADD THIS LINE:
          baseUrl: 'https://pub-f4707cbe468245578d759d0602fa68f0.r2.dev', // <-- your public R2 URL
        },
      },
    },
  });