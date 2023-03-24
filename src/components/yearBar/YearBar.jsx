import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const YearBar = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <ButtonGroup disableElevation variant='contained' color='primary'>
      <Button>{currentYear()}</Button>
      <Button>{currentYear() + 1}</Button>
      <Button>{currentYear() + 2}</Button>
      <Button>{currentYear() + 3}</Button>
      <Button>{currentYear() + 4}</Button>
    </ButtonGroup>
  );
};

export default YearBar;
