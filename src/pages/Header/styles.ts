import styled from 'styled-components';

import { appearFromRight } from '../../components/Animations';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(329.54deg, #2158a0 0%, #00c7c7 100%);

  display: grid;
  grid-template-columns: 20px 1fr;

  div {
    width: 250px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1.2em;
      font-weight: 400;
      margin-left: 10px;
      border-left: 1px solid #ffffff;
      padding: 0 10px;
      color: #ffffff;
    }
  }

  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      position: absolute;
      top: 20px;
      color: #ffffff;
      cursor: pointer;

      animation: ${appearFromRight} 3s;
    }
  }
`;
