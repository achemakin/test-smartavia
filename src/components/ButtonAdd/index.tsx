import React, { FC } from 'react';
import useStore from '../../store';
import Button from 'react-bootstrap/Button';

const ButtonAdd: FC = () => {
  const { fetchBitcoin, counterButtonAdd } = useStore(({ fetchBitcoin, counterButtonAdd }) => ({ fetchBitcoin, counterButtonAdd }));
  
  const hendler = (e: React.MouseEvent<HTMLElement>) => {
    fetchBitcoin();
  };

  return (
    <Button 
      variant="outline-secondary"
      disabled={counterButtonAdd > 2}
      onClick={hendler}
    >
        Сгенерировать {counterButtonAdd}
    </Button>
  );
};

export default ButtonAdd;