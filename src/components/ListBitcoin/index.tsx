import React, { FC } from 'react';
import useStore from '../../store';
import ListGroup from 'react-bootstrap/ListGroup';

const ListBitcoin: FC = () => {
  const { bitcoins } = useStore.getState();

  return (
    <ListGroup>
      {bitcoins.reverse().map((item) => (
        <ListGroup.Item action variant="light" key={item.pkey}>
          Ваш Bitcoin адрес: {item.addr}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListBitcoin;