import { useTheme } from "../themecontext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
            </button>
        </nav>
    );
};

export default Navbar;
