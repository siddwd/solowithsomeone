import React from 'react'

function Goa() {
  return (
    <>
     <div className='h-80 bg-white flex flex-wrap mt-10'>
    <div className='p-5'>
            <p className='text-xl font-bold'>Best places of goa for visit</p>
         </div>
        
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-auto w-[24%]'>
            <img className='h-48 w-full' src={item.img} alt="" />
            <p className='text-balance font-semibold text-red-500'>{item.username}</p>
         </div>
          ))}
         </div>
         </div>
    </>
  )
}

export const data = [
    {
        img:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/01073025/GOA1-1.png",
        username:" Anjuna Beach", 
    },
    {
        img:"https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_activities-goa-dudhsagar-waterfalls_l_400_640.jpg",
        username:"christ church ",
    },
    {
        img:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/01073602/GOA8-1.png",
        username:"Divar Island",
    },
    {
        img:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/01072831/GOA10.png",
        username:"Chapora Fort ",
    },
]


export default Goa