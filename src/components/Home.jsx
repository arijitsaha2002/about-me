export default function Home() {
    return (
        <div>
            <div className="container-fluid m-0">
                <div
                    className="row justify-content-between align-items-center"
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
                    <div className="col-md-7 text-start order-md-1 px-5 py-5">
                        <h1
                            className="text-white text-center mb-5"
                            style={{
                                fontFamily: "inter",
                                fontSize: "5rem",
                            }}
                        >
                            Welcome.
                        </h1>
                        <h5
                            className="text-white"
                            style={{ fontFamily: "inter" }}
                        >
                            My name is Arijit Saha, a front-end developer
                            based in Torquay, Devon, UK. I have worked on a wide
                            range of front-end projects, from DJ applications to
                            eCommerce booking platforms, with a focus on
                            creating clean, well-crafted interfaces that not
                            only look great but also provide a seamless user
                            experience.
                        </h5>
                    </div>
                </div>
            </div>
            <img
                src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                alt="profile"
                width={400}
                className="rounded-circle mx-auto d-block mt-5 mb-3"
            />
        </div>
    );
}
