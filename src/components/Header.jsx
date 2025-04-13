import { NavLink } from "react-router-dom"
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/Frame53660.png'
import PropTypes from "prop-types"

 
function Header({value}){

    const header_home = (
        <header className="header">
                <div className="header__container">
                <div className="header__container__search">
                <NavLink to="/">
                    <img src={logo}/>
                </NavLink>
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
    )

    const header_login_cadastro = (
        <header className="header">
            <div className="header__container">
                <div className="header__container__search">
                <NavLink to="/">
                    <img src={logo}/>
                </NavLink>
                </div>
                </div>
            </header>
    )


    return(
       <div>    
        {(value==1)?<div>{header_home}</div>:<div>{header_login_cadastro}</div>}
       </div>
       
    )
}

Header.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Header