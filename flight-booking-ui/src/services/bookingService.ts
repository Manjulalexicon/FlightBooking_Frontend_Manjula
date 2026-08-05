import axios from "axios";

const API_URL = "http://localhost:8080/api/flights";

export const bookFlight = async (
    flightId: number,
    booking: {
        passengerName: string;
        passengerEmail: string;
    }
) => {

    const response = await axios.post(
        `${API_URL}/${flightId}/book`,
        booking
    );

    return response.data;
};

export const getBookingsByEmail = async (email: string) => {

    const response = await axios.get(
        `${API_URL}/bookings?email=${email}`
    );

    return response.data;
};

import type { Booking } from "../models/Booking";


export const getBookings = async (email: string): Promise<Booking[]> => {

    const response = await axios.get(
        `${API_URL}/bookings?email=${email}`
    );

    return response.data;
};

export const cancelBooking = async (
    flightId: number,
    email: string
) => {

    await axios.delete(
        `${API_URL}/${flightId}/cancel?email=${email}`
    );

};