
import Goa from "@/Pages/Goa";
import Historical from "@/Pages/Historical";
import Manali from "@/Pages/Manali";
import Shimla from "@/Pages/Shimla";
import Spiritual from "@/Pages/Spiritual";
import Image from "next/image";

export default function Home() {
  return (
     <main className="flex flex-col  bg-gray-50 items-center justify-between">
      <Manali/>
      <Shimla/>.
      <Goa/>
      <Spiritual/>
      <Historical/>
     </main> 
  );
}
