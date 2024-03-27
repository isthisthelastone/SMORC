import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Airdrop, Countdown, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/airdrop" element={<Airdrop />}></Route>
          {/* <Route path="/countdown" element={<Countdown />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
