import React from 'react';
import Login from '../components/Form';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className='sm:bg-header sm:bg-cover sm:h-[600px]'>
      <div className='w-full m-1 my-[30%] sm:my-0 sm:grid sm:grid-cols-2'>
        <h2 className='w-full sm:w-[50%] mx-auto sm:py-[8%] text-blue-900 text-xl sm:text-3xl lg:text-5xl sm:font-bold'>RESPONSIVE FILTERABLE DRAG AND DROP IMAGE GALLERY</h2>
        <div className='items-center sm:py-[10%]'>
          <Login />
        </div>
      </div>
      <div className='hidden sm:flex mx-[12%]'>
        <Link to='' className='bg-white border-2 border-blue-800 p-2 m-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white'>All</Link>
        <Link to='' className='bg-white border-2 border-blue-800 p-2 m-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white'>Bag</Link>
        <Link to='' className='bg-white border-2 border-blue-800 p-2 m-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white'>Camera</Link>
        <Link to='' className='bg-white border-2 border-blue-800 p-2 m-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white'>Headphone</Link>
        <Link to='' className='bg-white border-2 border-blue-800 p-2 m-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white'>Shoe</Link>
        <Link to='' className='bg-white border-2 border-blue-800 p-2 m-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white'>Animals</Link>
      </div>
    </div>
     
  )
}


export default Home