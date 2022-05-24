import {   StyledProductList, Header,PageContainer, Image } from "./styles/Flights.styled";
import Flight from './Flight';
import { useEffect, useState } from "react";
import { FlightContainer, Item } from "./styles/Flight.styled";
import Logo from '../optriplogo.png';
import { LinearProgress } from "@mui/material";


export default function Cart() {
    const [Flights, setFlights]  = useState([ 
        {key: 1, name: 'Vuelo 1', price: 1, takeoff_time: 'Hora 1',duration: 'Duracion'},
        {key: 2, name: 'Vuelo 2', price: 2, takeoff_time: 'Hora 2',duration: 'Duracion'},
        {key: 3, name: 'Vuelo 3', price: 3, takeoff_time: 'Hora 3',duration: 'Duracion'},
        {key: 4, name: 'Vuelo 4', price: 4, takeoff_time: 'Hora 4',duration: 'Duracion'},
        {key: 5, name: 'Vuelo 5', price: 5, takeoff_time: 'Hora 5',duration: 'Duracion'}
    ]);

    useEffect(() => {
        setFlights(Flights);
    }, [setFlights])
    const [fetching, setFetching] = useState(true)

    return !fetching ? (
        <PageContainer>
                        
            {/*hacer que aumente a medida que avanza el request*/}

            <Image src={Logo} />
        <Header> Opciones de vuelos </Header>
        <StyledProductList>
            { Flights.map( (flight) => (<div> <FlightContainer><Flight flight={flight} key={flight.key} > </Flight>

            </FlightContainer></div> )) }

        </StyledProductList>

        
        </PageContainer>
    ):(<div><LinearProgress/>
    <button onClick={() => setFetching(false)} > View</button>
    </div>)
}

