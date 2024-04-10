'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
const header = () => {
  const currentPath = usePathname().split('/auth/')[1].toString()
  console.log(currentPath)
  return (
    <div >
             <h1>
            <span className="mx-auto mb-16 text-center text-3xl  text-sky-600">Paye ton ticket de bus en un click </span>
        </h1>
    </div>
  )
}

export default header
