const API_KEY = "409f3f7584a874f9e338acf59809d78c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOiginal: `/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=27`,
  fetchRomancemovie: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=10748`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=99`,
};

export default requests;
