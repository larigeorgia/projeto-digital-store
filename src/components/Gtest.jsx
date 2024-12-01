import { useState, useRef } from "react";
// import PropTypes from "prop-types"
import slideHome from '../../src/assets/slideHome'

function Gtest() {
const [index, setIndex] = useState(0);
// const [position, setPosition] = useState(0);
// const lenth = slideHome.length;
const slideContainer = useRef(null);

// const nextSlide = () => {

// }
// const buttonPromo = (item.id == index) ? renderButtonPromo : 
// const renderButtonPromo =  
//     <div className="galleryHome__container--promo">
//         <button className="galleryHome__container--promo--button">Ver Ofertas</button>
//     </div>
const handleClickLeft = (e) =>{
    e.preventDefault();
    slideContainer.current.scrollRight -= slideContainer.current.offsetWidth
    // console.log(slideContainer.current.offsetWidth)
}

const handleClickRight = (e) =>{
    e.preventDefault();
    slideContainer.current.scrollRight += slideContainer.current.offsetWidth
    // console.log(slideContainer.current.offsetWidth)
    // slideContainer.current.scrollLeft += slideContainer.current.offsetWidth

}

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
                    {/* setIndex(item.id) */}
                </div>
                
                {/* {item.id == 1 ? (
                    <div className="galleryHome__container--promo">
                    <button className="galleryHome__container--promo--button">Ver Ofertas</button>
                </div>  
                ) : (null)} */}
                {/* {console.log(item.id)} */}
                </>
            )
            })}
            {/* {console.log(lenth)} */}
            {/* {console.log(index)} */}
            {setIndex == 1 && (
                <div className="galleryHome__container--promo">
                    <button className="galleryHome__container--promo--button">Ver Ofertas</button>
                </div>)
            }
            {/* {console.log(index)}
            {console.log(slideHome)} */}

            <div className="galleryHome__container__buttons">
                <button className="galleryHome__container__buttons--left" onClick={handleClickLeft}><img src="src/assets/Frame53664.png" alt="Scroll Left"/></button>
                <button className="galleryHome__container__buttons--right" onClick={handleClickRight}><img src="src/assets/Frame53664.png" alt="Scroll Right"/></button>
            </div>
        </div>
    </div>
        

    

  )
}

export default Gtest;