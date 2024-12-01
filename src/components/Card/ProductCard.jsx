import PropTypes from "prop-types"
import  info  from './slideProductDetails'
// import image from '../../../src/assets/nike/downshifter-vista-diagonal.webp'
import data from  './data'

function ProductCard() {

  // const arr = info.map((obj)=>{
  //   return Object.keys(obj).map(function(key){
  //     return obj[key]
  //   })
  // })
  
  const products = data.map((product)=>{
    return (
      <div className="card" key={product.id}>
      <img className="card__image" src={product.src}/>
      <div className="card__content">
          <p className="card__content__title">{product.name}</p>
          <div className="card__content__values">
              <span className="card__content__values__pricediscount">{product.oldPrice}</span>
              <span className="card__content__values__price">{product.price}</span>
          </div>
      </div>
    </div>
    )
  })

  return (
    <>
      {/* {Array.from({length: {limite}}).map((_, index) => 
            <div key={index}>{products}</div>
      )} */}
      {products}
      {console.log(info)}
      {/* <img src={image}/> */}
      {/* {console.log(typeof(info))} */}
      {/* {console.log(info)} */}
      {/* {console.log(arr)} */}
    </>
   
  )
}

ProductCard.propTypes = {
  info: PropTypes.array,
}


export default ProductCard