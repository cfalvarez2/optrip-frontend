import React from "react";
import styled from "styled-components";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   id: string;
//   label: string;
// }
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}
interface BarOpenedProp extends React.InputHTMLAttributes<HTMLInputElement> {
  barOpened: boolean;
}

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  width: 100%;
  max-width: 100%;
`;
const MeanInputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  width: 30%;
  max-width: 100%;
`;
const InputLabel = styled.label`
  flex: 1;
  position: relative;
  transform: translate(8%, -220%);
  max-width: 80%;
  transition: 300ms;
  font-size: 20px;
  font-weight: bold;
  color: #ffff;
  /* color: #283346; */
`;

const SelectField = styled.select`
  position: relative;
  transform: translate(6.5%, 50%);
  outline: none;
  flex: 2;
  width: 93%;
  max-width: 100%;
  padding: 0.5em 0.2em;
  border: 2px solid #49837c;
  font-size: 18px;
  border-radius: 30px;

  &:focus {
    border: 3px solid #49837c;
  }

  &:focus + ${InputLabel} {
    font-size: 14px;
    padding: 0 10px;
    padding-bottom: 3px;
    color: #59411b;
    transition: 300ms;
  }
  &:hover {
    opacity: 80%;
  }
`;

export const Form = styled.form<BarOpenedProp>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "17rem" : "1rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 1rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  left: 15vw;
`;

export const Input = styled.input<BarOpenedProp>`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 80%;
  margin-left: ${(props) => (props.barOpened ? "2rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const IconButton = styled.button<BarOpenedProp>`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

// export const TextInput: React.FC<BarOpenedProp> = ({
//   id,
//   barOpened,
//   ...rest
// }) => {
//   return (
//     <InputGroup>
//       <InputField id={id} {...rest} />
//       <InputLabel htmlFor={id} id={id}>
//         {label}
//       </InputLabel>
//     </InputGroup>
//   );
// };
// export const TextInput: React.FC<InputProps> = ({ id, label, ...rest }) => {
//   return (
//     <InputGroup>
//       <InputField id={id} {...rest} />
//       <InputLabel htmlFor={id} id={id}>
//         {label}
//       </InputLabel>
//     </InputGroup>
//   );
// };

export const SelectInput: React.FC<SelectProps> = ({ id, label, ...rest }) => {
  return (
    <InputGroup>
      <SelectField id={id} {...rest} />
      <InputLabel htmlFor={id} id={id}>
        {label}
      </InputLabel>
    </InputGroup>
  );
};

export const MeanSelectInput: React.FC<SelectProps> = ({ id, label, ...rest }) => {
  return (
    <MeanInputGroup>
      <SelectField id={id} {...rest} />
      <InputLabel htmlFor={id} id={id}>
        {label}
      </InputLabel>
    </MeanInputGroup>
  );
};

// const InputField = styled.input`
//   position: relative;
//   transform: translate(6.5%, 50%);
//   outline: none;
//   flex: 2;
//   width: 93%;
//   max-width: 100%;
//   padding: 0.5em 0.2em;
//   border: 2px solid #49837c;
//   font-size: 18px;
//   border-radius: 30px;

//   &:focus {
//     border: 3px solid #49837c;
//   }

//   &:focus + ${InputLabel} {
//     font-size: 14px;
//     padding: 0 3px;
//     color: #4760f6;
//     transition: 300ms;
//   }
//   &:hover {
//     opacity: 80%;
//   }
// `;
