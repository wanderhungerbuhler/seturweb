import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';

import Logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={Logo} alt="Logo" />
          <p>
            Se o seu objetivo é receber algum tipo de atendimento específico,
            clique em um dos botões abaixo:
          </p>
          <Link to="/eventos">Eventos</Link>
          <Link to="/gabinete">Gabinete</Link>
          <div>
            <p>
              &copy; 2020 - Secretaria de Turismo do Estado do Rio de Janeiro
            </p>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Home;
