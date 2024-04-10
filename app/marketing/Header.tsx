import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import Image from "next/image"
const HeaderPage = () => {
  return (
    <header className=' h-20 w-full border-b-2  border-slate-200 px-4'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full '>
        <div className='pt-8 pl-4 pb-7 flex items-center justify-start gap-x-3'>
          <Image
          alt='mascot img'
            height={50} width={50}
            src='/mascot.svg' />
          <h1
            className='text-2xxl  font-extrabold text-green-600 tracking-wide'>APP NAME
          </h1>
        </div>

      </div>
    </header>
  )
}

export default HeaderPage
