import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import user from './Profile/user.json';
import data from './Statistics/data.json';

const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
