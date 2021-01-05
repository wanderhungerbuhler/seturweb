import styled from 'styled-components';

import { appearFromRight } from '../../components/Animations';

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: -100px auto;
  background: #ffffff;
  padding: 20px;
  border-radius: 7px;
  margin-bottom: 20px;

  animation: ${appearFromRight} 1.5s;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    h2 {
      color: #2158a0;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`;

export const ButtonRegister = styled.button`
  width: 100%;
  height: 55px;
  margin: 10px auto;
  color: #ffffff;
  border: 0;
  border-radius: 7px;
  background: #2463b4;
  transition: background 0.3s;
  cursor: pointer;
`;
