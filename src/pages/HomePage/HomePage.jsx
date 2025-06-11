import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import Section from "../../components/Section/Section";
import { fetchPopularMovies } from "../../services/tmdbAPI";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data.results);
    };
    getPopularMovies();
  }, []);
  console.log(movies);
  return (
    <Section>
      <Container>
        <MovieList movieList={movies} />
      </Container>
    </Section>
  );
};

export default HomePage;
