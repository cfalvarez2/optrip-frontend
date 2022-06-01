import styled from "styled-components";


export const PageContainer = styled.div`
    height: fit-content;
    display: flex;
    /* border: 3px solid #283346; */
    /* border-radius: 10px; */
    justify-content: center;
    display: flex;
    flex-direction: column;
`

/* Unused */
// export const HeaderImageContainer = styled.div`
//     flex: 1;
//     display: flex;
//     max-width: 100%;
//     max-height: 100%;
//     justify-content: center;
//     justify-items: center;
//     align-items: center;
//     align-content: center;
//     flex-direction: column;
// `

// export const OneFlexContainer = styled.div`
//     flex: 1;
//     justify-content: center;
//     justify-items: center;
//     align-items: center;
//     align-content: center;
// `
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

export const LandingFormContainer = styled.div`
    padding: 4vh 1vw;
    margin: 2vh 1vw;
    height: fit-content;
    flex: 1;
    display: flex;
    border: 3px solid #283346;
    border-radius: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const InstructionContainer = styled.div`
    flex: 1;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
`

export const Instruction = styled.h1`
    text-align: center;
    font-size: 34px;
`

export const Optional = styled.h2`
    text-align: center;
    font-size: 20px;
    opacity: 70%;
`

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
    max-width: 100%;
`

export const FormRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    margin: 0 5vw;
    max-width: 100%;
`

export const FormColumn = styled.div`
    margin: 2% 0;
    flex: 1;
    display: flex;
    justify-content: 'center';
    justify-items:  'center';
`

export const DateContainer = styled.div`
    display: flex;
    transform: translate(0% , 25%);
    z-index: 2;
`
export const DateLabel = styled.h4`
    transform: translate(100%,-220%);
    font-size: 20px;
    font-weight: bold;
    color: #283346;
`
export const StyledButton = styled.button`
display: inline-block;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid blakc;
border-radius: 3px;
display: block;
background:teal
`
