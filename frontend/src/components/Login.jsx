import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!email.length > 0) {
      errors.email = "Email is required";
    }
    if (!password.length > 0) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      toast.error("Please fill in all required fields.");
      return;
    }
    setErrors({});
    try {
      const response = await axios.post("http://localhost:4001/user/login", {
        email,
        password,
      });
      console.log(response.data);
      toast.success("Logged in Successfully");

      document.getElementById("my_modal_3").close();

      setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      }, 1000);
    } catch (error) {
      if (error.response) {
        // Request made and server responded with an error status code
        console.error("Server Error:", error.response.data);
        toast.error(error.response.data.message);
        setTimeout(() => {}, 2000);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Network Error:", error.request);
        toast.error("Network error. Please try again.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <form onSubmit={handleLogin} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={() => {
                document.getElementById("my_modal_3").close();
                setErrors({});
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login!</h3>
            {/*Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm ml-4">
                  {errors.email}
                </span>
              )}
            </div>
            {/*Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm ml-4">
                  {errors.password}
                </span>
              )}
            </div>
            {/*button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <span className="underline text-blue-500 cursor-pointer">
                  <Link to="/signup">Signup</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
