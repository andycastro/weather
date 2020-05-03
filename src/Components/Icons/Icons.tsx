import React from "react";
import SunnySvg from "../../assets/icons/sunny.svg";
import WindSvg from "../../assets/icons/wind.svg";
import LoveSvg from "../../assets/icons/heart.svg";
import ThermometerSvg from "../../assets/icons/thermometer.svg";
import HazeSvg from "../../assets/icons/haze.svg";
import ClockSvg from "../../assets/icons/clock.svg";

export const SunnyIcon = (props: any) => {
  return <img src={SunnySvg} width={props.width} alt="Sunny Day" />;
};

export const WindIcon = (props: any) => {
  return <img src={WindSvg} width={props.width} alt="Wind" />;
};

export const LoveIcon = (props: any) => {
  return <img src={LoveSvg} width={props.width} alt="Love" />;
};

export const ThermometerIcon = (props: any) => {
  return <img src={ThermometerSvg} width={props.width} alt="Thermometer" />;
};

export const HazeIcon = (props: any) => {
  return <img src={HazeSvg} width={props.width} alt="Haze" />;
};

export const ClockIcon = (props: any) => {
  return <img src={ClockSvg} width={props.width} alt="Clock" />;
};
