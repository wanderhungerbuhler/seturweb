import React from 'react';

import { Container, Content } from './styles';

import iconSuccess from '../../assets/icon-success.svg';

const Notifications: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={iconSuccess} alt="Sucesso!" />
        <h1>Cadastro realizado com sucesso!</h1>
        <p>Obrigado por realizar esse cadastro, a SETUR agradece aos colaboradores!</p>
      </Content>
    </Container>
  );
}

export default Notifications;
