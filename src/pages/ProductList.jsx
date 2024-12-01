
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import ProductListing from "../components/ProductListing";

function ProductList() {
  return (
    <>
      <div className='flex flex-column align-items-center w-screen'>
        <Header />
        <ProductListing limite={8} value={2} />
        <Footer/>
    </div>
    </>
    
  )
}

export default ProductList;