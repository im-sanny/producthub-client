import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-green-100 shadow-sm mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <span className="font-bold">ProductHub</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/'} className="font-bold">Home</Link>
          </li>

          {!user && (
            <li>
              <Link to={'/signin'} className="font-bold">SignIn</Link>
            </li>
          )}
        </ul>
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mt-2">
                <button className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
