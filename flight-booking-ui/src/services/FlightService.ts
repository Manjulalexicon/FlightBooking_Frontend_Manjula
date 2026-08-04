import api from "../api/axiosConfig";
import type { Flight } from "../models/Flight";


export const getAvailableFlights = async (): Promise<Flight[]> => {

    const response = await api.get("/flights/available");

    return response.data;

};