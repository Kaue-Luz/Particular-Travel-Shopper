import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RideRequestPage } from "./Pages/RideRequestPage";
import { RideOptionsPage } from "./Pages/RideOptionsPage";
import { RideHistoryPage } from "./Pages/RideHistoryPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RideRequestPage />} />
        <Route path="/options" element={<RideOptionsPage />} />
        <Route path="/history" element={<RideHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
