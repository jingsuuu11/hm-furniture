import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100% - 65px);
  background-color: rgba(255, 255, 255, 0.1)
`;

const Backdrop = () => {
  return (
      <Container>hello world!</Container>
  )
}

export default Backdrop