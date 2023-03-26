import React from 'react';
import { Container } from '@material-ui/core';
import InputArea from '../../components/inputArea/InputArea';
import GoalDetails from '../../components/goalDetails/GoalDetails';
import YearBar from '../../components/yearBar/YearBar';

const Second = () => {
  return (
    <Container
      maxWidth='sm'
      style={{
        backgroundColor: 'lightgreen',
        height: '90vh',
        marginTop: '5vh',
        marginBottom: '5vh',
        borderRadius: '20px',
      }}
    >
      <div>
        <YearBar />
        <InputArea />
        <GoalDetails />
      </div>
    </Container>
  );
};

export default Second;
