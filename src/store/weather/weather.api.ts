import axios from "axios";
import { weatherTypes } from "../types/weather.types";

const APP_ID: string = "a5676322f803a8d67b6c869d1cba4a58";

export async function getWeatherApi() {
  const res = await axios
    .get<weatherTypes>(
      `api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${APP_ID}`
    )
    .then((error) => {
      console.log({ error });
    });

  return res;
}
