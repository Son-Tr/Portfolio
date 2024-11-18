import { createSlice } from '@reduxjs/toolkit'
import { project } from '../../assets/data/data';

const initialState = {
    project,
    selectItem: null
};


const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        selectItem: (state, action) => {
            state.selectItem = state.project.find((item) => item.id === action.payload)
        }
    }
});

export const { selectItem } = projectSlice.actions

export default projectSlice.reducer