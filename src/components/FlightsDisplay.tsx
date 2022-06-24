import { StyledProductList, Header, Info, PageContainer, Image } from "./styles/Flights.styled";
import Flight from "./Flight";
import { useEffect, useState } from "react";
import { FlightContainer, Item } from "./styles/Flight.styled";
import Logo from "../optriplogo.png";
import { LinearProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Instruction } from "./styles/LandingForm.styled";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";

export default function FlightsDisplay() {
  interface CustomizedState {
    From: String;
    To: String;
    Date: Date;
  }
  const location = useLocation();
  const state = location.state as CustomizedState;
  const from = state.From;
  const to = state.To;
  var date = new Date(state.Date);
  console.log(getFormattedDate(date));
  const [Flights, setFlights] = useState([
    { key: 1, cost: "100000", duration: 15, departure_time: "8:00" },
    { key: 2, cost: "250000", duration: 85, departure_time: "9:00" },
    { key: 3, cost: "350000", duration: 512, departure_time: "10:00" },
    { key: 4, cost: "410000", duration: 30, departure_time: "10:00" },
  ]);

  useEffect(() => {
    setFlights(Flights);
  }, [setFlights]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    getFlights();
  });
  const getFlights = () => {
    const payload = JSON.stringify({ origin: from, destination: to, date: getFormattedDate(date) });
    axios.post("http://localhost:5000/flights", JSON.parse(payload)).then((response) => {
      console.log(response);
      const flights = response.data.flights;
      setFlights(flights);
      setFetching(false);
    });
  };
  function getFormattedDate(date: Date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return day + "/" + month + "/" + year;
  }
  return !fetching ? (
    Flights ? (
      <PageContainer>
        {/*hacer que aumente a medida que avanza el request*/}

        <Image src={Logo} />
        <Header> Opciones de viajes </Header>
        <Info>
          {from} - {to}
        </Info>
        <StyledProductList>
          {Flights.map((flight) => (
            <Flight flight={flight} key={flight.key}>
              {" "}
            </Flight>
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
