/*************** [Clase ListaClientes] ****************
 * Esta Clase Definirá(Creará) Una Lista De Objetos   *
 * Cliente, Un Vendedor Tendrá Acceso A ListaClientes *
 * Para Administrar Cada Cliente Que Posee            *
 * ************************************************** *
 * Desarrollador Por: Erick Estrada Aroche            *
 * GIT: estrada-usac                                  *
 * ************************************************** */
import {Cliente} from './Cliente.js';

class ListaClientes {

   constructor() {

      // Apuntadores (Referencia Para Fácil Acceso)
      this._primero = null;
      this._ultimo = null;
   }

   insertar(id, nombre, correo) {

      // Crear Nuevo Cliente
      const nuevoCliente = new Cliente(id, nombre, correo);

      // Establecer Apuntadores
      if (this._primero) { // Si Lista No Está Vacia

         nuevoCliente.anterior = this._ultimo;
         this._ultimo.siguiente = nuevoCliente;
         this._ultimo = nuevoCliente;

      }else { // Lista Esta Vacia

         this._primero = nuevoCliente;
         this._ultimo = nuevoCliente;
      }

   }

   // Eliminar Cliente Pasando Por Argumento El id Del Cliente
   // Este Método Reotrna El Objeto CLiente Eliminado (Para Funcionalidad De Volver Agregarlo)
   eliminar(id) {

      // Auxiliar Para Recorrer Lista
      let aux = this._primero;

      // Verificar Si Coincide Con El Primero O El Último
      if (this._primero.id === id) {
         this._primero = this._primero.siguiente;
         this._primero.anterior = null;
         return aux;
      }else if(this._ultimo.id === id) {
         aux = this._ultimo;
         this._ultimo = this._ultimo.anterior;
         this._ultimo.siguiente = null;
         return aux;
      }


      while (aux !== null) {

         if (aux.id === id) {
            aux.anterior.siguiente = aux.siguiente;
            aux.siguiente.anterior = aux.anterior;
            return aux;
         }


         aux = aux.siguiente;
      }

   }

   mostrar() {
      let aux = this._primero;
      while (aux !== null) {
         console.log(aux.nombre);
         console.log('');
         aux = aux.siguiente;
      }
   }

   // Agregar Buscar Por ID

   // Getters Y Setters
   get primero() {
      return this._primero;
   }

   set primero(primero) {
      this._primero = primero;
   }

   get ultimo() {
      return this._ultimo;
   }

   set ultimo(ultimo) {
      this._ultimo = ultimo
   }

}

export {ListaClientes};

/*
// Pruebas
const Lista1 = new ListaClientes();
Lista1.insertar(1, 'Cliente 1', 'Correo');
Lista1.insertar(2, 'Cliente 2', 'Correo');
Lista1.insertar(3, 'Cliente 3', 'Correo');
Lista1.insertar(4, 'Cliente 4', 'Correo');
Lista1.insertar(5, 'Cliente 5', 'Correo');

Lista1.mostrar();
*/
