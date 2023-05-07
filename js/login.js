// 1-a guardo el formulario en una variable
const loginForm = document.getElementById('loginForm');
const URL = 'http://localhost:8000/api';

// 1- Obtener los datos del formulario
loginForm.addEventListener('submit', async(event) =>  {
    event.preventDefault();
    console.dir(loginForm);

    // const { email, password } = loginForm.elements;

    console.log(loginForm.elements);


    try {
        const dataBody = { 
            email: loginForm.elements.email.value,
            password: loginForm.elements.password.value
        }


        const resp = await axios.post(`${URL}/login`, dataBody);

        console.log(resp)
        const { token, user, msg } = resp.data;

        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(user))

        showAlert(msg);

        // setTimeout(() => {
        //     window.location.href = '/';
        // }, 1500);

    } catch (error) {
        console.log(error)
    }
    return

});
    //a- Email que me ingreso lo tiene algún usuario de mi array
    //b- password deberían ser las mismas
// 3- Vamos guardar en el localStorage un registro que va a ser currentUser - user

//function logout
//1- Borramos el regisrto del localStorage currentUser, localStorage token
//2 - 