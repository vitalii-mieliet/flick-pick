import { useEffect, useState } from "react";
import { fetchMovieByID } from "../../services/tmdbAPI";
import { useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getMovieByID = async () => {
      try {
        const data = await fetchMovieByID(Number(movieId));
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    getMovieByID();
  }, [movieId]);
  console.log(movie);

  return (
    <Section>
      <Container>
        {movie ? <MovieDetails movie={movie} /> : <p>Loading...</p>}
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
