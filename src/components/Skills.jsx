export default function Skills() {
    return (
        <div className="mx-3">
            <h2
                className="text-center text-dark mt-5"
                style={{ fontFamily: "inter" }}
            >
                My Skills
            </h2>
            <h4
                className="text-center text-dark"
                style={{ fontFamily: "inter" }}
            >
                A showcase of the tools, technologies, and concepts I've learned
                and applied.
            </h4>

            <div className="container-fluid my-5 px-4">
                <div className="row justify-content-center gap-5">
                    <div className="col-md-3 text-center p-4 border bg-success-subtle rounded-5" style={{ boxShadow: "0 0 20px gray" }}>
                        <div className="text-center fs-5 border-bottom border-dark p-2">
                            Languages
                        </div>
                        <div className="text-start text-secondary m-2 fs-6">
                            <ul>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C++</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                                <li>R</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 text-center p-4 border bg-success-subtle rounded-5" style={{ boxShadow: "0 0 20px gray" }}>
                        <div className="text-center fs-5 border-bottom border-dark p-2">
                            Frameworks and Libraries
                        </div>
                        <div className="text-start text-secondary m-2 fs-6">
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Flask</li>
                                <li>Django</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 text-center p-4 border bg-success-subtle rounded-5" style={{ boxShadow: "0 0 20px gray" }}>
                        <div className="text-center fs-5 border-bottom border-dark p-2">
                            Tools and Technologies
                        </div>
                        <div className="text-start text-secondary m-2 fs-6">
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Postman</li>
                                <li>Figma</li>
                                <li>VS Code</li>
                                <li>Jupyter Notebook</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 text-center p-4 border bg-success-subtle rounded-5" style={{ boxShadow: "0 0 20px gray" }}>
                        <div className="text-center fs-5 border-bottom border-dark p-2">
                            Course Taken
                        </div>
                        <div className="text-start text-secondary m-2 fs-6">
                            <ul>
                                <li>
                                    Implementation of Programming Languages +
                                    Lab
                                </li>
                                <li>Database and Information Systems + Lab</li>
                                <li>
                                    Topics in Virtualization and Cloud Computing
                                </li>
                                <li>
                                    Introduction to Blockchains,
                                    Cryptocurrencies and Smart Contracts
                                </li>
                                <li>Automata Theory</li>
                                <li>Operating Systems + Lab</li>
                                <li>
                                    Artificial Intelligence and Machine Learning
                                    + Lab
                                </li>
                                <li>
                                    Artificial Intelligence and Machine Learning
                                </li>
                                <li>Operating Systems</li>
                                <li>
                                    Game Theory and Algorithmic Mechanism Design
                                </li>
                                <li>Design and Analysis of Algorithms</li>
                                <li>Computer Networks + Lab</li>
                                <li>Logic for Computer Science</li>
                                <li>
                                    Digital Logic Design and Computer
                                    Architecture + Lab
                                </li>
                                <li>Discrete Structures</li>
                                <li>Data Structures and Algorithms + Lab</li>
                                <li>Data Analysis and Interpretation</li>
                                <li>Software Systems Lab</li>
                                <li>
                                    Abstractions and Paradigms for Programming +
                                    Lab
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
