export default function Footer() {
    return (
        <footer className="text-center p-4 bg-black text-white d-flex justify-content-between flex-md-row flex-column">
            <p>&copy; 2025 Arijit Saha. All rights reserved.</p>
            <p>
                📍 India
            </p>
            <p>
                <a href="https://github.com/yourusername" target="_blank">
                    GitHub
                </a>{" "}
                <a href="https://linkedin.com/in/yourusername" target="_blank">
                    LinkedIn
                </a>{"  "}
                &nbsp;|&nbsp;
                <a href="/resume.pdf" target="_blank">Resume</a>
            </p>
        </footer>
    );
}
