import React from 'react'
import Header from './header'

type Props = {
    children:React.ReactNode
}
const layout = ({children}:Props) => {
  return (
    <div>
        <Header/>
      {children}
    </div>
  )
}

export default layout
