'use client'
import InputLab from "@/components/inputWithLabel"
const page = () => {
  return (
    <div>
        <h1 className="text-sky-600 text-lg mx-3 mb-16">Nous enverons un email a l adresse inscrite pour changer de mot de passe</h1>
      <InputLab label='email' />
    </div>
  )
}

export default page
