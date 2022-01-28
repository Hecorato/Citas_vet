

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
    
    const{nombre, propietario,email,fecha,sintomas,id}= paciente
    
    return (
        <div>
            
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
                <div className="flex justify-between">
                    <button className="py-2 px-6 bg-yellow-500  hover:bg-yellow-700 text-white font-bold uppercase rounded-lg inline-flex items-center"
                        onClick={() => setPaciente(paciente)}
                    >                        
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                      <span>Editar</span>
                      
                     </button>
                        
                     <button 
                     onClick={()=>eliminarPaciente(id)}
                     className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg inline-flex items-center">                        
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                      <span>Eliminar</span>
                     </button>
                        
                    
                  
                </div>
            </div>
            
        </div>
    )
}

export default Paciente
