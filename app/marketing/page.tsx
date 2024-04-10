import { Button } from "@/components/ui/button.tsx";
import Image from "next/image";
import { Loader } from "lucide-react";
import Link from "next/link";
export default function Home() {
    return (
        <div className='max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2'>
            <div className=' w-[240px] h-[240px] lg:w-[424px] mb-8 lg:mb-0 ' >
                <Image width={300} height={300} src='/hero.svg' alt='hero' />
            </div>
            <div className='flex flex-col  items-center gap-y-8 '>
                <h1 className='text-xl lg"text-3xl  font-bold text-neutral-600 max-w-[480px] text-center'>Learn news languages with lino</h1>
                <div className='flex flex-col items-center gap--y-3 max-w-[330px] w-full'>
              
                </div>

            </div>
        </div>
    )
}
