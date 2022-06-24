import { Item, Icon, TripContainer } from "./styles/Trip.styled";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
export default function Bus(props: any) {
  var num = parseInt(props.bus.duration);
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    <TripContainer>
      <Icon>
        <DirectionsBusIcon style={{ fontSize: "80px" }}></DirectionsBusIcon>
      </Icon>
      <Item> Precio: ${props.bus.cost} </Item>
      <Item>
        {" "}
        Duracion: {rhours > 0 ? rhours + ":" : null}
        {rminutes}
        {rhours == 0 ? " minutos" : " horas"}
      </Item>
      <Item> Hora de salida: {props.bus.departure_time} </Item>
    </TripContainer>
  );
}
