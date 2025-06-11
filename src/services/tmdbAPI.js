import axios from "axios";

const tmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2NzllNTNjZjM3ZjY4YWJmYjc0NzBlYTIzYmM5NiIsIm5iZiI6MTc0OTU4NzE4My40NTIsInN1YiI6IjY4NDg5NGVmNTExNjEzNzI1MzNmZDAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6sgtPtYpuSZ7t0TOyNV4b8PxrJnpSBVNk2GU9Oq9f6U",
  },
});

export const fetchPopularMovies = async () => {
  const res = await tmdbAPI.get("");
  return res.data;
};
