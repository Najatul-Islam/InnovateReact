import Button from "../Button"
import Container from "../Container"
import Heading from "../Heading"
import Headtwo from "../Headtwo"



const Banner = () => {
  return (
    <>
    <div className={"bg-[url('/src/assets/Header.png')] bg-cover bg-center bg-no-repeat py-[250px]"}>
    <Container>
       <Heading className={"text-[50px] pt-3 font-open font-extrabold text-black w-[500px]"} text={"We Are Digital #Marketing# Agency"}/>
      <Headtwo as={"p"} className={"text-[#6C7D93] py-5 text-[16px] leading-9 font-pap w-[450px]"} text={"Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "}/>
      <Button btnTxt={"get free quoto"}/>
    </Container>
    </div>
   </>
  )
}



export default Banner
