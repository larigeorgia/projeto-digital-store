import { NavLink} from "react-router-dom";
import logo from '../../assets/logo-footer.svg'
import CardInformations from "./CardInformations";
import {dadosInformacoes, dadosCategorias, dadosContatos} from "../../../src/components/Footer/data";



function Footer() {

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container__social">
            <NavLink to="/">
                <img src={logo}/>
            </NavLink>
            <p className="footer__container__social__sobre">Lorem ipsum dolor sit amet,      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <ul className="footer__container__social__media">
                <li>
                  <a className="footer__container__social__media__icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="footer__container__social__media__icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="footer__container__social__media__icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
          </div>
          <CardInformations title={"Informações"} dados={dadosInformacoes}/>
          <CardInformations title={"Categorias"} dados={dadosCategorias}/>
          <CardInformations title={"Contato"} dados={dadosContatos}/>
          </div>
        <div className="footer__container__rodape">
          <hr/>
          <p>&copy;2024 Digital College</p>
        </div>
      </footer>
    </>
   
  )
}


export default Footer;