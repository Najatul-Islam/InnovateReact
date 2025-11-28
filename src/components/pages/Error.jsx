import Image from "../Image"
import Header from "../layouts/Header"
import error from "../../assets/error.gif"
const Error = () => {
  return (
    <>
   <Header/>
<Image src={error} className={"max-h-screen w-full mt-1"}/>

   </>
  )
}

export default Error
