import styled from "styled-components";

export const Item = styled.div`
  color: teal;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 300;
  line-height: 32px;
  flex: 1;
`;

export const Icon = styled.div`
  font-size: large;
  flex: 1;
`;

export const TripContainer = styled.div`
  padding: 4vh 1vw;
  background: #283346;
  opacity: 90%;
  margin: 2vh 1vw;
  height: fit-content;
  flex: 1;
  display: flex;
  flex-direction: row;
  border: 3px solid #0e11173b;
  border-radius: 10px;
  justify-content: center;
  &:hover {
    opacity: 70%;
  }
`;
