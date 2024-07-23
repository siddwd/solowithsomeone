import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-[url(https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg)] flex bg-bottom '>
      <div className='ml-32 mt-20'>
        <div className='text-white text-lg'>About</div>
        <div className='mt-10 text-white'>Contact Us</div>
        <div className='text-white'>About Us</div>
        <div className='text-white'>Privat Policy</div>
      </div>
      <div className='ml-40 mt-20 '>
        <div className=''>
          <h1 className='text-lg text-white'>social media</h1>
          <div className='flex'>
          <img className='size-6 mt-10 -' src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt=""/>
          <img className='size-6 mt-10 ml-3' src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v2.png" alt=""/>
          <img className='size-6 mt-10 ml-3' src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png" alt="" />
          </div>
         </div>
      </div>
      <div className='ml-40 mt-20'> 
        <h1 className='text-lg text-white'>Email</h1>
      </div>
      <div className='ml-40 mt-20'>
        <div className='text-white text-lg'>Navigation</div>
        <div className='text-white mt-11'>
          <div>Home</div>
          <div>About</div>
          <div>Term and Condition</div>
          <div>Contact Us</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer