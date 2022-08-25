import React from 'react'
import './App.css'
import ClocksVisions from './world-clock-wrapper/clocks-vision/ClocksVisions'
import InputTime from './world-clock-wrapper/input-time/InputTime'
import WorldCLockWrapper from './world-clock-wrapper/WorldCLockWrapper'

export default function App() {
  return (
    <div className="container">
      <WorldCLockWrapper />
    </div>
  )
}
