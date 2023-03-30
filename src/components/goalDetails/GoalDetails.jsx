import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const GoalDetails = ({
  goal,
  why,
  action,
  setGoal,
  setWhy,
  setAction,
  goalForYear,
  whyList,
  actionList,
  setGoalForYear,
  setWhyList,
  setActionList,
}) => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxWidth: '50%',
        }}
      >
        <Card
          style={{ width: '100%', maxHeight: '26.5vh', minHeight: '26.5vh' }}
        >
          <CardContent style={{ paddingTop: '0', paddingBottom: '10px' }}>
            <h4 style={{ marginTop: '6px', marginBottom: '3px' }}>
              My Goal for {currentYear()}
            </h4>
            <div>{goalForYear}</div>
            <button>edit</button> <button>delete</button>
          </CardContent>
        </Card>
        <Card
          style={{ width: '100%', maxHeight: '26.5vh', minHeight: '26.5vh' }}
        >
          <CardContent style={{ paddingTop: '0', paddingBottom: '0' }}>
            <h4 style={{ marginTop: '6px', marginBottom: '3px' }}>
              I need to acheive this goal becuase
            </h4>
            <ul>
              <div>
                {whyList.map((item, index) => {
                  return (
                    <div key={index}>
                      <li>{item}</li>
                    </div>
                  );
                })}
              </div>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card
          style={{ madWidth: '50%', maxHeight: '54.1vh', minHeight: '54.1vh' }}
        >
          <CardContent style={{ paddingTop: '0', paddingBottom: '0' }}>
            <h4>Action Plans - todo list style</h4>
            <ul>
              <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoalDetails;
