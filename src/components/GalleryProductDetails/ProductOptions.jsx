import {tamanhos, cores} from './dataOptions'

function ProductOptions() {


  const optionsTam = tamanhos.map((item)=>{
    return(
    <>
    <div key={item.id}>
      <form>
        <button type='submit' className="options__area--square">{item.tamanho}</button>
      </form>
    </div>
    </>
    )
  })

  const optionsCor = cores.map((item)=>{
    return(
    <>
    <div key={item.id}>
      <form>
        <button type='submit' className="options__area--circle" style={{backgroundColor:item.cor}}>{item.r}</button>
      </form>
    </div>
    </>
    )
  })
  
  return (
    <>
      <p className='options__area--title'>Tamanho</p>
      <div className='options__area'>{optionsTam}</div>
      <p className='options__area--title'>Cor</p>
      <div className='options__area'>{optionsCor}</div>
    </>
    
  )
}

export default ProductOptions