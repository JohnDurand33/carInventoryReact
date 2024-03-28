const imgUrl = "https://res.cloudinary.com/dkeozpkpv/image/upload/v1711137384/landing_k39qzp.jpg";

export default function About() {
    return (
        <div style={{ backgroundImage: `url(${imgUrl})`, height:`100 vh` }}
            className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
            <div className="flex place-items-center h-screen">
                <h3 className="p-5 bg-white bg-opacity-50 text-black rounded">Under Construction</h3>
            </div>
        </div>
    )
}
