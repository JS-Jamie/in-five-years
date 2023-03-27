import React from 'react';
import { Container } from '@material-ui/core';
import InputArea from '../../components/inputArea/InputArea';
import GoalDetails from '../../components/goalDetails/GoalDetails';
import YearBar from '../../components/yearBar/YearBar';

const Fifth = () => {
  return (
    <Container
      maxWidth='md'
      style={{
        backgroundColor: 'lightgreen',
        height: '90vh',
        marginTop: '5vh',
        marginBottom: '5vh',
        borderRadius: '20px',
        paddingTop: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <YearBar />
        <InputArea />
        <GoalDetails />
      </div>
    </Container>
  );
};

export default Fifth;
