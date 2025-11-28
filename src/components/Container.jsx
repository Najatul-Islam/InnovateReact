
const Container = ( {children ,className} ) => {
  return (
    <div className={`max-w-[1170px] m-auto mt-2.5 ${className}`}>
     {children} 
    </div>
  )
}

export default Container
