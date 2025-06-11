import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.css";

const MovieList = ({ movieList }) => {
  const filteredList = movieList.filter(
    ({ title, release_date }) => title && release_date
  );
  return (
    <ul className={styles.list}>
      {filteredList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
