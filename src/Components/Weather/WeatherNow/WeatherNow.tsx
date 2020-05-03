import React from "react";
import { FireworkSpinner } from "react-spinners-kit";
import { HazeIcon } from "../../../Components/Icons/Icons";

import {
  Box,
  ContentBox,
  MediumTitle,
  Pline,
} from "../../../styles/grid.style";

const WeatherNow = (props: any) => {
  const { load, error, findLocation, tempMin, tempMax } = props;

  return (
    <>
      <ContentBox margin={"0 50px"} height={"70vh"}>
        <Box
          padding={"0"}
          margin={"0"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          {load && (
            <>
              <HazeIcon width={"100px"} />
              <MediumTitle textAlign={"center"} fontSize={"2em"}>
                {error ? "erro" : findLocation} <span>- now</span>
              </MediumTitle>
              <MediumTitle fontSize={"3em"}>
                {error ? "oops! ocorreu um erro" : tempMin}˚C min
              </MediumTitle>
              <Pline color={"#f9f9f9"}>{error ? "erro" : tempMax}˚C max</Pline>
            </>
          )}
          {!load && <FireworkSpinner size={70} color="#f9f9f9" />}
        </Box>
      </ContentBox>
    </>
  );
};

export default WeatherNow;
