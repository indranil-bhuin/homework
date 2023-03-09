import React, { useState } from 'react'
import Engine from './Engine';
import Dashboard from './Dashboard';

function Car() {
  const [isEngineOn, setIsEngineOn] = useState(false);
  const toggleEngine = () => {
    setIsEngineOn(!isEngineOn);
  };

  return (
    <div>
      <h1>Car</h1>
      <Engine isEngineOn={isEngineOn} toggleEngine={toggleEngine} />
      <Dashboard isEngineOn={isEngineOn} />
    </div>
  )
}

export default Car
