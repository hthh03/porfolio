import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <nav className="navbar">
        <div className='desktopMenu'>
            <a href='#' className="desktopMenuListItem">Home</a>
            <a href='#skills' className="desktopMenuListItem">About Me</a>
            <a href='#education' className="desktopMenuListItem">Education</a>
        </div>
    </nav>
  )
}

export default navbar