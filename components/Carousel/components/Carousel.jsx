import { Carousel, Icon, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Box from "../../Box";
import Container from "../../UI/Container";
import {
  CarouselSlide,
  ContainerContent,
  FontBackground,
  TestimonialItem
} from "../index.style";
import styles from "./Carousel.less";
import TextCarousel from "./TextCarousel";

const CarouselComponent = ({
  res,
}) => {
  // const dataCarousel = _.get(res, 'data.data', []);
  const [dataCarousel, setDataCarousel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, setRef] = useState(undefined);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    setDataCarousel(res);
    setLoading(false);
  });
  console.log(res, "carousel");
  console.log(dataCarousel, "dataCarousel");
  return (
    <Spin spinning={loading}>
      <div style={{ position: "relative", minHeight: 600 }}>
        {isDesktopOrLaptop && (
          <div className={styles.main}>
            <Container fullWidth noGutter>
              <Carousel
                autoplay
                ref={(refLast) => {
                  setRef(refLast);
                }}
              >
                {dataCarousel.map((item, index) => (
                  <Box>
                    <CarouselSlide
                      style={{
                        backgroundImage: `url("${item.banner}")`,
                      }}
                    >
                      <FontBackground>
                        <Container fullHeight>
                          <ContainerContent>
                            <TextCarousel
                              title1={item?.noiDung[0]?.tieuDe ?? ''}
                              des1={item?.noiDung[0]?.moTa ?? ''}
                              title2={item?.noiDung[1]?.tieuDe ?? ''}
                              des2={item?.noiDung[1]?.moTa ?? ''}
                            />
                            <div
                              style={{
                                left: 15,
                                top: "50%",
                                position: "absolute",
                              }}
                              className={styles.buttonCarousel}
                              onClick={() => ref.prev()}
                            >
                              <Icon
                                type="left"
                                style={{ fontSize: 40, color: "white" }}
                              />
                            </div>
                            <div
                              style={{
                                right: 15,
                                top: "50%",
                                position: "absolute",
                              }}
                              className={styles.buttonCarousel}
                              onClick={() => ref.next()}
                            >
                              <Icon
                                type="right"
                                style={{ fontSize: 40, color: "white" }}
                              />
                            </div>
                          </ContainerContent>
                        </Container>
                      </FontBackground>
                    </CarouselSlide>
                  </Box>
                ))}
              </Carousel>
            </Container>
          </div>
        )}
        {isTabletOrMobileDevice && (
          <div className={styles.main}>
            <Container fullWidth noGutter>
              <Carousel
                autoplay
                // {...settings}
                ref={(refLast) => {
                  setRef(refLast);
                }}
              >
                {dataCarousel.map((item, index) => (
                  <TestimonialItem className="testimonial_item">
                    <Box>
                      <CarouselSlide
                        style={{
                          backgroundImage: `url("${item.banner}")`,
                        }}
                      >
                        <FontBackground>
                          <Container fullHeight>
                            <ContainerContent>
                              <TextCarousel
                                title1={item?.noiDung[0]?.tieuDe ?? ''}
                                des1={item?.noiDung[0]?.moTa ?? ''}
                                title2={item?.noiDung[1]?.tieuDe ?? ''}
                                des2={item?.noiDung[1]?.moTa ?? ''}
                              />
                            </ContainerContent>
                          </Container>
                        </FontBackground>
                      </CarouselSlide>
                    </Box>
                  </TestimonialItem>
                ))}
              </Carousel>
            </Container>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default CarouselComponent;
