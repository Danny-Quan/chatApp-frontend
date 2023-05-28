import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const successNotify = (S_message) =>
    toast.success(S_message, { autoClose: 3000 });
  const ErrorNotify = (E_message) =>
    toast.error(E_message, { autoClose: 3000 });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { username, password })
      .then((res) => {
        successNotify("logged in successfully");
        window.setTimeout(() => {
          navigate("/chat", { replace: true });
        }, 3000);
        // console.log(res);
      })
      .catch((err) => {
        ErrorNotify(err.response.data.message);
        // console.log(err);
      });
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form onSubmit={loginUser} className="w-64 mx-auto" action="">
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
          start chat
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default LoginPage;
