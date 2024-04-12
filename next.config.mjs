/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your custom configurations go here
  
    // Example: Adding support for images
    images: {
      domains: ['example.com'],
    },
  
    // Example: Adding support for CSS modules
    // (you may need to install additional packages for this to work)
    // cssModules: true,
  
    // Example: Adding support for video files
    webpack: (config, { isServer }) => {
      // Your custom webpack configuration goes here
  
      // Add a new rule for handling video files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]',
            },
          },
        ],
      });
  
      if (isServer) {
        // Server-side specific configuration
      }
  
      return config;
    },
  };

export default nextConfig;
