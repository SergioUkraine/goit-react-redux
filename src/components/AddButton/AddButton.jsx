import React from 'react';
import { Button, ButtonIcon } from './AddButton.styled';

function AddButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      <ButtonIcon />
    </Button>
  );
}

export default AddButton;
