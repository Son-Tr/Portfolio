import React from 'react'

const ListProject = ({ listProject, onClickItem }) => {
    return (
        <div>
            {listProject.map((item) => (
                <div key={item.id} onClick={() => onClickItem(item.id)}>
                    <h1>
                        {item.content}
                    </h1>
                    <img src={item.img[0]} alt="" />
                </div>
            ))}
        </div>
    )
}

export default ListProject