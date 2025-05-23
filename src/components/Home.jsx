export default function Home() {
    return (
        <div>
            <div className="container-fluid m-0">
                <div
                    className="row justify-content-center align-items-center"
                    style={{ backgroundColor: "#0A001B" }}
                >
                    <div className="col-md-5 text-center order-md-2">
                        <img
                            src={process.env.PUBLIC_URL +
                                "/images/profile_side_image.jpg"}
                            alt="Hero"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6 text-start order-md-1 px-5 py-5">
                        <h1
                            className="text-white text-center mb-5"
                            style={{
                                fontSize: "3.5rem",
                            }}
                        >
                            Welcome.
                        </h1>
                        <h5 className="text-white">
                            Hi, I’m Arijit Saha — a software developer from
                            India, and a Computer Science graduate from IIT
                            Bombay. I’ve explored a wide range of domains in
                            software development, including image processing,
                            web development, compilers, and data structures and
                            algorithms. Whether it’s building clean, modern web
                            interfaces or diving deep into low-level systems, I
                            enjoy solving problems across the stack and
                            continuously learning new things.
                        </h5>
                    </div>
                </div>
            </div>
            <img
                src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                alt="profile"
                width={400}
                className="rounded-circle mx-auto d-block mt-5 mb-3"
                style={{
                    maxWidth: "90%",
                    height: "auto",
                }}
            />
            <div 
        className="text-center text-dark fs-5 p-3 mx-md-5 mx-3 my-5 rounded-5"
        style={{ boxShadow: "0 0 20px gray", backgroundColor: "lightgray" }}
            >
                This website showcases my journey as a software developer — from
                academic achievements to hands-on projects across various
                domains like web development, image processing, and compiler
                design. Feel free to explore my skills, projects, and
                accomplishments. I hope you find something interesting and get
                to know my work better!
            </div>
        </div>
    );
}
