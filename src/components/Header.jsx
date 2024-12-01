import { NavLink } from "react-router-dom";
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/Frame53660.png'
 
function Header(){
    return(
      <>
        <header className="header">
        <div className="header__container">
          <div className="header__container__search">
          {/* <NavLink to="/">
              <img src={logo}/>
          </NavLink> */}
          <img src={logo}/>
              <form className="header__container__search__products">
                  <input className="header__container__search__input" 
                      type="search" 
                      placeholder="Pesquisar produtos..."
                      name="pesquisar"
                  />
                  <span className="header__container__search__icon"><i className="fa-solid fa-magnifying-glass"></i></span>
              </form>
              
              <div className="header__container__search__access">
                  <NavLink to='/criacaodeconta' className="header__container__search__access--light"
                  style={({ isActive}) =>{
                      return{ 
                          fontWeight: isActive ? 'normal' : '',
                          color: isActive ? '#474747' : '',
                      
                          };
                          }}
                  >Cadastre-se
                  </NavLink>
                  <NavLink to="/login" className="header__container__search__access--solid"
                  style={{color:'#ffff', textDecoration: 'none'}}
                  // style={({ isActive}) =>{
                  //     return{ 
                  //         fontWeight: isActive ? 'bold' : '',
                  //         // color: isActive ? '#ffff' : '',
                  //         textDecoration: isActive ? "none" : "",
                  //         };
                  //         }}
                  >Entrar</NavLink>
              </div>
              <NavLink to="/carrinho">
                <img src={carrinho}/>
              </NavLink>
          </div>
          <div className="header__container__menu">
              <ul className="header__container__menu__navbar">
                  <NavLink to='/' style={{textDecoration:"none"}} className="header__container__menu__navbar__item">Home</NavLink>
                  <NavLink to='/productlist' style={{textDecoration:"none"}} className="header__container__menu__navbar__item">Produtos</NavLink>
                  <NavLink to='/productdetail' style={{textDecoration:"none"}} className="header__container__menu__navbar__item">Categorias</NavLink>
                  <NavLink to='/productdetail' style={{textDecoration:"none"}} className="header__container__menu__navbar__item">Meus Pedidos</NavLink>
              </ul>
          </div>
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