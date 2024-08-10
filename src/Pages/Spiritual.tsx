import React from 'react'

function Spiritual() {
  return (
    <>
      <div className='h-80 bg-white flex flex-wrap mt-32'>
    <div className='p-5'>
            <p className='text-xl font-bold'>some spiritual pilgrimage</p>
         </div>
         
         <div className='flex w-full'>
         {data.map((item)=>(
         <div className='m-2 h-[21rem] w-[24%] border border-solid border-gray-300 rounded-md bg-white'>
            <img className='h-40 mt-3 w-[80%] ml-8' src={item.img} alt="" />
            <h1 className='text-balance font-semibold text-red-500 ml-8'>{item.title}</h1>
            <p className='text-xs h-[7rem] text-black ml-8'>{item.username}</p>
            <div className='border border-solid border-gray-300 w-[45%] ml-20  bg-red-500 flex'>
         <button className='text-white text-sm'>READ MORE</button>
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
        img:"https://wallpapercave.com/wp/wp5526852.jpg",
        title:"Dwarka", 
        username:"Dwarka was the legendary capital of the god Krishna, who founded it after his flight from Mathura. Its consequent sanctity makes it one of the seven great places of Hindu pilgrimage. The town’s original temples were destroyed in 1372 by the Delhi emperors."
    },
    {
      id:2,
        img:"https://media.gettyimages.com/id/873170230/photo/sri-krishna-balaram-mandir-temple-vrindavan-india.jpg?s=612x612&w=0&k=20&c=-ku_JKuNSxQyN6lFfXQzDDJ-v-FMJv33pH5QJWpipxc=",
        title:"ISKCON Vrindavan",
        username:"ISKCON Vrindavan, also called Sri Krishna Balaram Mandir, is one of the major ISKCON temples in the world. It is a Gaudiya Vaishnava temple located in the city of Vrindavan, Mathura district, in the Indian state of Uttar Pradesh."
    },
    {
      id:3,
        img:"https://media.gettyimages.com/id/1933426286/photo/workers-are-working-at-an-under-construction-site-in-front-of-the-hindu-ram-temple-ahead-of.jpg?s=612x612&w=0&k=20&c=Wn-mgssCVoNQSFOiGuty5nFRt3cFg5uILo1aaTe4pIg=",
        title:"Ayodhya",
        username:"Ayodhya is a city located in the Indian state of Uttar Pradesh, situated on the banks of the Sarayu River. It is a significant pilgrimage site for Hindus, considered one of the seven most important cities in Hinduism, and is revered as the birthplace of Lord Rama, a Hindu deity."
    },
    {
      id:4,
        img:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Karnataka_Hampi_IMG_0730.jpg",
        title:"Gopuram",
        username:"Gopurams entstanden ab dem späten 7. Jahrhundert im südindischen Gebiet des heutigen Tamil Nadu, wo heute auch die größte Anzahl existiert. Beispielsweise findet man sie am Kailasanatha-Tempel in Kanchipuram. "
    },
    
]

export default Spiritual