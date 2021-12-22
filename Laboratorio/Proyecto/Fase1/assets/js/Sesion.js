import {Vendedor} from './project/Vendedor.js';
import {ArbolUsuario} from './project/ArbolUsuario.js';

/* Pruebas
const vendedor1 = new Vendedor(24341,'Erick',25,'correo0','pass','Vendedor','LISTA','Calendar');
const vendedor2 = new Vendedor(20160,'José',20,'correo0','pass1','Vendedor','LISTA','Calendar');

const usuarios = new ArbolUsuario();
usuarios.insertar(vendedor1);
usuarios.insertar(vendedor2);

console.log(usuarios.raiz.id + ' - ' + usuarios.raiz.contrasena);
console.log(usuarios.raiz.izq.id + ' - ' + usuarios.raiz.izq.contrasena);
*/

function sigIn() {
   // Capturar Valor De ID y De Contraseña Ingresado Por Usuario
   let inID = document.getElementById("inID").value;
   let inPass = document.getElementById("inPass").value;

   // Verificar Que No Este Vacio Los Campos
   if (inID === '' || inPass === '') {
      document.getElementById("pruebita").innerHTML = ' * Llenar Todos Los Campos';
      document.getElementById("pruebita").style.color = 'red';
   }else {

      // Verificar Si Es Admin
      if (inID === 'Admin' && inPass === '1234') {
         window.location.href = "../index.html";
      }else { // Buscar Usuario En Árbol Para Verificar Incio De Sesion
         const validar_usuario = usuarios.buscar(inID, inPass, usuarios.raiz);
         console.log(validar_usuario);
         console.log('');
         if (validar_usuario === 1) {
            // Usuario Encontrado, Entrar Al Sistema Usuario
            window.location.href = "../index.html";
         }else {
            // Usuario No Encontrado, Mostrar Mensaje
            document.getElementById("pruebita").innerHTML = ' Usuario Y Contraseña No Existe O Incorrectas';
            document.getElementById("pruebita").style.color = 'red';
         }
         // Nota cuando se hagan más tipos de empleados, hay que validar el tipo de empleado
         // y agregar en el form de login la selección de tipo de empleado
      }

   }

}

document.getElementById("btnSigIn").onclick = function () {
   sigIn();
}
