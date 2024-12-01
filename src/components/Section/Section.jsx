import PropTypes from "prop-types"

function Section({value, title, data}) {

    //coleções em destaque com desconto, coleções em destaque e produtos em alta


    const colecoesEmDestaqueDesconto = data.map((item)=>{
        return(
            <div key={item.id} className="section__container__discount">
                <img className="section__container__discount__image" src={item.src}/>
                <div className="section__container__discount__content">
                    <span className="section__container__discount__content__value">{item.discount}</span>
                    <p className="section__container__discount__content__text">{item.text}</p>
                    <button className="section__container__discount__content__button">Comprar</button>
                </div>
            </div>

        )
    }
    )
    const colecoesEmDestaque= data.map((item)=>{
        return(
            <div key={item.id} className="section__container__destaque">
            <div className="section__container__destaque__content">
                <button className="section__container__destaque__button">
                    {/* <img className="section__container__destaque__button__image" src={item.src}/> */}
                    {/* <svg path={item.src}></svg> */}
                    <svg className="section__container__destaque__button__image" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={item.path} />
                    </svg>
                </button>
                <h3 className="section__container__destaque__name" >{item.name}</h3>
            </div>
            </div>
        )
    }
    )
    // const produtosEmAlta= data.map((item)=>{
    //     return(
    //         <>
    //         <a>ver todos <img /></a>
    //         <ProductListing value={8} data={item}/>
    //         </>
    //     )
    // }
    // )

  return (
    <section className="section__container">
        <h2 className={(value==1)? "section__container__title" : "section__container__title--center"}>{title}</h2>
        {(value==1)? <div className="section__container__discount__area">{colecoesEmDestaqueDesconto}</div> : <div className="section__container__destaque__area">{colecoesEmDestaque}</div>}
        {/* <div className="section__container__discount__area">{(value==1)&&(colecoesEmDestaqueDesconto)}</div>
        <div className="section__container__destaque">{(value==2)&&(colecoesEmDestaque)}</div> */}
        
        {/* {(value==3)&&(produtosEmAlta)} */}
    </section>
  )
}

Section.propTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string,
    data: PropTypes.array
}


export default Section