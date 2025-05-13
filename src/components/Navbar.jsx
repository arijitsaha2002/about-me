import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid" cl>
                <div className="navbar-brand ms-3">Arijit Saha</div>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 me-2 mb-lg-0">
                        <li className="nav-item ms-3 me-3">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
