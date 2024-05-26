import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="mt-20 flex flex-col lg:flex-row justify-between items-center container  px-4">
      <div className="lg:flex-1 lg:mr-8 ml-16">
        <div className="text-center lg:text-left lg:max-w-lg lg:ml-20">
          <h1 className="text-7xl font-bold text-gray-900">Create Your</h1>
          <h1 className="text-7xl font-bold text-gray-900">Success</h1>
          <h2 className="text-7xl font-bold text-blue-500">Business</h2>
          <p className="mt-4 text-gray-600 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <div className="mt-6">
            <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium mr-4">Get Started</a>
            <a href="#" className="text-blue-600 border border-blue-600 hover:bg-blue-100 px-6 py-3 rounded-md text-lg font-medium">Learn More</a>
          </div>
          <div className="flex mt-5">
            <button className="rounded-full py-2 flex items-center justify-center opacity-50">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-4xl" />
            </button>
            <button className="rounded-full py-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8 flex-1 w-full lg:w-auto lg:max-w-none">
        <img
          className="rounded-3xl shadow-lg w-full lg:w-full"
          src="https://images.pexels.com/photos/6893922/pexels-photo-6893922.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Team working"
        />
      </div>
      
    </section>
  );
};

export default Hero;
