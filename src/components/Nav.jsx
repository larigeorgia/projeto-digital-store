import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 32px;
    background-color: ${({theme}) => theme.colors.white};
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    text-decoration-line: none;
    color: ${({theme}) => theme.colors.dark_gray_2};
    background-color: ${({theme}) => theme.colors.white};
`

function Nav() {
  return (
    <>
        <Container>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/productlist" >Produtos</StyledLink>
            <StyledLink to="/productdetail">Categorias</StyledLink>
            <StyledLink to="/">Meus Pedidos</StyledLink>
        </Container>
    </>
  )
}

export default Nav
