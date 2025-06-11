import styles from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const {
    title,
    tagline,
    overview,
    release_date,
    runtime,
    genres,
    production_countries,
    original_language,
    status,
    vote_average,
    vote_count,
    homepage,
    poster_path,
  } = movie;

  return (
    <div className={styles.wrapper}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/assets/no-poster.webp"
        }
        alt={title}
        className={styles.poster}
      />

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        {tagline && <p className={styles.tagline}>&quot;{tagline}&quot;</p>}

        <p>
          <strong>Overview:</strong> {overview}
        </p>
        <p>
          <strong>Release Date:</strong> {release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {runtime} min
        </p>
        <p>
          <strong>Genres:</strong> {genres.map((g) => g.name).join(", ")}
        </p>
        <p>
          <strong>Country:</strong>{" "}
          {production_countries.map((c) => c.name).join(", ")}
        </p>
        <p>
          <strong>Original Language:</strong> {original_language.toUpperCase()}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Vote Average:</strong> {vote_average} ⭐
        </p>
        <p>
          <strong>Vote Count:</strong> {vote_count}
        </p>

        {homepage && (
          <p>
            <a href={homepage} target="_blank" rel="noreferrer">
              🔗 Official Page
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
