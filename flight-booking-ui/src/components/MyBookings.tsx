import { useState } from "react";
import type { Booking } from "../models/Booking";
import { getBookings, cancelBooking } from "../services/bookingService";

function MyBookings() {

    const [email, setEmail] = useState("");

    const [bookings, setBookings] = useState<Booking[]>([]);

    const [searched, setSearched] = useState(false);


    const searchBookings = async () => {

        try {

            const data = await getBookings(email);

            setBookings(data);

            setSearched(true);

        } catch (error) {

            console.error(error);

            alert("Could not load bookings");

        }

    };


    // ADD THIS FUNCTION HERE 👇
    const handleCancel = async (flightId: number) => {

        try {

            await cancelBooking(
                flightId,
                email
            );

            alert("Booking cancelled successfully");

            // Refresh booking list after cancel
            searchBookings();

        } catch (error) {

            console.error(error);

            alert("Cancel failed");

        }

    };


    return (

            <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto">

            <h1 className="text-4xl font-bold text-center mb-8">
                My Bookings
            </h1>


            <div className="flex gap-4 mb-8">

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                        flex-1
                        border
                        rounded-lg
                        px-4
                        py-3
                        shadow-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                <button
                    onClick={searchBookings}
                    className="
                        bg-blue-600
                        text-white
                        px-6
                        rounded-lg
                        hover:bg-blue-700
                    "
                >
                    Search
                </button>

            </div>


            <hr/>


            {
                searched && bookings.length === 0 &&

                <p>No bookings found.</p>
            }



            {
                bookings.map((booking) => (

                    <div
                        key={booking.id}
                        className="
                            bg-white
                            rounded-xl
                            shadow-lg
                            p-6
                            mb-6
                            border
                            hover:shadow-xl
                            transition
                        "
                    >

                        <h2 className="text-2xl font-bold text-blue-600 mb-3">
                            {booking.flightNumber}
                        </h2>

                        <p>
                            👤 <strong>Name:</strong> {booking.passengerName}
                        </p>

                        <p>
                            📧 <strong>Email:</strong> {booking.passengerEmail}
                        </p>

                        <p>
                            ✈ <strong>Destination:</strong> {booking.destination}
                        </p>

                        <p>
                            📌 <strong>Status:</strong> {booking.status}
                        </p>

                        <p className="text-green-600 font-bold mt-2">
                            💰 €{booking.price}
                        </p>

                        <button
                            onClick={() => handleCancel(booking.id)}
                            className="
                                mt-4
                                bg-red-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                hover:bg-red-700
                            "
                        >
                            Cancel Booking
                        </button>


                    </div>

                ))
            }


        </div>
        </div>

    );

}

export default MyBookings;