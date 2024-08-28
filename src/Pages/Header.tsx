import React from 'react'

function Header() {
  return (
   <>
   <div className='border border-solid border-gray-300 h-auto '>
    <img className='h-[36rem] w-full' src="https://res.cloudinary.com/dm0w1fadv/image/upload/v1724767192/img/header/oif0ugmedg7lnwwcrdgd.png" alt="" />
    <div className='border border-solid border-gray-300 -mt-[36rem] flex justify-between'>
      <div className=' text-white px-4 py-2 cursor-pointer'>
      {/* <img className='px-8 border border-solid border-gray-300' src="https://img.icons8.com/emoji/48/couple-with-heart-woman-man.png" alt="couple-with-heart-woman-man"/> */}
      <h1 className='text-5xl italic'>s<b className='text-red-300 font-thin line-through'>o</b>l<b className='text-blue-300 font-thin line-through'>o</b>with</h1>
      <h2 className='text-lg -mt-2 px-[7rem] text-green-300'>someone</h2>
      </div>
      <ul className='flex'>
                <li className='p-4'>
                    <span className='px-4 text-white cursor-pointer hover:text-gray-300 underline'>HOME</span>
                </li>
                <li className='p-4 '>
                    <span className='px-4 text-white cursor-pointer hover:text-gray-300 underline'>ABOUT</span>
                </li>
                <li className='p-4'>
                    <span className='px-4 text-white cursor-pointer hover:text-gray-300 underline'>CONTACT</span>
                </li>
                <li className='p-4'>
                    <span className='px-4 text-white cursor-pointer hover:text-gray-300 underline'>TERM AND CONDITIOn</span>
                </li>
            </ul>
    </div>
    <div className='border border-solid border-gray-300 py-48 '>
      <h1 className='text-center text-5xl text-white font-extralight tracking-tight'>WELCOME</h1>
      <p className='text-center tracking-widest text-white'>THE WORLD IS WAITING FOR YOU</p>
    </div>
    </div>
   </>
  )
}

export default Header