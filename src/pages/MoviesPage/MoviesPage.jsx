import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { fetchMoviesByQuery } from "../../services/tmdbAPI";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import Section from "../../components/Section/Section";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchParams = (e) => {
    const newQuery = e.target.value;
    const newSearchParams = new URLSearchParams();

    if (newQuery !== "") {
      newSearchParams.set("query", newQuery);
    } else {
      newSearchParams.delete("query");
    }
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    // if (!query) return;
    const getMoviesByWuery = async () => {
      const data = await fetchMoviesByQuery(debouncedQuery);
      setMovies(data.results);
    };
    getMoviesByWuery();
  }, [debouncedQuery]);

  return (
    <Section>
      <Container>
        <input type="text" value={query} onChange={changeSearchParams} />

        <MovieList movieList={movies} />
      </Container>
    </Section>
  );
};

export default MoviesPage;
