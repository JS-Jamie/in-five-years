import { Container } from '@material-ui/core';
import React from 'react';
import InputArea from '../../components/inputArea/InputArea';
import TodoList from '../../components/todoList/TodoList';
import YearBar from '../../components/yearBar/YearBar';

const First = () => {
  return (
    <Container
      maxWidth='sm'
      style={{
        backgroundColor: 'lightgreen',
        marginTop: '60px',
        borderRadius: '20px',
      }}
    >
      <div>
        <YearBar />
        <InputArea />
        <TodoList />
      </div>
    </Container>
  );
};

export default First;
