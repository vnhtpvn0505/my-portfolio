/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.codepen.io',
            port: '',
            pathname: '/1480814/av+1.png',
          },
        ],
      },
    
      reactStrictMode: true,
      compiler: {
      styledComponents: true,
      },
}

module.exports = nextConfig
