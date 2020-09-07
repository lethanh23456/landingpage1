import styled from 'styled-components';
import bgrNganhHoc from './maskGroup.png';
import logo from './group180.png';
import smallerLogo from './180smaller.png';

export const BackGR = styled.div`
  /* background-image: url("${bgrNganhHoc}");    */
  width: 100%;
  background-size: cover ;
  background-position: center center;
  height: calc(35vh - 15px);
  background-repeat: no-repeat;
  position: relative;
  /* @media (max-width: calc(1.78 * calc(30vh - 5px))) {
    background-size: auto 100%;
  } */
  @media screen and (max-width: 1100px) {
    height: calc(35vh - 30px);
  }
  @media screen and (max-width: 800px) {
    height: calc(30vh - 30px);
  }
  @media screen and (max-width: 400px) {
    height: calc(25vh - 50px);
  }
  @media screen and (max-width: 375px) {
    height: calc(25vh - 50px);
  }
  @media screen and (max-width: 350px) {
    height: calc(35vh - 30px);
  }
`;
export const Logo = styled.div`
  background-image: url("${logo}");
  width: calc(20vh - 10px); 
  height: calc(22vh - 10px);
  margin-left: 75%;
  background-repeat: no-repeat;
  @media screen and (max-width: 1300px) {
    /* position: absolute;    */
    margin-left: 70%;
    /* margin-top: 15%; */
    /* transform: translate(-50%, -50%);    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); */
  }
  @media screen and (max-width: 800px) {
    margin-top: -3%;
    margin-left: 65%; 
  }
  @media screen and (max-width: 420px) {
    background-image: url("${smallerLogo}");
    margin-left: 55%;
    margin-top: 18%;
    transform: translate(-50%, -50%);    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 400px) {
    background-image: url("${smallerLogo}");
    margin-left: 55%;
    margin-top: 8%;
    transform: translate(-50%, -50%);    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  /* @media screen and (max-width: 350px) { */
  /* } */
`;

export const Title = styled.div`
  position: absolute;
  left: 2%;
  top: 68%;
  color: #fff;
  /* transform: translate(-50%, -50%);    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); */
  font-size: calc(2em + 0.4vw);
  color: '#D10000' !important;
  @media screen and (max-width: 1100px) {
    font-size: calc(1.5em + 0.6vw);
    /* margin-left: 30%;
    margin-top: 68%; */
    /* left: 55%; */
  }
  @media screen and (max-width: 1024px) {
    font-size: calc(1.5em + 0.6vw);
    /* left: 65%; */
    top: 72%;
  }
  @media screen and (max-width: 800px) {
    margin-top: 10px;
    font-size: calc(1.5em + 0.5vw);
  }
  @media screen and (max-width: 768px) {
    /* left: 50%; */
    margin-top: 10px;
    font-size: calc(1.5em + 0.5vw);
  }
  @media screen and (max-width: 768px) {
    /* left: 50%; */
    margin-top: 10px;
    font-size: calc(1.5em + 0.5vw);
  }
  @media screen and (max-width: 420px) {
    margin-top: -20px;
    font-size: calc(1.2em + 0.8vw);
    /* margin-left: -40%; */
    margin-top: 5px;
  }
  @media screen and (max-width: 400px) {
    margin-top: -20px;
    font-size: calc(1.2em + 0.8vw);
    /* margin-left: -40%; */
    margin-top: 5px;
  }
`;

export const ContainerHtml = styled.div`
  margin-top: 10px;
  text-align: justify;
  font-size: calc(0.5em + 0.3vw);
  font-family: Roboto, sans-serif ! !important;
  ul {
    li {
      margin-left: 40px;
      list-style-type: disc;
    }
  }
  @media screen and (max-width: 1100px) {
    font-size: calc(0.8em + 0.8vw);
  }
  @media screen and (max-width: 800px) {
    font-size: calc(0.7em + 0.5vw);
  }
  @media screen and (max-width: 420px) {
    font-size: calc(0.7em + 0.5vw);
  }
`;

export const Text = styled.div`
  font-size: calc(0.6em + 0.4vw);
  margin-top: 20px;
  text-align: justify;
  font-family: Roboto, sans-serif !!important;
  
  @media screen and (max-width: 1100px) {
      font-size: calc(0.8em + 0.8vw);
  }
  @media screen and (max-width: 800px) {
      font-size: calc(0.8em + 0.4vw);
  }
  @media screen and (max-width: 400px) {
      font-size: calc(0.6em + 0.4vw);
  }
  @media screen and (max-width: 420px) {
      font-size: calc(0.8em + 0.4vw);
  }
  ul {
    li {
      margin-left: 40px;
      list-style-type: disc;
    }
`;
