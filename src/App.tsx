import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Airdrop, Countdown, Home } from "./pages";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/airdrop", element: <Airdrop /> },
  // { path: "/countdown", element: <Countdown /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
