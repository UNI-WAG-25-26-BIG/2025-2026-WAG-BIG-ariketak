/* ES5 */
// Constructor de Estudiante en ES5
/*


function Estudiante(nombre, edad, ...asignaturas) {
    this.nombre = nombre;
    this.edad = edad;
    this.asignaturas = asignaturas;
  }
  
  // Añadir un método para saludar
  Estudiante.prototype.saludar = function() {
    console.log('Hola, me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años.');
  };
  
  // Añadir un método para listar las asignaturas
  Estudiante.prototype.listarAsignaturas = function() {
    console.log('Mis asignaturas son: ' + this.asignaturas.join(', '));
  };
  
  // Crear un nuevo estudiante
  var estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
  
  // Destructuring manual para extraer nombre y edad
  var nombre = estudiante1.nombre;
  var edad = estudiante1.edad;
  
  // Mostrar datos del estudiante
  console.log('Nombre: ' + nombre);
  console.log('Edad: ' + edad);
  
  // Mostrar saludo y asignaturas
  estudiante1.saludar();
  estudiante1.listarAsignaturas();
  
  // Función en ES5 para sumar notas
  function calcularPromedio() {
    var suma = 0;
    for (var i = 0; i < arguments.length; i++) {
      suma += arguments[i];
    }
    return suma / arguments.length;
  }
  
  // Calcular promedio de notas
  var promedio = calcularPromedio(85, 90, 78, 92);
  console.log('El promedio es: ' + promedio);
  */


  /* ES6 */
class Estudiante {
    constructor(nombre, edad, ...asignaturas) {
      this.nombre = nombre;
      this.edad = edad;
      this.asignaturas = asignaturas;
    }
  
    // Agurtu
    saludar= () => console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  
    // Ikasgaiak ikusi
    /*listarAsignaturas() {
      console.log(`Mis asignaturas son: ${this.asignaturas.join(', ')}`);
    }*/
    listarAsignaturas= () => console.log(`Mis asignaturas son: ${this.asignaturas.join(', ')}`);
  }
  
  // Ikasle berria
  const estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
  
  // Desegituratzen
  const { nombre, edad } = estudiante1;
  
  // template literals
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  
  // Mostrar saludo y asignaturas
  estudiante1.saludar();
  estudiante1.listarAsignaturas();
  
  // rest parametroak
  /*const calcularPromedio = (...notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
  };*/
  const calcularPromedio = (...notas) => notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
  
  // noten batazbestekoa
  const promedio = calcularPromedio(85, 90, 78, 92);
  console.log(`El promedio es: ${promedio}`);
  