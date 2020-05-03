import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header/Header";
import {
  ThermometerIcon,
  HazeIcon,
  LoveIcon,
  ClockIcon,
} from "../Components/Icons/Icons";

import {
  Container,
  Row,
  Column,
  Box,
  ContentBox,
  MediumTitle,
  Pline,
} from "../styles/grid.style";

const Main = () => {
  const [addressFromUser, setAddressFromUser] = useState<any>("florianopolis");
  const [findLocation, setFindLocation] = useState<any>("");
  const [findLocationWeather, setFindLocationWeather] = useState<any>("");
  const [lng, setLng] = useState<any>();
  const [lat, setLat] = useState<any>();
  const [tempMin, setTempMin] = useState<any>();
  const [tempMax, setTempMax] = useState<any>();
  const nameCityLowCase = findLocationWeather.toLowerCase();
  const tempMinRound = Math.round(tempMin);
  const tempMaxRound = Math.round(tempMax);

  useEffect(() => {
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
          setFindLocationWeather(
            locationResponse.data.results[0].address_components[0].short_name
          );
          setLat(
            locationResponse.data.results[0].geometry.location.lat.toFixed(2)
          );
          setLng(
            locationResponse.data.results[0].geometry.location.lng.toFixed(2)
          );
          setTempMin(weatherResponse.data.main.temp_min);
          setTempMax(weatherResponse.data.main.temp_max);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, [addressFromUser, findLocation, lat, lng, nameCityLowCase, tempMax]);

  //

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
            <Column mobile="12" tablet="12" desktop="6">
              <Box padding={"0"} margin={"0"}>
                <ContentBox margin={"0 50px"} height={"70vh"}>
                  <Box
                    padding={"0"}
                    margin={"0"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <HazeIcon width={"100px"} />
                    <MediumTitle fontSize={"2em"}>{findLocation}</MediumTitle>
                    <MediumTitle fontSize={"3em"}>
                      {tempMinRound}˚C min
                    </MediumTitle>
                    <Pline color={"#f9f9f9"}>{tempMaxRound}˚C max</Pline>
                  </Box>
                </ContentBox>
              </Box>
            </Column>
            <Column mobile="12" tablet="12" desktop="2">
              <Box padding={"0"} margin={"0"}>
                <Box radius={"5px"} margin={"80px 15px 20px 0"}>
                  <ContentBox height={"22vh"} margin={"0"}>
                    <Box
                      padding={"0"}
                      margin={"0"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <MediumTitle fontSize={"1em"}>
                        <ClockIcon width={"15px"} /> 15h
                      </MediumTitle>
                      <MediumTitle fontSize={"2em"}>
                        <ThermometerIcon width={"20px"} /> {tempMinRound}˚C min
                      </MediumTitle>
                      <Pline padding={"0 13px"} color={"#f9f9f9"}>
                        {tempMaxRound}˚C max
                      </Pline>
                    </Box>
                  </ContentBox>
                </Box>
              </Box>
              <Box padding={"0"} margin={"0"}>
                <Box radius={"5px"} margin={"0 15px 20px 0"}>
                  <ContentBox height={"22vh"} margin={"0"}>
                    <Box
                      padding={"0"}
                      margin={"0"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <MediumTitle fontSize={"1em"}>
                        <ClockIcon width={"15px"} /> 18h
                      </MediumTitle>
                      <MediumTitle fontSize={"2em"}>
                        <ThermometerIcon width={"20px"} /> {tempMinRound}˚C min
                      </MediumTitle>
                      <Pline padding={"0 13px"} color={"#f9f9f9"}>
                        {tempMaxRound}˚C max
                      </Pline>
                    </Box>
                  </ContentBox>
                </Box>
              </Box>
            </Column>
            <Column mobile="12" tablet="12" desktop="2">
              <Box padding={"0"} margin={"0"}>
                <Box radius={"5px"} margin={"80px 15px 20px 0"}>
                  <ContentBox height={"22vh"} margin={"0"}>
                    <Box
                      padding={"0"}
                      margin={"0"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <MediumTitle fontSize={"1em"}>
                        <ClockIcon width={"15px"} /> 16h
                      </MediumTitle>
                      <MediumTitle fontSize={"2em"}>
                        <ThermometerIcon width={"20px"} /> {tempMinRound}˚C min
                      </MediumTitle>
                      <Pline padding={"0 13px"} color={"#f9f9f9"}>
                        {tempMaxRound}˚C max
                      </Pline>
                    </Box>
                  </ContentBox>
                </Box>
              </Box>
              <Box padding={"0"} margin={"0"}>
                <Box radius={"5px"} margin={"0 15px 20px 0"}>
                  <ContentBox height={"22vh"} margin={"0"}>
                    <Box
                      padding={"0"}
                      margin={"0"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <MediumTitle fontSize={"1em"}>
                        <ClockIcon width={"15px"} /> 19h
                      </MediumTitle>
                      <MediumTitle fontSize={"2em"}>
                        <ThermometerIcon width={"20px"} /> {tempMinRound}˚C min
                      </MediumTitle>
                      <Pline padding={"0 13px"} color={"#f9f9f9"}>
                        {tempMaxRound}˚C max
                      </Pline>
                    </Box>
                  </ContentBox>
                </Box>
              </Box>
            </Column>
            <Column mobile="12" tablet="12" desktop="2">
              <Box padding={"0"} margin={"0"}>
                <Box radius={"5px"} margin={"80px 15px 20px 0"}>
                  <ContentBox height={"22vh"} margin={"0"}>
                    <Box
                      padding={"0"}
                      margin={"0"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <MediumTitle fontSize={"1em"}>
                        <ClockIcon width={"15px"} /> 17h
                      </MediumTitle>
                      <MediumTitle fontSize={"2em"}>
                        <ThermometerIcon width={"20px"} /> {tempMinRound}˚C min
                      </MediumTitle>
                      <Pline padding={"0 13px"} color={"#f9f9f9"}>
                        {tempMaxRound}˚C max
                      </Pline>
                    </Box>
                  </ContentBox>
                </Box>
              </Box>
              <Box padding={"0"} margin={"0"}>
                <Box radius={"5px"} margin={"0 15px 20px 0"}>
                  <ContentBox height={"22vh"} margin={"0"}>
                    <Box
                      padding={"0"}
                      margin={"0"}
                      alignItems={"center"}
                      flexDirection={"row"}
                      justifyContent={"center"}
                    >
                      <LoveIcon width={"30px"} />
                      <MediumTitle margin={"0 0 0 10px"} fontSize={"1em"}>
                        save location
                      </MediumTitle>
                    </Box>
                  </ContentBox>
                </Box>
              </Box>
            </Column>
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default Main;
