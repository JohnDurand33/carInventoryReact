function Home() {

    const imgUrl = "https://res.cloudinary.com/dkeozpkpv/image/upload/v1711137384/landing_k39qzp.jpg";

    return (
        <>
            <div
                style={{ backgroundImage: `url(${imgUrl})`, height:`100 vh` }}
                className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
            >Home
            //     <div className="flex place-items-center h-screen">
            //         <h3>Welcome To the Phonebook</h3>
                </div>
            </div>
        </>
    );
}

export default Home