import React from 'react';
import Header from './Header';
import Education  from './Education';
import Experience from './Experience';

  const Overview = () => { // This function is the overview render of the web app
  return (
    <div>
      <Header /> 
      <Education />
      <Experience />
    </div>
  );
};

export default Overview;