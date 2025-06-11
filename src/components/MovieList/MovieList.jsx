import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.css";

const MovieList = ({ movieList }) => {
  return (
    <ul className={styles.list}>
      {movieList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
