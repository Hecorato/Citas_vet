import {useState,useEffect} from 'react';
import Error from './Error'

const Form = ({pacientes,setPacientes,paciente,setPaciente}) => {
    
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');

    const [error,setError] = useState(false)

    useEffect(() =>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente] )

    const handleSubmit = (e) => {
        e.preventDefault();

    const generarId =  () => {
        const random = Math.random().toString(32).substr(2);
        const fecha = Date.now().toString(36) 

        return random+fecha
    }     


        // Validacion de formilario

        if ([nombre,propietario,email,fecha,sintomas].includes('')){
            

            setError(true)
            return;
        } 
            setError(false)

            //objeto se  pacientes

            const objetoPaciente ={
                nombre,
                propietario,
                email,
                fecha,
                sintomas
                
            }
            
            if(paciente.id){
                objetoPaciente.id = paciente.id
                const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
                setPacientes(pacientesActualizados)
                setPaciente({})
            }else{
                //Nuevo Registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes,objetoPaciente])

            }   

            //Reiniciar el Form
            setNombre('')
            setEmail('')
            setFecha('')
            setPropietario('')
            setSintomas('')
            
            
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Paciente y {''}
                <span className="text-indigo-600 font-bold ">Adminsitralo</span> 
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
                
                    {error && <Error 
                        mensaje='Todos los campos son obligatorios'
                    
                    />}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">Nombre Mascota: </label>
                    <input
                    id="mascota"  
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " 
                    type="text"
                    placeholder="Nombre de la mascota"
                    value={nombre}
                    onChange={(e) => setNombre (e.target.value)}/>
                </div>  
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ">Nombre de Propietario: </label>
                    <input
                    id="propietario"  
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " 
                    type="text"
                    placeholder="Nombre de Propietario"
                    value={propietario}
                    onChange={(e) => setPropietario (e.target.value)}/>
                </div>  
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Correo electronico: </label>
                    <input
                    id="email"  
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " 
                    type="email"
                    placeholder="@Email"
                    value={email}
                    onChange={(e) => setEmail (e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold ">Alta: </label>
                    <input
                    id="Alta"  
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " 
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha (e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold ">Sintomas: </label>
                    <textarea
                        id="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas (e.target.value)}   
                    />

                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold mt-2 rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
                        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                    />
                </div>
            </form>
        </div>
    )
}
 
export default Form
