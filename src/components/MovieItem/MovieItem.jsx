import styles from "./MovieItem.module.css";

const MovieItem = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview } = movie;

  return (
    <li className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
  );
};

export default MovieItem;
