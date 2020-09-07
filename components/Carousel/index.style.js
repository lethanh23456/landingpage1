import styled from 'styled-components';

const TestimonialSecWrapper = styled.section`
  position: relative;
  /* padding: 110px 0 0; */
  z-index: 10;
  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 360px) {
    margin-top: -190px;
  }

  .glide {
    &:hover {
      .glide__prev--area,
      .glide__next--area {
        opacity: 1;
      }
    }
  }

  .glide__slides {
    padding-top: 20px;
    
    /* .glide__slide {
      opacity: 0.5;
      pointer-events: none;
      transition: 0.25s ease;
      &.glide__slide--active {
        opacity: 1;
        pointer-events: auto;
        + .glide__slide {
          @media (min-width: 800px) {
            opacity: 1;
            pointer-events: auto;
          }
        }
      }
    } */
  }

  .glide__controls {
    position: static;
    .glide__prev--area,
    .glide__next--area {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: 0.15s ease-in-out;
      @media (max-width: 990px) {
        display: none;
      }

      button {
        font-size: 28px;
      }
    }
    .glide__prev--area {
      left: 10%;
      @media (max-width: 1510px) {
        left: 5%;
      }
      @media (max-width: 1400px) {
        left: 0%;
      }
    }
    .glide__next--area {
      right: 10%;
      @media (max-width: 1510px) {
        right: 5%;
      }
      @media (max-width: 1400px) {
        right: 0%;
      }
    }
  }

  @media (max-width: 990px) {
    .glide__slide--active .testimonial_item {
      box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const TestimonialItem = styled.div`
  border: 1px solid #f2f4f7;
  background-color: #fff;
  transition: 0.425s ease;

  &:hover {
    box-shadow: 0px 20px 40px -20px rgba(39, 79, 117, 0.25);
  }
`;

export const CarouselSlide = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 122px);
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: calc(1.78 * calc(100vh - 112px))) {
    background-size: auto 100%;
  }
  @media screen and (max-width: 900px) {
    height: calc(75vh - 112px);
  }
`;

export const FontBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(32, 33, 36, 0.8) 0.28%,
    rgba(32, 33, 36, 0.5) 51.46%,
    rgba(32, 33, 36, 0) 100%
  );
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 12.5%;
`;

export const DivTextCarousel = styled.div`
  width: 60%;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const ContainerTextCarousel = styled.div`
  margin-bottom: 0.3vw;
`;

export const TitleCarousel = styled.div`
  color: white;
  font-weight: bold;
  font-size: calc(0.8em + 1.5vw);
  line-height: calc(1em + 3vw);
  letter-spacing: 0.06em;
  text-align: left;
`;

export const DescriptionCarousel = styled.div`
  color: white;
  font-size: calc(0.8em + 0.3vw);
  line-height: calc(0.8em + 0.9vw);
  text-align: justify;
  width: 100%;
`;

export const ContainerInformation = styled.div`
  display: block;
  @media screen and (max-width: 744px) {
    display: none;
  }
  z-index: 100;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  @media screen and (max-width: 900px) {
    bottom: 25%;
  }
`;

export default TestimonialSecWrapper;
