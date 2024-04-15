/**
//  * @type {import('next').NextConfig}
 */
const nextConfig = {
    exportPathMap: async function (
    ) {
      return {
        '/': { page: '/' },
        '/auth': { page: '/auth', query: { title: 'auth' } },
        '/register': { page: '/register', query: { title: 'register' } },
        '/home': { page: '/home', query: { title: 'home' } },
        output: 'export',

      };
    }
  };
   
  module.exports = nextConfig