import PropTypes from "prop-types"

function Filter({data, name}) {

  return (
    <div className="filter__area__item">
        <h4 className="filter__area__item--title" >{name}</h4>
        {data.map((item)=>{
            return(
            <div className="filter__area__item__content" key={item.id}>
                <input className="filter__area__item__content--input" type="checkbox" name={name}/>
                <label className="filter__area__item__content--label" name="marca">{item.name}</label>
            </div>
        )
        })}

    </div>
  )
}

Filter.proptypes = {
    data: PropTypes.array,
    name: PropTypes.string
}
export default Filter