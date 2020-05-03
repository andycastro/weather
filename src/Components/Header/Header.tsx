import React, { useState } from "react";
import {
  Container,
  Row,
  Column,
  Box,
  ContentBox,
  P,
} from "../../styles/grid.style";
import { ThermometerIcon } from "../../Components/Icons/Icons";
import Input from "../Forms/Inputs/Inputs";
import Button from "../Forms/Buttons/Buttons";

const Header = (props: any) => {
  const { setAddressFromUser } = props;

  const [formData, setFormData] = useState<any>("");

  const searchLocation = (e: any) => {
    e.preventDefault();
    setAddressFromUser(formData.searchValue);
  };

  return (
    <>
      <Container>
        <Row>
          <Column mobile={"12"} tablet={"12"} desktop={"6"}>
            <Box>
              <ContentBox alignItems={"center"} margin={"15px 0 0 0"}>
                <h1>
                  <ThermometerIcon width={"30px"} />
                  OnSign TV Temperature
                </h1>
              </ContentBox>
            </Box>
          </Column>
          <Column mobile={"12"} tablet={"12"} desktop={"6"}>
            <Box>
              <ContentBox alignItems={"center"} flexDirection={"row"}>
                <form onSubmit={searchLocation}>
                  <Input formData={formData} setFormData={setFormData} />
                  <Button />
                </form>
              </ContentBox>
            </Box>
            <Box>
              <ContentBox alignItems={"center"} flexDirection={"row"}>
                <P
                  color={"#f9f9f9"}
                  fontSize={"0.8em"}
                  textAlign={"center"}
                  opacity={"0.8"}
                  lineHeight={"15px"}
                  width={"320px"}
                >
                  you can enter any type of content, such as name of the city or
                  zipcode
                </P>
              </ContentBox>
            </Box>
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default Header;
