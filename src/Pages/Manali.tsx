import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

function Manali() {
  return (
    <>
    
    <Carousel>
  <CarouselContent>
    <div className='h-80 bg-white flex flex-wrap'>
    <CarouselItem>
    <div className='p-5'>
            <p className='text-xl font-bold'>Best places of manali for visit</p>
         </div>
        
         <div className='flex'>
         {data.map((item)=>(
         <div className='m-2 h-auto w-[24%]'>
            <img className='h-48 w-full' src={item.img} alt="" />
            <p className='text-balance font-semibold text-red-500'>{item.username}</p>
         </div>
          ))}
         </div>
      </CarouselItem>
    </div>
    {/* <CarouselItem>...</CarouselItem> */}
    {/* <CarouselItem>...</CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </>
  )
}

export const data = [
    {
        img:"https://wallpapercave.com/wp/wp4528683.jpg",
        username:"Manali Bridge", 
    },
    {
        img:"https://eindiatourism.in/wp-content/uploads/2023/05/Hadimba_Devi_Temple_Hidimba_Devi_Temple_Dhungari_Temple_Manali_and_around_vrtmrgmpksk_40-640x440.jpg",
        username:"Himbadevi temple",
    },
    {
        img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2019/01/shutterstock_693251473.jpg",
        username:"Old manali",
    },
    {
        img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
        username:"Rafting ",
    },
    // {
    //     img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
    //     username:"Rafting ",
    // },
    // {
    //     img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
    //     username:"Rafting ",
    // },
    // {
    //     img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
    //     username:"Rafting ",
    // }
]

export default Manali