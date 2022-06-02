import React, { useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/queries";
import { Button, Typography, TextField } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import "../style/stylesheet/style.css";

const Home = () => {
  const cityRef = useRef(null);
  const [getWeather, { loading, data, error }] =
    useLazyQuery(GET_WEATHER_QUERY);

  if (data) {
    console.log(data);
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between" }}
      className="container"
    >
      <section className="left" style={{ background: "blue", width: "50vw" }}>
        <Typography
          sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          variant="h4"
        >
          Search Weather
        </Typography>
        <Typography
          sx={{ marginBottom: "1rem", fontSize: "24px" }}
          variant="body1"
        >
          Know the latest weather forecast on your city, just type in the city
          name in the search box and the click search. We will fetch the weather
          forecast data right away!
        </Typography>
        <Box sx={{ display: "flex" }}>
          <TextField
            sx={{
              flexGrow: 1,
              marginRight: ".5rem",
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="text"
            inputRef={cityRef}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() =>
              getWeather({ variables: { name: cityRef.current.value } })
            }
          >
            Search
          </Button>
        </Box>
      </section>

      <div style={{ background: "green", width: "50vw" }}>
        {data ? (
          <div>
            <h1>{data.getCityByName.name}</h1>
            <h1>{data.getCityByName.weather.temperature.actual}</h1>
            <h1>{data.getCityByName.weather.summary.description}</h1>
            <h1>{data.getCityByName.weather.wind.speed}</h1>
          </div>
        ) : (
          <h1>Details</h1>
        )}
      </div>
    </Box>
  );
};

export default Home;
