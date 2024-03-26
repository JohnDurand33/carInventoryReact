let token = '418afb54aec6ffff361856cc243a74970b21eefa4bd939b2' 

const server_calls = {
    get: async () => {
        const response = await fetch("https://car-collections.onrender.com/api/cars",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
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
                    "x-access-token": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(
            `https://car-collections.onrender.com/api/cars/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        );
        
        if (!response.ok) {
            throw new Error('Failed to update data on the server');
        }

        return await response.json();
    },

    delete: async(id:string) => {
        const response = await fetch(`https://car-collections.onrender.com/api/cars/${id}`,
            {
                method: 'DELETE',
                headers: {
                        'Content-Type': 'application/json',
                        "x-access-token": `Bearer ${token}`
                    },
            });
        
        if (!response.ok) {
            throw new Error('Failed to delete data from the server');
        }

        return await response.json();
    }
}

export default server_calls

// if errors put this in methods:   "Access-Control-Allow-Origin": "*", may need to remove !response commands for update and delete and return await response.json() command for delete function
