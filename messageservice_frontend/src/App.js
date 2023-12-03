import { Routes, Route } from "react-router-dom";
import HomeV1 from "./pages/homeV1";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
