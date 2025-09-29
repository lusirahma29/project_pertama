import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <NavLink to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                    <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
                    <span className="ms-2 fs-4">galenabooks</span>
                </NavLink>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            "nav-link px-2" + (isActive ? " active-link" : "")
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/books"
                        className={({ isActive }) =>
                            "nav-link px-2" + (isActive ? " active-link" : "")
                        }
                    >
                        Book
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/team"
                        className={({ isActive }) =>
                            "nav-link px-2" + (isActive ? " active-link" : "")
                        }
                    >
                        Team
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            "nav-link px-2" + (isActive ? " active-link" : "")
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </header>
    );
}
