import React from 'react'

function Calculate() {
  return (
    <div >
        
    <div className='w-full bg-cyan-900 flex justify-around  pt-12   h-auto  '>
      <div className='flex-col space-y-12   ' >
        <h1 className='text-6xl font-bold mb-4   text-white '>
            Calcualte Now!
        </h1>
        <div className="flex space-x-2 mb-4">
        <input
           type="number"
         
          placeholder="Enter your value"
          className="p-2 w-3/4 rounded-md text-black"
        />
        <input
          type="number"
          placeholder="Enter your value"
          className="p-2 w-3/4 rounded-md text-black"
        />
      </div>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Calculate
   </button>
   

      </div>
      <div className='h-80 w-80 bg-blue-900 rounded-full mb-4 p-2 text-white '>

    <div className='border w-full h-full rounded-full flex items-center justify-center'>

    
     00000
    </div>
   </div>

    </div>


 <div className='bg-white flex justify-center font-bold  items-center h-40 text-5xl text-black' >
    <h1>

    Client Testimonals
    </h1>
 </div>
     </div>
  )
}

export default Calculate
