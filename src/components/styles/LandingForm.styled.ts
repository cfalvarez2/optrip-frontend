import styled from "styled-components";
import background_image from "../../wallpaper.jpg";

export const PageContainer = styled.div`
  height: 90vh;
  width: 99vw;
  display: flex;
  /* border: 3px solid #283346; */
  /* border-radius: 10px; */
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

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
  font-size: 40px;
  color: teal;
  &:hover {
    opacity: 70%;
  }
`;
export const Image = styled.img`
  flex: 1;
  max-width: 7vw;
  opacity: 90%;
  position: absolute;
  top: 1vh;
  left: 3vw;
`;

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
  background: url(${background_image});
  background-size: 100vw 100vh;
`;

export const InstructionContainer = styled.div`
  flex: 1;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

export const Instruction = styled.h1`
  text-align: center;
  font-size: 34px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const Optional = styled.h2`
  text-align: center;
  font-size: 20px;
  opacity: 70%;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 5vw;
  max-width: 100%;
`;

export const FormRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 0 5vw;
  max-width: 100%;
`;

export const FormColumn = styled.div`
  margin: 2% 0;
  flex: 1;
  display: flex;
  justify-content: "center";
  justify-items: "center";
`;

export const DateContainer = styled.div`
  display: flex;
  transform: translate(0%, 25%);
  z-index: 2;
`;
export const DateLabel = styled.h4`
  transform: translate(100%, -220%);
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const StyledButton = styled.button`
  background: teal;
  display: block;
  cursor: pointer;
  color: #ffff;
  margin-top: 0.75em;
  padding: 0.25em 1em;
  font-size: 16px;
  border: 2px solid #283346;
  flex: 1;
  touch-action: manipulation;
  border-radius: 30px;
  font-weight: 600;
  padding: 0.5em 0.2em;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 0.03em;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    background-color: #3e8ffa;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
