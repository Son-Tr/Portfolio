import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    project: [
        {
            id: 1,
            name: "Corp Vision",
            content: "Corp Vision is a fully responsive and modern corporate website designed to showcase company information, services, and client testimonials. The project focuses on clean design, smooth navigation, and a user-friendly interface. It leverages React for efficient rendering and dynamic content updates, making it both visually appealing and highly functional. Interactive elements, such as image carousels and call-to-action buttons, enhance the user experience.",
            skills: "React, CSS, Responsive Design",
            img: [
                "https://i.imgur.com/1Qt32KJ.png",
                "https://i.imgur.com/Rsix1AW.png"
            ],
            linkGithub: "https://github.com/Son-Tr/corp-vision",
            linkWeb: "https://corp-vision-project-sontr.vercel.app/"
        },
        {
            id: 2,
            name: "Pomodoro App",
            content: "The Pomodoro App is a productivity tool that uses the Pomodoro Technique to help users manage their time efficiently. Users can customize the session and break durations, start or reset the timer, and stay focused with auditory notifications. Built using React, the app offers a clean and minimalist design that keeps distractions to a minimum, encouraging productivity. The application efficiently manages state changes and updates in real-time, providing a smooth and engaging experience.",
            skills: "JavaScript, React, Timer Functionality",
            img: [
                "https://i.imgur.com/H22WUrq.png",
                "https://i.imgur.com/DTjqnHI.png"
            ],
            linkGithub: "https://github.com/Son-Tr/25-plus-5-clock",
            linkWeb: "https://pomodoro-timer-project-son-tr.vercel.app/"
        },
        {
            id: 3,
            name: "Calculator App",
            content: "This Calculator App is a simple yet powerful tool designed to perform basic arithmetic operations, including addition, subtraction, multiplication, and division. It features a responsive design that adapts to different screen sizes, ensuring accessibility for all users. The app is built with React and uses state management to handle user input, error checking (such as division by zero), and a clear button to reset calculations. The intuitive interface makes it easy to use for anyone.",
            skills: "React, JavaScript, State Management",
            img: [
                "https://i.imgur.com/3KMXFDx.png",
                "https://i.imgur.com/bWXlM13.png"
            ],
            linkGithub: "https://github.com/Son-Tr/calculator",
            linkWeb: "https://calculator-project-son-tr.vercel.app/"
        },
        {
            id: 4,
            name: "Random Quote",
            content: "The Random Quote Generator is a fun and inspirational app that fetches random quotes from a public API. Users can easily get a new quote at the click of a button and share their favorite quotes on Twitter. Built using React, the app focuses on clean design and fluid transitions. It uses CSS for styling and React hooks for managing component state and API calls. The app is a great way to practice working with third-party APIs and integrating them into your projects.",
            skills: "React, API Integration, CSS",
            img: [
                "https://i.imgur.com/c6jCZlr.png",
                "https://i.imgur.com/pkCEKi6.png"
            ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Random-Quote-Machine",
            linkWeb: "https://random-quote-machine-project-son-tr.vercel.app/"
        },
        {
            id: 5,
            name: "Markdown Previewer",
            content: "The Markdown Previewer is a real-time editor that lets users write and preview Markdown text simultaneously. It supports various Markdown syntax, including headers, lists, links, and code blocks. The app is built using React, with a focus on a clean and simple interface that encourages content creation. It is a useful tool for developers and writers who want to format their content easily. The project demonstrates handling user input and efficiently updating the preview area in real-time.",
            skills: "React, Markdown Parsing, CSS",
            img: [
                "https://i.imgur.com/tqTuopz.png",
                "https://i.imgur.com/6C4NdpX.png"
            ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Markdown-Previewer",
            linkWeb: "https://markdown-previewer-project-son-tr.vercel.app/"
        },
        {
            id: 6,
            name: "Drum Machine App",
            content: "The Drum Machine App is an interactive musical tool that allows users to play different drum sounds by clicking on buttons or pressing keys on their keyboard. Each button is mapped to a specific audio sample, making it easy to create beats. The app features a volume control slider, customizable sound effects, and a visually appealing layout. Developed with React, it showcases the use of JavaScript for handling keyboard events and managing audio playback.",
            skills: "React, JavaScript, Audio API",
            img: [
                "https://i.imgur.com/0AysjY1.png",
                "https://i.imgur.com/CD5k65u.png"
            ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Drum-Machine",
            linkWeb: "https://drum-machine-project-son-tr.vercel.app/"
        },
        {
            id: 7,
            name: "Meipaly Landing Page",
            content: "The Meipaly Landing Page is a beautiful, fully responsive landing page designed for a fictional company. It features modern animations, a carefully chosen color palette, and an easy-to-navigate layout. The page is optimized for performance and includes sections for services, portfolio, testimonials, and contact information. The project demonstrates the use of CSS libraries and advanced techniques to create a visually stunning website that works well on both desktop and mobile devices.",
            skills: "HTML, CSS, Responsive Design, Libraries",
            img: [
                "https://i.imgur.com/uNHzbic.png",
                "https://i.imgur.com/jGE0bNL.png"
            ],
            linkGithub: "https://github.com/Son-Tr/Meipaly",
            linkWeb: "https://meipaly-project-son-tr.vercel.app/"
        },
        {
            id: 8,
            name: "FitClub Landing Page",
            content: "The FitClub Landing Page is a sleek and engaging product landing page for a fitness club. It showcases the club's offerings with bold visuals, engaging call-to-action buttons, and a layout designed to drive conversions. The page is built with HTML and CSS, focusing on responsive design principles to ensure a seamless experience on all devices. It includes sections for membership plans, testimonials, and a contact form, making it a complete solution for promoting a fitness service online.",
            skills: "HTML, CSS, Responsive Design",
            img: [
                "https://i.imgur.com/KpZ03hQ.png",
                "https://i.imgur.com/Hy6vjt6.png"
            ],
            linkGithub: "https://github.com/Son-Tr/Build-a-Product-Landing-Page",
            linkWeb: "https://fitclub-son-tr.vercel.app/"
        }
    ],
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