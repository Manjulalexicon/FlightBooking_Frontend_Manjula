import { useState } from "react";
import Navbar from "./components/Navbar";
import FlightList from "./components/FlightList";
import MyBookings from "./components/MyBookings";

function App() {

    const [page, setPage] = useState("flights");

    return (

        <>
            <Navbar setPage={setPage} />

            {
                page === "flights"
                    ? <FlightList />
                    : <MyBookings />
            }

        </>

    );

}

export default App;