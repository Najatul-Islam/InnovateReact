

const Heading = ({ className, text }) => {
 
    let najat = text.replace("#", "<span class='rong'>").replace("#", "</span>");

  return (
   <h1 className={`${className}`} dangerouslySetInnerHTML={{__html: najat }}></h1>
  )
}

export default Heading
