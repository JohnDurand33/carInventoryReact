let token = '418afb54aec6ffff361856cc243a74970b21eefa4bd939b2' 

const server_calls = {
    get: async () => {
        const response = await fetch("https://car-collections.onrender.com/api/cars",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Orogin": "*",
                    "x-access-token": `Bearer ${token}`,
                },
            });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    // TODO: FINISH SERVER CALLS

    create: async (data: any = {}) => {
        const response = await fetch("https://car-collections.onrender.com/api/cars",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
    }
}

export default server_calls