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
