import styled from 'styled-components';

import backgroundImg from '../../assets/bg.svg';

import { appearFromLeft } from '../../components/Animations';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #2158a0 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 3s;

  p {
    width: 50%;
    color: #f0f0f5;
    margin-top: 10px;
    display: block;
    text-align: justify;
  }

  a {
    width: 25%;
    margin-top: 50px;
    padding: 3px 0;
    font-size: 0.9em;
    text-align: center;
    border: 1px solid #00c7c7;
    border-radius: 50px;
    text-decoration: none;
    color: #f0f0f5;
    transition: background-color 0.7s;

    &:hover {
      background: #00c7c7;
    }
    + a {
      margin-top: 10px;
    }
  }

  div {
    position: absolute;
    bottom: 20px;
    margin-top: 150px;

    p {
      width: 100%;
      text-align: center;
      opacity: 0.7;
      font-size: 0.7em;
      font-weight: 400;
    }
  }

  img {
    width: 150px;
    margin-bottom: 50px;
  }
`;

export const Background = styled.div`
  width: 50%;
  flex: 1;
  background: #d2dae1 url(${backgroundImg}) no-repeat center bottom;
  background-size: 150%;

  animation: ${appearFromLeft} 1s;
`;
