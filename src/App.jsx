import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PhonesDetailsPage from "./pages/PhonesDetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones/:id" element={<PhonesDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
