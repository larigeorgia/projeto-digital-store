import styled from "styled-components";


export const Container = styled.div`
    display: ${prop => prop.display};
    flex-direction: ${prop => prop.flexDirection};
    justify-content: ${prop => prop.justifyContent};
    align-items: ${prop => prop.alignItems};
    background-Color: ${({theme}) => theme.colors.white};
    width: ${prop => prop.width};
    height: ${prop => prop.height};
`