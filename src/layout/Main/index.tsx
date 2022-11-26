import React, { FC } from 'react';
import useStore from '../../store';
import { Container } from '../../lib/styled/container';
import { MainEl, ImgBackground } from './style';
import ButtonAdd from '../../components/ButtonAdd';
import { ImgHero } from './icon';
import ListBitcoin from '../../components/ListBitcoin';

const Main: FC = () => {
  const { bitcoins } = useStore(({ bitcoins }) => ({ bitcoins }));
  return (
    <MainEl>
      <Container>
        <ListBitcoin />

        {!bitcoins.length && (
          <ImgBackground>
            <ImgHero />
          </ImgBackground>
        )}        
        
        <ButtonAdd />
      </Container>      
    </MainEl>
  );
};

export default Main;
