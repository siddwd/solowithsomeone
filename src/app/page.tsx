import Adventure from "@/Pages/Adventure";
import Forest from "@/Pages/Forest";
import Goa from "@/Pages/Goa";
import Manali from "@/Pages/Manali";
import Shimla from "@/Pages/Shimla";
import Image from "next/image";

export default function Home() {
  return (
     <main className="flex flex-col bg-gray-50 items-center justify-between">
      <Adventure/>
      <Forest/>
      <Manali/>
      <Shimla/>
      <Goa/>
     </main> 
  );
}
