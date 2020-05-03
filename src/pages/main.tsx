import React, { useState, useEffect } from "react";
import axios from "axios";
import { FireworkSpinner } from "react-spinners-kit";
import Header from "../Components/Header/Header";
import WeatherNow from "../Components/Weather/WeatherNow/WeatherNow";
import WeatherNextHours from "../Components/Weather/WeatherNextHours/WeatherNextHours";

import { Container, Row, Column, Box, ContentBox } from "../styles/grid.style";

const Main = (): any => {
  const [addressFromUser, setAddressFromUser] = useState("florianopolis");
  const [findLocation, setFindLocation] = useState("");
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [tempMin, setTempMin] = useState<number>();
  const [tempMax, setTempMax] = useState<number>();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("called");
    axios
      .all([
        axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${addressFromUser}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            lat ? lat : "0"
          }&lon=${
            lng ? lng : "0"
          }&appid=99a93a4390907ebb53ea070c0768ecc0&units=metric`
        ),
      ])
      .then(
        axios.spread(function (locationResponse, weatherResponse) {
          setFindLocation(locationResponse.data.results[0].formatted_address);
          setLat(
            locationResponse.data.results[0].geometry.location.lat.toFixed(2)
          );
          setLng(
            locationResponse.data.results[0].geometry.location.lng.toFixed(2)
          );
          setTempMin(Math.round(weatherResponse.data.main.temp_min));
          setTempMax(Math.round(weatherResponse.data.main.temp_max));
          setLoad(true);
        })
      )
      .catch((error) => {
        setError(error);
        setLoad(true);
      });
  }, [addressFromUser, lat, lng]);

  return (
    <>
      <Container padding={"0"}>
        <Row>
          <Column
            mobile="12"
            tablet="12"
            desktop="12"
            bgColor={"rgb(255,255,255, 0.2)"}
            height={"100vh"}
          >
            <Header
              setAddressFromUser={setAddressFromUser}
              addressFromUser={addressFromUser}
            />
            {load && (
              <>
                <Column mobile="12" tablet="12" desktop="6">
                  <Box padding={"0"} margin={"0"}>
                    <WeatherNow
                      load={load}
                      error={error}
                      findLocation={findLocation}
                      tempMin={tempMin}
                      tempMax={tempMax}
                    />
                  </Box>
                </Column>
                <WeatherNextHours
                  error={error}
                  tempMin={tempMin}
                  tempMax={tempMax}
                />
              </>
            )}
            <Column mobile={"12"} tablet={"12"} desktop={"12"}>
              <ContentBox margin={"0 50px"} height={"70vh"}>
                <Box
                  padding={"0"}
                  margin={"0"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  {!load && <FireworkSpinner size={70} color="#f9f9f9" />}
                </Box>
              </ContentBox>
            </Column>
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default Main;
