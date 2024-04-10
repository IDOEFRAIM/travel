import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1 className='text-3xl text-sky-600 '>Notifications</h1>
      <div className="flex flex-col  justify-center">
        <div className='flex flex-row '>
          <Image
          width='20'
          height='20'
          src='/mascot.svg'
          alt='profile image' 
          className='mr-1'/>
          <h2><span className='text-3xl text-sky-600'>ALphonse</span> a achete une ticket pour toi. Verifie tous les details 
          <Link href={'/ticket/ticketId'} className='text-red-600'>ici</Link> </h2>
        </div>
        <div className='flex flex-row'>
        <Image
          width='20'
          height='20'
          src='/mascot.svg'
          alt='profile image'
          className='mr-1' />
          <h2> Ton cars va demarer dans <span className='text-3xl text-sky-600'>20mn</span> </h2>
        </div>
      </div>
    </div>
  )
}

export default page
