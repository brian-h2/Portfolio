import React from 'react'
import { Summary } from '../components/summary/summary';
import { Header } from '../components/header/header';
import { Proyects } from '../components/proyects/proyects';
import Skills from '../components/skills/skills';


const Home = () => {

  return (
    <>
        <Header/>
       <section id="summary">
            <Summary />
        </section>
        <section id="projects">
            <Proyects />
        </section>
        <section id="skills">
            <Skills />
        </section>
    </>
  )
}

export default Home