import { Button } from "./ui/button"
import Image from "next/image"

const destinationsCard = () => {
  return (
    <div className="flex flex-col max-w-[500px]">
    <Image
    alt="img"
    src='/hero.svg' 
    width='300'
    height='300' />
    <h1 className='text-2xl'>Destination:<span className='text-2xl text-sky-600 mb-1'>BOBO-Abidjan</span> </h1>
    <h1 className='text-2xl'>Prix:<span className='text-2xl text-sky-600 mb-1'>3000F cfa</span> </h1>
    <h1 className='text-2xl'>Nombres de place disponible:<span className='text-2xl text-sky-600 mb-1'> 10</span> </h1>

    <h1 className="text-3xl flex flex-row items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

    <span className="text-sky-600 text-sm mx-1">21/08/2020(10h-12h)</span>
  </h1>
  <Button variant={'primary'}>Reserver sa place</Button>
</div>
  )
}

export default destinationsCard
