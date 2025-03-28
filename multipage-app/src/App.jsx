import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TablePage from "./pages/TablePage";
import FAQPage from "./pages/FAQPage";
import ThemePage from "./pages/ThemePage";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Table</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/theme">Theme</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/theme" element={<ThemePage />} />
      </Routes>
    </Router>
  );
}
