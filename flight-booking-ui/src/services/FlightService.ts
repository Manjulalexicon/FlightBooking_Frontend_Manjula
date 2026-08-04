import api from "../api/axiosConfig";
import type { Flight } from "../models/Flight";
import type { Booking } from "../models/Booking";

/**
 * Get all flights
 */
export const getAllFlights = async (): Promise<Flight[]> => {
  const response = await api.get("/flights");
  return response.data;
};

/**
 * Get only available flights
 */
export const getAvailableFlights = async (): Promise<Flight[]> => {
  const response = await api.get("/flights/available");
  return response.data;
};

/**
 * Book a flight
 */
export const bookFlight = async (
  flightId: number,
  passengerName: string,
  passengerEmail: string
): Promise<Booking> => {

  const response = await api.post(`/flights/${flightId}/book`, {
    passengerName,
    passengerEmail,
  });

  return response.data;
};

/**
 * Find bookings by email
 */
export const getBookingsByEmail = async (
  email: string
): Promise<Booking[]> => {

  const response = await api.get("/flights/bookings", {
    params: {
      email,
    },
  });

  return response.data;
};

/**
 * Cancel booking
 */
export const cancelBooking = async (
  flightId: number,
  email: string
): Promise<void> => {

  await api.delete(`/flights/${flightId}/cancel`, {
    params: {
      email,
    },
  });
};