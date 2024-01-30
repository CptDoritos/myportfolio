/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: '/projects',
          destination: '/src/app/pages/projects',
        },
        {
            source: '/education',
            destination: '/src/app/pages/education',
        },
        {
            source: '/contact',
            destination: '/src/app/pages/contact',
        }
      ];
    },
  };
  
  export default nextConfig;
  