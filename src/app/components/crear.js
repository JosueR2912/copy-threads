import Image from 'next/image'
import Nuevohilo from './nuevohilo';

export default function Crear(){
    return(
        <>
        <div className = "flex justify-between p-2 h-15 w-[40%] border-b-[2px] border-solid border-gray-300">
        <img className = "rounded-full h-8 mr-1" src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg" alt="" />
        <Nuevohilo/>
        <button className="text-gray-300 border-[.5px] p-2 text-sm rounded-md hover:text-black">Publicar</button>
        </div>
        </>
    );
}