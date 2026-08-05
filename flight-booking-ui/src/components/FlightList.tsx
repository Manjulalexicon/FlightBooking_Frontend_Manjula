import { useEffect, useState } from "react";
import type { Flight } from "../models/Flight";
import { getAvailableFlights } from "../services/flightService";
import FlightCard from "./FlightCard";
import BookingForm from "./BookingForm";


function FlightList() {

    const [flights, setFlights] = useState<Flight[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [selectedFlight, setSelectedFlight] = useState<number | null>(null);



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

        <div className="bg-gray-100 min-h-screen p-8">


            <h1 className="text-4xl font-bold mb-8 text-center">
                Available Flights
            </h1>



            <div className="max-w-4xl mx-auto">


                {
                    flights.map((flight)=>(


                        <div key={flight.id}>


                            <FlightCard

                                flight={flight}

                                onBook={(id)=>setSelectedFlight(id)}

                            />


                            {
                                selectedFlight === flight.id && (

                                    <BookingForm

                                        flightId={flight.id}

                                    />

                                )
                            }


                        </div>


                    ))
                }



            </div>


        </div>

    );

}


export default FlightList;