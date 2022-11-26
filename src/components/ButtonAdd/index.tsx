import React, { FC } from 'react';
import useStore from '../../store';
import { Button } from './style';

const ButtonAdd: FC = () => {
  const { fetchBitcoin, counterButtonAdd } = useStore(({ fetchBitcoin, counterButtonAdd }) => ({ fetchBitcoin, counterButtonAdd }));
  
  const hendler = (e: React.MouseEvent<HTMLElement>) => {
    fetchBitcoin();
    window.scroll({
      top: 0,
      behavior: 'auto'
    });
  };

  return (
    <Button     
      disabled={counterButtonAdd > 2}
      onClick={hendler}
    >
        Сгенерировать
    </Button>
  );
};

export default ButtonAdd;