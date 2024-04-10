import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const header = () => {
  return (
    <div>
      <Button variant={'primary'}>
        <Link href={'/main/destinations/today'}>aujourdhui</Link>
      </Button>
      <Button variant={'primary'}>
      <Link href={'/main/destinations/tomorrow'}>demain</Link>

      </Button>
      <Button variant={'primary'}>
      <Link href={'/main/destinations/ndayafter'}>dans n-jour</Link>

      </Button>

    </div>
  )
}

export default header
