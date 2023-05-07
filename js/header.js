const signIn = document.getElementById('sign-in');
const navbarList = document.getElementById('navbar-list')



function renderHeaderLinks() {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(currentUser) {
        signIn.innerHTML = `<div onclick="logout()"class="navbar__nav-link">Logout</div>`;

        if(currentUser.role === 'ADMIN_ROLE') {

            const adminProductLink = createListItemElement('admin-product', 'Admin Product');

            const adminUserLink = createListItemElement('admin-user', 'Admin Users');

            navbarList.appendChild(adminProductLink)
            navbarList.appendChild(adminUserLink)
        }
    } else {
        const link = createLinkElement('login', 'Login' )
        signIn.replaceChildren(link);
    }
}


function createListItemElement(path, text) {
    const listItem = document.createElement('li');
    listItem.classList.add('navbar__nav-item');
    // Le asigno un atributo id para luego removerlo en el logout
    listItem.setAttribute('id', path)
    link = createLinkElement(path, text);

    listItem.appendChild(link);
    return listItem;
}


function createLinkElement(path, text) {
    const link = document.createElement('a');
    link.classList.add('navbar__nav-link');
    link.href = `/pages/${path}/${path}.html`;
    link.innerText = text;

    return link;
}



function logout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(currentUser.role === 'ADMIN_ROLE') {
        document.getElementById('admin-product').remove()
        document.getElementById('admin-user').remove();
    }

    localStorage.removeItem('currentUser');
    localStorage.removeItem('order')
    renderHeaderLinks();
}

renderHeaderLinks();
