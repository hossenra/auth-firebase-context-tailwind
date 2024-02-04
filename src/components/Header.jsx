import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AustProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost text-xl" to="/orders">
          Orders
        </Link>
        <div>
          <Link
            onClick={handleLogOut}
            className=" btn btn-ghost text-xl"
            to="/register"
          >
            {/* {
              user ? <>
              <span>{user.email}</span>
              <a onClick={handleLogOut}>S</a>
              </>
            }
            Sign Out */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
