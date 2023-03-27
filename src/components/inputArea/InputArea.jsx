import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const InputArea = () => {
  const [goal, setGoal] = useState('');
  const [why, setWhy] = useState('');
  const [action, setAction] = useState('');

  const [goalList, setGoalList] = useState('');
  const [whyList, setWhyList] = useState([]);
  const [actionList, setActionList] = useState([]);

  const handleChangeGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleChangeWhy = (e) => {
    setWhy(e.target.value);
  };
  const handleChangeAction = (e) => {
    setAction(e.target.value);
  };
  const handleClick = () => {
    if (goal.length > 0) {
      setGoalList((currentValue) => {
        return currentValue;
      });
      setGoal('');
    }

    if (why.length > 0) {
      setWhyList((currentValue) => {
        return [...currentValue, why];
      });
      setWhy('');
    }

    if (action.length > 0) {
      setActionList((currentValue) => {
        return [...currentValue, action];
      });
      setAction('');
    }
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }} style={{ width: '100%' }}>
        <CardContent style={{ paddingTop: '0', paddingBottom: '8px' }}>
          <form>
            <div>
              <h4 style={{ marginTop: '6px', marginBottom: '3px' }}>
                Add your goal details
              </h4>
              <label>Goal: </label>
              <input
                onChange={handleChangeGoal}
                type='text'
                placeholder='Write your goal'
              />
              <br />
              <label>Your "Whys": </label>
              <input
                onChange={handleChangeWhy}
                type='text'
                placeholder='Write your "why"'
              />
              <button>+</button>
              <br />
              <label>Action Plans: </label>
              <input
                onChange={handleChangeAction}
                type='text'
                placeholder='Write required action'
              />
              <button>+</button>
              <br />
              <button onClick={handleClick}>Submit</button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default InputArea;
