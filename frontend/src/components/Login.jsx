import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-900">
          <form onSubmit={handleSubmit} method="dialog">
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
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <p>
                Not registerd?{" "}
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
