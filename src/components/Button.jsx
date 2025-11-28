
const Button = ({btnTxt,className}) => {
  return (
   <button className={`px-7 py-3.5  rounded-[100px] text-[20px] font-bold font-open bg-[#FF7628] text-white hover:bg-white hover:text-[#FF7628] hover: border-2 hover:border-[#FF7628] ${className}`}>{btnTxt}</button>
  )
}

export default Button
