import React, { FC } from 'react';
import useStore from '../../store';
import { useClipboard } from 'use-clipboard-copy';
import {
  List,
  Item,
  Card,
  CardInfo,
  CardСaption,
  CardAddress,
  ButtonCopy,
  CardError,
  TextError,
  ImgError,
  CardLoad,
  LoadProgress,
  LoadIcon
} from './style';
import { CopyIcon } from './icon';
 
const ListBitcoin: FC = () => {
  const { bitcoins } = useStore(({ bitcoins }) => ({ bitcoins }));
  const clipboard = useClipboard();

  return (
    <List>
      {bitcoins && bitcoins.map((item) => (
        <Item key={item.id}>
          
          {item.isLoading && (
            <CardLoad>
              <LoadIcon />
              <LoadProgress />
              <TextError>Генерим...</TextError>                       
            </CardLoad>
          )}
          
          {item.error && (
            <CardError>
              <ImgError src="./img/bitcoin-broken.png" />
              <TextError>Что-то пошло не так...</TextError>
            </CardError>
          )}
          
          {item.pkey && (
            <Card>
              <CardInfo>
                <CardСaption>Bitcoin адрес</CardСaption>
                <CardAddress>{item.addr}</CardAddress>                
              </CardInfo>

              <ButtonCopy onClick={() => clipboard.copy(item.addr)}>
                <CopyIcon />
              </ButtonCopy>                          
            </Card>
          )}
        </Item>
      ))}
    </List>
  );
};

export default ListBitcoin;