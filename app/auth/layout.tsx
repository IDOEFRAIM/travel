import Header from "./header.auth"
type Props = {
    children : React.ReactNode
}


const layout = ({
    children
}:Props) => {
  return (
    <div>
        <Header/>
      {children}
    </div>
  )
}

export default layout
