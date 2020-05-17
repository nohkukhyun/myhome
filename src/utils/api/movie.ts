import axios from "axios";
import { movieDto } from "../../store/movie/types";

export async function movieApi() {
  const res = await axios
    .get<movieDto>(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c4cb94f236ea35dc1503fa7bc4c5fd7a&language=ko-KR&page=1"
    )
    .then((res) => res.data);
  console.log({ res });
}
