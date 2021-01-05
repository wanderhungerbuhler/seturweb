import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;  

  h1 { font-size: 1.7em; color: #2158a0; }
  p { width: 70%; font-size: .9em; color: #858585; }
`;