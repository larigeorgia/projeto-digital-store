import { NavLink } from "react-router-dom";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

import logo from '../assets/logo-header.svg'
import carrinho from '../assets/Frame53660.png'
 
function Header(){
    return(
      <>
        <header className="header">
          <NavLink to="/home">
              <img src={logo}/>
          </NavLink>
          <div className="header__search">
              <form className="header__search__products">
                  <input className="header__search__input" 
                      type="search" 
                      placeholder="Pesquisar produtos..."
                      name="pesquisar"
                  />
                  <span className="header__search__icon"><i className="fa-solid fa-magnifying-glass"></i></span>
              </form>
              
              <div className="header__search__access">
                  <NavLink className="header__search__access--light"
                  style={({ isActive}) =>{
                      return{ 
                          fontWeight: isActive ? 'normal' : '',
                          color: isActive ? '#474747' : '',
                      
                          };
                          }}
                  >Cadastre-se
                  </NavLink>
                  <NavLink className="header__search__access--solid"
                  style={({ isActive}) =>{
                      return{ 
                          fontWeight: isActive ? 'bold' : '',
                          color: isActive ? '#ffff' : '',
                          textDecoration: isActive ? "none" : "",
                          };
                          }}
                  >Entrar</NavLink>
              </div>
              <NavLink to="/carrinho">
                <img src={carrinho}/>
              </NavLink>
          </div>
          <div className="header__menu">
              <ul className="header__menu__navbar">
                  <NavLink to='/' style={{textDecoration:"none"}} className="header__menu__navbar__item">Home</NavLink>
                  <NavLink to='/categorias' style={{textDecoration:"none"}} className="header__menu__navbar__item">Categorias</NavLink>
                  <NavLink to='/meuspedidos' style={{textDecoration:"none"}} className="header__menu__navbar__item">Meus Pedidos</NavLink>
              </ul>
          </div>
    </header>
      {/* <header className="flex flex-column h-12rem justify-content-around align-items-center" style={{ width: "1440px", backgroundColor: "blue"}}>
        <div className='flex flex-row align-items-center justify-content-between gap-7' style={{width: "86%", backgroundColor: "yellow"}}>
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
            <Button 
              style={{ color: '#fff',width:"114px", height:"40px"}}
              label='Entrar'
              type='submit'
            />
            </div>
            <NavLink to="/carrinho">
              <img src={carrinho}/>
            </NavLink>
        </div>
        <div style={{width: "86%", backgroundColor: "yellow"}}>
          <TabMenu model={menu} className="flex flex-row p-2" onClick={menu.index}/>
        </div>
      </header> */}
      </>
        
    )
}


export default Header;