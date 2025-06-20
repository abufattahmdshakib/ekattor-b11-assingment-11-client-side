import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className=' flex justify-center items-center'>
            <img className='w-[500px] h-[500px]' src="https://i.ibb.co/fVqCk5FK/error.jpg" alt="" />
            <div className="card-actions">
            <Link to="/" className=" text-2xl font-medium text-blue-900 border-2 rounded-xl py-1 px-6 bg-green-200 ">⬅ Go Back Home</Link>
          </div>
        </div>
    );
};

export default Error;