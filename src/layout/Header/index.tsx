import React, { FC } from 'react';
import useStore from '../../store';
import { Container } from '../../lib/styled/container';
import { HeaderEl, Title, Wrap, ButtonClear, WrapSmall } from './style';
import { BitcoinLogo, ClearIcon } from './icon';

const Header: FC = () => {
   const { bitcoins, clearBitcoins } = useStore(({ bitcoins, clearBitcoins }) => ({ bitcoins, clearBitcoins }));
  return (
    <HeaderEl>
      <Container>
        {!!bitcoins.length && (
          <WrapSmall>
            <BitcoinLogo />
            <ButtonClear onClick={clearBitcoins}>
              <ClearIcon />
            </ButtonClear>
          </WrapSmall>
        )}

        {!bitcoins.length && (
          <Title>
            Генерация красивых
            
            <Wrap>
              адресов
              <BitcoinLogo />
            </Wrap>          
          </Title>
        )}                
      </Container>
    </HeaderEl>
  );
};

export default Header;
