import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import InputArea from '../../components/inputArea/InputArea';
import GoalDetails from '../../components/goalDetails/GoalDetails';
import YearBar from '../../components/yearBar/YearBar';

const Fifth = () => {
  const [goal, setGoal] = useState('');
  const [why, setWhy] = useState('');
  const [action, setAction] = useState('');

  const [goalForYear, setGoalForYear] = useState('');
  const [whyList, setWhyList] = useState([]);
  const [actionList, setActionList] = useState([]);

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
        <InputArea
          goal={goal}
          why={why}
          action={action}
          setGoal={setGoal}
          setWhy={setWhy}
          setAction={setAction}
          goalForYear={goalForYear}
          whyList={whyList}
          actionList={actionList}
          setGoalForYear={setGoalForYear}
          setWhyList={setWhyList}
          setActionList={setActionList}
        />
        <GoalDetails
          goal={goal}
          why={why}
          action={action}
          setGoal={setGoal}
          setWhy={setWhy}
          setAction={setAction}
          goalForYear={goalForYear}
          whyList={whyList}
          actionList={actionList}
          setGoalForYear={setGoalForYear}
          setWhyList={setWhyList}
          setActionList={setActionList}
        />
      </div>
    </Container>
  );
};

export default Fifth;
