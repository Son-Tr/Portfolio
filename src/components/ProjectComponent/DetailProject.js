import React from 'react'

const DetailProject = ({ item, clickGetBack }) => {

    return (
        <div>
            <h1>{item.name}</h1>
            <button className='button' onClick={clickGetBack}>back to project</button>
        </div>
    )
}

export default DetailProject