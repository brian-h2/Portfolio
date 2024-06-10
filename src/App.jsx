import './App.css'

import { Header } from './components/header/header'
import { Proyects } from './components/proyects/proyects'
import Skills from './components/skills/skills';
import { Summary } from './components/summary/summary'


function App() {
 

  return (
    <div className="app">
     
        <Header/>
        <Summary/>
        <Proyects/>
        <Skills/>
      
     
      {/* <Contact/>  */}
     
    </div>
  )
}

export default App
