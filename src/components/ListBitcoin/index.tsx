import React, { FC } from 'react';
import useStore from '../../store';
import ListGroup from 'react-bootstrap/ListGroup';

const ListBitcoin: FC = () => {
  const { bitcoins } = useStore(({ bitcoins }) => ({ bitcoins }));
  console.log(bitcoins);
 
  return (
    <ListGroup>
      {bitcoins && bitcoins.map((item) => (
        <ListGroup.Item action variant="light" key={item.id}>
          
          {item.isLoading && <p>Загрузка...</p>}
          {item.error && <p>Что-то пошло не так...</p>}
          
          {item.pkey && <p>Ваш Bitcoin адрес: {item.addr}</p>}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListBitcoin;