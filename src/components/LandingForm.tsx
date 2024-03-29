import React, { useReducer, useState, useRef } from "react";
import {
  Image,
  Header,
  LandingFormContainer,
  PageContainer,
  InstructionContainer,
  Instruction,
  FormContainer,
  FormColumn,
  DateContainer,
  DateLabel,
  FormRow,
  StyledButton,
} from "./styles/LandingForm.styled";
import { Form, IconButton, Input, MeanSelectInput, SelectInput } from "./styles/Inputs.styled";
import { default as ciudades } from "../ciudades_codigos.json";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Logo from "../optriplogo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { DateSingleInput } from "@datepicker-react/styled";
const initialState = {
  date: new Date(),
  showDatepicker: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "focusChange":
      return { ...state, showDatepicker: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

export default function LandingForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [From, setFrom] = useState({ nombre: "Santiago", codigo: "SCL" });
  const [To, setTo] = useState({ nombre: "Santiago", codigo: "SCL" });
  const [Mean, setMean] = useState("Avion");
  const [MaxTime, setMaxTime] = useState("");
  const [MaxCost, setMaxCost] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputCost, setInputCost] = useState("");
  const [barOpenedTime, setBarOpenedTime] = useState(false);
  const [barOpenedCost, setBarOpenedCost] = useState(false);
  const formRefTime = useRef();
  const formRefCost = useRef();
  const inputFocusTime: any = useRef();
  const inputFocusCost: any = useRef();
  const navigate = useNavigate();

  const onFormSubmitTime = (e: any) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInputTime("");
    setBarOpenedTime(false);
    // After form submit, do what you want with the input value
  };
  const onFormSubmit = (e: any) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInputCost("");
    setBarOpenedCost(false);
    // After form submit, do what you want with the input value
  };

  function onClickButton() {
    return <Navigate to="/flights" state={{ From: From, To: To, Date: state.date }} replace={true} />;
  }
  return (
    <>
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
                <SelectInput
                  required
                  id={"origen"}
                  label={"Origen"}
                  onChange={(input) => {
                    const input_json = JSON.parse(input.target.value);
                    setFrom(input_json);
                  }}
                >
                  {ciudades.map((ciudad) => {
                    return (
                      <option key={ciudad.codigo} value={`{"codigo":"${ciudad.codigo}", "nombre":"${ciudad.nombre}"}`}>
                        {ciudad.nombre}
                      </option>
                    );
                  })}
                </SelectInput>
              </FormColumn>
              <FormColumn>
                <SelectInput
                  required
                  id={"destino"}
                  label={"Destino"}
                  onChange={(input) => {
                    const input_json = JSON.parse(input.target.value);
                    setTo(input_json);
                  }}
                >
                  {ciudades.map((ciudad) => {
                    return (
                      <option key={ciudad.codigo} value={`{"codigo":"${ciudad.codigo}", "nombre":"${ciudad.nombre}"}`}>
                        {ciudad.nombre}
                      </option>
                    );
                  })}
                </SelectInput>
              </FormColumn>
              <FormColumn>
                <DateContainer>
                  <DateLabel>Fecha</DateLabel>
                  <DateSingleInput
                    onDateChange={(data) => dispatch({ type: "dateChange", payload: data })}
                    onFocusChange={(focusedInput) => dispatch({ type: "focusChange", payload: focusedInput })}
                    date={state.date} // Date or null
                    showDatepicker={state.showDatepicker} // Boolean
                  />
                </DateContainer>
              </FormColumn>
            </FormRow>
            <FormRow>
              <MeanSelectInput
                required
                id={"mean"}
                label={"Medio de transporte"}
                onChange={(input) => setMean(input.target.value)}
              >
                {["Avion", "Bus", "Ambos"].map((medio) => {
                  return <option key={medio}>{medio}</option>;
                })}
              </MeanSelectInput>
            </FormRow>
            <FormRow>
              <FormColumn>
                <Form
                  barOpened={barOpenedTime}
                  onClick={() => {
                    // When form clicked, set state of baropened to true and focus the input
                    setBarOpenedTime(true);
                    inputFocusTime.current.focus();
                  }}
                  // on focus open search bar
                  onFocus={() => {
                    setBarOpenedTime(true);
                    inputFocusTime.current.focus();
                  }}
                  // on blur close search bar
                  onBlur={() => {
                    setBarOpenedTime(false);
                  }}
                  // On submit, call the onFormSubmit function
                  onSubmit={onFormSubmit}
                  ref={formRefTime}
                  id="time"
                >
                  <IconButton type="submit" barOpened={barOpenedTime} id="time">
                    <AccessTimeIcon />
                  </IconButton>
                  <Input
                    id="time"
                    onChange={(e) => {
                      setMaxTime(e.target.value);
                      setInputTime(e.target.value);
                    }}
                    ref={inputFocusTime}
                    value={inputTime}
                    barOpened={barOpenedTime}
                    placeholder="Cantidad máxima de horas..."
                  />
                </Form>
              </FormColumn>
              <FormColumn>
                <Form
                  barOpened={barOpenedCost}
                  onClick={() => {
                    // When form clicked, set state of baropened to true and focus the input
                    setBarOpenedCost(true);
                    inputFocusCost.current.focus();
                  }}
                  // on focus open search bar
                  onFocus={() => {
                    setBarOpenedCost(true);
                    inputFocusCost.current.focus();
                  }}
                  // on blur close search bar
                  onBlur={() => {
                    setBarOpenedCost(false);
                  }}
                  // On submit, call the onFormSubmit function
                  onSubmit={onFormSubmit}
                  ref={formRefCost}
                  id="cost"
                >
                  <IconButton type="submit" barOpened={barOpenedCost} id="cost">
                    <AttachMoneyIcon />
                  </IconButton>
                  <Input
                    id="cost"
                    onChange={(e) => {
                      setMaxCost(e.target.value);
                      setInputCost(e.target.value);
                    }}
                    ref={inputFocusCost}
                    value={inputCost}
                    barOpened={barOpenedCost}
                    placeholder="Cantidad máxima de pesos"
                  />
                </Form>
              </FormColumn>
            </FormRow>
            <FormRow>
              <StyledButton
                onClick={() => {
                  navigate("/trips", {
                    replace: true,
                    state: {
                      From: From,
                      To: To,
                      Date: state.date,
                      TransportMean: Mean,
                      MaxTime: MaxTime,
                      MaxCost: MaxCost,
                    },
                  });
                }}
              >
                Buscar
              </StyledButton>
            </FormRow>
          </FormContainer>
        </LandingFormContainer>
      </PageContainer>
    </>
  );
}
