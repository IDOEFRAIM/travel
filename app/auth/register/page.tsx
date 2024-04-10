'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import InputWithLabel from "@/components/inputWithLabel"
import ModalBox from "@/components/Modal"

const page = () => {
  const [startVerifyngEmail, setstartVerifyngEmail] = useState(false)
  function submit(){
    setstartVerifyngEmail(true)
  }
  return (

    <div className=" bg-white flex flex-col justify-center items-center  mx-8  w-full sm:w-[600px] max-w-[700px]">
      <div className="flex flex-col  sm:flex-row justify-between w-full">
        <div><InputWithLabel label='name' /></div>
        <div><InputWithLabel label='nickname' /></div>
        

      </div>
      <InputWithLabel label='email' />


      <h1>En creant ton compte tu acceptes toutes nos <span className=" text-md  text-sky-600">regles de confidentialite</span></h1>

      <Button
      onClick={()=>setstartVerifyngEmail(true)} variant={'primary'}>Creer un compte</Button>
      <h1>
        Tu as deja un compte?
        <Link href={'/auth/login'} className=" text-md  text-sky-600 ml-2">Se connecter</Link>
        <ModalBox
isOpen={true} onClose={()=>console.log('closed')}
title='Verification' buttonText="Verifier son email"
description='Nous t avons envoye un email pour des verificarions.S il te plait regarde dans ton adresse mail'/>

      </h1>
    </div>
  )
}

export default page
