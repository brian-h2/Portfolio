import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header'
import { Proyects } from './components/proyects/proyects'
import Skills from './components/skills/skills';
import { Summary } from './components/summary/summary'


function App() {
 
  return (
    <div className='app'>
      <Header />
      <Summary />
      <Proyects />
      <Skills/>
      <Routes>
        <Route path="/" component={Header} />
        <Route path="/Summary" component={<Summary/>} />
        <Route path="/proyects/proyects" component={<Proyects/>} />
        <Route path="/Skills" component={<Skills/>} />
      </Routes>
    </div>
  )
}

export default App
