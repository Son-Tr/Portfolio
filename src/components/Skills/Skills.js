import React from 'react'
import './Skills.scss'
import { listSkill } from '../../assets/data/data';
// import { logo } from '../../assets/img/linkImg';


const Skills = () => {
    return (
        <div id='skills' className='bg'>
            <div className="container">
                <h1 className="title">Skills</h1>
                <div className="list-icon">
                    {listSkill.map((icon, index) => {
                        return (<div className="box-icon" key={index}>
                            <span className='skill-icon'>{icon.icon}</span>
                            <p className='name-icon'>{icon.skill}</p>
                        </div>)
                    })}
                </div>
                {/* <img className='logo' src={logo} alt="logo" /> */}
            </div>
        </div>
    )
}

export default Skills;