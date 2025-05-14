import { Link } from "react-router-dom";

function NavItem({ to, text }) {
    return (
        <li className="nav-item fs-5 ms-3" style={{ fontFamily: "inter" }}>
            <Link
                className="nav-link active"
                aria-current="page"
                to={to}
            >
                {text}
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary mb-3"
            data-bs-theme="dark"
        >
            <div className="container-fluid" cl>
                <Link className="navbar-brand fs-3 ms-2" to="/about-me/" style={{ fontFamily: "inter" }}>
                    Arijit Saha
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 me-2 mb-lg-0">
                        <NavItem to="/about-me/experience" text="Experience" />
                        <NavItem to="/about-me/skills" text="Skills" />
                        <NavItem to="/about-me/projects" text="Projects" />
                        <NavItem
                            to="/about-me/achievements"
                            text="Achievements"
                        />
                        <NavItem to="/about-me/contact" text="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
