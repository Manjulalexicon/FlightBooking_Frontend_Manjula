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

        <div>

            <h1>My Bookings</h1>


            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />


            <button onClick={searchBookings}>
                Search
            </button>


            <hr/>


            {
                searched && bookings.length === 0 &&

                <p>No bookings found.</p>
            }



            {
                bookings.map((booking)=>(

                    <div key={booking.id}>


                        <h2>
                            {booking.flightNumber}
                        </h2>


                        <p>
                            Name: {booking.passengerName}
                        </p>


                        <p>
                            Email: {booking.passengerEmail}
                        </p>


                        <p>
                            Destination: {booking.destination}
                        </p>


                        <p>
                            Status: {booking.status}
                        </p>


                        <p>
                            Price: €{booking.price}
                        </p>


                        {/* ADD BUTTON HERE 👇 */}
                        <button
                            onClick={() => handleCancel(booking.id)}
                        >
                            Cancel Booking
                        </button>


                        <hr/>


                    </div>

                ))
            }


        </div>

    );

}

export default MyBookings;