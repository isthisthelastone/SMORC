import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
//@ts-expect-error намеренно выключено временно
import { Airdrop, Countdown, Home } from "./pages";
import PathRoute from "@shared/components/organisms/path-route";

export function App() {
  return <RouterProvider router={routes} />;
}
export const routes = createBrowserRouter([
  { path: "/", element: <PathRoute element={<Home />} /> },
  { path: "/airdrop", element: <PathRoute element={<Airdrop />} /> },
  // { path: "/countdown", element: <Countdown /> },
]);
export default App;
