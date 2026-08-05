import type { Flight } from "../models/Flight";


interface Props {
    flight: Flight;
}


function FlightCard({ flight }: Props) {

    return (

        <div>

            <h2>
                {flight.flightNumber}
            </h2>

            <p>
                ✈ Destination: {flight.destination}
            </p>

            <p>
                🕒 Departure: {flight.departureTime}
            </p>

            <p>
                🕒 Arrival: {flight.arrivalTime}
            </p>

            <p>
                💰 Price: €{flight.price}
            </p>

            <hr />

        </div>

    );
}


export default FlightCard;