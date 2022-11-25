import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import ListBitcoin from '../../components/ListBitcoin';

const Main: FC = () => {
  return (
    <main>
      <Container>
        <ListBitcoin />
      </Container>      
    </main>
  );
};

export default Main;
