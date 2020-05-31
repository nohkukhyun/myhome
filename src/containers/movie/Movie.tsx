import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieAsyncAction } from "../../store/movie/actions/movieAction";
import { RootState } from "../../store/rootReducer";
import { movieDto } from "../../store/movie/types";

export interface type {
  item: [] | null;
}

function Movie() {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.movies.movie);
  const item = list;

  useEffect(() => {
    dispatch(getMovieAsyncAction.request(""));
  }, [dispatch]);

  useEffect(() => {
    console.log({ list });
  });

  return (
    <div>
      <div>
        <ul>{item}</ul>
      </div>
    </div>
  );
}

export default Movie;
