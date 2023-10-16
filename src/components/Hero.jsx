import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/" 
      className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
       <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
           <h1 className='font-bold text-4xl'>Choose Your special Trip</h1>
           <h2 className='text-4xl py-4 text-slate-900 italic'><span className='text-white not-italic'>With</span> Mytravel</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut deleniti cupiditate quisquam perspiciatis. Accusantium ipsam sunt corporis ad illum non repudiandae, quaerat quo nam porro commodi rem eos. Mollitia?</p>
       </div>
      </div>
    </div>
  );
};

export default Hero
