import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/tmdbAPI";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import Section from "../../components/Section/Section";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page")) || 1;

  const handleFormSubmit = (newQuery) => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("query", newQuery);
    newSearchParams.set("page", 1);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!query) return;
    const getMoviesByQuery = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const { results } = await fetchMoviesByQuery(query, page);
        setMovies(results);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQuery();
  }, [query, page]);

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleFormSubmit} />

        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!isLoading && !error && <MovieList movieList={movies} />}
      </Container>
    </Section>
  );
};

export default MoviesPage;
