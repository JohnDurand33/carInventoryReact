import Button from "./Button";
import Modal from "./Modal"

function DataTable() {
    return (
        <>
            <Modal open={true}/>
            <div className="flex flex-row">
                <div>
                    <button className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white">
                        Create New Contact
                    </button>
                    <Button className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white">
                        Update
                    </Button>
                    <Button className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white">
                        Delete
                    </Button>
                </div>
            </div>
            {/* {Data Table Section} */}
        </>
    );
}

export default DataTable;
