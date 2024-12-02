
import { NavLink } from "react-router-dom";
import ProductCard from "./Card/ProductCard";
import PropTypes from "prop-types"


function ProductListing ({limite, value}) {

    let listing = (value==1) ?
        <>
            <div className="listing__content">
                <h3 className="listing__content__title">Produtos em alta</h3>
                <div className="listing__content__link">
                    <NavLink to='/productlist' style={{color:"#C92071", textDecoration: "none"}} className="listing__content__link--transform" >Ver todos</NavLink>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="#C92071" />
                    </svg>
                </div>
            </div>
            <div className="listing__area">
                <ProductCard max={limite}/>
            </div>
        </> : (value==3) ?
        <>
             <div className="listing__content">
                <h3 className="listing__content__title">Produtos em alta</h3>
                <div className="listing__content__link">
                    <NavLink to='/productlist' style={{color:"#C92071", textDecoration: "none"}} className="listing__content__link--transform" >Ver todos</NavLink>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="#C92071" />
                    </svg>
                </div>
             </div>
             <div className="listing__area--details">
                 <ProductCard max={limite}/>
             </div>
         </> : <>
            <div className="listing__content">
                <div className="listing__area--listing">
                    <ProductCard max={limite}/>
                </div>
            </div>
         </>
  

  return (
    <section className="listing">
        {listing}
    </section>
  )
}
ProductListing.proptypes = {
    limite: PropTypes.number,
    value: PropTypes.number
}

export default ProductListing