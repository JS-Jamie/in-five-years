import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const YearBar = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  const navigate = useNavigate();

  const handleClickCurrentYear = () => {
    navigate('/');
  };
  const handleClickSecondYear = () => {
    navigate('/second');
  };
  const handleClickThirdYear = () => {
    navigate('/third');
  };
  const handleClickFourthYear = () => {
    navigate('/fourth');
  };
  const handleClickFifthYear = () => {
    navigate('/fifth');
  };

  return (
    <ButtonGroup
      disableElevation
      variant='contained'
      color='primary'
      style={{ marginTop: '10px' }}
    >
      <Button onClick={handleClickCurrentYear}>{currentYear()}</Button>
      <Button onClick={handleClickSecondYear}>{currentYear() + 1}</Button>
      <Button onClick={handleClickThirdYear}>{currentYear() + 2}</Button>
      <Button onClick={handleClickFourthYear}>{currentYear() + 3}</Button>
      <Button onClick={handleClickFifthYear}>{currentYear() + 4}</Button>
    </ButtonGroup>
  );
};

export default YearBar;
