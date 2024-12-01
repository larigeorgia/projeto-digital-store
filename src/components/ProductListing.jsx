// import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "./Card/ProductCard";
import PropTypes from "prop-types"
// import  slideProductDetails from './Card/slideProductDetails'



function ProductListing (limite, value) {
    // const [index, setIndex] = useState(0);
    // const hasNext = index < Object.keys(slideProductDetails).length - 1;

      
    // function handleNextClick() {
    //     if (hasNext) {
    //     setIndex(index + 1);
    //     } else {
    //     setIndex(0);
    //     }
    // }
//     const listing = slideProductDetails.map((product)=>{
//         return(
//             <>
//             <div key={product.id}>
//                 <ProductCard info={[slideProductDetails]}/>
//             </div>
           
//             {/* <button key={product.id} onClick={handleNextClick}>
//                 Next
//             </button> */}
//         </>

//     )
// })
    const listingHome = (<>
        <div className="listing__content">
        <h3 className="listing__content__title">Produtos em alta</h3>
        <div className="listing__content__link">
        {/* {(path!="/productlist") && <NavLink to='/productlist' style={{color:"#C92071", textDecoration: "none"}} className="listing__content__link--transform" >Ver todos</NavLink>}  */}
        <NavLink to='/productlist' style={{color:"#C92071", textDecoration: "none"}} className="listing__content__link--transform" >Ver todos</NavLink>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="#C92071" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        </div>
        <div className="listing__area">
            {Array.from({length: Object.values(limite)}).map((_, index) => 
                <ProductCard key={index}/>
            )}
        </div>
    </>)
    
    const listingProdList = (<>
        <div className="listing__content">
        <div className="listing__content__link">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="#C92071" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        </div>
        <div className="listing__area">
            {Array.from({length: Object.values(limite)}).map((_, index) => 
                <ProductCard key={index}/>
            )}
        </div>
    </>)

  return (
    <>
    <section className="listing">
    {(value==1)?<div>{listingHome}</div> : <div>{listingProdList}</div>}
    {/* <div className="listing__content">
        <h3 className="listing__content__title">Produtos em alta</h3>
        <div className="listing__content__link">
        
        <NavLink to='/productlist' style={{color:"#C92071", textDecoration: "none"}} className="listing__content__link--transform" >Ver todos</NavLink>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="#C92071" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
    <div className="listing__area">
        {Array.from({length: Object.values(limite)}).map((_, index) => 
            <ProductCard key={index}/>
        )}
    </div> */}


    </section>

        
        
        {console.log(limite)}
        
        {/* {console.log(Object.values(slideProductDetails))} */}
        {/* {console.log(slideProductDetails)}
        {console.log(typeof(slideProductDetails))} */}
    </>


  )
}
ProductListing.proptypes = {
    limite: PropTypes.number
}

export default ProductListing