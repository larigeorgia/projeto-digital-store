import { useState, useRef} from "react"
import slideHome from '../assets/slideHome'

function GalleryHome() {
const [index, setIndex] = useState(0);
const slideContainer = useRef(null);


const handleClickLeft = (e) =>{
    e.preventDefault();
    slideContainer.current.scrollLeft -= slideContainer.current.offsetWidth
    setIndex(index - 1)
}

const handleClickRight = (e) =>{
    e.preventDefault();
    slideContainer.current.scrollLeft += slideContainer.current.offsetWidth
    setIndex(index + 1)
}


let buttons = (index==0) ?
    <>
    <div className="galleryHome__container__buttons--end"> 
        <button className="galleryHome__container__buttons--right" onClick={handleClickRight}><img src="src/assets/Frame53664.png" alt="Scroll Right"/></button>
    </div>
    </> : (index==8) ?  
    <>
    <div className="galleryHome__container__buttons"> 
        <button className="galleryHome__container__buttons--left" onClick={handleClickLeft}><img src="src/assets/Frame53664.png" alt="Scroll Left"/></button>
    </div>
    </> : <>
    <div className="galleryHome__container__buttons">
        <button className="galleryHome__container__buttons--left" onClick={handleClickLeft}><img src="src/assets/Frame53664.png" alt="Scroll Left"/></button>
        <button className="galleryHome__container__buttons--right" onClick={handleClickRight}><img src="src/assets/Frame53664.png" alt="Scroll Right"/></button>
    </div>
    </> 


  return (
     <div className="galleryHome" >
        <div className="galleryHome__container" ref={slideContainer}>
            {slideHome.map((item)=>{
                return(
                <>
                <div className="galleryHome__container__slide" key={item.id}>
                    <img
                        src={item.src}
                        alt={item.src}
                    />    
                </div>
                {(index == 0) ? (
                    <div className="galleryHome__container--promo">
                    <button className="galleryHome__container--promo--button">Ver Ofertas</button>
                </div>  
                ) : (null)}
                </>
            )
            })}
            {buttons}
        </div>
    </div>
  )
}

export default GalleryHome