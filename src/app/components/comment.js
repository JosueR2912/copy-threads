"use client"; 

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function Comment({imageUrl, description, nameAccount, imgAccount, linkFeed}) {
  let [isOpen, setIsOpen] = useState(false)
  let [escribio, setEscribio] = useState(true);

  function handleChange(e){
    console.log(e)
    if(e.target.value != ""){
       setEscribio(false)
    }else{
        setEscribio(true)
    }
    
}

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="text-black bg-transparent"
      >
        <svg className=' hover:fill-slate-300' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" /></svg>
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-screen-sm rounded-xl  p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className='flex justify-between my-5 w-[95%] mx-auto'>
                <div></div>
                <p className='text-white font-bold'>
                  Respuesta
                </p>
                <div className="rounded-full box-border w-6 text-xs text-center font-bold border-white border-2 cursor-pointer" onClick={close}>...</div>
              </div>
           <div className='bg-white relative rounded-xl p-3'>
           <div id="headerPost" className = "flex p-3 justify-between">
            <div  className="flex ml-[-2%]">
            <img className = "h-8 rounded-full" src={imgAccount} alt="" />
            <div className = "mx-2">
                <h4 className = "text-black text-sm font-bold">{nameAccount}</h4>
                <p className="text-black font-light text-sm">{description}</p>
                <a href="#" className="text-sky-400 text-sm">{linkFeed}</a>
            </div>
            </div> 
        </div>
        <div className="rounded-md flex justify-center">
            <img className="rounded-md h-[50%] w-[90%]" src={imageUrl} alt="" />
        </div>
        <div className='text-gray-400 text-sm my-3 flex space-x-1'>
          <div>
          <img className = "rounded-full h-8 mr-1" src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg" alt="" />
          </div>
          <div className='w-[80%]'>
          <p className='text-sm text-slate-950'>Pablo Perez</p>
          <input onChange={handleChange} className='w-[100%] text-black outline-none' type="text" placeholder={"Responde a " +nameAccount+"..."} />
          <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-paperclip"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>
          </div>
        </div>
        <div className='text-black flex w-[90%] mx-auto'>
            <p className='w-[80%] text-gray-300 p-1 rounded-md outline-gray-300 font-light'>Cualquiera puede responder</p>
            <button disabled ={escribio} className='rounded-md border-[.5px] p-1 w-[80px] font-bold text-sm border-gray-300 border-solid disabled:text-gray-300 active:text-black'>Publicar</button>
        </div>
           </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}