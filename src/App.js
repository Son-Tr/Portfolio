import './styles/main.scss'
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';

import ProjectComponent from './components/ProjectComponent/ProjectComponent';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <>
      <Header />
      <Banner />
      <ProjectComponent />
      <Skills />
      <About />
      <Contact />

    </>
  );
}

export default App;
