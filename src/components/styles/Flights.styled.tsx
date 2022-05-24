import styled from "styled-components";


export const Header = styled.h1`
    text-align: center;
    font-size: 60px;
    color: teal;
    &:hover {
        opacity: 70%;
    }
`
export const Image = styled.img`
    flex: 1;
    max-width: 10vw;
    opacity: 90%;
`
export const PageContainer = styled.div`
    height: fit-content;
    display: flex;
    /* border: 3px solid #283346; */
    /* border-radius: 10px; */
    justify-content: center;
    display: flex;
    flex-direction: column;
`


export const StyledProductList = styled.div`
    display: auto;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;
`
