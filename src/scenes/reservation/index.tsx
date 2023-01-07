import { RootState } from "@/app/store";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReservationsCard from "./ReservationsCard";
import { addReservation } from "@/features/reservationSlice";
type Props = {};

const Reservation = (props: Props) => {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) {
      return;
    }
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  return (
    <section className=" relative p-5">
      <div className="flex h-full flex-col items-center justify-start  gap-2 md:justify-between md:before:absolute md:before:right-0 md:before:top-10 md:before:-bottom-10 md:before:h-[90%] md:before:w-[1px] md:before:bg-slate-400 ">
        <h1 className="text-3xl font-bold text-slate-900">Reservation</h1>
        <div className="flex min-h-[5rem]  flex-col items-start justify-between overflow-y-auto overflow-x-hidden px-6 md:min-h-[30rem]">
          {/* reservation array */}
          <div className="h-full w-full flex-1 ">
            {/* reservations card */}
            {reservations.map((name, i) => {
              return <ReservationsCard i={i} key={i} name={name} />;
            })}
          </div>
          {/* reservation add button */}
          <div className="flex h-full items-center justify-center ">
            <input
              type="text"
              className="rounded-l-lg border bg-gray-200 px-4 py-2 placeholder:ml-2 placeholder:capitalize
              "
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
              placeholder="Add people"
            />
            <button
              onClick={handleAddReservation}
              className="rounded-r-lg bg-slate-900 px-3 py-2 text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
