import { Item } from './styles/Flight.styled'

export default function Flight(props : any) {

    return (
        <div>
            <Item> Precio: ${props.flight.cost} </Item>
            <Item> Duracion: {props.flight.duration} </Item>
            <Item> Hora de salida: {props.flight.departure_time} </Item>
        </div>
    )
}