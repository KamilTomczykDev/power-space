import AppContainer from "../ui/AppContainer";
import AppHeading from "../ui/AppHeading";
import Stats from "../ui/Stats";

function Dashboard() {
  return (
    <AppContainer>
      <div className="flex justify-between">
        <AppHeading>Dashboard</AppHeading>
        <button className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60">
          Change lifting values
        </button>
      </div>

      <Stats />
    </AppContainer>
  );
}

export default Dashboard;
