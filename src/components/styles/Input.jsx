import styled from "styled-components";


export const Input = styled.input`
    width: 559px;
    height: 60px;
    border-radius:${({theme}) => theme.borderRadius.m};;
    border: 0px;
    background-color: ${({theme}) => theme.colors.light_gray_3};
`