import { Item } from './styles/Flight.styled'

export default function Flight(props : any) {

    return (
        <div>
            <Item> Vuelo: {props.flight.name} </Item>
            <Item> Precio: {props.flight.price}$ </Item>
            <Item> Duracion: {props.flight.duration} </Item>
            <Item> Hora de salida: {props.flight.takeoff_time} </Item>
        </div>
    )
}