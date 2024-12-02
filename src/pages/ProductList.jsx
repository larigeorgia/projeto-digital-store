import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import ProductListing from "../components/ProductListing"
import Filter from "../components/Filter/Filter"
import {marca, categoria, genero, estado} from '../components/Filter/data'

function ProductList() {
  return (
      <div className='flex flex-column align-items-center w-screen page__area'>
        <Header />
        <div className="list__area">
        <div className="list__area__resultado">
          <span className="list__area__resultado--principal">Resultados para “Tênis” -</span>
          <span className="list__area__resultado--secundario"> 389 produtos</span>
        </div>
          <form className="list__area__select">
            <label name="name" className="list__area__select--label">Ordenar Por: </label>
            <select className="list__area__select--label__options">
              <option className="list__area__select--label__options--opt"> Mais relevantes</option>
              <option> Menor valor</option>
              <option> Maior valor</option>
            </select>
          </form>
        </div>
        <div className="list__area">
          <div className="list__area__filter__area">
            <h3 className="list__area__filter__area__title">Filtrar por </h3>
            <Filter data={marca} name={"Marca"}/>
            <Filter data={categoria} name={"Categoria"} />
            <Filter data={genero} name={"Gênero"}/>
            <Filter data={estado} name={"Estado"}/>
          </div>
          <div className="list__area__filter__area--section" >
            <ProductListing limite={16} value={2} />
          </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default ProductList