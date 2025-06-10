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
            forcePathStyle: true, // This is the new key for AWS SDK v3
          },
          params: {
            Bucket: env('R2_BUCKET'),
          },
        },
      },
    },
  });