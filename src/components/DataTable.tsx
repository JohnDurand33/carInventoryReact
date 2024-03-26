import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import server_calls from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
    const [ selectionModel, setSelectionModel ] = useState<any>([])
    // TODO: write useGetData hook and selection model state change content

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    //TODO: add delete function to button
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
            <div className={open ? "hidden" : "coniner mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}>
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Collection</h2>
                <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]} checkboxSelection={true}
                    onRowSelectionModelChange={(item: any) => {
                        setSelectionModel(item)
                    }}
                />
            </div>
            <button onClick={getData}></button>
        </>
    );
}

export default DataTable;
