import { title } from 'process'
import React from 'react'

function Goa() {
  return (
    <>
     <div className='h-80 bg-white flex flex-wrap mt-32'>
    <div className='p-5'>
            <p className='text-xl font-bold'>Best places of goa for visit</p>
         </div>
        
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-auto w-[24%] border border-solid border-gray-300 bg-white rounded-md'>
            <img className='h-48 w-[80%] ml-8 mt-2' src={item.img} alt="" />
            <h1 className='text-balance font-semibold ml-8 text-red-500'>{item.title}</h1>
            <p className='text-xs ml-8 text-black'>{item.username}</p>
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