import project_data from "../data/projects.json";

function ProjectModal({ project, index }) {
    return (
        <div
            className="modal fade"
            id={index + "exampleModal"}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id={index + "exampleModalLabel"}
                        >
                            {project.title}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectItem({ project, index }) {
    console.log(index);
    return (
        <>
            <div
                className="card"
                style={{
                    width: "24rem",
                    height: "44rem",
                    boxShadow: "0 0 20px gray",
                }}
                role="button"
                data-bs-toggle="modal"
                data-bs-target={"#" + index + "exampleModal"}
            >
                <img
                    src={process.env.PUBLIC_URL + project.image}
                    className="card-img-top"
                    alt="..."
                />
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
            <ProjectModal project={project} index={index} />
        </>
    );
}

export default function Projects() {
    return (
        <div>
            <div className="container">
                <h2 className="text-center text-dark mt-5">
                    My Works
                </h2>
                <h4 className="text-center text-dark">
                    A collection of projects I've worked on.
                </h4>
            </div>
            <div className="p-5 d-flex flex-wrap justify-content-center gap-5">
                {project_data.map((project, index) => (
                    <ProjectItem
                        key={index}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
