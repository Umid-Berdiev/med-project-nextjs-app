/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/uz',
  //       permanent: true
  //     }
  //   ]
  // },

  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
