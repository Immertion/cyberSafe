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
        '/wallet': { page: '/wallet', query: { title: 'wallet' } },
        '/security': { page: '/security', query: { title: 'security' } },
        '/transaction': { page: '/transaction', query: { title: 'transaction' } },
        '/searchPage': { page: '/searchPage', query: { title: 'searchPage' } },
        

      };
      
    },
    output: 'export',
    images: {
      unoptimized: true
    }
  };
   
  module.exports = nextConfig