import Input from "./Input";
import Button from "./Button";

import { useForm } from "react-hook-form";
import server_calls from "../api/server";
import { useDispatch, useStore } from 'react-redux';
import { chooseColor, chooseMake, chooseModel, chooseYear } from "../redux/slices/rootSlice";

//interfaces
interface CarFormProps {
    id?: string,
    data?: {}
}

const CarForm = (props:CarFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`);
        if (props.id) {
            server_calls.update(props.id, data);
            console.log(`Updated: ${data} ${props.id}`);
            setTimeout(() => { window.location.reload() }, 1000);
            event.target.reset()
        } else {
            //Use dispatch to update our state in our store
            dispatch(chooseYear(data.year));  // line saves data into the store
            dispatch(chooseColor(data.color));
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));

            server_calls.create(store.getState()) // line fetches data from store and creates a new user
            setTimeout(() => {window.location.reload()}, 1000)
        }

    }
    
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input
                        {...register("year")}
                        name="year"
                        placeholder="Year"
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input
                        {...register("color")}
                        name="color"
                        placeholder="Color"
                    />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input
                        {...register("make")}
                        name="make"
                        placeholder="Make"
                    />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input
                        {...register("model")}
                        name="model"
                        placeholder="Model"
                    />
                </div>
                <div className="flex p-1 justify-center">
                    <Button className="flex justify-end m-3 bg-slate-400 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
            {/*  */}
        </div>
    );
};

export default CarForm;

// State Management
// Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

// function Counter() {
//   // STATE: a counter value
//   const [counter, setCounter] = useState(0)

//   // ACTION: code that causes an update to the state when something happens
//   const increment = () => {
//     setCounter(prevCounter => prevCounter + 1)
//   }

//   // VIEW: the UI definition
//   return (
//     <div>
//       Value: {counter} <button onClick={increment}>Increment</button>
//     </div>
//   )
// }