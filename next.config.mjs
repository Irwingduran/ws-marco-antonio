/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.facebook.com https://www.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
