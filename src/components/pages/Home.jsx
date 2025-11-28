import Image from "../Image"
import Header from "../layouts/Header"
import frame from "../../assets/frame.png"
import girl from "../../assets/girl.png"
import content from "../../assets/content.png"
import Container from "../Container"
import Flex from "../Flex"
import Button from "../Button"

const Home = () => {
  return (
    <>
     <Header/>
     <body className="">
      <Image src={frame} className={"max-h-screen w-full relative"}/>
      <Image src={girl} className={"absolute top-[20%] bottom-[80%]"}/>

     <Container>
      <Flex>
       <div className="absolute top-[20%]">
         <Image src={content}/>
       </div>
       <div className="">
        <h1 className={"text-[#192239] text-[72px] font-open font-extrabold w-[686px] absolute top-[30%]"}>We Are Digital <span className="text-[#FF7628]">Marketing</span> Agency</h1>
        <p className={"text-[#6C7D93] text-[20px] font-pap w-[571px] leading-9 mt-[22px] absolute top-[60%] mb-5"}>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
        <Button className={"absolute top-[90%]"} btnTxt={"get free quoto"}/>
       </div>
      </Flex>
     </Container>
      </body>
    </>
  )
}

export default Home;
