import {   StyledProductList, Header,PageContainer, Image } from "./styles/Flights.styled";
import Flight from './Flight';
import { useEffect, useState } from "react";
import { FlightContainer, Item } from "./styles/Flight.styled";
import Logo from '../optriplogo.png';
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Instruction } from "./styles/LandingForm.styled";

export default function FlightsDisplay() {
    const data = useParams()
    var date = new Date(data.date)
    console.log(getFormattedDate(date))
    const [Flights, setFlights]  = useState([]);

    useEffect(() => {
        setFlights(Flights);
    }, [setFlights])
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
            getFlights()
      });
    const getFlights = ()=>{
    const payload = JSON.stringify({origin: data.from, destination: data.to, date: getFormattedDate(date)})
        axios.post("http://localhost:5000/flights",
        JSON.parse(payload)
        ).then(( response ) => {
            console.log(response)
            const flights = response.data.flights
            setFlights(flights)
            setFetching(false)
          })
    }
        function getFormattedDate(date:Date) {
            var year = date.getFullYear();
          
            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;
          
            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;
            
            return day + '/' + month + '/' + year;
          }
    return !fetching  ? (Flights?(
        <PageContainer>
                        
            {/*hacer que aumente a medida que avanza el request*/}

            <Image src={Logo} />
        <Header> Opciones de vuelos </Header>
        <StyledProductList>
            { Flights.map( (flight) => (<div> <FlightContainer><Flight flight={flight} key={flight.key} > </Flight>

            </FlightContainer></div> )) }
        

        </StyledProductList>

        
        </PageContainer>):(<Instruction>No hay vuelos disponibles</Instruction>)
    ):(<div><LinearProgress/>
    <Instruction>Esto puede tomar unos segundos</Instruction>
    </div>)
}

