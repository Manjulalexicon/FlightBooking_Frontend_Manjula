import { useEffect, useState } from "react";
import type { Flight } from "../models/Flight";
import { getAvailableFlights } from "../services/flightService";
import FlightCard from "./FlightCard";

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
            <h1>Available Flights</h1>

            {flights.map((flight) => (
                <FlightCard
                    key={flight.id}
                    flight={flight}
                />
            ))}
        </div>
    );
}

export default FlightList;