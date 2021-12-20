/****************** [Clase Vendedor] ******************
 * Esta Clase Definirá(Creará) Un Objeto Empleado Rol *
 * Vendedor Al Ser Instanciada, Esto Ya Que Hereda De *
 * La Clase Empleado                                  *
 * ************************************************** *
 * Desarrollador Por: Erick Estrada Aroche            *
 * GIT: estrada-usac                                  *
 * ************************************************** */
const Empleado = require('./Empleado.js');

class Vendedor extends Empleado {

   /* El Constructor
      Crea Un Nuevo Empleado Con Rol De Vendedor Con
      Los Datos Pasados Como Argumentos En Los Parámetros
   */
   constructor(id, nombre, edad, correo, contrasena, rol, listaClientes, calendario) {

      super(id, nombre, edad, correo, contrasena, rol);
      this._listaClientes = listaClientes;
      this._calendario = calendario;
   }

   // Getters Y Setters
   get listaClientes() {
      return this._listaClientes;
   }

   set listaClientes(listaClientes) {
      this._listaClientes = listaClientes;
   }

   get calendario() {
      return this._calendario;
   }

   set calendario(calendario) {
      this._calenadrio = calendario;
   }

}

module.exports = Vendedor;
