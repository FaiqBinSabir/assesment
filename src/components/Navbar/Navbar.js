import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto   mt-5  ">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full" src="https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="RUBICON Consulting Logo" />
            <div className='flex-col'>

            <di className="ml-2 text-gray-900 font-bold">RUBICON</di>
            <div className="ml-2 text-gray-900 font-bold">CONSULTING</div>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="#" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Our Services</a>
            <a href="#" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
            <a href="#" className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
