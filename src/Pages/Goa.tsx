import { title } from 'process'
import React from 'react'

function Goa() {
  return (
    <>
   <div className='h-80 bg-white flex flex-wrap mt-32'>
    <div className='p-5'>
            <p className='text-xl font-bold'>best place for visit in goa</p>
         </div>
         
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-[22rem] w-[24%] border border-solid border-gray-300 rounded-md bg-white'>
            <img className='h-40 mt-3 w-[80%] ml-8 cursor-pointer' src={item.img} alt="" />
            <h1 className='text-balance font-semibold text-red-500 ml-8 mt-2 hover:text-red-300 cursor-pointer'>{item.title}</h1>
            <p className='text-xs h-[7rem] text-black ml-8 cursor-pointer mt-2'>{item.username}</p>
            <div className='border border-solid border-gray-300 w-[45%] -mt-1 ml-20 hover:bg-[#CCCCCC] cursor-pointer bg-red-500 flex'>
         <button className='text-white text-sm ml-2'>READ MORE</button>
         <img src="https://img.icons8.com/external-thin-kawalan-studio/24/external-triple-right-arrow-arrows-thin-kawalan-studio.png" alt=""/>
         </div>
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
        title:" Anjuna Beach", 
        username:"Located in North Goa, Anjuna Beach is a 1.5-kilometer-long stretch of golden sandy beach with rocky outcrops, lined with palm trees."
    },
    {
        img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/fort-aguada-goa.jpg",
        title:"Fort Aguada",
        username:"Fort Aguada is a well-preserved seventeenth-century Portuguese-era fort, along with a lighthouse, standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea. "
    },
    {
        img:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/01073602/GOA8-1.png",
        title:"Divar Island",
        username:"Divar Island is a serene and laid-back destination in Goa, situated on the Mandovi River, approximately 10 km from Panjim, the capital city."
    },
    {
        img:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/01072831/GOA10.png",
        title:"Chapora Fort ",
        username:"Located in North Goa, 21.7 kilometers from Panaji, Chapora Fort is a 17th-century ruin situated on a hill overlooking the Vagator beach and the Chapora River, which meets the Arabian Sea."
    },
]


export default Goa