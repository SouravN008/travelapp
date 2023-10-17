import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-800 p-4'>Gallary</h2>
      <div className='grid sm:grid-cols-7 gap-4'>
       <div className='sm:col-span-5 col-span-3 row-span-3'>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070' alt='/'/>
       </div>
       <div>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071' alt='/'/>
       </div>
       <div>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070' alt='/'/>
       </div>
       <div>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2039' alt='/'/>
       </div>
       <div>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1544551763-dbfcd20d8e6c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070' alt='/'/>
       </div>
       <div>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1622779536320-bb5f5b501a06?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2069' alt='/'/>
       </div>
       
       <div>
              <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070' alt='/'/>
       </div>
      </div>
    </div>
  )
}

export default Gallery
