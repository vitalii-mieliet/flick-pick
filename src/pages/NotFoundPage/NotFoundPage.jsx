import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.text}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className={css.link}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
