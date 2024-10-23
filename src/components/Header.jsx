import { NavLink } from "react-router-dom";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

import logo from '../assets/logo-header.svg'
import carrinho from '../assets/Frame53660.png'
 
function Header(){
  const menu = [
    { 
      label: 'Home', 
      url: '/' 
    },
    { 
      label: 'Produtos', 
      url: '/productlist' 
    },
    { 
      label: 'Categorias', 
      url: '/productdetail' 
    },
    { 
      label: 'Meus Pedidos', 
      url: '/' 
    }
  ]

    return(
      <>
      <header className="flex flex-column h-12rem justify-content-around align-items-center" style={{width: "1440px"}}>
        <div className='flex flex-row w-screen align-items-center justify-content-between gap-7'>
            <NavLink to="/home">
              <img src={logo}/>
            </NavLink>
            <div className='flex flex-row w-screen align-items-center justify-content-around gap-3'>
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
              style={{ color: '#fff',width:"114px", height:"40px"}}
              label='Entrar'
              type='submit'
            />
            </div>
            <NavLink to="/carrinho">
              <img src={carrinho}/>
            </NavLink>
        </div>
        <div>
          <TabMenu model={menu} className="flex flex-row w-screen align-items-center gap-5 p-2" style={{width: "80%"}}/>
        </div>
      </header>
      </>
        
    )
}


export default Header;