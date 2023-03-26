import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const InputArea = () => {
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
              <input type='text' placeholder='Write your goal' />
              <br />
              <label>Your "Whys": </label>
              <input type='text' placeholder='Write your "why"' />
              <button>+</button>
              <br />
              <label>Action Plans: </label>
              <input type='text' placeholder='Write required action' />
              <button>+</button>
              <br />
              <button>Submit</button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default InputArea;
