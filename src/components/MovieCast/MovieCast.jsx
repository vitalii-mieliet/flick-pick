import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/tmdbAPI";
import noPhoto from "../../assets/no-photo.webp";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(Number(movieId));
        setCast(data.cast);
      } catch (error) {
        console.error("Failed to fetch cast details:", error);
      }
    };

    getMovieCast();
  }, [movieId]);

  console.log(cast);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <div>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : noPhoto
              }
              alt=""
            />
            <p>{actor.name}</p>
            <p>({actor.character})</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
