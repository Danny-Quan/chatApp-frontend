import Register from "./components/Register";
import ChatPage from "./components/ChatPage";
import LoginPage from "./components/LoginPage";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
