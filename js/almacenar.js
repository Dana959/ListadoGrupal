document.addEventListener('DOMContentLoaded', function () {

function cargarLista () {
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML = '';

// Cargar el listado desde localStorage
const item = JSON.parse(localStorage.getItem('lista') || '[]');

// Agregar una li por item
item.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
 
    li.classList.add('list-group-item');
    contenedor.appendChild(li);
    });
}

//Funcion para agregar item a la lista
function agregarItem () {
    const agregar = document.getElementById('item');
    const nuevoItem = agregar.value.trim();
    
    if (nuevoItem) {
        let item = JSON.parse(localStorage.getItem('lista')|| '[]');
        item.push(nuevoItem);

        localStorage.setItem('lista', JSON.stringify(item));
        
        cargarLista();
    }; 
}
 
// Limpiar listado
function limpiarItem () {
    localStorage.removeItem('lista');

    cargarLista ();
}

document.getElementById('agregar').addEventListener('click', agregarItem);
document.getElementById('limpiar').addEventListener('click', limpiarItem);

// Cargar la lista al iniciar la página
cargarLista();
});













