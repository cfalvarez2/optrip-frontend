import { Item, Icon, FlightContainer } from "./styles/Flight.styled";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export default function Flight(props: any) {
  var num = parseInt(props.flight.duration);
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    <FlightContainer>
      <Icon>
        <AirplanemodeActiveIcon style={{ fontSize: "80px" }}></AirplanemodeActiveIcon>
      </Icon>
      <Item> Precio: ${props.flight.cost} </Item>
      <Item>
        {" "}
        Duracion: {rhours > 0 ? rhours + ":" : null}
        {rminutes}
        {rhours == 0 ? " minutos" : " horas"}
      </Item>
      <Item> Hora de salida: {props.flight.departure_time} </Item>
    </FlightContainer>
  );
}
