import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByID } from "../../services/tmdbAPI";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getReviewsByID = async () => {
      try {
        const data = await fetchReviewsByID(Number(movieId), 1);
        setReviews(data.results);
      } catch (error) {
        console.error("Failed to fetch reviews details:", error);
      }
    };

    getReviewsByID();
  }, [movieId]);

  console.log(reviews);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <div>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
