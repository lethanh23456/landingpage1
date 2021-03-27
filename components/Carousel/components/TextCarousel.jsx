import React from "react";
import Fade from "react-reveal/Fade";
import {
  DivTextCarousel,
  ContainerTextCarousel,
  TitleCarousel,
  DescriptionCarousel,
} from "../index.style";

const TextCarousel = (props) => {
  const { title1, des1, title2, des2 } = props;
  return (
    <DivTextCarousel>
      <Fade bottom delay={0}>
        <ContainerTextCarousel>
          <TitleCarousel>{title1}</TitleCarousel>
          <DescriptionCarousel>{des1}</DescriptionCarousel>
        </ContainerTextCarousel>
      </Fade>
      <Fade bottom delay={480}>
        <ContainerTextCarousel>
          <TitleCarousel>{title2}</TitleCarousel>
          <DescriptionCarousel>{des2}</DescriptionCarousel>
        </ContainerTextCarousel>
      </Fade>
    </DivTextCarousel>
  );
};

export default TextCarousel;
