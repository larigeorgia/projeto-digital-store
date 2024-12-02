import { useState, useRef } from "react";
import dataDetails from './dataDetails'

function GalleryPD() {
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
        <div className="galleryPD__container__buttons--end"> 
            <button className="galleryPD__container__buttons--right" onClick={handleClickRight}><img src="src/assets/Frame53664.png" alt="Scroll Right"/></button>
        </div>
        </> : (index==4) ?  
        <>
        <div className="galleryPD__container__buttons"> 
            <button className="galleryPD__container__buttons--left" onClick={handleClickLeft}><img src="src/assets/Frame53664.png" alt="Scroll Left"/></button>
        </div>
        </> : <>
        <div className="galleryPD__container__buttons">
            <button className="galleryPD__container__buttons--left" onClick={handleClickLeft}><img src="src/assets/Frame53664.png" alt="Scroll Left"/></button>
            <button className="galleryPD__container__buttons--right" onClick={handleClickRight}><img src="src/assets/Frame53664.png" alt="Scroll Right"/></button>
        </div>
        </> 
    
    
      return (
      
         <div className="galleryPD" >
            <div className="galleryPD__container" ref={slideContainer}>
                {dataDetails.map((item)=>{
                    return(
                    <>
                    <div className="galleryPD__container__slide" key={item.id}>
                        <img className="galleryPD__container__slide--image"
                            src={item.src}
                            alt={item.src}
                        />    
                    </div>
                    </>
                )
                })}
                {buttons}
            </div>
        </div>)
}

export default GalleryPD