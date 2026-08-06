import type { Flight } from "../models/Flight";


interface Props {
    flight: Flight;
    onBook: (flightId:number)=>void;
}


function FlightCard({flight,onBook}:Props){


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


<button

onClick={()=>onBook(flight.id)}

className="
mt-4
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


</div>

);


}


export default FlightCard;