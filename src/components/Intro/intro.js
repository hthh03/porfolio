import React from 'react'
import './intro.css'
import bg from '../../assets/image.jpg'

const intro = () => {
  return (
        <div className='intro'>
        <img src={bg} alt="Profile" className="bg"/>
        <h1> Hello, I'm Hao Huynh</h1>
        <p> I am frontend developer based in Vietnam </p>
        </div>
  )
}

export default intro;