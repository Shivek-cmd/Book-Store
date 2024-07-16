import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name.length > 0) {
      errors.name = "name is required";
    }
    if (!email.length > 0) {
      errors.email = "email is required";
    }
    if (!password.length > 0) {
      errors.password = "password is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});
  };
  return (
    <div className="h-screen flex items-center justify-center  ">
      <div className="modal-box  dark:bg-slate-900">
        <form onSubmit={handleSubmit} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              document.getElementById("my_modal_3").close();
              setErrors({});
            }}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">SignUp!</h3>
          {/*Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            {errors.name && (
              <span className="text-red-500 text-sm ml-4">{errors.name}</span>
            )}
          </div>
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
              <span className="text-red-500 text-sm ml-4">{errors.email}</span>
            )}
          </div>
          {/*Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password  "
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
            >
              SignUp
            </button>
            <p className="text-xl">
              Have Account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
              >
                Login
              </button>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
