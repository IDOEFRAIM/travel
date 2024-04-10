import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image";
const footer = () => {
  return (
    <div className='hidden lg:block   h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button size='lg' variant='primaryOutline' className='w-full'>
        <Image width={32} height={40} src='/jp.svg' alt='hero' className='mr-4 rounded-md'/>
        Japon
        </Button>
        <Button size='lg' variant='primaryOutline' className='w-full'>
        <Image width={32} height={40} src='/fr.svg' alt='hero' className='mr-4 rounded-md'/>
        France
        </Button>
        <Button size='lg' variant='primaryOutline' className='w-full'>
        <Image width={32} height={40} src='/es.svg' alt='hero' className='mr-4 rounded-md'/>
       Espagne
        </Button>
        <Button size='lg' variant='primaryOutline' className='w-full'>
        <Image width={32} height={40} src='/hr.svg' alt='hero' className='mr-4 rounded-md'/>
        mali
        </Button>
        
        
      </div>
    </div>
  )
}

export default footer
