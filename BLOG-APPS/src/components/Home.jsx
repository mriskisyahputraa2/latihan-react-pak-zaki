import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  // view all user
  const loadUser = () => {
    axios.get("http://localhost:3004/users").then((response) => {
      setUsers(response.data.reverse());
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const DeleteUser = (id) => {
    const isConfirmed = window.confirm(
      "Apakah anda yakin ingin menghapus user ini?"
    );

    isConfirmed
      ? axios.delete(`http://localhost:3004/users/${id}`).then(loadUser())
      : console.log("user tidak di hapus");
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="my-10">
          <h1 className="text-3xl font-Poppins ">Data Users</h1>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr key={index} className="text-black">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/detail-user/${user.id}`}
                      className="font-medium text-white bg-gray-600 py-2 px-3 rounded-lg mr-1">
                      Detail
                    </Link>
                    <Link
                      to={`edit-user/${user.id}`}
                      className="font-medium text-white bg-blue-600 py-2 px-3 rounded-lg mr-1">
                      Edit
                    </Link>
                    <button
                      onClick={() => DeleteUser(user.id)}
                      className="font-medium text-white bg-red-600 py-2 px-3 rounded-lg mr-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
