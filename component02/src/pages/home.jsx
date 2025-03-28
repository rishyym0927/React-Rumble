import { NavLink, Outlet } from "react-router-dom";
import Contact from "./page2";
import About from "./page1";

const Home = () => {
    return <>
        This is the home page
        <ul>
            <li>
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
        </ul>

        <Outlet />
    </>
}

export default Home;