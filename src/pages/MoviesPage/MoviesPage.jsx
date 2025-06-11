import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import Section from "../../components/Section/Section";

const MoviesPage = () => {
  return (
    <Section>
      <Container>
        <MovieList />
      </Container>
    </Section>
  );
};

export default MoviesPage;
