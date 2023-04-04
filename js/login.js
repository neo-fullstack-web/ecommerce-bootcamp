// 1-a guardo el formulario en una variable
const loginForm = document.getElementById('loginForm');

// 1- Obtener los datos del formulario
loginForm.addEventListener('submit', (event) =>  {
    event.preventDefault();
    console.dir(loginForm);

    const { email, password } = loginForm.elements;
    
    // 2- Checkear datos ingresados con los usuarios que tengo
    // 2a- Obtener los usuarios almacenados
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((usr) => {
        if(usr.email === email.value) {
            return true;
        }
        return false;
    }) // { name, password, email, }
    
    if(!user || user.password !== password.value) {
        showAlert('Login incorrecto', 'error')
        return;
    }

    
    localStorage.setItem('currentUser', JSON.stringify(user));
    //TODO: insertar alerta custom
    showAlert('Login correcto te redireccionaremos en unos instantes...')

    setTimeout(() => {
        window.location.href = '/';
    }, 1500)

});
    //a- Email que me ingreso lo tiene algún usuario de mi array
    //b- password deberían ser las mismas
// 3- Vamos guardar en el localStorage un registro que va a ser currentUser - user

//function logout
//1- Borramos el regisrto del localStorage