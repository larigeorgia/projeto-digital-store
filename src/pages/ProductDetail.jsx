import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import GalleryPD from "../components/GalleryProductDetails/GalleryPD"
import BuyBox from "../components/BuyBox"
import data  from  "../components/GalleryProductDetails/dataDetails"
import ProductListing from "../components/ProductListing"


function ProductDetail() {
  return (
    <div className='flex flex-column align-items-center w-screen page__area'>
      <Header />
      <div className="area__details">
        <GalleryPD />
        <BuyBox />
      </div>
      <div className="area__details__container" >
        <div className="area__details__container__mini">{data.map((item)=>{
          return(
            <img className="area__details__container__mini--image" key={item.id} src={item.src}/>
          )
        })}</div>
      </div>
      <div >
        <ProductListing limite={5} value={3} />
      </div>
      <Footer/>
    </div>
  )
}

export default  ProductDetail