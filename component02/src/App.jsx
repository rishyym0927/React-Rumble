import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./themecontext";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
