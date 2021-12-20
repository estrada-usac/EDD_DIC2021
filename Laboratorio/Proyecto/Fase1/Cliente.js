/****************** [Clase Cliente] *******************
 * Esta Clase Definirá(Creará) Un Objeto Cliente Que  *
 * Luego Se Agregará A Una Lista De Cliente Que Admi- *
 * nistrará Un Vendedor Respectivo.                   *
 * ************************************************** *
 * Desarrollador Por: Erick Estrada Aroche            *
 * GIT: estrada-usac                                  *
 * ************************************************** */
class Cliente {

   constructor(id, nombre, correo) {

      // Datos De Cliente
      this._id = id;
      this._nombre = nombre;
      this._correo = correo;

      // Apuntadores A Otros Clientes (Servirá Para Crear Una Lista De Clientes)
      this._siguiente = null;
      this._anterior = null;

   }

   // Getters Y Setters
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

   get correo() {
      return this._correo;
   }

   set correo(correo) {
      this._correo = correo;
   }

   get siguiente() {
      return this._siguiente;
   }

   set siguiente(siguiente) {
      this._siguiente = siguiente;
   }

   get anterior() {
      return this._anterior;
   }

   set anterior(anterior) {
      this._anterior = anterior;
   }

}

module.exports = Cliente;
