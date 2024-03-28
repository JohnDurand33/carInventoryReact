import DataTable from "../components/DataTable";

const imgUrl = "https://res.cloudinary.com/dkeozpkpv/image/upload/v1711137384/landing_k39qzp.jpg";

function Dashboard() {
    return (
        <div
            className="h-screen w-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="content">
                <DataTable />
            </div>
        </div>
    );
}

export default Dashboard;
