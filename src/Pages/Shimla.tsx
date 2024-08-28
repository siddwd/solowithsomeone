import { title } from 'process'
import React from 'react'

function Shimla() {
  return (
    <>
    <div className='h-80 bg-white flex flex-wrap mt-32'>
    <div className='p-5'>
            <p className='text-xl font-bold'>best place for visit in shimla</p>
         </div>
         
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-[22rem] w-[24%] border border-solid border-gray-300 rounded-md bg-white'>
            <img className='h-40 mt-3 w-[80%] ml-8 cursor-pointer' src={item.img} alt="" />
            <h1 className='text-balance font-semibold text-red-500 ml-8 mt-2 hover:text-red-300 cursor-pointer'>{item.title}</h1>
            <p className='text-xs h-[7rem] text-black ml-8 mt-2 cursor-pointer'>{item.username}</p>
            <div className='border border-solid border-gray-300 w-[45%] ml-20 -mt-1 hover:bg-[#CCCCCC] cursor-pointer bg-red-500 flex'>
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
        img:"https://media1.thrillophilia.com/filestore/63aap2yt18hbkefkok9okk5sxwmb_1487074598_5753295101_112d2bd9d9_o.jpg?w=1440&dpr=2",
        title:"The Ridge", 
        username:"he Ridge road is a large open space, located in the center of Shimla, the capital city of Himachal Pradesh, India. The Ridge is the hub of all cultural activities of Shimla."
    },
    {
        img:"https://media.gettyimages.com/id/1453062743/photo/christ-church-shimla.jpg?s=612x612&w=0&k=20&c=TTKNu2eH8shbWabCC80DvZ5S4pyaeCRd_tinV7aOKUE=",
        title:"christ church ",
        username:"Located on The Ridge, Christ Church is a prominent landmark in Shimla, Himachal Pradesh, India. Built in 1857, it is the second oldest church in Northern India, after St John’s Church in Meerut."
    },
    {
        img:"https://media1.thrillophilia.com/filestore/434s9i2pigflzud6rmrqu2pwexbz_1487074746_shimla-tour.jpg?w=1440&dpr=2",
        title:"Shaily Peak ",
        username:"Shaily Peak is a popular attraction in Shimla, Himachal Pradesh, India. Located 23 km away from Naldehra near Mahakali Lake, it offers a scenic hike with breathtaking views of the surrounding mountains and valleys."
    },
    {
        img:"https://www.trawell.in/admin/images/upload/531957204Kali_Bari_Temple_Main.jpg",
        title:"Kali bari mandir ",
        username:"Kali Bari Mandir is a Hindu temple situated on Bantony Hill, Shimla. The temple is dedicated to fearsome reincarnation of Goddess Kali, known as Shyamala, after which the Shimla city is named."
    },
]

export default Shimla
