import { useEffect, useState } from "react";
import type { Flight } from "../models/Flight";
import { getAllFlights } from "../services/FlightService";
import FlightCard from "../components/FlightCard";

const FlightsPage = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    try {
      const data = await getAllFlights();
      setFlights(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load flights.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading flights...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Flights</h1>

      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightsPage;