import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  // const data = {
  //   name: name,
  //   email: email,
  //   phone: phone,
  // };

  // const handleAddUser = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:3004/users", data).then(navigate("/"));
  // };

  // menggunakan if
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      // jika salah satu input kosong, tampilkan pesan kesalahan
      alert("Mohon lengkapi semua data!");
      return;
    }
    const data = {
      name: name,
      email: email,
      phone: phone,
    };
    axios.post("http://localhost:3004/users", data).then(navigate("/"));
  };

  // menggunakan ternary
  // const handleAddUser = (e) => {
  //   e.preventDefault();
  //   const data = name && email && phone ? { name, email, phone } : null;
  //   data && axios.post("http://localhost:3004/users", data).then(navigate("/"));
  // };
  return (
    <>
      <div className="w-screen h-full my-10 flex flex-col justify-center mx-auto">
        <div>
          <h1 className="text-center text-4xl font-Montserrat uppercase">
            Add User
          </h1>
        </div>

        <div className="flex flex-col justify-center mx-auto my-5 font-Poppins">
          <form className="flex flex-col  ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-black/80 p-3 w-[600px] mt-5 rounded"
              type="text"
              placeholder="Enter your Name..."
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black/80 p-3 w-[600px] mt-5 rounded"
              type="email"
              placeholder="Enter your Email..."
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-black/80 p-3 w-[600px] mt-5 rounded"
              type="number"
              placeholder="Enter your Phone..."
              required
            />
          </form>

          <div className="mt-5">
            <button
              onClick={handleAddUser}
              className="bg-indigo-600 text-white w-full p-3 rounded">
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
