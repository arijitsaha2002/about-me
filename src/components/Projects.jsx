import project_data from "../data/projects.json";

function ProjectItem({ project }) {
    return (
        <div
            className="card"
            style={{
                width: "24rem",
                height: "44rem",
                boxShadow: "0 0 20px gray",
            }}
        >
            <img src={process.env.PUBLIC_URL + project.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="text-success text-center card-title">
                    {project.technologies.join(", ")}
                </h5>
                <p
                    className="card-text p-3 text-secondary"
                    style={{ fontSize: "1.1rem" }}
                >
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            <div className="container">
                <h2
                    className="text-center text-dark mt-5"
                >
                    My Works
                </h2>
                <h4
                    className="text-center text-dark"
                >
                    A collection of projects I've worked on.
                </h4>
            </div>
            <div className="p-5 d-flex flex-wrap justify-content-center gap-5">
                {project_data.map((project, index) => (
                    <ProjectItem
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}
