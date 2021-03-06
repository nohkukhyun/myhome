import { combineReducers } from "redux";
import github from "./github/github.reducer";
import movies from "./movie/movie.reducer";
import counter from "./counter/counte.reducer";
import slide from "./animation/slide/slide.reducer";
import weather from "./weather/weather.reducer";
import toast from "./toast/toast.reducer";

const rootReducer = combineReducers({
  github,
  movies,
  counter,
  slide,
  weather,
  toast,
});

export default rootReducer;
// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
