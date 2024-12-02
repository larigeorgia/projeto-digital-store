import data from  './data'
import ProductOptions from './GalleryProductDetails/ProductOptions'



function BuyBox() {
  const value = data.filter((item)=>{
    return(
      item.id==1
    )
  })

  const details = value.map((produto)=>{
    return(
      <div className="area__buybox" key={produto.id}>
        <h3 className="area__buybox__name">{produto.name}</h3>
        <span className="area__buybox__reference">{produto.reference}</span>
        <div className="area__buybox__stars">
        <div className="area__buybox__stars__content" >
          <ul className="area__buybox__stars__content">
            <li className="area__buybox__stars__content--star">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.76675 1.2306L10.616 5.65038L15.3504 6.06108C15.6787 6.08972 15.8123 6.50343 15.5631 6.72122L11.972 9.86292L13.0481 14.5367C13.1227 14.8614 12.7742 15.1169 12.4921 14.9443L8.42346 12.4666L4.35478 14.9443C4.07194 15.1162 3.72418 14.8607 3.79881 14.5367L4.87493 9.86292L1.28312 6.72047C1.03387 6.50268 1.16671 6.08896 1.49581 6.06033L6.23017 5.64962L8.07943 1.2306C8.20779 0.923134 8.63839 0.923134 8.76675 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
            </svg>
            </li>
            <li className="area__buybox__stars__content--star">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.76675 1.2306L10.616 5.65038L15.3504 6.06108C15.6787 6.08972 15.8123 6.50343 15.5631 6.72122L11.972 9.86292L13.0481 14.5367C13.1227 14.8614 12.7742 15.1169 12.4921 14.9443L8.42346 12.4666L4.35478 14.9443C4.07194 15.1162 3.72418 14.8607 3.79881 14.5367L4.87493 9.86292L1.28312 6.72047C1.03387 6.50268 1.16671 6.08896 1.49581 6.06033L6.23017 5.64962L8.07943 1.2306C8.20779 0.923134 8.63839 0.923134 8.76675 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
            </svg>
            </li>
            <li className="area__buybox__stars__content--star">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.76675 1.2306L10.616 5.65038L15.3504 6.06108C15.6787 6.08972 15.8123 6.50343 15.5631 6.72122L11.972 9.86292L13.0481 14.5367C13.1227 14.8614 12.7742 15.1169 12.4921 14.9443L8.42346 12.4666L4.35478 14.9443C4.07194 15.1162 3.72418 14.8607 3.79881 14.5367L4.87493 9.86292L1.28312 6.72047C1.03387 6.50268 1.16671 6.08896 1.49581 6.06033L6.23017 5.64962L8.07943 1.2306C8.20779 0.923134 8.63839 0.923134 8.76675 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
            </svg>
            </li>
            <li className="area__buybox__stars__content--star">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.76675 1.2306L10.616 5.65038L15.3504 6.06108C15.6787 6.08972 15.8123 6.50343 15.5631 6.72122L11.972 9.86292L13.0481 14.5367C13.1227 14.8614 12.7742 15.1169 12.4921 14.9443L8.42346 12.4666L4.35478 14.9443C4.07194 15.1162 3.72418 14.8607 3.79881 14.5367L4.87493 9.86292L1.28312 6.72047C1.03387 6.50268 1.16671 6.08896 1.49581 6.06033L6.23017 5.64962L8.07943 1.2306C8.20779 0.923134 8.63839 0.923134 8.76675 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
            </svg>
            </li>
            <li className="area__buybox__stars__content--star">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="#F6AA1C"/>
              </svg>
            </li>
          </ul>
        </div>
          <span className="area__buybox__stars__content--number">{produto.stars}</span>
          <span className="area__buybox__stars__content--value">{"("+produto.rating+")"}</span>
        </div>
        <div className="area__buybox__prices" >
          <p className="area__buybox__prices--price">{produto.price}</p>
          <p className="area__buybox__prices--oldPrice">{produto.oldPrice}</p>
        </div>
        <div className="area__buybox__description">
          <p className="area__buybox__description--title">Descrição do produto</p>
          <p className="area__buybox__description--text">{produto.description}</p>
        </div>
        <div className="area__buybox__options">
          <ProductOptions />
        </div>
        <button className="area__buybox__button">COMPRAR</button>
      </div>
    )
  })
  return (
    <>
      {details}
    </>
  )
}

export default BuyBox