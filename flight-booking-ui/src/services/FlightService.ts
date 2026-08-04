import api from "../api/axiosConfig";
import type { Flight } from "../models/Flight";
import type { Booking } from "../models/Booking";

export const getAllFlights = async (): Promise<Flight[]> => {
  const response = await api.get("/flights");
  return response.data;
};

export const getAvailableFlights = async (): Promise<Flight[]> => {
  const response = await api.get("/flights/available");
  return response.data;
};

export const getBookingsByEmail = async (
  email: string
): Promise<Booking[]> => {
  const response = await api.get("/flights/bookings", {
    params: { email },
  });

  return response.data;
};