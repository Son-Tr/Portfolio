import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    project: [
        {
            id: 1,
            name: "Corp Vision",
            content: "",
            skils: "React",
            img:
                [
                    "https://i.imgur.com/1Qt32KJ.png",
                    "https://i.imgur.com/Rsix1AW.png"
                ],
            linkGithub: "https://github.com/Son-Tr/corp-vision",
            linkWeb: "https://corp-vision-project-sontr.vercel.app/",

        },
        {
            id: 2,
            name: "Pomodoro App",
            content: "",
            skils: "",
            img:
                [
                    "https://i.imgur.com/H22WUrq.png",
                    "https://i.imgur.com/DTjqnHI.png"
                ],
            linkGithub: "https://github.com/Son-Tr/25-plus-5-clock",
            linkWeb: "https://pomodoro-timer-project-son-tr.vercel.app/",

        },
        {
            id: 3,
            name: "Calculator App",
            content: "",
            skils: "",
            img:
                [
                    "https://i.imgur.com/3KMXFDx.png",
                    "https://i.imgur.com/bWXlM13.png"
                ],
            linkGithub: "https://github.com/Son-Tr/calculator",
            linkWeb: "https://calculator-project-son-tr.vercel.app/",

        },
        {
            id: 4,
            name: "Random Quote",
            content: "",
            skils: "",
            img:
                [
                    "https://i.imgur.com/c6jCZlr.png",
                    "https://i.imgur.com/pkCEKi6.png"
                ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Random-Quote-Machine",
            linkWeb: "https://random-quote-machine-project-son-tr.vercel.app/",

        },
        {
            id: 5,
            name: "Mardown Previewer",
            content: "",
            skils: "",
            img:
                [
                    "https://i.imgur.com/tqTuopz.png",
                    "https://i.imgur.com/6C4NdpX.png"
                ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Markdown-Previewer",
            linkWeb: "https://markdown-previewer-project-son-tr.vercel.app/",

        },
        {
            id: 6,
            name: "Drum Machine App",
            content: "",
            skils: "",
            img:
                [
                    "https://i.imgur.com/0AysjY1.png",
                    "https://i.imgur.com/CD5k65u.png"
                ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Drum-Machine",
            linkWeb: "https://drum-machine-project-son-tr.vercel.app/",

        },
        {
            id: 7,
            name: "Meipaly Landing Page",
            content: "",
            skils: "HTML, CSS, responsive design, and appling libaries",
            img:
                [
                    "https://i.imgur.com/uNHzbic.png",
                    "https://i.imgur.com/jGE0bNL.png"
                ],
            linkGithub: "https://github.com/Son-Tr/Meipaly",
            linkWeb: "https://meipaly-project-son-tr.vercel.app/",

        },
        {
            id: 8,
            name: "FitClub Landing Page",
            content: "",
            skils: "HTML, CSS, and responsive design",
            img:
                [
                    "https://i.imgur.com/KpZ03hQ.png",
                    "https://i.imgur.com/Hy6vjt6.png"
                ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Product-Landing-Page",
            linkWeb: "https://fitclub-son-tr.vercel.app/",

        },
    ],
    selectItem: null
}

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