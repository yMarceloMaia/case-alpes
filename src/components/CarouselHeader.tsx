'use client';

import { Carousel } from 'flowbite-react';

import bmw from '/veiculos/serie1.png'

function CarouselHeader() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className='w-48' src={bmw} alt="" />
          <img className='w-48' src={bmw} alt="" />
          <img className='w-48' src={bmw} alt="" />
          <img className='w-48' src={bmw} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={bmw} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={bmw} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
 export default CarouselHeader