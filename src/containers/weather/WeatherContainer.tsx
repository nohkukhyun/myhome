import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Weather from "../../components/weather";
import { getWeather } from "../../store/weather/weather.actions";

type WeatherProps = {
  history: History | null;
};

function WeatherContainer({ history }: WeatherProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return <Weather history={history} />;
}

export default WeatherContainer;
