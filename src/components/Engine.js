import React from 'react'

function Engine({isEngineOn, toggleEngine}) {
  return (
    <div>
      <h2>Engine</h2>
      <button onClick={toggleEngine}>
        {isEngineOn ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default Engine
