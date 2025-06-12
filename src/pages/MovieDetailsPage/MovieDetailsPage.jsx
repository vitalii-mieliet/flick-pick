import { useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/tmdbAPI";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(Number(movieId));
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Link to={backLinkRef.current}>Go back</Link>
        {movie ? <MovieDetails movie={movie} /> : <p>Loading...</p>}
        <ul>
          <li>
            <NavLink to={"cast"}>Cast</NavLink>
            <NavLink to={"reviews"}>Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
