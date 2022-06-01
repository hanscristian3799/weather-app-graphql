import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/queries";

const Home = () => {
  const [searchedWeather, setSearchWeather] = useState("");
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: {
        name: searchedWeather,
      },
    }
  );

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <div>
        <h1>Search Weather</h1>
        <input
          type="text"
          onChange={(event) => {
            setSearchWeather(event.target.value);
          }}
        ></input>
        <button onClick={() => getWeather()}>Search</button>
      </div>

      {data && (
        <div>
          <h1>{data.getCityByName.name}</h1>
          <h1>{data.getCityByName.weather.temperature.actual}</h1>
          <h1>{data.getCityByName.weather.summary.description}</h1>
          <h1>{data.getCityByName.weather.wind.speed}</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
