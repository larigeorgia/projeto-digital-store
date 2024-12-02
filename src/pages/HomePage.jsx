import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import ProductListing from '../components/ProductListing'
import GalleryHome from '../components/GalleryHome'
import Section from '../components/Section/Section'
import coleDesconto from '../components/Section/coleDesconto'
import coleDestaque from '../components/Section/coleDestaque'

function HomePage () {
  return (
    <>
      <div className='flex flex-column align-items-center w-screen page__area'>
        <Header />
        <GalleryHome />
        <Section value={1} title={"Coleções em destaque"} data={coleDesconto}/>
        <Section value={2} title={"Coleções em destaque"} data={coleDestaque}/>
        <ProductListing limite={9} value={1}/>
        <Footer />
      </div>
    </>
    
  )
}

export default HomePage