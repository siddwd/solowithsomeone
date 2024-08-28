import React from 'react'

function Historical() {
  return (
    <>
     <div className='h-80 bg-white flex flex-wrap mt-32'>Histo
    <div className='p-5'>
            <p className='text-xl font-bold'></p>
         </div>
         
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-[22rem] w-[24%] border border-solid border-gray-300 rounded-md bg-white'>
            <img className='h-40 mt-3 w-[80%] ml-8 cursor-pointer' src={item.img} alt="" />
            <h1 className='text-balance font-semibold text-red-500 ml-8 mt-2 hover:text-red-300 cursor-pointer'>{item.title}</h1>
            <p className='text-xs h-[7rem] text-black ml-8 cursor-pointer mt-2'>{item.username}</p>
            <div className='border border-solid border-gray-300 w-[45%] ml-20 -mt-1 hover:bg-[#CCCCCC] cursor-pointer bg-red-500 flex'>
         <button className='text-white text-sm ml-2 '>READ MORE</button>
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
        id:1,
        img:"https://media.istockphoto.com/id/159371791/photo/taj-mahal-india.jpg?s=612x612&w=0&k=20&c=M5j5WON-sb5IbeFxE8wI3CRhF1lYO2QeFwGbIMYg6fc=",
        title:"Taj mahal ,agra", 
        username:"Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643."
    },
    {
      id:2,
        img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Agra-Fort-Uttar-Pradesh.jpg",
        title:"Agra fort ,uttar pradesh",
        username:"To get a sense of the rich history of the Mughal era, visit the walled palatial Agra Fort, one of the famous historical places in India that is built entirely of red sandstone. Built in 1565 by Akbar, this historical tourist place in India has two ornately designed gates."
    },
    {
      id:3,
        img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Hawa-Mahal-Jaipur.jpg",
        title:"Hawa mahal , jaipur",
        username:"The Palace of Winds or Hawa Mahal gets its name due to the fact that it looks like a honeycomb of a beehive with its 953 intricate windows. It is also shaped like a crown as the ruler who built it, Maharaja Sawai Pratap Singh, was a major devotee of Lord Krishna."
    },
    {
      id:4,
        img:"https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Sachi-Stupa.jpg",
        title:" Sanchi stupa, madhya pradesh",
        username:"River rafting in Manali is an exhilarating water sport that awakens the adventure enthusiast in you. The Beas River and its tributaries offer an exciting experience for every adventure buff."
    },
]


export default Historical