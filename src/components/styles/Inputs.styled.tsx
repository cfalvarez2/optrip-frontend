import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    id: string;
    label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
}

const InputGroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    width: 100%;
    max-width: 100%;
`;

const InputLabel = styled.label`
    flex: 1;
    position: relative;
    transform: translate(8%,-220%);
    max-width: 80%;
    transition: 300ms;
    font-size: 20px;
    font-weight: bold;
    color: #283346;
`;

const InputField = styled.input`
    position: relative;
    transform: translate(6.5% , 50%);
    outline: none;
    flex: 2;
    width: 93%;
    max-width: 100%;
    padding: 0.5em 0.2em;
    border: 2px solid #49837c;
    font-size: 18px;
    border-radius: 30px;

    &:focus
    {
    border: 3px solid #49837c;
    }

    &:focus + ${InputLabel}
    {
    font-size:14px;
    padding: 0 3px;
    color: #4760F6;
    transition: 300ms;
    }
    &:hover {
        opacity: 80%;
    }
`;

const SelectField = styled.select`
    position: relative;
    transform: translate(6.5% , 50%);
    outline: none;
    flex: 2;
    width: 93%;
    max-width: 100%;
    padding: 0.5em 0.2em;
    border: 2px solid #49837c;
    font-size: 18px;
    border-radius: 30px;
    background-color: #deaf63;

    &:focus
    {
    border: 3px solid #49837c;
    }

    &:focus + ${InputLabel}
    {
    font-size:14px;
    padding: 0 10px;
    color: #7b5b27;
    transition: 300ms;
    }
    &:hover {
        opacity: 80%;
    }
`;

export const TextInput: React.FC<InputProps> = ({ id, label, ...rest }) => {
    
    return (
        <InputGroup>
            <InputField id={id} {...rest} />
            <InputLabel htmlFor={id} id={id}>{label}</InputLabel>
        </InputGroup>
    );
}

export const SelectInput: React.FC<SelectProps> = ({ id, label, ...rest }) => {
    return (
      <InputGroup>
          <SelectField id={id} {...rest} />
          <InputLabel htmlFor={id} id={id} >{label}</InputLabel>
      </InputGroup>
    );
  }