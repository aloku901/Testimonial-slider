import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';



const Testimonials = (props) => {
    let abc = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0 ) {
            setIndex(abc.length - 1);
        } else {
            setIndex(index -1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= abc.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * abc.length);
        setIndex(randomIndex);
    }




  return (
    <div className='w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl' >
      <Card review={abc[index]}></Card>

      <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold justify-center '>
        <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}> <FiChevronLeft/> </button>
        <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}> <FiChevronRight/> </button>
      </div>
      <div>
      <button className='bg-violet-400 hover:bg-violet-500 transition-all duraion-200
       cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5' onClick={surpriseHandler}>Surprise Me</button>
      </div>
    </div>
  );
}

export default Testimonials
