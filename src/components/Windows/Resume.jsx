import React from 'react'
import MacWindows from './MacWindows'
import './Resume.scss'

const Resume = () => {
  return (
    <MacWindows>
      <div className="resume-window">
        <iframe src="/Resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWindows>
  )
}

export default Resume
