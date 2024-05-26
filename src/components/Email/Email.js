import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
function Email() {
  return (
    <div className='flex justify-around  w-full h-auto p-8 items-center bg-blue-950'>
        <div>

        <h1 className='text-6xl text-white'>
            Suscribe Our 
        </h1>
        <h1 className='text-6xl text-white'>
        Newsletter
        </h1>
        </div>

        <form action="" className='flex' >
            <input
          type="email"
          id="email"
          name="email"
          
          className="appearance-none border  border-gray-300 w-full py-2 px-4 bg-white rounded-md text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Enter  email address"
          />

         <button className=' bg-blue-500 text-white flex absolute ml-44   p-2  mt-1'><FontAwesomeIcon icon={faPaperPlane} /></button>
       
            
        
        </form>
        <div>

        </div>
    </div>
  )
}

export default Email
