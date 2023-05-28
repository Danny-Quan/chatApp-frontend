import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const successNotify = (S_message) =>
    toast.success(S_message, { autoClose: 4000 });
  const ErrorNotify = (E_message) =>
    toast.error(E_message, { autoClose: 4000 });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/register", { username, password })
      .then((res) => {
        successNotify("user created successfully!");
        setTimeout(() => {
          navigate("/chat", {
            replace: true,
          });
        }, 3000);
        // console.log(res)
      })
      .catch((err) => {
        ErrorNotify(err.response.data.message);
        // console.log(err.response.data.message)
      });
  };
  return (
    <div>
      <button className="w-screen absolute" >
        <NavLink className="bg-blue-400 w-screen px-5 py-3 text-white" to={"/login"}>login</NavLink>
      </button>
    <div className="bg-blue-50 h-screen flex items-center">
      <form onSubmit={register} className="w-64 mx-auto" action="">
        <input
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id=""
          className="block w-full rounded-sm p-2 mb-2 border"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Register
        </button>
        <ToastContainer />
      </form>
          </div>

    </div>
  );
}

export default Register;
