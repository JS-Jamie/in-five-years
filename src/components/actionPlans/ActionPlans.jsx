import React, { useState } from 'react';

const ActionPlans = () => {
  const [actionList, setActionList] = useState([]);

  return (
    <div>
      <h3>Action Plans</h3>
      <div>
        <ul>
          {actionList.map((action, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                <li>
                  {action}
                  <button>edit</button>
                  <button>delete</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActionPlans;
