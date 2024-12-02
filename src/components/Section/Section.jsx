import PropTypes from "prop-types"

function Section({value, title, data}) {

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
    
  return (
    <section className="section__container">
        <h2 className={(value==1)? "section__container__title" : "section__container__title--center"}>{title}</h2>
        {(value==1)? <div className="section__container__discount__area">{colecoesEmDestaqueDesconto}</div> : <div className="section__container__destaque__area">{colecoesEmDestaque}</div>}
    </section>
  )
}

Section.propTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string,
    data: PropTypes.array
}


export default Section