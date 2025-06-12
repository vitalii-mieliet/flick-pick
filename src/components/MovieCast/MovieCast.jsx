import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/tmdbAPI";
import noPhoto from "../../assets/no-photo.webp";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieCast(Number(movieId));
        setCast(data.cast);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {cast.length === 0 && !isLoading && !error && (
        <p>No reviews available.</p>
      )}
      <ul className={css.list}>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id} className={css.card}>
            <img
              className={css.image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : noPhoto
              }
              alt={`${name} photo`}
            />
            <p className={css.name}>{name}</p>
            <p className={css.character}>as {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
