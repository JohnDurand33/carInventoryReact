import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import server_calls from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true },
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'color', headerName: "Color", flex: 1  },
    { field: 'make', headerName: "Make", flex: 1  },
    { field: 'model', headerName: "Model", flex: 2 }
]

function DataTable() {

    const [open, setOpen] = useState(false)
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`);
        setTimeout( () => { window.location.reload() }, 500)
    }

    // TODO - finish and test
    return (
        <>
            <Modal id={selectionModel} open={open} onClose={handleClose} />
            <div className="flex flex-row">
                <div>
                    <button
                        className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Add New Car
                    </button>
                    <Button
                        onClick={() => handleOpen()}
                        className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white"
                    >
                        Update
                    </Button>
                    <Button
                        onClick={deleteData}
                        className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-400 hover:text-white"
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <div className="flex flex-row">
                <div
                    className={
                        open ? "hidden" : "container mx-10 my-5 flex flex-col"
                    }
                    style={{ height: 400, width: "100%" }}
                >
                    <h2 className="text-center font-serif font-bold p-3 bg-slate-300 my-2 rounded">
                        The Collection
                    </h2>
                    <DataGrid className='bg-white bg-opacity-70'
                        rows={carData}
                        columns={columns}
                        checkboxSelection={true}
                        onRowSelectionModelChange={(item:any) => {
                            setSelectionModel(item);
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default DataTable;
