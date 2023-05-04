import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // data untuk mengUpdate data user
  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  // untuk ambil data user sesuai yang di input
  useEffect(() => {
    axios.get(`http://localhost:3004/users/${id}`).then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    });
  }, []);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3004/users/${id}`, data).then(navigate("/"));
  };

  return (
    <>
      <div className="w-screen h-full my-10 flex flex-col justify-center mx-auto">
        <div>
          <h1 className="text-center text-4xl font-Montserrat uppercase">
            Update User
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
              onClick={handleUpdateUser}
              className="bg-indigo-600 text-white w-full p-3 rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
