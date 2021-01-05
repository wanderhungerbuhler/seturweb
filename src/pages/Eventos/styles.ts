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

    label {
      color: #858585;
    }

    select {
      position: relative;
      width: 100%;
      height: 50px;
      border: 0;
      border-radius: 7px;
      padding: 15px;
      background: #f0f0f5;
      margin-bottom: 20px;
      color: #858585;
      border: 1px solid #d8d8d8;
    }

    textarea {
      width: 100%;
      min-height: 145px;
      border: 0;
      border-radius: 7px;
      padding: 15px;
      background: #f0f0f5;
      margin-bottom: 20px;
      color: #858585;
      border: 1px solid #d8d8d8;

      resize: none;
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
