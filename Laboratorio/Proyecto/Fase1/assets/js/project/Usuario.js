/****************** [Clase Usuario] *******************
 * Esta Clase Definirá(Creará) Un Usuario Empleado    *
 *                                                    *
 * ************************************************** *
 * Desarrollador Por: Erick Estrada Aroche            *
 * GIT: estrada-usac                                  *
 * ************************************************** */
import {Vendedor} from './Vendedor.js';
//const Vendedor = require('./Vendedor.js');
// Aqui Importar Demás Roles De Empleados

class Usuario {

   /* El Constructor
      Crea Un Usuario Para Un Empleado, El Objeto
      Empleado Se Pasa Como Argumento Al Parámetro empleado.

      Este Objeto Usuario Servirá Para Crear Un Árbol De Usuarios
      De Los Empleados Y Así Acceder A Ellos Para El LogIn     */
   constructor(empleado) {

      /* Datos
         (Inf. Del Empleado)

         Se Guardará El Empleado Para Que Al Logearse Se Mantena
         Su Información, Y Se Guardará El ID y Contrasena Del
         Empleado Para Crear El Usuario                        */
      this._empleado = empleado;
      this._id = empleado.id;
      this._contrasena = empleado.contrasena;

      // Apuntadores (Servirán Para Enlazar Usuarios En El Árbol)
      this._izq = null;
      this._der = null;

      // Para Verificar Altura De Arbor Y Equilibrar
      this._altura = 0;
   }

   // Getters Y Setters
   get empleado() {
      return this._empleado;
   }

   /* Set empleado Y Su Data No Se Puede Desde Esta Clase. El
      Objeto Empleado Y Su Data Solo Se Guarda Para Obtenerlo
      Al Logearse En La Plataforma                             */

   get id() {
      return this._id;
   }

   get contrasena() {
      return this._contrasena;
   }

   get izq() {
      return this._izq;
   }

   set izq(empleado_Izq) {
      this._izq = empleado_Izq;
   }

   get der() {
      return this._der;
   }

   set der(empleado_Der) {
      this._der = empleado_Der;
   }

   get altura() {
      return this._altura;
   }

   set altura(altura) {
      this._altura = altura;
   }

}

export {Usuario};
