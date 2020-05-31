import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieAsyncAction } from "../../store/movie/actions/movieAction";
import { RootState } from "../../store/rootReducer";

function Movie() {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.movies.movie);

  useEffect(() => {
    dispatch(getMovieAsyncAction.request(""));
  }, [dispatch, list]);

  return <div>{list}</div>;
}

export default Movie;
