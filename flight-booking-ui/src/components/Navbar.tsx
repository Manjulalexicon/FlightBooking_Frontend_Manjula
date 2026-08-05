interface Props {
    setPage: (page: string) => void;
}

function Navbar({ setPage }: Props) {

    return (

        <nav>

            <h1>✈ Flight Booking System</h1>

            <div>

                <button
                    onClick={() => setPage("flights")}
                >
                    Available Flights
                </button>

                <button
                    onClick={() => setPage("bookings")}
                >
                    My Bookings
                </button>

            </div>

        </nav>

    );

}

export default Navbar;