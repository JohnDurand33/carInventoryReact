import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
    return (
        <div>
            {/* Add Handle Function */}
            <form onSubmit={() => console.log("submitted")}>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input name="year" placeholder="Year" />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input name="color" placeholder="Color" />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input name="make" placeholder="Make" />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input name="model" placeholder="Model" />
                </div>
                <div className="flex p-1 justify-center">
                    <Button className="flex justify-end m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                    >Submit
                    </Button>
                </div>
            </form>
            {/*  */}
        </div>
    );
};

export default ContactForm;
