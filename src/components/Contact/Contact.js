import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center ">
        <div className="w-8/12 max-w-md p-6 bg-white rounded-lg shadow-md mt-10 px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <form>
            <div className="mb-4 flex justify-around gap-x-4">
              <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border-transparent shadow-md  rounded-md" />
              <input type="email" placeholder="example@domain.com" className="w-full px-3 py-2 border-white shadow-md rounded-md" />
            </div>
            <div className="mb-4  flex justify-around gap-x-4">
              <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border-white shadow-md rounded-md" />
           
              <input type="text" placeholder="Company Name" className="w-full px-3 py-2  border-white shadow-md rounded-md" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Type message here..." className="w-full px-3 py-2  border-white shadow-md rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" className=" absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-40 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 shadow-lg">Submit Now!</button>
          </form>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-6 w-full relative -mt-12 rounded-b-lg">
        <div className="container mx-auto px-4 pt-20 text-center">
        
          <div className="mb-4">
            <a href="/" className="text-2xl font-bold  text-white">RUBICON CONSULTING</a>
          </div>
          <hr className='border-y border-white mx-36' />
          <ul className="flex flex-col md:flex-row justify-center p-2 mb-2">
            <li className="mx-2">
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="mx-2">
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li className="mx-2">
              <a href="/services" className="hover:underline">Our Services</a>
            </li>
            <li className="mx-2">
              <a href="/blogs" className="hover:underline">Blogs</a>
            </li>
            <li className="mx-2">
              <a href="/contact" className="hover:underline">Contact Us</a>
            </li>
          </ul>
          <hr className='border-y border-white mx-36 mb-4' />
          <hr className='border-y border-white mt-12' />
          <div className="text-sm mt-4">&copy; 2022 Rubicon Consulting. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
