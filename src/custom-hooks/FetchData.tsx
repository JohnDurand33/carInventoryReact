import { useEffect, useState } from "react";
import server_calls from "../api/server";

export const useGetData = () => {
    const [carData, setData] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect on mount is the syntax below
    useEffect( () => {
        handleDataFetch();    
    }, []) /*   Look at the array figure in " , [])". 
                1) With no array as a second argument of useEffect(), it will occur any time something changes.
                2) With just the array, it will only occur when the component mounts (after it is rendered for the first time)
                2) If we included any componentName inside the brackets, then it would trigger any time that component changed. 
            */
    
    return { carData, getData:handleDataFetch }
    
}
