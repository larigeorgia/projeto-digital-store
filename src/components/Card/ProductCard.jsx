import PropTypes from "prop-types"
import data from  '../data'


function ProductCard({max}) {

  const result = data.filter((card)=>{
    return(
      card.id<max
    )
  })
  
  const products = result.map((product)=>{
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
      {products}
    </>
   
  )
}

ProductCard.propTypes = {
  max: PropTypes.number,
}


export default ProductCard