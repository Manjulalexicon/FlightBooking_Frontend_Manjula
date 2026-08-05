import axios from "axios";
import type { BookFlightRequest } from "../models/BookFlightRequest";

const API_URL = "http://localhost:8080/api/flights";

export const bookFlight = async (
    flightId: number,
    booking: BookFlightRequest
) => {

    const response = await axios.post(
        `${API_URL}/${flightId}/book`,
        booking
    );

    return response.data;
};