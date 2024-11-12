import React from 'react'
import './skills.css';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I Do </span>
        <span className='skillDesc'>
            Hello, My name is Hoang Hao. I am a senior student studying in Da Nang.
            I am eager to learn, responsible, sociable and adaptable. 
            I would like to try my hand at a software engineer to gain
            practical experience and contribute to innovative projects while
            continuing to improve my skills and knowledge to become a
            professional software engineer.</span>
        <div className='skillBars'>
            <div className='skillBar'>
            <img src={html} alt="html" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>HTML</h2>
            </div>
        </div>
        </div>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={css} alt="css" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>CSS</h2>
            </div>
        </div>
        </div>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={react} alt="react" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>ReactJS</h2>
            </div>
        </div>
        </div>
    </section>
  )
}

export default skills