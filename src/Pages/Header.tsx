import React from 'react'

function Header() {
  return (
    <>
    <div className='flex justify-between p-2 bg-[#333] sticky top-0'>
      <div className='w-36 ml-10'>
        <h1 className='text-white text-base'>solo with someone</h1>
      </div>
      <div className='-ml-20 w-auto'>
      <button className=' border border-solid border-gray-500 bg-gray-500 w-24 rounded-md'>Login</button>
      <button className=' border border-solid border-sky-500 bg-sky-500 w-24 rounded-md ml-6'>Sing Up</button>
      </div>
      <span className='flex w-[45%]'>
              <div className=''>
                <p className=' ml-3 font-medium text-white '>Home</p>
              </div>
              <div className='ml-16'>
                <p className='text-white '>About</p>
              </div>
              <div className='ml-16'>
                <p className='text-white'>Term and Condidion</p>
              </div>
              <div className='ml-16'>
                <p className='text-white'>Contact Us</p>
              </div>
              </span>
            </div>
    </>
  )
}

export default Header