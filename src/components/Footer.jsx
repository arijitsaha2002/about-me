export default function Footer() {
    return (
        <footer className="text-center bg-black text-white d-flex justify-content-between flex-md-row flex-column">
            <div className="p-3">
                <a
                    href="https://github.com/arijitsaha2002"
                    target="_blank"
                    style={{ color: "lime" }}
                >
                    GitHub
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/arijit-saha-7427b6245/"
                    target="_blank"
                    style={{ color: "lime" }}
                >
                    LinkedIn
                </a>{"  "}
                &nbsp;|&nbsp;
                <a
                    href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
                    target="_blank"
                    style={{ color: "lime" }}
                >
                    Resume
                </a>
            </div>
            <div className="p-md-3">📍 India</div>
            <div className="p-3">
                &copy; 2025 Arijit Saha. All rights reserved.
            </div>
        </footer>
    );
}
