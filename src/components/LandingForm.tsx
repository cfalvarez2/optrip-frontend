import React, {useReducer, useState} from "react";
import { Image, Header, LandingFormContainer, PageContainer, InstructionContainer, Instruction, FormContainer, FormColumn, DateContainer, DateLabel, FormRow, Optional, StyledButton } from "./styles/LandingForm.styled";
import { TextInput, SelectInput } from "./styles/Inputs.styled";
import {default as ciudades} from '../ciudades_codigos.json';
import Logo from '../optriplogo.png';
import {DateRangeInput, DateSingleInput, Datepicker} from '@datepicker-react/styled';
import { ThemeProvider } from "styled-components";
import FlightsDisplay from "./FlightsDisplay";
import { Link } from "react-router-dom";
const initialState = {
    date: new Date(),
    showDatepicker: false,
  }
  
  function reducer(state : any, action : any ) {
    switch (action.type) {
      case 'focusChange':
        return {...state, showDatepicker: action.payload}
      case 'dateChange':
        return action.payload
      default:
        throw new Error()
    }
  }

export default function LandingForm() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [From, setFrom] = useState('SCL');
    const [To, setTo] = useState('SCL');
    const [SearchDate, setSearchDate] = useState(new Date());
    const [MaxTime, setMaxTime] = useState('');
    const [MaxCost, setMaxCost] = useState('');

    return (
        <>
        {console.log(From)}
        {console.log(To)}
        {console.log(state.date)}
        {console.log(MaxTime)}
        {console.log(MaxCost)}
        <PageContainer>
       
            <Image src={Logo} />
            <Header>OPTRIP</Header>
            <LandingFormContainer>
                <InstructionContainer>
                    <Instruction>Ingresa los parámetros solicitados para realizar la búsqueda: </Instruction>
                </InstructionContainer>
                <FormContainer>
                    <FormRow>
                        <FormColumn>
                            <SelectInput required id={'origen'} label={'Origen'} onChange={(input) => setFrom(input.target.value) }>
                            {ciudades.map((ciudad) => {
                                return <option key={ciudad.codigo}>{ciudad.codigo}</option>;
                            })}
                            </SelectInput>
                        </FormColumn>
                        <FormColumn>
                            <SelectInput required id={'origen'} label={'Destino'} onChange={(input) => setTo(input.target.value) }>
                            {ciudades.map((ciudad) => {
                                return <option key={ciudad.codigo}>{ciudad.codigo}</option>;
                            })}
                            </SelectInput>
                        </FormColumn>
                        <FormColumn>
                            <DateContainer>
                                <DateLabel>Fecha</DateLabel>
                                <DateSingleInput
                                onDateChange={data => dispatch({type: 'dateChange', payload: data})}
                                onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                                date={state.date} // Date or null
                                showDatepicker={state.showDatepicker} // Boolean
                                />
                            </DateContainer>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <InstructionContainer>
                            <Optional>Valores opcionales, "Tiempo" en horas y "Presupuesto" en CLP</Optional>
                        </InstructionContainer>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <TextInput type="number" required id="Tiempo Max" label="Tiempo Max" onChange={(input) => setMaxTime(input.target.value) }/>
                        </FormColumn>
                        <FormColumn>
                            <TextInput type="number" required id="Presupuesto" label="Presupuesto" onChange={(input) => setMaxCost(input.target.value) }/>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                    <FormColumn>
                            
                            <Link to="/flights" state={{From:From, To:To, Date:state.date}}>
                            <StyledButton>
                                Buscar
                            </StyledButton>
                                </Link>
                            
                            </FormColumn>
                    </FormRow>
                </FormContainer>
            </LandingFormContainer>
        </PageContainer>
        </>
    )
}