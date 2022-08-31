import { AiFillCloseSquare } from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'



export default function Lgpd(){
   const [showLgpd, setShowLgpd] = useState(true);
      
    function handleClose(){
        setShowLgpd(false)
    }
   

    return(<>
    
    <div
    style={{bottom: showLgpd ? 0 : -500}}
    className='fixed text-sm mx-auto sm:flex sm:justify-between items-center rounded  bg-sky-200 p-6 text-gray-700 shadow-lg mb-5 font-semibold transition-all ease-in-out duration-1000'>
        <p className='w-3/4'>Ao clicar em “Aceitar todos os cookies”, você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site.
        <Link href="/politicaDePrivacidade"><a className='underline' target="_blank"> Mais informações</a></Link>
       </p>
       <div className='flex items-center'>

        <button onClick={handleClose} className='bg-gray-700 text-white rounded-lg w-full px-5 py-3'>Aceitar cookies</button>
        <AiFillCloseSquare onClick={handleClose} className='ml-3 w-5 h-5 cursor-pointer' />
       </div>
    </div>
    
    
    
    
    
    
    </>)
}