import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/tmdbAPI";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data.results);
    };
    getPopularMovies();
  }, []);

  return (
    <Section>
      <Container>
        <MovieList movieList={movies} />
      </Container>
    </Section>
  );
};

export default HomePage;
