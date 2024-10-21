import { NavLink } from "react-router-dom";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/Frame53660.png'
 
function Header(){
    return(
      <>
      <header className="flex flex-column w-screen justify-content-around align-content-between" style={{backgroundColor:"yellow", height:192}}>
        <div className='flex flex-row align-items-center justify-content-around'>
            <NavLink to="/home">
              <img src={logo}/>
            </NavLink>
            <div className='flex flex-row align-items-center justify-content-around gap-3'>
            <IconField>
              <InputIcon className="pi pi-search"/>
              <InputText 
                style={{width:"559px", height:"60px"}}
                id='busca'
                placeholder='Pesquisar produto...'
              />
            </IconField>
            <NavLink to="/">Cadastre-se</NavLink>
            <Button className='border-round-lg' 
              style={{backgroundColor: '#C92071', color: '#fff',width:"114px", height:"40px"}}
              label='Entrar'
              type='submit'
            />
            </div>
            <NavLink to="/carrinho">
              <img src={carrinho}/>
            </NavLink>
        </div>
        <div className="flex flex-row gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/productlist">Produtos</NavLink>
            <NavLink to="/productdetail">Categorias</NavLink>
            <NavLink to="/">Meus Pedidos</NavLink>
        </div>
      </header>
      </>
        
    )
}


export default Header;