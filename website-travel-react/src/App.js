import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Select from "./components/Selects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
        <Select />
      </div>
    </>
  );
}

export default App;
