import './App.css'
import Home from './pages/home';
import { useEffect,useState } from 'react';

function App() {

  const [load,setLoad] = useState(false)
  const [time,setTime] = useState(false)

  useEffect(() => {
    setLoad(false)
    const timer = setTimeout(() => {
      setLoad(true)
    }, 1500);

    return () => clearTimeout(timer)
  }, []);
 
  return (
    
    <div className='app'>
      <p>{load ? <Home/> : 'Cargando...'}</p>
    </div>
  )
}

export default App

//Personalizar cargando
//Renovar design 
//Agregar Animaciones
//Corregir Errores


