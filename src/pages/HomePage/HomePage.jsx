import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/tmdbAPI";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchPopularMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!isLoading && !error && <MovieList movieList={movies} />}
      </Container>
    </Section>
  );
};

export default HomePage;
