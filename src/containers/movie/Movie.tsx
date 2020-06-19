import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovieAsyncAction } from "../../store/movie/movie.action"
import { RootState } from "../../store/rootReducer"
import { movieDto } from "../../store/types/types"

export interface type {}

function Movie() {
  const dispatch = useDispatch()
  const { list } = useSelector((state: RootState) => state.movies.movie)

  useEffect(() => {
    dispatch(getMovieAsyncAction.request(""))
  }, [dispatch])

  return (
    <div>
      <div>
        <ul>
          {list?.map((data: movieDto, i) => {
            return <li>{data.title}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Movie
