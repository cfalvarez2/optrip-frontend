import { StyledProductList, Header, Info, PageContainer, Image } from "./styles/Trips.styled";
import Flight from "./Flight";
import { useEffect, useState } from "react";
import Logo from "../optriplogo.png";
import { LinearProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Instruction } from "./styles/LandingForm.styled";
import Bus from "./Bus";
import ciudadesCodigosDict from '../ciudades_codigos.json'
export default function FlightsDisplay() {
    interface CustomizedState {
        From: any,
        To:any,
        Date:Date
        TransportMean: String,
        MaxCost: Number, 
        MaxTime: Number
      }
    const [count, setCount] = useState(0)
    const location = useLocation()
    const state = location.state as CustomizedState
    const from = state.From
    const to = state.To
    const TransportMean = state.TransportMean
    const MaxCost = Number(state.MaxCost)
    const MaxTime = Number(state.MaxTime)
    var date = new Date(state.Date)
    const [Flights, setFlights]  = useState([]);
    const [Buses, setBuses]  = useState([]);
    const [Trips, setTrips]  = useState([]);
    const [fetching, setFetching] = useState(true)
    useEffect(()=>{if (count===0){
      if(TransportMean === "Avion"){getFlights()}
      else if (TransportMean === "Bus") {getBuses()}
      else{(getBusesandFlights())}
      setCount(1)}
  },[]
  )
  useEffect(()=>{
    setTrips(Trips.concat(Buses))
    setTrips(Trips.concat(Flights))
    setTrips(Flights.concat(Buses))
  },[Flights, Buses])
    const getFlights = ()=>{
    const payload = JSON.stringify({origin: from.codigo, destination: to.codigo, date: getFormattedDate(date)})
        axios.post("http://localhost:5000/flights",
        JSON.parse(payload),
        ).then(( response ) => {
            const flights = response.data.flights
            let newArrayFlights=flights.map(function(ele:any){
       
              return {...ele,Flight:true};
            })
            setTrips(newArrayFlights)
            setFetching(false)
          })
    }
    const getBuses = ()=>{
        const payload = JSON.stringify({origin: from.nombre, destination:to.nombre , date: getFormattedDate(date)})
            axios.post("http://localhost:5000/bus_trips",
            JSON.parse(payload),
            ).then(( response ) => {
                const buses = response.data.bus_trips
                let newArrayBuses=buses.map(function(ele:any){
       
                  return {...ele,Flight:false};
                })       
                setTrips(newArrayBuses)
                setFetching(false)
              })
        }
    const getBusesandFlights = ()=>{
        const payload = JSON.stringify({origin: from.codigo, destination: to.codigo, date: getFormattedDate(date)})
        axios.post("http://localhost:5000/flights",
        JSON.parse(payload),
        {headers: {'Content-Type': 'application/json'}}
        ).then(( response ) => {
            const flights = response.data.flights
            let newArrayFlights=flights.map(function(ele:any){
       
              return {...ele,Flight:true};
            })            
            setFlights(newArrayFlights)
            
          }).then( (response) => {

          const payloadBuses = JSON.stringify({origin: from.nombre, destination:to.nombre , date: getFormattedDate(date)})
          axios.post("http://localhost:5000/bus_trips",
          JSON.parse(payloadBuses),
          ).then(( response ) => {
              const buses = response.data.bus_trips
              buses.map((obj: any)=> ({ ...obj, Flight: false}))
              let newArrayBuses=buses.map(function(ele:any){
       
                return {...ele,Flight:false};
              })
              setBuses(newArrayBuses)
              setFetching(false)
            })
          }

          )
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
        MaxTime!==0 && MaxCost!==0 ? ( obj.cost <= MaxCost && obj.duration <= MaxTime):(MaxCost!==0 ? (obj.cost <= MaxCost):(MaxTime!==0 ?(obj.duration <= MaxTime):(obj))))}
        

  return !fetching ? (
    Trips  && Trips.filter(filterByPriceAndTime).length>0 ?(  
      <PageContainer>
        {/*hacer que aumente a medida que avanza el request*/}

        <Image src={Logo} />
        <Header> Opciones de viajes </Header>
        <Info>
          {from.nombre} - {to.nombre}
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
  )
  
;
}
