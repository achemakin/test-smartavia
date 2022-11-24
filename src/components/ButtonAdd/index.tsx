import React, { FC } from 'react';
import useStore from '../../store';
import Button from 'react-bootstrap/Button';

const ButtonAdd: FC = () => {
  const { bitcoins, fetchBitcoin } = useStore.getState();
  
  let [disabledClickButton, setDisablaedClickButton] = React.useState(false);
  const hendler = (e: React.MouseEvent<HTMLElement>) => {
    fetchBitcoin();
  };

  

  return (
    <Button 
      variant="outline-secondary"
      disabled={disabledClickButton}
      onClick={hendler}
    >
        Получить адрес Bitcoin
    </Button>
  );
};

export default ButtonAdd;