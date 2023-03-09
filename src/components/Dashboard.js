import React from 'react'

function Dashboard({isEngineOn}) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Engine status: {isEngineOn ? 'On' : 'Off'}</p>
    </div>
  )
}

export default Dashboard
