import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./container/Home";
import Login from "./container/Login";
import Quiz from "./container/Quiz";
import Register from "./container/Register";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
