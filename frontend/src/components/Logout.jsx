import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      toast.error("Error Logging out", err.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-300 duration-300 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
