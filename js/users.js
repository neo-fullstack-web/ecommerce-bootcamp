let users = []; 
const URL = `http://localhost:8000/api`;

async function obtenerUsuarios(page = 1) {
    try {

        const token = localStorage.getItem('token');

        const response = await axios.get(`${URL}/products?skip=${page}`, {
            headers: {
                Authorization: token
            },
            
        });

        console.log(response)
        users = response.data.users;

        users.forEach(usr => document.write(`${usr.fullName} <br>`))
    } catch (error) {
        console.log(error)
    }


}

obtenerUsuarios();