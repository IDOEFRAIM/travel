import { Button } from "@/components/ui/button"
import Link from 'next/link'
import InputWithLabel from "@/components/inputWithLabel"
import ModalBox from "@/components/Modal"

const page = () => {
  return (

    <div className="bg-white flex flex-col justify-center items-center  mx-8 w-full sm:w-[600px] max-w-[700px]">

      <InputWithLabel label='name' />

      <InputWithLabel label='email' />

      <span className=" text-sm  text-black-600">As tu oublie ton mot de passe? 
      <Link href={'/auth/resetPassword'} className=" text-md  text-sky-600 ml-2">Oui</Link>
</span>

      <Button variant={'primary'}>Se connecter</Button>
      <h1>
        Tu n'as pas de compte?
        <Link href={'/auth/register'} className=" text-md  text-sky-600 ml-2">S'inscrire</Link>
      </h1>
<ModalBox
isOpen={true} onClose={()=>console.log('closed')}
title='login modal' buttonText="start journey"
description='U succesfully login'/>
    </div>
  )
}

export default page
