import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import logo from "../../assets/logo .png"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <Container>
        <Flex className={"justify-between"}>
          <div className={""}>
            <Link to={"/"}>
            <Image src={logo} />
            </Link>
          </div>
          <div className={""}>
            <ul className={"flex items-center gap-x-6 "}>

              <li className="hover:text-[#FF7628]">
                <Link to={"/"}>
                  Home<IoIosArrowDown />
                </Link>
              </li>
              <li className="hover:text-[#FF7628]">
                <Link to={"/About"}>
                  About<IoIosArrowDown />
                </Link>
              </li>
              <li className="hover:text-[#FF7628]">
                <Link to={"/Service"}>
                  Service<IoIosArrowDown />
                </Link>
              </li>
              <li className="hover:text-[#FF7628]">
                <Link to={"/Portfolio"}>
                  Portfolio<IoIosArrowDown />
                </Link>
              </li>
             <li className="hover:text-[#FF7628]">
                <Link to={"/Price"}>
                  Price<IoIosArrowDown />
                </Link>
              </li>

              <li className="hover:text-[#FF7628]">
                 <Link to={"/Blog"}>
                  Blog<IoIosArrowDown />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button btnTxt={"Contact Us"} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header;
