import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import CustomerCard from "./CustomerCard";

type Props = {};

const CustomerDetails = (props: Props) => {
  const customers = useSelector((state: RootState) => state.customer.value);
  return (
    <section className="w-full  pt-5 ">
      <div className="mx-auto w-full md:w-5/6  ">
        <h1 className="text-3xl font-bold text-slate-900 ">Details</h1>
        <div className="h-auto w-full ">
          {customers.map((data, i) => (
            <CustomerCard
              key={i}
              id={data.id}
              name={data.name}
              food={data.food}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;
