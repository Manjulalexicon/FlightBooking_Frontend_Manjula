import type { Flight } from "../models/Flight";
import { Link } from "react-router-dom";
import { useState } from "react";


interface Props {
    flight: Flight;
    onBook: (flightId:number)=>void;
}


function FlightCard({flight,onBook}:Props){

const [favorite, setFavorite] = useState(() => {

    const saved = localStorage.getItem(
        `favorite-${flight.id}`
    );

    return saved === "true";

});

const toggleFavorite = () => {

    const newValue = !favorite;

    setFavorite(newValue);

    localStorage.setItem(
        `favorite-${flight.id}`,
        String(newValue)
    );

};

return(

<div className="
bg-white
shadow-lg
rounded-xl
p-6
mb-5
border
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
">


<h2 className="text-2xl font-bold text-blue-600">
{flight.flightNumber}
</h2>


<p>
✈ Destination: <b>{flight.destination}</b>
</p>


<p>
🕒 Departure:
{new Date(flight.departureTime).toLocaleString()}
</p>


<p>
🕒 Arrival:
{new Date(flight.arrivalTime).toLocaleString()}
</p>


<p className="text-green-600 font-bold">
💰 €{flight.price}
</p>


<div className="flex gap-3 mt-4">

    <button
        onClick={() => onBook(flight.id)}
        className="
            bg-blue-600
            text-white
            px-5
            py-2
            rounded-lg
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
            font-semibold
        "
    >
        Book Now
    </button>

    <button
        onClick={toggleFavorite}
        className="
            bg-yellow-400
            px-4
            py-2
            rounded-lg
            font-semibold
            hover:bg-yellow-500
        "
    >
        {
            favorite
            ? "❤️ Favorite"
            : "🤍 Favorite"
        }
    </button>

    <Link to={`/flight/${flight.id}`}>

        <button
            className="
                bg-gray-700
                text-white
                px-5
                py-2
                rounded-lg
                hover:bg-gray-800
                hover:scale-105
                transition-all
                duration-300
                font-semibold
            "
        >
            View Details
        </button>

    </Link>

</div>


</div>

);


}


export default FlightCard;