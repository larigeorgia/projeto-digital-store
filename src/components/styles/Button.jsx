import styled from "styled-components";
// import Button from "./Button";



export const Button = styled.button`
    background-color: ${ prop => prop.backgroundColor ? prop.backgroundColor : 'pink'};
    color: ${(prop) => prop.color};
    width: ${({theme}) => theme.sizeButtons.s.width};
    height: ${({theme}) => theme.sizeButtons.s.height};
    border-radius: ${(prop) => prop.borderRadius};
    border: 0;
`

// export const ButtonStyled = styled(Button)`
//     background-color: lightblue;
//     width: 100px;
//     height: 50px;
// `

