import { useEffect, useState } from "react";
import type { Flight } from "../models/Flight";
import { getAvailableFlights } from "../services/flightService";


function FlightList() {


    const [flights, setFlights] = useState<Flight[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");



    useEffect(() => {

        loadFlights();

    }, []);



    const loadFlights = async () => {

        try {

            const data = await getAvailableFlights();

            setFlights(data);

        } catch (error) {

            console.error(error);

            setError("Failed to load flights");

        } finally {

            setLoading(false);

        }

    };



    if (loading) {

        return <h2>Loading flights...</h2>;

    }



    if (error) {

        return <h2>{error}</h2>;

    }



    return (

        <div>

            <h1>
                Available Flights
            </h1>


            {
                flights.map((flight)=>(

                    <div key={flight.id}>

                        <h2>
                            {flight.flightNumber}
                        </h2>


                        <p>
                            ✈ Destination:
                            {" "}
                            {flight.destination}
                        </p>


                        <p>
                            🕒 Departure:
                            {" "}
                            {flight.departureTime}
                        </p>


                        <p>
                            🕒 Arrival:
                            {" "}
                            {flight.arrivalTime}
                        </p>


                        <p>
                            💰 Price:
                            {" "}
                            €{flight.price}
                        </p>


                        <hr/>

                    </div>

                ))
            }


        </div>

    );

}


export default FlightList;