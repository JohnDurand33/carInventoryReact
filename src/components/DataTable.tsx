import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import server_calls from "../api/server";

function DataTable() {
    let [open, setOpen] = useState(false)
    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getData = () => {
        console.log(server_calls.get())
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}/>
            <div className="flex flex-row">
                <div>
                    <button
                        className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white"
                        onClick={() => handleOpen()}>
                        Add New Car
                    </button>
                    <Button className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white">
                        Update Car
                    </Button>
                    <Button className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white">
                        Remove Car
                    </Button>
                </div>
            </div>
            {/* {Data Table Section} */}
            <button onClick={getData}></button>
        </>
    );
}

export default DataTable;
