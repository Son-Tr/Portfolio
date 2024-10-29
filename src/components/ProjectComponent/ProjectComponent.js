import React, { useState } from 'react'
import './ProjectComponent.scss'
import { useDispatch, useSelector } from 'react-redux'
import { random1 } from '../../assets/img/linkImg'


const ProjectComponent = () => {
    const dispatch = useDispatch();
    const listProject = useSelector((state) => state.projectSlice.project);
    const item = useSelector((state) => state.projectSlice.selectItem);

    const [selectItem, setSelectItem] = useState(item)
    return (
        <div>
            {
                !selectItem ?

                    listProject.map((item) => (
                        <div key={item.id}>
                            <h1>
                                {item.content}
                            </h1>
                            <img src={item.img[0]} alt="" />
                        </div>
                    ))
                    :
                    <div></div>
            }
        </div>
    )
}

export default ProjectComponent;