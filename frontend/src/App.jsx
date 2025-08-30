import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PanchayatPage from "./pages/PanchayatPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<PanchayatPage />} />
      </Routes>
    </Router>
  );
}
