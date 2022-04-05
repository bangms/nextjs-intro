const API_KEY = process.env.API_KEY;
// const API_KEY = "10923b261ba94d897ac6b81148314a3f";
// console.log(API_KEY);

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // old-blog 주소를 요청하면 new-sexy-blog로 변경됨
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        // source랑 destination에 들어가는 명칭을 동일하게 
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ];
  },
};