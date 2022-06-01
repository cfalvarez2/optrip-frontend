import {   StyledProductList, Header,PageContainer, Image } from "./styles/Flights.styled";
import Flight from './Flight';
import { useEffect, useState } from "react";
import { FlightContainer, Item } from "./styles/Flight.styled";
import Logo from '../optriplogo.png';
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function FlightsDisplay() {
    const data = useParams()
    var date = new Date(data.date)
    console.log(getFormattedDate(date))
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
    useEffect(() => {
        axios.get(`$http://localhost:5000/flights`,
        {params:{origin: "SCL", destination: "CCP", date: "31/05/2022"}}
        ).then(( response ) => {
            console.log(response)
          })
        })
        function getFormattedDate(date:Date) {
            var year = date.getFullYear();
          
            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;
          
            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;
            
            return month + '/' + day + '/' + year;
          }
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

