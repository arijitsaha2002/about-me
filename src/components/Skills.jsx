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

            <div className="container bg-info overflow-hidden mt-5">
                <div className="row align-items-center border-bottom border-1 border-dark">
                    <div className="col-4 fs-5 text-center">
                        Languages
                    </div>
                    <div className="col-8 py-2 bg-success text-light fs-5 py-3 text-center">
                        C++, Python, JavaScript, Java, HTML, CSS, R, SQL,
                        MATLAB, Bash, MIPS, x86
                    </div>
                </div>
                <div className="row align-items-center border-bottom border-1 border-dark">
                    <div className="col-4 fs-5 text-center">
                        Software
                    </div>
                    <div className="col-8 py-2 bg-success text-light fs-5 py-3 text-center">
                        Git/GitHub, Visual Studio Code, Jupyter Notebook,
                        PyCharm, MATLAB, Anaconda, Tableau, Microsoft Office
                        Suite (Word, Excel, PowerPoint), Figma
                    </div>
                </div>
                <div className="row align-items-center border-bottom border-1 border-dark">
                    <div className="col-4 fs-5 text-center">
                        Frameworks
                    </div>
                    <div className="col-8 py-2 bg-success text-light fs-5 py-3 text-center">
                        React, Node.js, Express.js, Bootstrap, Flask, Django
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-4 fs-5 text-center">
                        Courses
                    </div>
                    <div className="col-8 py-2 bg-success text-light fs-5 py-3 text-center">
                        Implementation of Programming Languages + Lab, Database
                        and Information Systems + Lab, Topics in Virtualization
                        and Cloud Computing, Introduction to Blockchains,
                        Cryptocurrencies and Smart Contracts, Automata Theory,
                        Operating Systems + Lab, Artificial Intelligence and
                        Machine Learning + Lab, Artificial Intelligence and
                        Machine Learning, Operating Systems, Game Theory and
                        Algorithmic Mechanism Design, Design and Analysis of
                        Algorithms, Computer Networks + Lab, Logic for Computer
                        Science, Digital Logic Design and Computer Architecture
                        + Lab, Discrete Structures, Data Structures and
                        Algorithms + Lab, Data Analysis and Interpretation,
                        Software Systems Lab, Abstractions and Paradigms for
                        Programming + Lab
                    </div>
                </div>
            </div>
        </div>
    );
}
