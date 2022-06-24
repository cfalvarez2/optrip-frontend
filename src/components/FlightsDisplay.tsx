import { StyledProductList, Header, Info, PageContainer, Image } from "./styles/Trips.styled";
import Flight from "./Flight";
import { useEffect, useState } from "react";
import Logo from "../optriplogo.png";
import { LinearProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Instruction } from "./styles/LandingForm.styled";
import Bus from "./Bus";

export default function FlightsDisplay() {
    interface CustomizedState {
        From: String,
        To:String,
        Date:Date
        TransportMean: String,
        MaxCost: Number, 
        MaxTime: Number
      }
    const location = useLocation()
    const state = location.state as CustomizedState
    const from = state.From
    const to = state.To
    const TransportMean = state.TransportMean
    const MaxCost = Number(state.MaxCost)
    const MaxTime = Number(state.MaxTime)
    console.log("MAXTime", MaxTime)
    console.log("MaxCost", MaxCost)
    var date = new Date(state.Date)
    console.log(getFormattedDate(date))
    const [Trips, setTrips]  = useState([]);
    useEffect(() => {
        setTrips(Trips);
    }, [setTrips])
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        TransportMean === "Avion"?(getFlights()):
        ( TransportMean === "Bus" ? (getBuses()):
        (getBusesandFlights()))
            
      });
    const getFlights = ()=>{
    const payload = JSON.stringify({origin: from, destination: to, date: getFormattedDate(date)})
        axios.post("http://localhost:5000/flights",
        JSON.parse(payload),
        ).then(( response ) => {
            console.log(response)
            const flights = response.data.flights
            flights.map((obj: any) => ({ ...obj, Flight: true}))
            setTrips(flights)
            setFetching(false)
          })
    }
    const getBuses = ()=>{
        console.log("Search Buses")
        const payload = JSON.stringify({origin: from, destination: to, date: getFormattedDate(date)})
        console.log(payload)
            axios.post("http://localhost:5000/bus_trips",
            JSON.parse(payload),
            ).then(( response ) => {
                console.log(response)
                const buses = response.data.flights
                buses.map((obj: any)=> ({ ...obj, Flight: false}))
                setTrips(buses)
                setFetching(false)
              })
        }
    const getBusesandFlights = ()=>{
        const payload = JSON.stringify({origin: from, destination: to, date: getFormattedDate(date)})
        axios.post("http://localhost:5000/flights",
        JSON.parse(payload),
        ).then(( response ) => {
            console.log(response)
            const flights = response.data.flights
            flights.map((obj: any) => ({ ...obj, Flight: true}))
            setTrips(flights)
            setFetching(false)
          })
        axios.post("http://localhost:5000/bus_trips",
        JSON.parse(payload),
        ).then(( response ) => {
            console.log(response)
            const buses = response.data.flights
            buses.map((obj: any)=> ({ ...obj, Flight: false}))
            setTrips(Trips+buses)
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
    const filterByPriceAndTime = (obj:any) => {
        return(
        MaxTime!==0 && MaxCost!==0 ? ( obj.cost <= MaxCost && obj.duration <= MaxTime):(MaxCost!==0 ? (obj.cost <= MaxCost):(obj.duration <= MaxTime)))}
        

  return !fetching ? (
    Trips  && Trips.filter(filterByPriceAndTime).length>0 ?(
      <PageContainer>
        {/*hacer que aumente a medida que avanza el request*/}

        <Image src={Logo} />
        <Header> Opciones de viajes </Header>
        <Info>
          {from} - {to}
        </Info>
        <StyledProductList>
          {Trips.filter(filterByPriceAndTime).map((trip:any) => (
              trip.Flight === true?(
            <Flight flight={trip} key={trip.key}>
              {" "}
            </Flight>):(
            <Bus bus={trip} key={trip.key}>
                            {" "}
            </Bus>
            )
          ))}
        </StyledProductList>
      </PageContainer>
    ) : (
      <Instruction>No hay vuelos disponibles</Instruction>
    )
  ) : (
    <div>
      <LinearProgress />
      <Instruction>Esto puede tomar unos segundos</Instruction>
    </div>
  );
}
