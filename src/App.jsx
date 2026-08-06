import { useState } from 'react'
import "./App.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/Windows/MacWindows'

function App() {

  return (
    <main>
      <Nav />
      <Dock />
      <MacWindows />
    </main>
  )
}

export default App
