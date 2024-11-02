import React, { useState } from 'react'
import './ProjectComponent.scss'
import { useDispatch, useSelector } from 'react-redux'

import ListProject from './ListProject'
import DetailProject from './DetailProject'
import { selectItem } from '../../toolkit/slider/projectSlice'


const ProjectComponent = () => {
    const dispatch = useDispatch();
    const listProject = useSelector((state) => state.projectSlice.project);
    const selectProject = useSelector((state) => state.projectSlice.selectItem);

    const onClickItem = (id) => {
        dispatch(selectItem(id));
    }

    const clickGetBack = () => {
        dispatch(selectItem(null));
    }
    return (
        <div id='project'>
            <div className="container">
                <h2 className='title'>Projects</h2>
                {
                    !selectProject ?
                        <ListProject listProject={listProject} onClickItem={onClickItem} />
                        :
                        <DetailProject item={selectProject} clickGetBack={clickGetBack} />
                }
            </div>
        </div>
    )
}

export default ProjectComponent;