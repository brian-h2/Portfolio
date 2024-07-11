import './App.css'
import Loader from './components/loader/loader';
import Home from './pages/home';
import { useEffect,useState } from 'react';

function App() {

  const [load,setLoad] = useState(false)

  useEffect(() => {
    setLoad(false)
    const timer = setTimeout(() => {
      setLoad(true)
    }, 2000);

    return () => clearTimeout(timer)
  }, []);
 
  return (
    
    <div className='app'>
      <p>{load ? <Home/> : <Loader/>}</p>
    </div>
  )
}

export default App

//Renovar design 
//Agregar Animaciones
//Corregir Errores


