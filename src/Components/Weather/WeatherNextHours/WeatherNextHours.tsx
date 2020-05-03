import React from "react";
import {
  ThermometerIcon,
  LoveIcon,
  ClockIcon,
} from "../../../Components/Icons/Icons";

import {
  Column,
  Box,
  ContentBox,
  MediumTitle,
  Pline,
} from "../../../styles/grid.style";

const WeatherNow = (props: any) => {
  const { error, tempMin, tempMax } = props;

  return (
    <>
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
                  <ThermometerIcon width={"20px"} /> {error ? "erro" : tempMin}
                  ˚C min
                </MediumTitle>
                <Pline padding={"0 13px"} color={"#f9f9f9"}>
                  {error ? "erro" : tempMax}˚C max
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
                  <ThermometerIcon width={"20px"} /> {error ? "erro" : tempMin}
                  ˚C min
                </MediumTitle>
                <Pline padding={"0 13px"} color={"#f9f9f9"}>
                  {error ? "erro" : tempMax}˚C max
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
                  <ThermometerIcon width={"20px"} /> {error ? "erro" : tempMin}
                  ˚C min
                </MediumTitle>
                <Pline padding={"0 13px"} color={"#f9f9f9"}>
                  {error ? "erro" : tempMax}˚C max
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
                  <ThermometerIcon width={"20px"} /> {error ? "erro" : tempMin}
                  ˚C min
                </MediumTitle>
                <Pline padding={"0 13px"} color={"#f9f9f9"}>
                  {error ? "erro" : tempMax}˚C max
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
                  <ThermometerIcon width={"20px"} /> {error ? "erro" : tempMin}
                  ˚C min
                </MediumTitle>
                <Pline padding={"0 13px"} color={"#f9f9f9"}>
                  {error ? "erro" : tempMax}˚C max
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
    </>
  );
};

export default WeatherNow;
