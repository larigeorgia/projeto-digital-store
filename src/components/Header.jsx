// import styled from "styled-components";
import { Button } from "./styles/Button"
import { Logo } from "../components/styles/Logo"
import theme from "../theme"
import LogoHeader from '../assets/logo-header.svg'
import { Input } from "../components/styles/Input"
import  Nav, { StyledLink }  from "../components/Nav"
import { Container } from "./Container"
// import Image from "react"
// import Lupa from "../assets/lupa.svg"


// export const StyledHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     justifyContent: space-around;
//     alignItems: space-around;
//     background-Color: ${({theme}) => theme.colors.white};
//     width:100vw;
//     height: 192px;
// `
function Header(){
    return(
      <>
            <Container
              display = "flex"
              flexDirection ="column"
              justifyContent = "space-around"
              alignItems = "space-around"
              width = "100vw"
              height = "192px"
            >
            <Container 
              display = "flex"
              flexDirection ="row"
              justifyContent = "space-evenly"
              alignItems = "center">
              <StyledLink to="/">
                <Logo src = {LogoHeader}/>
              </StyledLink>
              <Input/>
              <StyledLink to="/">Cadastre-se</StyledLink>
              <Button 
                onClick={()=> console.log("clicou")}
                backgroundColor = {theme.colors.primary} 
                color={theme.colors.white}
                width= {theme.sizeButtons.s.width} 
                height = {theme.sizeButtons.s.height}
                borderRadius = {theme.borderRadius.m}
              >Entrar</Button>
              {/* <Image src = {Lupa}/> */}
              {/* Verificar importacao da lupa e do carrinho, a lupa ta dando um erro ainda nao identifiquei */}
            </Container>
            <Nav />
            </Container>
      </>
        
    )
}


export default Header;