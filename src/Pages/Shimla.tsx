import React from 'react'

function Shimla() {
  return (
    <>
    <div className='h-80 bg-white flex flex-wrap mt-10'>
    <div className='p-5'>
            <p className='text-xl font-bold'>Best places of shimla for visit</p>
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
        img:"https://media1.thrillophilia.com/filestore/63aap2yt18hbkefkok9okk5sxwmb_1487074598_5753295101_112d2bd9d9_o.jpg?w=1440&dpr=2",
        username:"The Ridge", 
    },
    {
        img:"https://media.gettyimages.com/id/1453062743/photo/christ-church-shimla.jpg?s=612x612&w=0&k=20&c=TTKNu2eH8shbWabCC80DvZ5S4pyaeCRd_tinV7aOKUE=",
        username:"christ church ",
    },
    {
        img:"https://media1.thrillophilia.com/filestore/434s9i2pigflzud6rmrqu2pwexbz_1487074746_shimla-tour.jpg?w=1440&dpr=2",
        username:"Shaily Peak ",
    },
    {
        img:"https://www.trawell.in/admin/images/upload/531957204Kali_Bari_Temple_Main.jpg",
        username:"Kali bari mandir ",
    },
]

export default Shimla
