import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const loader = () => (
  <Container>
    {/* 이모지는 span 속에 넣어줘야 함 */}
    <span role="img" aria-label="Loading">
      🚫🚫
    </span>
  </Container>
);

export default loader;