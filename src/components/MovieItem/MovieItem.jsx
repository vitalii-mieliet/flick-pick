import styles from "./MovieItem.module.css";
import noImage from "../../assets/no-image.webp";
import { Link, useLocation } from "react-router-dom";
const MovieItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title, release_date, vote_average } = movie;

  return (
    <Link to={`/movies/${id}`} state={location}>
      <li className={styles.card}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noImage
          }
          alt={title}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.release}>Release Date: {release_date}</p>
          <p className={styles.rating}>Rating: {vote_average} ⭐</p>
          {/* <p className={styles.overview}>{overview}</p> */}
        </div>
      </li>
    </Link>
  );
};

export default MovieItem;
