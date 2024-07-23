import React from 'react'

function Header() {
  return (
    <>
    <div className='bg-[url(https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg)] flex justify-between p-2 bg-[#333] sticky top-0'> 
      <div className='w-auto ml-10  h-10 '>
        <h1 className='text-white text-lg h-full mt-1 '>solo with someone</h1>
      </div>
      <div className='-ml-20 w-auto'>

      </div>
      <span className='flex w-[45%]'>
              <div className=''>
                <p className=' ml-3 mt-1 font-medium text-white '>Home</p>
              </div>
              <div className='ml-16'>
                <p className='text-white mt-1'>About</p>
              </div>
              <div className='ml-16'>
                <p className='text-white  mt-1'>Term and Condition</p>
              </div>
              <div className='ml-16'>
                <p className='text-white mt-1'>Contact Us</p>
              </div>
              </span>
            </div>
    </>
  )
}

export default Header