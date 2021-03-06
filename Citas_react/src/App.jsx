
import { useState,useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'


function App() {
  
  const [pacientes,setPacientes] =  useState([])
  const[paciente,setPaciente]= useState({})

  useEffect( () =>{
    const obtenerLS = () =>{
      const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? [] ;
      setPacientes(pacientes)
    } 

    obtenerLS() 

  },[] )
  
  useEffect( () =>{
      localStorage.setItem('pacientes',JSON.stringify(pacientes));

  },[pacientes]);
  


  const eliminarPaciente = id =>{
   const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
   setPacientes(pacientesActualizados) 
  } 

  return (
    <div className="container mx-auto px-5 mt-10">
     <Header/>
     <div className="mt-10 md:flex">
      <Form
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListaPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
     </div>
    </div>
  )
}

export default App
