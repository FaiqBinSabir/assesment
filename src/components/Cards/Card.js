import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: 'Emilia Pierce',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Brain Ellison',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Brain Ellison',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

function TestimonialCard({ testimonial, isMain }) {
  return (
    <div className={`max-w-xs mx-auto bg-white  shadow-lg rounded-lg p-6 text-center transition-transform duration-500 ${isMain ? '' : 'backdrop-blur-md opacity-60'}`}>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full p-1 mx-auto -mt-16 border-4 border-blue-300 shadow-md"
      />
      <p className="mt-8 text-gray-600 italic">"{testimonial.text}"</p>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{testimonial.name}</h3>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto relative px-4">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} isMain={index === 1} />
          ))}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2"></div>
      </div>
      <div className='flex justify-center'>
      <button className="rounded-full py-2 flex items-center justify-center opacity-50">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-4xl" />
            </button>
            <button className="rounded-full py-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-4xl" />
            </button>
      </div>
    </div>

  );
}

function Card() {
  return (
    <div className="App">
      <Testimonials />
    
    </div>
  );
}

export default Card;
