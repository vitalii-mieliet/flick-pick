import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/tmdbAPI";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieReviews(Number(movieId), 1);
        setReviews(data.results);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {reviews.length === 0 && !isLoading && !error && (
        <p>No reviews available.</p>
      )}
      <ul className={css.list}>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={css.item}>
            <p className={css.author}>Author: {author}</p>
            <p className={css.content}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
