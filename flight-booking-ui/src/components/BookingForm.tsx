import { useState } from "react";
import { bookFlight } from "../services/bookingService";
import { toast } from "react-toastify";


interface Props {
    flightId: number;
    onBookingSuccess: () => void;
}


function BookingForm({
    flightId,
    onBookingSuccess
}: Props) {


    const [passengerName, setPassengerName] = useState("");

    const [passengerEmail, setPassengerEmail] = useState("");

    const [success, setSuccess] = useState(false);

    const [loading, setLoading] = useState(false);



    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();


        try {

            setLoading(true);
           await bookFlight(flightId, {
               passengerName,
               passengerEmail
           });

           toast.success("✈ Flight booked successfully!");

           setSuccess(true);
            setLoading(false);

            setPassengerName("");
            setPassengerEmail("");

            setTimeout(() => {

                onBookingSuccess();

            }, 1000);

        } catch (error) {

            setLoading(false);


            console.error(error);

            toast.error("Booking failed!");

        }

    };



   return (
       <div
           className="
               bg-white
               rounded-xl
               p-6
               mt-5
               border
               shadow-xl
           "
       >
           <h2 className="text-2xl font-bold mb-5 text-blue-700">
               Book Flight
           </h2>

           <form onSubmit={handleSubmit}>

               <div className="mb-4">

                   <label className="block font-semibold mb-2">
                       Passenger Name
                   </label>

                   <input
                       type="text"
                       value={passengerName}
                       onChange={(e) => setPassengerName(e.target.value)}
                       className="
                           w-full
                           border
                           rounded-lg
                           px-4
                           py-2
                           focus:outline-none
                           focus:ring-2
                           focus:ring-blue-500
                       "
                       required
                   />

               </div>

               <div className="mb-4">

                   <label className="block font-semibold mb-2">
                       Email
                   </label>

                   <input
                       type="email"
                       value={passengerEmail}
                       onChange={(e) => setPassengerEmail(e.target.value)}
                       className="
                           w-full
                           border
                           rounded-lg
                           px-4
                           py-2
                           focus:outline-none
                           focus:ring-2
                           focus:ring-blue-500
                       "
                       required
                   />

               </div>

              <button
                  type="submit"
                  disabled={loading}
                  className="
                      bg-green-600
                      text-white
                      px-6
                      py-2
                      rounded-lg
                      hover:bg-green-700
                      font-semibold
                      disabled:bg-gray-400
                  "
              >
                  {loading ? "Booking..." : "Confirm Booking"}
              </button>

           </form>

       </div>
   );

}


export default BookingForm;