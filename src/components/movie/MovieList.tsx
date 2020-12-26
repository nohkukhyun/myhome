import React from "react";
import * as S from "./movielist.styled";

interface MovieProps {
  movielist: any;
}

function MovieList({ movielist }: MovieProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <S.MovieListWrap>
      <S.MovieUl>
        {movielist?.map((data, i) => {
          return (
            <S.MovieLi>
              <img src={`${IMG_URL}${data.poster_path}`} alt="img" />
              <p>{data.title}</p>
            </S.MovieLi>
          );
        })}
      </S.MovieUl>
    </S.MovieListWrap>
  );
}

export default MovieList;
