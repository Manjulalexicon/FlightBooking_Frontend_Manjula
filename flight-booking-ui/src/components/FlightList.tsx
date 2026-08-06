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

    const [search, setSearch] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        loadFlights();
    }, []);

    const loadFlights = async () => {
        try {
            setLoading(true);

            const data = await getAvailableFlights();
            setFlights(data);

        } catch (error) {
            console.error(error);
            setError("Failed to load flights");

        } finally {
            setLoading(false);
        }
    };

    const filteredFlights = flights.filter((flight) => {

        const matchesDestination =
            flight.destination
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesDate =
            selectedDate === "" ||
            flight.departureTime.startsWith(selectedDate);

        return matchesDestination && matchesDate;
    });

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">

                <div
                    className="
                        animate-spin
                        rounded-full
                        h-16
                        w-16
                        border-4
                        border-gray-300
                        border-t-blue-600
                    "
                />

                <p className="mt-4 text-gray-600 text-lg">
                    Loading flights...
                </p>

            </div>
        );
    }

    if (error) {
        return (
            <h2 className="text-center text-red-600 text-2xl mt-10">
                {error}
            </h2>
        );
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">

            <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-8">
                Available Flights
            </h1>

            <div className="max-w-xl mx-auto mb-5">

                <input
                    type="text"
                    placeholder="🔍 Search destination..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-xl
                        px-4
                        py-3
                        shadow-md
                        focus:ring-2
                        focus:ring-blue-500
                        focus:outline-none
                    "
                />

            </div>

            <div className="max-w-xl mx-auto mb-8">

                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-xl
                        px-4
                        py-3
                        shadow-md
                        focus:ring-2
                        focus:ring-blue-500
                        focus:outline-none
                    "
                />

            </div>

            <div className="max-w-5xl mx-auto">

                {
                    filteredFlights.length === 0 ? (

                        <div className="bg-white rounded-xl shadow-lg p-10 text-center">

                            <h2 className="text-2xl font-bold text-gray-700">
                                ✈ No flights found
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Try another destination or departure date.
                            </p>

                        </div>

                    ) : (

                        filteredFlights.map((flight) => (

                            <div key={flight.id} className="mb-6">

                                <FlightCard
                                    flight={flight}
                                    onBook={(id) => setSelectedFlight(id)}
                                />

                                {
                                    selectedFlight === flight.id && (

                                        <BookingForm
                                            flightId={flight.id}
                                            onBookingSuccess={() => {
                                                setSelectedFlight(null);
                                                loadFlights();
                                            }}
                                        />

                                    )
                                }

                            </div>

                        ))

                    )
                }

            </div>

        </div>

    );
}

export default FlightList;