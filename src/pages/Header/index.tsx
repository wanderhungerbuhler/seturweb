import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

import { BsArrowLeft } from 'react-icons/bs';

const Header: React.FC = ({ children }) => {
  const history = useHistory();

  const handleBack = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      <Container>
        <button type="button" onClick={handleBack}>
          <BsArrowLeft size={35} />
        </button>
        <div>
          <img src={Logo} alt="Logo" />
          <h1>{children}</h1>
        </div>
      </Container>
    </>
  );
};

export default Header;
