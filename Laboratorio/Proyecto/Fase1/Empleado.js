/****************** [Clase Empleado] ******************
 * Esta Clase Definirá(Creará) Un Objeto Empleado     *
 *                                                    *
 * ************************************************** *
 * Desarrollador Por: Erick Estrada Aroche            *
 * GIT: estrada-usac                                  *
 * ************************************************** */
class Empleado {


   /* Para CS, Datos Necesarios (id, fecha entrada, nombre, apellidos
      fecha de nacimiento, número de seguridad social, dirección, correo
      teléfono, persona de contacto)*/


   /* El Constructor
      Crea Un Nuevo Empleado Con Los Datos Pasados
      Como Argumentos En Los Parámetros
   */
   constructor(id, nombre, edad, correo, contrasena, rol) {

      // Datos
      this._id = id;
      this._nombre = nombre;
      this._edad = edad;
      this._correo = correo;
      this._contrasena = contrasena;
      this._rol = rol;
   }

   // Getters y Setters
   get id() {
      return this._id;
   }

   set id(id) {
      this._id = id;
   }

   get nombre() {
      return this._nombre;
   }

   set nombre(nombre) {
      this._nombre = nombre;
   }

   get edad() {
      return this._edad;
   }

   set edad(edad) {
      this._edad = edad;
   }

   get correo() {
      return this._correo;
   }

   set correo(correo) {
      this._correo = correo;
   }

   get contrasena() {
      return this._contrasena;
   }

   set contrasena(contrasena) {
      this._contrasena = contrasena;
   }

   get rol() {
      return this._rol;
   }

   set rol(rol) {
      this._rol = rol;
   }

}

module.exports = Empleado;
