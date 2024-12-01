import { useState } from "react";
import PropTypes from "prop-types"
// import tenis from '../../src/assets/nike/downshifter-vista-diagonal.webp'


// import frame53662 from "../assets/home-slide-1.png"
// import {data} from "../assets/data"


function Gallery({location, data}) {
  // const [data, setData] = useState([])
  const [index, setIndex] = useState(0);
  const hasNext = index < Object.keys(data).length - 1;

  // useEffect(()=>{
  //   fetch('http://localhost:5174/src/assets/slide-home.json')
  //   .then((res)=>res.json())
  //   .then(setData)
  // },[])
  
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }


  // setTimeout(handleNextClick,3000)

  let imagem = data[index]


  const galleryHome = data.map(({id})=>{
    return(
      <>
        <button key={id} onClick={handleNextClick}>
          Next
        </button>
        
      </>
  );})
  // acredito que seja melhor usar um useEffect para abraçar toda a gallery
  const galleryProductDetails = (data.map((item)=>{
    return(
      <>
        <button key={item.id} onClick={handleNextClick}>
          Next
        </button>
        
      </>
  );}))

  // const showThumbs = recebe as imagens do calçado específico

let renderGallery = location ? galleryHome : galleryProductDetails
  

  return (
  
     <div>
     {/* {location ? <HomePage />} */}
     {console.log(data)}
     {renderGallery}
     <img
      src={imagem.src}
      alt={imagem.src}
    
    />
    {/* <img src={tenis}/> */}
      {/* {data.map((item)=>{
        return(
          <button key={item.id} onClick={handleNextClick}>
            Next
          </button>
          
      );
      })}
      <img
        src={imagem.src}
        alt={imagem.src}
        
      /> */}
      
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


Gallery.propTypes = {
  location: PropTypes.boolean,
  data: PropTypes.array
}

export default Gallery;