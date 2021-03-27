import React from "react";
import ContainerWrapper from "./style";

const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
  fullHeight,
  height,
}) => {
  // Add all classs to an array
  const addAllClasses = ["container"];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(" ")}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      noGutter={noGutter}
      width={width}
      height={height}
      mobileGutter={mobileGutter}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
