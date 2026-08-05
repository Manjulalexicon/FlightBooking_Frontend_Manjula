import { useState } from "react";
import { bookFlight } from "../services/bookingService";


interface Props {
    flightId: number;
}


function BookingForm({ flightId }: Props) {


    const [passengerName, setPassengerName] = useState("");

    const [passengerEmail, setPassengerEmail] = useState("");



    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();


        try {

            await bookFlight(flightId, {
                passengerName,
                passengerEmail
            });


            alert("Flight booked successfully!");


            setPassengerName("");

            setPassengerEmail("");


        } catch (error) {

            console.error(error);

            alert("Booking failed");

        }

    };



   return (

       <div className="bg-white shadow-lg rounded-xl p-6 mt-4 mb-6">


           <h2 className="text-2xl font-bold text-blue-600 mb-4">
               Book Flight
           </h2>


           <form onSubmit={handleSubmit}>


               <div className="mb-4">

                   <label className="font-semibold">
                       Passenger Name
                   </label>

                   <input

                       type="text"

                       value={passengerName}

                       onChange={(e)=>setPassengerName(e.target.value)}

                       className="border rounded-lg p-2 w-full mt-2"

                       required

                   />

               </div>



               <div className="mb-4">

                   <label className="font-semibold">
                       Email
                   </label>


                   <input

                       type="email"

                       value={passengerEmail}

                       onChange={(e)=>setPassengerEmail(e.target.value)}

                       className="border rounded-lg p-2 w-full mt-2"

                       required

                   />

               </div>



               <button

                   type="submit"

                   className="
                   bg-green-600
                   text-white
                   px-6
                   py-2
                   rounded-lg
                   hover:bg-green-700
                   "

               >

                   Confirm Booking

               </button>



           </form>


       </div>

   );

}


export default BookingForm;