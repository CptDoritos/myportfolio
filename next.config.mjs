/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: '/projects',
          destination: '/projects'
        },
        {
          source: '/education',
          destination: '/app/education'
        },
        {
            source: '/contact',
            destination: '/contact'
        },
      ];
    },
  };
  
  export default nextConfig;