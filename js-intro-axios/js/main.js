//console.log("Hola mundo");

//alert("Hola mundo!! SI FUNCIONA!!");

let titulo = document.getElementById("Titulo");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let puesto = document.getElementById("puesto");
let edad = document.getElementById("edad");

console.log(titulo);
titulo.innerHTML = "Mi primer programa DOM con JS y Axios";


/* function suma(a,b) {
    return a+b;
}
console.log(suma(10,5));
 */



   axios({

      method: "get",
    
      url: "https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado",
    
    })
    
      .then((respuesta) => {
      console.log(respuesta.data[10].nombre,
        respuesta.data[10].apellido,
        respuesta.data[10].puesto,
        respuesta.data[10].edad);
      nombre.innerHTML = nombre.innerHTML + respuesta.data[10].nombre;
      apellido.innerHTML = apellido.innerHTML + respuesta.data[10].apellido;
      puesto.innerHTML = puesto.innerHTML + respuesta.data[10].puesto;
      edad.innerHTML = edad.innerHTML + respuesta.data[10].edad;
      })
    
      .catch((error) => console.error(error));



      