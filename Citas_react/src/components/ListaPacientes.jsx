import React from 'react'
import Paciente from './Paciente'

const ListaPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
    console.log(pacientes.length)
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
            <>
            <h1 className="font-black text-3xl text-center">Lista de Pacientes</h1>
            <p className="text-xl mt-5 mb-10 text-center " >
                Administra tus {''}
                <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>

            {pacientes.map( (paciente) => 

                 
                <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente} 
                />
                          
        )}</>
         ) : (
             <>
             
             <h1 className="font-black text-3xl text-center">No hay pacientes</h1>
            <p className="text-xl mt-5 mb-10 text-center " >
                Comienza Agregando pasientes {''}
                <span className="text-indigo-600 font-bold ">y apareceran en este lugar </span>
            </p>
             
             </>
         )}

            

          
        </div>
    )
}

export default ListaPacientes
