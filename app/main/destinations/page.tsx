
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DestinationsCard from "@/components/destinationsCard";
const CoursesPage = async () => {
  

    return (
      <div className="w-full px-3 mx-auto">
       <h1  className="text-3xl text-sky-600 mb-2">Nous vous presentons nos destinations</h1>
        <div className="  grid sm:grid-cols-1  md:grid-cols-2 gap-4 justify-center items-center">
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>

        </div>
      </div>
    );
  };
  
  export default CoursesPage;