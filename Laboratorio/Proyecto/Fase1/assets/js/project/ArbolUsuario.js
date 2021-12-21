/**************** [Clase ArbolUsuario] ****************
 * Esta Clase Definirá(Creará) Una Estructura De Datos*
 * De Árbol AVL Donde Se Guardarán Usuarios           *
 * ************************************************** *
 * Desarrollador Por: Erick Estrada Aroche            *
 * GIT: estrada-usac                                  *
 * ************************************************** */
import {Usuario} from './Usuario.js';
import {Vendedor} from './Vendedor.js';

class ArbolUsuario {

   constructor() {

      // Raiz Del Árblo (Apuntador A Primer Empleado En Árbol)
      this._raiz = null;
   }

   insertar(empleado) {

      // Crear Nuevo Usuario
      this._raiz = this.AgregarEmpleado(empleado, this._raiz);
   }

   AgregarEmpleado(empleado, raiz_actual) {

      if(raiz_actual === null){
         return new Usuario(empleado);
      }else if (empleado.id < raiz_actual.id) {
         raiz_actual.izq = this.AgregarEmpleado(empleado, raiz_actual.izq);

         //problema aqui tal vez .izq - .der es .der - .izq
         if ((this.altura(raiz_actual.izq)-this.altura(raiz_actual.der)) === 2) {

            (empleado.id < raiz_actual.izq.id) ? raiz_actual = this.rotIzq(raiz_actual) : raiz_actual = this.rotDobleIzq(raiz_actual);
         }

      }else if(empleado.id > raiz_actual.id) {
         raiz_actual.der = this.AgregarEmpleado(empleado, raiz_actual.der);

         if ((this.altura(raiz_actual.der)-this.altura(raiz_actual.izq))===2) {

            (empleado.id > raiz_actual.der.id) ? raiz_actual = this.rotDer(raiz_actual) : raiz_actual = this.rotDobleDer(raiz_actual);
         }

      }

      // Calcular Equilibrio
      let d = this.altura(raiz_actual.der);
      let i = this.altura(raiz_actual.izq);
      let m = this.alturaMax(d, i);
      raiz_actual.altura = m + 1;
      return raiz_actual;

   }

   altura(raiz_actual) {
      if (raiz_actual === null) return -1
      return raiz_actual.altura
   }

   alturaMax(der, izq) {
      if (der > izq) return der
      return izq
   }

   // Rotaciones
   // Simple Por La Izquierda
   rotIzq(raiz_actual) {

      let aux = raiz_actual.izq;
      raiz_actual.izq = aux.der;
      aux.der = raiz_actual;
      raiz_actual.altura = this.alturaMax(this.altura(raiz_actual.izq), this.altura(raiz_actual.der)) + 1;
      aux.altura = this.alturaMax(this.altura(aux.izq), raiz_actual.altura) + 1;
      return aux;
   }

   // Doble Por La Izquierda
   rotDobleIzq(raiz_actual) {
      console.log('doblesIZQ');
/*
      let aux = raiz_actual.izq;
      raiz_actual.izq = aux.der;
      aux.der = null;
      raiz_actual.izq.izq = aux;
*/
      raiz_actual.izq = this.rotDer(raiz_actual.izq);
      return this.rotIzq(raiz_actual);
   }

   // Simple Por La Izquierda
   rotDer(raiz_actual) {
      let aux = raiz_actual.der;
      raiz_actual.der = aux.izq;
      aux.izq = raiz_actual;
      raiz_actual.altura = this.alturaMax(this.altura(raiz_actual.izq), this.altura(raiz_actual.der)) + 1;
      aux.altura = this.alturaMax(this.altura(aux.der), raiz_actual.altura) + 1;
      return aux;
   }

   // Doble Por La Izquierda
   rotDobleDer(raiz_actual) {
      console.log('dobleDER');
      raiz_actual.der = this.rotIzq(raiz_actual.der);
      return this.rotDer(raiz_actual);
   }

