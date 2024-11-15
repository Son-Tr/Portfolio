import React from 'react'
import './Skills.scss'
import { listSkill } from '../../assets/data/data';

const Skills = () => {
    return (
        <div id='skills' className='bg'>
            <div className="container">
                <h1 className="title">Skills</h1>
                <div className="list-icon">
                    {listSkill.map((icon, index) => {
                        return (<div className="box-icon" key={index}>
                            <img className='img-icon' src={icon.img} alt={icon.skill} />
                            <p className='name-icon'>{icon.skill}</p>
                        </div>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default Skills;