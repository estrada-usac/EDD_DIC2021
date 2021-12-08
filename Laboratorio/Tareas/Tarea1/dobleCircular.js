/************** [Tarea1|Lab.EDD|DIC2021] *************
 * Estructura De Datos Que Consiste En Una Lista Do- *
 * blemente Enlazada Circular                        *
 * ************************************************* *
 * Desarrollador Por: Erick Estrada Aroche           *
 * GIT: estrada-usac                                 *
 * ************************************************* */

 class Nodo {

    constructor(data, siguiente, anterior) {
      this.data = data;
      this.siguiente = siguiente;
      this.anterior = anterior;
   };

};

class ListaDC {

   constructor() {
      this.primero = null;
      this.ultimo = null;
   };

   insertar(data) {
      // Crear Nuevo Nodo
      const nuevoNodo = new Nodo(data, this.primero, null);

      // Establecer Apuntadores
      if (this.primero) { // Si Ya Hay Otros Nodos En Lista
         nuevoNodo.anterior = this.ultimo;
         this.ultimo.siguiente = nuevoNodo;
         this.ultimo = nuevoNodo;
         this.ultimo.siguiente = this.primero;
         this.primero.anterior = this.ultimo;

      }else { // Lista Esta Vacia
         this.primero = nuevoNodo;
         this.ultimo = nuevoNodo;
         this.ultimo.siguiente = this.primero;
         this.primero.anterior = this.ultimo;
      }

   };

   eliminar(data_) {

      let aux = this.primero;
      while (aux !== this.ultimo) {

         if (aux.data == data_) {
            if (this.primero.data === aux.data) {
               this.ultimo.siguiente = this.primero.siguiente;
               this.primero.siguiente.anterior = this.ultimo;
               this.primero = this.primero.siguiente;

            }else {
               aux.anterior.siguiente = aux.siguiente;
               aux.siguiente.anterior = aux.anterior;
            }
            return 0;
         }

         aux = aux.siguiente;
      }

      if (aux === this.ultimo) {
         this.ultimo.anterior.siguiente = this.primero;
         this.ultimo = this.ultimo.anterior;
         this.primero.anterior = this.ultimo;
      }

   };

   mostrar() {
      let aux = this.primero;
      while(aux !== this.ultimo) {
         console.log(aux.data);
         aux = aux.siguiente;
      }
      console.log(aux.data);
   };

};

// Pruebas
const nuevaLista = new ListaDC();
nuevaLista.insertar(2);
nuevaLista.insertar(4);
nuevaLista.insertar(6);
nuevaLista.insertar(8);
nuevaLista.insertar(10);
nuevaLista.mostrar();

console.log(' ----- ');
nuevaLista.eliminar(6);
nuevaLista.eliminar(10);
nuevaLista.mostrar();
