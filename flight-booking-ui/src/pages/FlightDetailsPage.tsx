import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Flight } from "../models/Flight";
import { getFlightById } from "../services/flightService";


function FlightDetailsPage() {

    const { id } = useParams();

    const [flight, setFlight] = useState<Flight | null>(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        loadFlight();

    }, []);



    const loadFlight = async () => {

        try {

            if (id) {

                const data = await getFlightById(Number(id));

                setFlight(data);

            }

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };



    if (loading) {

        return (

            <h2 className="text-center mt-10 text-2xl">
                Loading flight details...
            </h2>

        );

    }



    if (!flight) {

        return (

            <h2 className="text-center mt-10 text-2xl">
                Flight not found
            </h2>

        );

    }



    return (

        <div className="bg-gray-100 min-h-screen p-8">

            <div className="
                max-w-3xl
                mx-auto
                bg-white
                rounded-xl
                shadow-lg
                p-8
            ">

                <h1 className="
                    text-4xl
                    font-bold
                    text-blue-700
                    mb-6
                ">
                    ✈ Flight Details
                </h1>


                <div className="space-y-4 text-lg">


                    <p>
                        <strong>Flight Number:</strong>{" "}
                        {flight.flightNumber}
                    </p>


                    <p>
                        <strong>Destination:</strong>{" "}
                        {flight.destination}
                    </p>


                    <p>
                        <strong>Departure:</strong>{" "}
                        {new Date(
                            flight.departureTime
                        ).toLocaleString()}
                    </p>


                    <p>
                        <strong>Arrival:</strong>{" "}
                        {new Date(
                            flight.arrivalTime
                        ).toLocaleString()}
                    </p>


                    <p className="
                        text-green-600
                        text-2xl
                        font-bold
                    ">
                        💰 €{flight.price}
                    </p>


                </div>


            </div>

        </div>

    );

}


export default FlightDetailsPage;