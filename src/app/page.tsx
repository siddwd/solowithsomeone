import Adventure from "@/Pages/Adventure";
import Forest from "@/Pages/Forest";
import Image from "next/image";

export default function Home() {
  return (
     <main className="flex flex-col items-center justify-between">
      <Adventure/>
      <Forest/>
     </main> 
  );
}
