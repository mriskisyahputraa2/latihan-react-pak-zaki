import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailUser() {
  const [detailUser, setDetailUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3004/users/${id}`).then((response) => {
      setDetailUser(response.data);
    });
  }, []);

  return (
    <>
      {detailUser && (
        <>
          <div className="w-full min-h-screen flex flex-col bg-slate-800 text-white font-Poppins">
            <div className="text-center py-10">
              <h1 className="text-3xl uppercase">Detail User</h1>
            </div>

            <div className="max-w-lg flex mx-auto w-full h-full bg-white text-black rounded-lg">
              <div className="p-6 w-full">
                <h3 className="font-bold border-b border-black py-2">
                  Name:{" "}
                  <b className="font-normal text-sm text-indigo-500 ">
                    {detailUser.name}
                  </b>
                </h3>

                <h3 className="font-bold w-full border-b border-black py-2">
                  Email:{" "}
                  <b className="font-normal text-sm text-indigo-500 ">
                    {detailUser.email}
                  </b>
                </h3>

                <h3 className="font-bold w-full border-b border-black py-2">
                  Phone:{" "}
                  <b className="font-normal text-sm text-indigo-500 ">
                    {detailUser.phone}
                  </b>
                </h3>
              </div>
            </div>
            <div className="my-7 flex justify-center items-center w-full">
              <Link to="/" className="bg-indigo-600 py-3 px-7 rounded-lg">
                Back to Home
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailUser;
