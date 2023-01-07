import Reservation from "@/scenes/reservation";
import CustomerDetails from "@/scenes/customer";

function App() {
  return (
    <div className="app">
      <main className="mx-auto flex min-h-[658px] w-5/6 flex-col items-center justify-start  py-10 md:flex-row md:items-start md:justify-start">
        <Reservation />
        <CustomerDetails />
      </main>
    </div>
  );
}

export default App;
