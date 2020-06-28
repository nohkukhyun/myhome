export type weatherTypes = {
  coord: {
    lon: number | null;
    lat: number | null;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string | null;
      icon: string | null;
    }
  ];
  base: string | null;
  main: {
    temp: number | null;
    pressure: number | null;
    humidity: number | null;
    temp_min: number | null;
    temp_max: number | null;
  };
  visibility: number | null;
  wind: {
    speed: number | null;
    deg: number | null;
  };
  clouds: {
    all: number | null;
  };
  dt: number | null;
  sys: {
    type: number | null;
    id: number | null;
    message: number | null;
    country: string | null;
    sunrise: number | null;
    sunset: number | null;
  };
  id: number | null;
  name: string | null;
  cod: number | null;
};
