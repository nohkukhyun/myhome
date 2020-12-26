import styled from "styled-components";

export const MovieListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MovieUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieLi = styled.li`
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    max-width: 100%;
  }
  p {
    font-size: 1rem;
    text-align: center;
  }
`;
