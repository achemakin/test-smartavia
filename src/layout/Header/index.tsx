import React, { FC } from 'react';
import useStore from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ButtonAdd from '../../components/ButtonAdd';

const Header: FC = () => {
  return (
    <header className="w-100 pt-4 pb-4 mb-3 border-bottom ">
      <Container className="d-md-flex justify-content-between align-items-center">
        <h1>Генерации красивых адресов Bitcoin</h1>

        <ButtonAdd />
      </Container>
    </header>
  );
};

export default Header;