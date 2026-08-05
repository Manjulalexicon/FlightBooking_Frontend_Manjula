import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import FlightPage from "./pages/FlightPage";
import MyBookingsPage from "./pages/MyBookingsPage";


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

            </Routes>


        </BrowserRouter>

    );

}

export default App;