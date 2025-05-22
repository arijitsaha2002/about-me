import educations_data from "../data/educations.json";

function EducationItem({ edu }) {
    return (
        <div className="row justify-content-between align-items-center border-top border-dark py-4">
            <div className="col-md-4 text-center">
                <a href={edu.website} target="_blank"><img
                    src={process.env.PUBLIC_URL + edu.image}
                    alt="Hero"
                    height={250}
                /></a>
            </div>
            <div className="col-md-8 px-5 py-4">
                <h1 className="text-center mb-5 fs-2 text-md-start">
                    {edu.name}
                </h1>
                <h5>
                    {edu.description}
                </h5>
            </div>
        </div>
    );
}

export default function Educations() {
    return (
        <div className="mx-3">
            <h2 className="text-center text-dark mt-5">
                My Educations
            </h2>
            <h4 className="text-center text-dark mb-4">
                I mentioned all the institutions I have studied in.
            </h4>
            <div className="container-fluid m-0 py-5">
                {educations_data.map((edu, index) => (
                    <EducationItem key={index} edu={edu} />
                ))}
                <div className="row justify-content-between align-items-center border-top border-dark py-4">
                </div>
            </div>
        </div>
    );
}