   // Getters Y Setters
   get raiz() {
      return this._raiz;
   }

   set raiz(raizArbol) {
      this._raiz = raiz;
   }

   // Recorrdios
   preorden(raiz_actual){
      if(raiz_actual != null){
        console.log(raiz_actua.id);
        this.preorden(raiz_actual.izq);
        this.preorden(raiz_actual.der);
      }
   }

   inOrden(raiz_actual){
      if(raiz_actual != null){
           this.inOrden(raiz_actual.izq);
           console.log(raiz_actual.id);
           this.inOrden(raiz_actual.der);
      }
   }

   postOrden(raiz_actual){
      if(raiz_actual != null){
           this.postOrden(raiz_actual.izq);
           this.postOrden(raiz_actual.der);
           console.log(raiz_actual.id);
      }
   }

   // Aquí Crear Método Buscar Nodo En Árbol Para Sesion
   buscar(id, pass, raiz_actual) {

      if (raiz_actual != null ) {

         this.buscar(id, pass, raiz_actual.izq);
         if ((parseInt(id, 10) === raiz_actual.id) && (pass === raiz_actual.contrasena)) {
            return 1; // Encontrado
         }
         this.buscar(id, pass, raiz_actual.der);

      }else {
         return 0; // No Encontrado
      }

   }

}

export {ArbolUsuario};

/*
// Pruebas
// Crear Arbol De Usuarios
const ArbolUsuarios = new ArbolUsuario();

// 1. Crear Vendedor
const vendedor1 = new Vendedor(30, 'Erick Estrada', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
// 2. Crear Usuario Tipo Vendedor Para vendedor 1 e Insertarlo A Arblo De Usuarios
ArbolUsuarios.insertar(vendedor1);

const vendedor2 = new Vendedor(20, 'Gabreil Aroche', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor2);

const vendedor3 = new Vendedor(10, 'Jose Pepe', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor3);

const vendedor4 = new Vendedor(7, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor4);

const vendedor5 = new Vendedor(5, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor5);

const vendedor6 = new Vendedor(26, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor6);

const vendedor7 = new Vendedor(24, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor7);

const vendedor8 = new Vendedor(15, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor8);

const vendedor9 = new Vendedor(16, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor9);

const vendedor10 = new Vendedor(37, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor10);

const vendedor11 = new Vendedor(34, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor11);

const vendedor12 = new Vendedor(40, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor12);

const vendedor13 = new Vendedor(36, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor13);


const vendedor14 = new Vendedor(38, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor14);

const vendedor15 = new Vendedor(4, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor15);

const vendedor16 = new Vendedor(45, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor16);

const vendedor17 = new Vendedor(47, 'Jj', 25, '1@gmail', 'pass1', 'Vendedor', 'LISTA', 'CALENDARIO');
ArbolUsuarios.insertar(vendedor17);

// Prueba Imprimir Usuario1
console.log('             ' + ArbolUsuarios.raiz.id);
console.log('      ' + ArbolUsuarios.raiz.izq.id + '      -     ' + ArbolUsuarios.raiz.der.id);
console.log('   ' + ArbolUsuarios.raiz.izq.izq.id + ' - ' + ArbolUsuarios.raiz.izq.der.id + '       '  + ArbolUsuarios.raiz.der.izq.id + ' - ' + ArbolUsuarios.raiz.der.der.id);
console.log(ArbolUsuarios.raiz.izq.der.izq.id + '--' + ArbolUsuarios.raiz.izq.der.der.id);
console.log(ArbolUsuarios.raiz.der.der.izq.id + '--' + ArbolUsuarios.raiz.der.der.der.id);
console.log(ArbolUsuarios.raiz.der.izq.izq.id + '--' + ArbolUsuarios.raiz.der.izq.der.id);
console.log('');

// Imprimir inOrden
ArbolUsuarios.inOrden(ArbolUsuarios.raiz);
*/
