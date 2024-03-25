import Input from "./Input";
import Button from "./Button";

import { useForm } from "react-hook-form";
interface CarFormProps {
    id?: string,
    data?: {}
}

const CarForm = (props:CarFormProps) => {
    const { register, handleSubmit } = useForm({})
    
    const onSubmit = () => {
        console.log('pass');
    }

    return (
        <div>
            <form onSubmit={
                handleSubmit(onSubmit)
            }>
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