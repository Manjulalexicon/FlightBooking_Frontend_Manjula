import { useState } from "react";

import { bookFlight } from "../services/bookingService";

interface Props {
    flightId: number;
}

function BookingForm({ flightId }: Props) {

    const [passengerName, setPassengerName] = useState("");

    const [passengerEmail, setPassengerEmail] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        try {

            await bookFlight(flightId, {
                passengerName,
                passengerEmail
            });

            alert("Flight booked successfully!");

            setPassengerName("");
            setPassengerEmail("");

        } catch (error) {

            console.error(error);

            alert("Booking failed");

        }

    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>Book Flight</h2>

            <div>
                <label>Name</label>
                <br />
                <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    required
                />
            </div>

            <br />

            <div>
                <label>Email</label>
                <br />
                <input
                    type="email"
                    value={passengerEmail}
                    onChange={(e) => setPassengerEmail(e.target.value)}
                    required
                />
            </div>

            <br />

            <button type="submit">
                Book Flight
            </button>

        </form>
    );
}

export default BookingForm;