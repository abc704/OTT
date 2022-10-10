import React from "react";
import styled from "styled-components";
// import background from "../assets/login.jpg";
import Spline from '@splinetool/react-spline';

export default function BackgroundImage() {
  return (
    <Container>
      <Spline scene="https://prod.spline.design/wOwSoZIXat3vtjeJ/scene.splinecode" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
 
`;
