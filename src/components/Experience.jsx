import experiences_data from "../data/experiences.json";

function ExperienceItem({ exp }) {
    return (
        <div className="row justify-content-between align-items-center border-top border-dark py-4">
            <div className="col-md-3 text-center">
                <a href={exp.website} target="_blank"><img
                    src={process.env.PUBLIC_URL + exp.image}
                    alt="Hero"
                    height={250}
                /></a>
            </div>
            <div className="col-md-9 px-5 py-4">
                <h1 className="text-center mb-5 fs-2 text-md-start">
                    {exp.title}
                </h1>
                <h5>
                    {exp.description}
                </h5>
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="mx-3">
            <h2 className="text-center text-dark mt-5">
                My Experience
            </h2>
            <h4 className="text-center text-dark mb-4">
                A showcase of the tools, technologies, and concepts I've learned
                and applied.
            </h4>
            <div className="container-fluid m-0 py-5">
                {experiences_data.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        exp={exp}
                    />
                ))}
                <div className="row justify-content-between align-items-center border-top border-dark py-4"> 
                </div>
            </div>
        </div>
    );
}
