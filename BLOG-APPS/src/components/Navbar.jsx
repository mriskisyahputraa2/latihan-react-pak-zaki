import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full h-16 bg-slate-900 py-10 px-8 flex justify-between items-center font-Poppins ">
        <div>
          <Link to="/" className="text-white text-4xl">
            CRUD - BLOG APPS
          </Link>
        </div>

        <div>
          <Link
            to="add-user"
            className="flex justify-center items-center w-48 bg-indigo-600 text-white font-Poppins text-xl h-12 rounded-lg">
            Add User
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
