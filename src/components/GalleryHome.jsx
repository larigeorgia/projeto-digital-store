import { useState } from "react";
import PropTypes from "prop-types"
// import tenis from '../../src/assets/nike/downshifter-vista-diagonal.webp'


// import frame53662 from "../assets/home-slide-1.png"
// import {data} from "../assets/data"


function GalleryHome({data}) {
  // const [data, setData] = useState([])
  const [index, setIndex] = useState(0);
  const hasNext = index < data.length - 1;

  // useEffect(()=>{
  //   fetch('http://localhost:5174/src/assets/slide-home.json')
  //   .then((res)=>res.json())
  //   .then(setData)
  // },[])
  
  function handleNextClickLeft() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(8);
    }
  }

  function handleNextClickRight() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }


  // setTimeout(handleNextClick,3000)

  let imagem = data[index]


//   const renderGallery = data.map((image)=>{
//     return(
//       <>
//         <button key={image.id} onClick={handleNextClick}>
//           Next
//         </button>
//       </>
//   );})
  // acredito que seja melhor usar um useEffect para abraçar toda a gallery
  
  const content = data.map((item)=>{
    return(
    <div key={item.id}>
    <div>
      <span>{item.higherTitle}</span>
      <h1>{item.title}</h1>
      <img src={item.icon}/>
      <p>{item.description}</p>
    </div>
    {/* <img
        src={imagem.src}
        alt={imagem.src}
    /> */}
    {/* <button key={item.id} onClick={handleNextClick}>
            Next
    </button> */}
    </div>
    )
  })

  return (
  
     <div className="galleryHome" >
     <div className="galleryHome__container">
     {/* {location ? <HomePage />} */}
        {/* {console.log(data)}
        {renderGallery}
     <img
      src={imagem.src}
      alt={imagem.src}
    
    /> */}
    {/* <img src={tenis}/> */}
    {/* {content} */}
    {data.map((item)=>{
    return(
    <div className="galleryHome__container__content" key={item.id}>
    
      <span>{item.higherTitle}</span>
      <h1>{item.title}</h1>
      <img className= "galleryHome__container__content__icon" src={item.icon}/>
      <p>{item.description}</p>
    
    {/* <img
        src={imagem.src}
        alt={imagem.src}
    /> */}
    {/* <button key={item.id} onClick={handleNextClick}>
            Next
    </button> */}
    </div>
    )
  })}
    <img className="galleryHome__container__image"
        src={imagem.src}
        alt={imagem.src}
    />
      {/* {data.map((item)=>{
        return(
          <button key={item.id} onClick={handleNextClick}>
            Next
          </button>
          
      );
      })} */}
      <div className="galleryHome__container__buttons">
        <button className="galleryHome__container__buttons--left" onClick={handleNextClickLeft}><img src="src/assets/Frame53664.png" alt="Scroll Left"/></button>
        <button className="galleryHome__container__buttons--right" onClick={handleNextClickRight}><img src="src/assets/Frame53664.png" alt="Scroll Right"/></button>
      </div>
      </div>

      {console.log(data)}
      {console.log(hasNext)}
      {console.log(index)}
      {console.log(setIndex)}
      
        {/* <img className="gallery__image" src={frame53662}/> */}
        {/* {data.map((item)=>{
          return (
            <div className="gallery" key={item.id}>
              <img className="gallery__image" src={item.image}/>
            </div>  
        );
        })} */}
    </div>
        

    

  )
}


GalleryHome.propTypes = {
  data: PropTypes.array
}

export default GalleryHome;