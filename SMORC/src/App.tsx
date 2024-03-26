import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Airdrop } from "@pages/airdrop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/airdrop" element={<Airdrop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
