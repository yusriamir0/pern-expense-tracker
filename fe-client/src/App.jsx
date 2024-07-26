import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Navbar from "./components/Navbar/Navbar";
import AddTransaction from "./components/Forms/AddTransaction";
import Button from "./components/Button";

const App = () => {
  return (
    <BrowserRouter>
      <Button />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
