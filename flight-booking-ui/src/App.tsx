import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import FlightPage from "./pages/FlightPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import { ToastContainer } from "react-toastify";
import FlightDetailsPage from "./pages/FlightDetailsPage";


function App() {

    return (

        <BrowserRouter>

            <Navbar />


            <Routes>

                <Route
                    path="/"
                    element={<FlightPage />}
                />


                <Route
                    path="/bookings"
                    element={<MyBookingsPage />}
                />

                <Route
                    path="/flight/:id"
                    element={<FlightDetailsPage />}
                />

            </Routes>

            <footer className="bg-blue-700 text-white text-center py-4 mt-10">
                <p>
                    Flight Booking System © 2026
                </p>
                <p className="text-sm opacity-80">
                    Built with React, TypeScript, Spring Boot & Tailwind CSS
                </p>
            </footer>

        <ToastContainer
            position="top-right"
            autoClose={3000}
        />

        </BrowserRouter>

    );

}

export default App;