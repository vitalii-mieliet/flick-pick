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
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state || "/");
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

  const getNavLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <Section>
      <Container>
        <Link to={backLinkRef.current} className={css.backLink}>
          Go back
        </Link>
        {movie ? <MovieDetails movie={movie} /> : <p>Loading...</p>}
        <ul className={css.navList}>
          <li>
            <NavLink to={"cast"} className={getNavLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={"reviews"} className={getNavLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
