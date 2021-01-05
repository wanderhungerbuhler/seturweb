import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 7px;
  padding: 15px;
  background: #f0f0f5;
  margin-bottom: 20px;

  color: #858585;
  border: 1px solid #d8d8d8;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #2158a0;
      border-color: #2158a0;
    `}

  

  label {
    color: #858585;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #858585;
  }

  svg {
    margin-right: 7px;
  }
`;

export const Label = styled.label`
  color: #858585;
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 7px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
