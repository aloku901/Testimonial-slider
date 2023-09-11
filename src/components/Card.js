import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative '>
      
        <img src={review.image} alt='Photo' className='rounded-full w-[140px] h-[140px] z-[20] absolute top-[-90px]'/>
        <div className='w-[140px] h-[140px] rounded-full bg-violet-500 top-[-96px] left-[10px]  absolute'></div>
      
      <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>
      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
      

    </div>
  );
}

export default Card
