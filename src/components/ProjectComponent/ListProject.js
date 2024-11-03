import React from 'react'

const ListProject = ({ listProject, onClickItem }) => {
    return (
        <div className='list-project'>
            {listProject.map((item) => (
                <div className='project-card' key={item.id}>
                    <img className='img-project'
                        onClick={() => onClickItem(item.id)}
                        src={item.img[0]} alt={item.name} />
                    <h3 className='name-project'>
                        {item.name}
                    </h3>

                    <p className="skills">
                        <span>Skills:</span> {item.skills}
                    </p>
                    <div className="wrap-btn">
                        <a className='button' href={item.linkWeb} target='_blank'>
                            Demo
                        </a>
                        <button className='button'
                            onClick={() => onClickItem(item.id)}>
                            Read more
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListProject