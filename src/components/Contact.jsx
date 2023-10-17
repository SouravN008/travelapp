import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
       <h2 className='text-center text-gray-800'>Connect with us</h2>
      <p className='text-center text-gray-800 py-3'>No reason to stay is a good reason to Go!</p>
      <div className='grid md:grid-cols-2'>
       <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" alt="/" 
       className='w-full md:h-full object-cover p2 max-h-[500px] h-[200px]' />
       <form>
              <div className='grid grid-cols-2'>
                     <input className='border m-2 p-2' type="text" placeholder='First' />
                     <input className='border m-2 p-2' type="text" placeholder='Last' />
                     <input className='border m-2 p-2' type="email" placeholder='Gmail' />
                     <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                     <input className='border-col-span-2 p-2 m-2' type="text" placeholder='Address' />
                     <textarea className='border col-span-2 p-2 m-2' cols="30" rows="10"></textarea>
                     <button className='col-span-2 m-2'>Submit</button>
              </div>
       </form>
      </div>
    </div>
  )
}

export default Contact
