interface Props {
    setPage: (page:string)=>void;
}


function Navbar({setPage}:Props){

    return(

        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                ✈ Flight Booking System
            </h1>


            <div className="space-x-4">

                <button
                onClick={()=>setPage("flights")}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    Available Flights
                </button>


                <button
                onClick={()=>setPage("bookings")}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    My Bookings
                </button>


            </div>


        </nav>

    );

}


export default Navbar;