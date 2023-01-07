import { addCustomer } from "@/features/customerSlice";
import { removeReservatoin } from "@/features/reservationSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

type Props = {
  name: string;
  i: number;
};

const ReservationsCard = ({ name, i }: Props) => {
  const diapatch = useDispatch();
  return (
    <div
      onClick={() => {
        diapatch(removeReservatoin(i));
        diapatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
      className="mb-2 cursor-pointer rounded-lg border border-slate-200 px-5  py-3 shadow-sm"
    >
      {name}
    </div>
  );
};

export default ReservationsCard;
