//1 - Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector('#registerForm');
console.log(registerForm)

    //a- Obtener botón de submit
const registerBtn = document.getElementById('registerSubmit');

//2- Vamos a escuchar el evento directamente en JS
registerForm.addEventListener('submit', (event)=> {

    //a- preventDefault
    event.preventDefault();
    //b- Tomar los datos y armar el objeto usuario
    const el = event.target.elements;
    console.log(el);

    //d- Verificar que los datos ingresador  de password1 y password2 son exactamente igual
    if(el.password1.value !== el.password2.value) {
        showAlert(`El password no coincide`, 'warning');
        return;
    }

    //c- Verificar si hay en el localStorage algun usuario guardado ya con ese email
   

    //i- Obtener los usuarios guardados en el localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExist = checkIfUserExist(users, el.email.value);
    // existe: retorno y muestro un alert
    if(userExist) {
        showAlert('El email ya se encuentra registrado', 'error')
        return;
    }
        
        
    // no existe: sigo con mi sintaxis normalmente
        
    const user = {
        fullName: el.fullName.value,
        age: el.age.value,
        password: el.password1.value,
        email: el.email.value,
        gender: el.gender.value
    }

    //e- insertar en mi array de usuarios el nuevo user (lista de usuarios)
    users.push(user)
    
    //e- Guardarlo en el localStorage
    localStorage.setItem('users',  JSON.stringify(users)  ) //users ahora tiene un usuario más

    //f- Limpiamos el formulario, o podemos llevar al usuario a la pagina de login
        //a - Resetear el formulario
            // registerForm.reset();
    showAlert('El usuario se registro correctamente', 'success')

   
})


function checkIfUserExist(users, emailToSearch) {
    //** 3 versiones
        //ii- Recorrer el array con un forEach

        // *========== Solucion 3
        const indexOfUser = users.findIndex(usuario => {
            if(usuario.email === emailToSearch) {
                //solamente trabaja dentro del findIndex
                return true
            }
        })

        if(indexOfUser >= 0) {
            console.warn(`El usuario ya existe findIndex`);

            //! retorno de mi función
            return true;
        }
        
        return false;


        // !=========== Solucion 1
        // let userEmailExist = false;
        // users.forEach(usr => {
        //     if(usr.email === el.email.value) {
        //         userEmailExist = true;
        //     }
        // })

        // if(userEmailExist) {
        //     console.warn(`El usuario ya existe`);
        //     return 
        // }

        // *========== Solucion 2
        // const userExist = users.find(user => {

        //     if(user.email === el.email.value) {
        //         return true;
        //     }

        //     return false; //no es necesario ya que si no lo defino se hace un return undefined (falsy)
        // })

        // if(userExist) {
        //     console.warn(`El usuario ya existe find`);
        //     return;
        // }

}

function showAlert(text, type = 'sucess') {
    // * VAMOS A HACER NUESTRO ALERT CUSTOM
    // Crea unm elemento HTML Node
    
    const alertDialog = document.createElement('div');
    // Añade una clase
    alertDialog.classList.add('alert-dialog');
    alertDialog.innerText = text;
    document.body.appendChild(alertDialog);
    
    if(type === 'error') {
        alertDialog.style.backgroundColor = 'red';
    }
    if(type === 'warning') {
        alertDialog.style.backgroundColor =  'orangered'
    }
    // Para demorar su aparición luego de haberlo creado lineas anterior con document createElement
    setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)
        // window.location.href = '/pages/login/login.html'     
    }, 3000);

}


// const alertDialog = document.createElement('div');
// // Añade una clase
// alertDialog.classList.add('alert-dialog');
// alertDialog.innerText = 'Hola mundillo';
// document.body.appendChild(alertDialog);

// setTimeout(() => {
//     alertDialog.classList.add('show');     
// }, 10);

// setTimeout(() => {
//     alertDialog.classList.remove('show');
// // window.location.href = '/pages/login/login.html'     
// }, 3000)









