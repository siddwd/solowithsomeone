import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-[40rem] w-full flex items-center justify-center  ">
        <div className=" w-[60%] bg-white flex">
        <img className="size-[24rem] w-[24rem]  ml-" src="https://media-cdn.tripadvisor.com/media/photo-o/27/f7/ff/6a/adventure-mountain.jpg" alt="" />
        <p className="text-5xl ml-20 mt-5 ">THE PERFECT LOCATION FOR YOUR NEXT ADVENTURE</p>
      </div>
      </div>
    /* </main> */
  );
}
