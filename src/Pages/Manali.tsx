import { Card } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

function Manali() {
  return (
    <>
     <div className='h-80 bg-white flex flex-wrap mt-10'>
    <div className='p-5'>
            <p className='text-xl font-bold'>Best places of manali for visit</p>
         </div>
        
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-auto w-[24%] border border-solid border-gray-300 rounded-md bg-white'>
            <img className='h-48 w-[80%] ml-8' src={item.img} alt="" />
            <h1 className='text-balance font-semibold text-red-500 ml-8'>{item.title}</h1>
            <p className='text-xs text-black ml-8'>{item.username}</p>
         </div>
          ))}
         </div>
         </div>
   
    </>
  )
}

export const data = [
    {
        id:1,
        img:"https://www.tourmyindia.com/blog//wp-content/uploads/2021/04/Manali-Gompa.jpg",
        title:"Manali gompa", 
        username:"The Manali Gompa, also known as Gadhan Thekchhokling Gompa, is a Tibetan Buddhist monastery located in Manali, Himachal Pradesh, India."
    },
    {
      id:2,
        img:"https://eindiatourism.in/wp-content/uploads/2023/05/Hadimba_Devi_Temple_Hidimba_Devi_Temple_Dhungari_Temple_Manali_and_around_vrtmrgmpksk_40-640x440.jpg",
        title:"Himbadevi temple",
        username:"Hidimba Devi Temple, locally known as Dhungari Temple, also known variously as the Hadimba Temple, is a Hindu Temple, located in Manāli, a hill station in the State of Himāchal Pradesh in north India."
    },
    {
      id:3,
        img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2019/01/shutterstock_693251473.jpg",
        title:"Old manali",
        username:"Located 6,589 feet above sea level and 3 km uphill from Manali, Himachal Pradesh, Old Manali is a quiet settlement nestled beneath a valley covered with vast apple orchards."
    },
    {
      id:4,
        img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
        title:"Rafting ",
        username:"River rafting in Manali is an exhilarating water sport that awakens the adventure enthusiast in you. The Beas River and its tributaries offer an exciting experience for every adventure buff."
    },
    // {
    //   id:5,
    //     img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
    //     username:"Rafting ",
    // },
    // {
    //   id:6,
    //     img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
    //     username:"Rafting ",
    // },
    // {
    //   id:7,
    //     img:"https://www.tripsavvy.com/thmb/fCRRyZwLNk9OJl4i1kbYjs3WBd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503016485-5ae56d61ba61770036315d22.jpg",
    //     username:"Rafting ",
    // }
]

export default Manali