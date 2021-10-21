module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://quiz-nextjs-xi.vercel.app/:slug*',
      },
    ]
  },
}

