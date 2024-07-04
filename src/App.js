import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import QuizForm from "./Pages/QuizForm";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create-quiz" element={<QuizForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
