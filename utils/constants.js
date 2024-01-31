// options for select component
export const data = [
  { key: "now_playing", value: "Now Playing" },
  { key: "popular", value: "Popular" },
  { key: "top_rated", value: "Top Rated" },
  { key: "upcoming", value: "Upcoming" },
];

export const dataTv = [
  { key: "airing_today", value: "Airing Today" },
  { key: "on_the_air", value: "On The Air" },
  { key: "popular", value: "Popular" },
  { key: "top_rated", value: "Top Rated" },
];

export const dataSearch = [
  { key: "movie", value: "Movie" },
  { key: "multi", value: "Multi" },
  { key: "tv", value: "TV Show" },
];

// movies endpoints
// 1. now playing
export const nowPlayingEndpoint = `${process.env.URL}/movie/now_playing?api_key=${process.env.API_KEY}`;

// 2. popular
export const popularEndPoint = `${process.env.URL}/movie/popular?api_key=${process.env.API_KEY}`;

// 3. top rated
export const topRatedEndpoint = `${process.env.URL}/movie/top_rated?api_key=${process.env.API_KEY}`;

// 4. upcoming
export const upcomingEndpoint = `${process.env.URL}/movie/upcoming?api_key=${process.env.API_KEY}`;

// 5. search
export const searchEndpoint = `${process.env.URL}/search/movie?api_key=${process.env.API_KEY}`;

// tv shows endpoints
// 1. airing today
export const airingTodayEndpoint = `${process.env.URL}/tv/airing_today?api_key=${process.env.API_KEY}`;

// 2. on the air
export const onTheAirEndpoint = `${process.env.URL}/tv/on_the_air?api_key=${process.env.API_KEY}`;

// 3. popular
export const popularTvEndpoint = `${process.env.URL}/tv/popular?api_key=${process.env.API_KEY}`;

// 4. top rated
export const topRatedTvEndpoint = `${process.env.URL}/tv/top_rated?api_key=${process.env.API_KEY}`;

// search enpoints
// 1. search by type
export const movieSearchEndpoint = (type) =>
  `${process.env.URL}/search/${type}?api_key=${process.env.API_KEY}`;

// more details endpoint
export const moreDetailsEndpoint = (type, id) =>
  `${process.env.URL}/${type}/${id}?api_key=${process.env.API_KEY}`;
