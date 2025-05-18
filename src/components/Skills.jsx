import skills_data from "../data/skills.json";

function SkillItem({ skill }) {
    return (
        <div
            className="text-center px-4 pb-3 m-5 border bg-success-subtle rounded-5"
            style={{ boxShadow: "0 0 20px gray" }}
        >
            <div className="text-center text-secondary py-2 fs-5 border-bottom border-dark">
                {skill.name}
            </div>
            <div className="text-center text-black m-2 fs-6 font-monospace fs-5">
                {skill.list.join(", ")}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <div className="mx-3">
            <h2 className="text-center text-dark mt-5">
                My Skills
            </h2>
            <h4 className="text-center text-dark mb-5">
                A showcase of the tools, technologies, and concepts I've learned
                and applied.
            </h4>

            {skills_data.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
            ))}
        </div>
    );
}
