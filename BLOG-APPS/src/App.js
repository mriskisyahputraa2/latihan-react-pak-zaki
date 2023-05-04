import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DetailUser from "./Pages/DetailUser";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-user/:id" element={<DetailUser />} />
        <Route path="/add-user/" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}
export default App;
