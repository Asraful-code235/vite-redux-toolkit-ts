import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFoodToCustomer } from "@/features/customerSlice";
type Props = {
  id: string;
  name: string;
  food: string[];
};

const CustomerCard = ({ id, food, name }: Props) => {
  const diapatch = useDispatch();
  const [customerFood, setcustomerFood] = useState("");
  const handleAddFood = () => {
    if (!customerFood) return;
    diapatch(
      addFoodToCustomer({
        id,
        food: customerFood,
      })
    );
    setcustomerFood("");
  };
  return (
    <div className="mt-2 flex min-h-[80px] w-full flex-col items-start justify-between  rounded-lg px-2 py-4 shadow-lg">
      <h3>{name}</h3>
      <div className="flex h-full w-full flex-col items-start justify-between  py-3 md:flex-row ">
        <div className="flex flex-wrap gap-2 ">
          {food.map((foods, i) => (
            <h3 key={i} className="mr-2 rounded-md bg-slate-300 px-2 py-1">
              {foods}
            </h3>
          ))}
        </div>
        <div className="mt-4 flex w-full items-end md:mt-0">
          <input
            value={customerFood}
            onChange={(e) => setcustomerFood(e.target.value)}
            type="text"
            className="w-full rounded-l-lg bg-slate-200 py-1 px-1 md:w-min "
          />
          <button
            onClick={handleAddFood}
            className="rounded-r-sm bg-slate-900 py-1 px-2 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
