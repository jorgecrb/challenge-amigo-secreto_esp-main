// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];

// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo() {
//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let nombreAmigo = document.getElementById("amigo").value.trim();// Usamos .trim() para eliminar espacios innecesarios

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

 amigos.push(nombreAmigo);
 document.getElementById("listaAmigos");
    //console.log(amigos)

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
document.getElementById("amigo").value = "";

listaAmigos();

}

//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
function listaAmigos() {
    let lista = document.getElementById("listaAmigos");

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
lista.innerHTML = "";

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
for(let i = 0; i < amigos.length; i++ ) {
    let amigo = amigos[i]; // se obtiene el amigo en la posición i del array
   
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    let li = document.createElement("li");
    li.innerHTML = amigo; // Asignará el nombre del amigo como texto del <li>

    lista.appendChild(li); // Añade el <li> al elemento de la lista en el DOM

}
}

//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
function sortearAmigo() {
    if (amigos.length === 0){
        alert("La lista de amigos esta vacía, agregue amigos a la lista");
        return;
    }

//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    let indice = Math.floor(Math.random() * amigos.length);

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let amigoSorteado = amigos[indice];

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

}