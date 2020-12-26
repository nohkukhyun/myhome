import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/movie";
import { getMovieAsyncAction } from "../../store/movie/movie.action";
import { RootState } from "../../store/rootReducer";
// import { movieDto } from "../../store/types/movieTypes";

function Movie() {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.movies.movie);

  useEffect(() => {
    dispatch(getMovieAsyncAction.request(""));
  }, [dispatch]);

  const movielist = list?.results;

  return (
    <div>
      <div>
        <MovieList movielist={movielist} />
      </div>
    </div>
  );
}

export default Movie;
