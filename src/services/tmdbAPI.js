import axios from "axios";

const tmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2NzllNTNjZjM3ZjY4YWJmYjc0NzBlYTIzYmM5NiIsIm5iZiI6MTc0OTU4NzE4My40NTIsInN1YiI6IjY4NDg5NGVmNTExNjEzNzI1MzNmZDAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6sgtPtYpuSZ7t0TOyNV4b8PxrJnpSBVNk2GU9Oq9f6U",
  },
});

export const fetchPopularMovies = async (page = 1) => {
  const params = {
    page,
  };
  const res = await tmdbAPI.get("/movie/popular", { params });
  return res.data;
};

export const fetchMoviesByQuery = async (query = "", page = 1) => {
  const params = {
    query,
    page,
  };
  const res = await tmdbAPI.get("/search/movie", { params });
  return res.data;
};

export const fetchMovieDetails = async (movie_id) => {
  const res = await tmdbAPI.get(`/movie/${movie_id}`);
  return res.data;
};

export const fetchMovieReviews = async (movie_id, page = 1) => {
  const params = {
    page,
  };
  const res = await tmdbAPI.get(`/movie/${movie_id}/reviews`, { params });
  return res.data;
};

export const fetchMovieCast = async (movie_id) => {
  const res = await tmdbAPI.get(`/movie/${movie_id}/credits`);
  return res.data;
};
