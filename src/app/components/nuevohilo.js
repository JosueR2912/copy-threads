"use client"; 

import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import Setter from "./articulos";
import { useQuery } from './usequery';

export default function Nuevohilo({imageUrl, description, nameAccount, imgAccount, linkFeed}) {
  let [isOpen, setIsOpen] = useState(false)
  let [escribio, setEscribio] = useState(true);
  let [inputValue, setInputValue] = useState('');
  let { setQuery } = useQuery();

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

function handleChange(e){
    console.log(e)
    if(e.target.value != ""){
       setEscribio(false)
       setInputValue(e.target.value);
    }else{
        setEscribio(true)
    }
    
}
function handleSubmit(e) {
  e.preventDefault();
  if (inputValue) {
    setQuery(inputValue);
    setInputValue(''); 
    close();
  }
}

  return (
    <>
    <input  onClick={open} className ="text-gray-300 focus:outline-none focus:text-black w-[75%]" type="text" placeholder="Inicia un hilo" />

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
          <div className="flex min-h-full justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-screen-sm rounded-xl  p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className='flex justify-between my-5 w-[95%] mx-auto'>
                <div></div>
                <p className='text-white font-bold'>
                  Nuevo Hilo
                </p>
                <div className="rounded-full box-border w-6 text-xs text-center font-bold border-white border-2 cursor-pointer" onClick={close}>...</div>
              </div>
           <div className='bg-white rounded-xl p-3'>
        <div className="rounded-md flex justify-center">
            <img className="rounded-md h-[50%] w-[90%]" src={imageUrl} alt="" />
        </div>
        <div className='text-gray-400 text-sm my-3 flex space-x-1'>
          <div>
          <img className = "rounded-full h-8 mr-1" src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg" alt="" />
          </div>
          <div className='w-[80%]'>
          <p className='text-sm text-slate-950'>Pablo Perez</p> 
          <input id='hilonue' onChange={handleChange} className='w-[90%] p-1 rounded-md outline-none font-light text-black' type="text" placeholder='Inicia un hilo'/>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-paperclip"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>
          </div>
        </div>
        <div className='text-black flex w-[90%] mx-auto'>
            <p className='w-[80%] p-1 rounded-md outline-gray-300 font-light text-gray-300'>Los perfiles que sigues pueden responder</p>
            <button onClick={handleSubmit}  disabled ={escribio} className='disabled:text-gray-300 disabled:border-gray-300 rounded-md border-[.5px] p-1 w-[80px] font-bold text-black text-sm border-black border-solid'>Publicar</button>
        </div>
           </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}


