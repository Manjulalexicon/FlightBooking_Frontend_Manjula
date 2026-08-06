import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav
            className="
                bg-blue-700
                text-white
                shadow-lg
                px-8
                py-4
                flex
                justify-between
                items-center
            "
        >

            <h1 className="text-3xl font-bold">
                ✈ Flight Booking System
            </h1>

            <div className="space-x-4">

                <Link to="/">
                    <button
                        className="
                            bg-white
                            text-blue-700
                            px-5
                            py-2
                            rounded-lg
                            font-semibold
                            hover:bg-gray-100
                        "
                    >
                        Available Flights
                    </button>
                </Link>

                <Link to="/bookings">
                    <button
                        className="
                            bg-green-500
                            text-white
                            px-5
                            py-2
                            rounded-lg
                            font-semibold
                            hover:bg-green-600
                        "
                    >
                        My Bookings
                    </button>
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;