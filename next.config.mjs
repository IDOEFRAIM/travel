/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: 'mantinedev/mantine/master/.demo/images/bg-8.png'
        },
      ],
    },
  };

export default nextConfig;
