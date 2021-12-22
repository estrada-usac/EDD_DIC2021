import {ArbolUsuario} from './project/ArbolUsuario.js';
import {ListaClientes} from './project/ListaClientes.js';
import {Vendedor} from './project/Vendedor.js';
//import {ParseJson} from './project/ParseJson.js'

const usuarios = new ArbolUsuario();

let vendedoresJSON = {};
let proveedoresJSON = {};
let clientesJSON = {};
let eventosJSON = {};

let archivo = document.getElementById("inputFileVendedores");
if (archivo) {
   archivo.addEventListener('change', function() {
      var file = new FileReader();
      file.onload = () => {
         vendedoresJSON = file.result;
         console.log(vendedoresJSON);
      }
      file.readAsText(this.files[0]);
   });
}

let archivo2 = document.getElementById("inputFileProveedores");
if (archivo2) {
   archivo2.addEventListener('change', function() {
      var file2 = new FileReader();
      file2.onload = () => {
         proveedoresJSON = file2.result;
         console.log(proveedoresJSON);
      }
      file2.readAsText(this.files[0]);
   });
}

let archivo3 = document.getElementById("inputFileClientes");
if (archivo3) {
   archivo3.addEventListener('change', function() {
      var file3 = new FileReader();
      file3.onload = () => {
         clientesJSON = file3.result;
         console.log(clientesJSON);
      }
      file3.readAsText(this.files[0]);
   });
}

let archivo4 = document.getElementById("inputFileEventos");
if (archivo4) {
   archivo4.addEventListener('change', function() {
      var file4 = new FileReader();
      file4.onload = () => {
         eventosJSON = file4.result;
         console.log(eventosJSON);
      }
      file4.readAsText(this.files[0]);
   });
}
