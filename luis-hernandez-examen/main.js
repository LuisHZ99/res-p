//DECLARA EL TITULO DE LA PAGINA
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Pagina web Examen operaciones CRUD";

//DECLARA EL PARAMETRO PARA LOS REGISTROS DE LA BASE DE DATOS API
let registros = document.getElementById("registros");

//DECLARA EL BOTON "CARGAR"
let leer = document.getElementById("leer");

//DECLARA EL BOTON "ELIMINAR"
let eliminar = document.getElementById("eliminar");

//DECLARA EL BOTON "ACTUALIZAR"
let actualizar = document.getElementById("actualizar");

//DECLARA EL BOTON "AGREGAR"
let crear = document.getElementById("crear");

//DECLARA EL BOTON "CARGAR REGISTROS"
let cargar_registros = document.getElementById("cargar_registros");

//BOTONES Y CAJAS DE TEXTO SIN VISIBILIDAD
document.getElementById("leer").style.visibility = "hidden";
document.getElementById("eliminar").style.visibility = "hidden";
document.getElementById("actualizar").style.visibility = "hidden";
document.getElementById("crear").style.visibility = "hidden";

document.getElementById("cajatexto_id").style.visibility = "hidden";
document.getElementById("cajatexto_nombre").style.visibility = "hidden";
document.getElementById("cajatexto_apellido").style.visibility = "hidden";
document.getElementById("cajatexto_genero").style.visibility = "hidden";
document.getElementById("cajatexto_puesto").style.visibility = "hidden";
document.getElementById("cajatexto_edad").style.visibility = "hidden";

//BOTONES LOAD DESACTIVADOS
document.getElementById("cargar_registros_load").style.display = "none";
document.getElementById("leer_load").style.display = "none";
document.getElementById("eliminar_load").style.display = "none";
document.getElementById("actualizar_load").style.display = "none";
document.getElementById("crear_load").style.display = "none";

document.getElementById("instruccion").style.visibility = "hidden";

//METODO PARA DAR CLIC EN EL BOTON "CARGAR REGISTROS" Y SE MUESTREN TODOS LOS REGISTROS EXISTENTES
cargar_registros.onclick = () => {

    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
    document.getElementById("cargar_registros_load").style.display = "inline";
    cargar_registros.style.display = "none";

    // PROMESA PARA EJECUTAR LA OPERACION "READ"
    registros.innerHTML = "";
    axios
        .get("https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado/")

        .then((response) => {

            let array = response.data;
            console.log(array);

            //BUCLE PARA MOSTRAR REGISTRO TRAS REGISTRO
            array.forEach((registro, index) => {

                //AGREGA LOS DATOS DE LA OPERACION "GET" A LA TABLA
                registros.innerHTML =
                    registros.innerHTML +
                    "<tr>" +
                    "<th scope='row'>" + (index + 1) + "</th>" +
                    "<td>" + registro.nombre + "</td>" +
                    "<td>" + registro.apellido + "</td>" +
                    "<td>" + registro.genero + "</td>" +
                    "<td>" + registro.puesto + "</td>" +
                    "<td>" + registro.edad + "</td>" +
                    "</tr>";


            });
            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("cargar_registros_load").style.display = "none";
            cargar_registros.style.display = "inline";
        })

        .catch(function (e) {
            console.log(e);
            alert("Ocurrio un error al mostrar los regostros (Te recomendamos inspeccionar el error en la consola).");
            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("cargar_registros_load").style.display = "none";
            cargar_registros.style.display = "inline";
        })
        .finally(function () {

        });
}

//FUNCION PARA SELECCIONAR EL VALOR DEL COMBOBOX
function seleccionarValor() {

    let combobox = document.getElementById("combobox");

    //CONDICION PARA QUE EN EL COMBO BOX SELECCIONE "READ" Y EJECUTE SU RESPECTIVO CODIGO
    if (combobox.value == "Read") {

        //BOTONES Y CAJAS DE TEXTO VISIBLES Y NO VISIBLES PARA LA OPERACION "READ"
        document.getElementById("leer").style.visibility = "visible";
        document.getElementById("eliminar").style.visibility = "hidden";
        document.getElementById("actualizar").style.visibility = "hidden";
        document.getElementById("crear").style.visibility = "hidden";

        document.getElementById("cajatexto_id").style.visibility = "visible";
        document.getElementById("cajatexto_nombre").style.visibility = "hidden";
        document.getElementById("cajatexto_apellido").style.visibility = "hidden";
        document.getElementById("cajatexto_genero").style.visibility = "hidden";
        document.getElementById("cajatexto_puesto").style.visibility = "hidden";
        document.getElementById("cajatexto_edad").style.visibility = "hidden";

        //METODO PARA DAR CLIC EN EL BOTON "ACTUALIZAR" Y SE ACTUALICEN LOS PARAMETROS DE LA BASE DE DATOS
        leer.onclick = () => {

            //DECLARA LA CAJA DE TEXTO PARA EL ID
            let cajatexto_id = document.getElementById("cajatexto_id").value;

            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("leer_load").style.display = "inline";
            leer.style.display = "none";

            // PROMESA PARA EJECUTAR LA OPERACION "READ"
            registros.innerHTML = "";
            axios

                .get("https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado/" + cajatexto_id)

                .then((response) => {

                    let array = response.data;
                    console.log(array);

                    //AGREGA LOS DATOS DE LA OPERACION "GET" A LA TABLA
                    registros.innerHTML =
                        registros.innerHTML +
                        "<tr>" +
                        "<th scope='row'>" + response.data.id + "</th>" +
                        "<td>" + response.data.nombre + "</td>" +
                        "<td>" + response.data.apellido + "</td>" +
                        "<td>" + response.data.genero + "</td>" +
                        "<td>" + response.data.puesto + "</td>" +
                        "<td>" + response.data.edad + "</td>" +
                        "</tr>";


                    //AGREGA LOS DATOS DE LA OPERACION "GET" A LOS CAMPOS DE TEXTO CON EL FIN DE MODIFICARLOS (OPCIONAL)
                    document.getElementById("cajatexto_nombre").value = response.data.nombre;
                    document.getElementById("cajatexto_apellido").value = response.data.apellido;
                    document.getElementById("cajatexto_genero").value = response.data.genero;
                    document.getElementById("cajatexto_puesto").value = response.data.puesto;
                    document.getElementById("cajatexto_edad").value = response.data.edad;

                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("leer_load").style.display = "none";
                    leer.style.display = "inline";

                })

                .catch(function (e) {
                    console.log(e);
                    alert("El ID que quieres ingresar no existe (Te recomendamos inspeccionar el error en la consola).");
                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("leer_load").style.display = "none";
                    leer.style.display = "inline";
                })
                .finally(function () {

                });
        }


    }

    //CONDICION PARA QUE EN EL COMBO BOX SELECCIONE "DELETE" Y EJECUTE SU RESPECTIVO CODIGO
    else if (combobox.value == "Delete") {

        //BOTONES Y CAJAS DE TEXTO VISIBLES Y NO VISIBLES PARA LA OPERACION "DELETE"
        document.getElementById("leer").style.visibility = "hidden";
        document.getElementById("eliminar").style.visibility = "visible";
        document.getElementById("actualizar").style.visibility = "hidden";
        document.getElementById("crear").style.visibility = "hidden";

        document.getElementById("cajatexto_id").style.visibility = "visible";
        document.getElementById("cajatexto_nombre").style.visibility = "hidden";
        document.getElementById("cajatexto_apellido").style.visibility = "hidden";
        document.getElementById("cajatexto_genero").style.visibility = "hidden";
        document.getElementById("cajatexto_puesto").style.visibility = "hidden";
        document.getElementById("cajatexto_edad").style.visibility = "hidden";

        //CAJAS DE TEXTO VACIAS AL MOMENTO DE CAMBIAR DE OPERACIO CRUD
        document.getElementById("cajatexto_id").value = "";
        document.getElementById("cajatexto_nombre").value = "";
        document.getElementById("cajatexto_apellido").value = "";
        document.getElementById("cajatexto_genero").value = "";
        document.getElementById("cajatexto_puesto").value = "";
        document.getElementById("cajatexto_edad").value = "";

        eliminar.onclick = () => {
            //DECLARA LA CAJA DE TEXTO PARA EL ID
            let cajatexto_id = document.getElementById("cajatexto_id").value;

            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("eliminar_load").style.display = "inline";
            eliminar.style.display = "none";

            //PROMESA PARA EJECUTAR LA OPERACION "DELETE"
            registros.innerHTML = "";
            axios

                .delete("https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado/" + cajatexto_id)

                .then((response) => {

                    let array = response.data;
                    console.log(array);

                    //MUESTRA LOS DATOS DEL DATO ELIMINADO EN LA TABLA
                    registros.innerHTML =
                        registros.innerHTML +
                        "<tr>" +
                        "<th scope='row'>" + response.data.id + "</th>" +
                        "<td>" + response.data.nombre + "</td>" +
                        "<td>" + response.data.apellido + "</td>" +
                        "<td>" + response.data.genero + "</td>" +
                        "<td>" + response.data.puesto + "</td>" +
                        "<td>" + response.data.edad + "</td>" +
                        "</tr>";

                    alert("Dato Eliminado Exitosamente");

                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("eliminar_load").style.display = "none";
                    eliminar.style.display = "inline";

                })

                .catch(function (e) {
                    console.log(e);
                    alert("Ocurrio un error al eliminar el empleado (Te recomendamos inspeccionar el error en la consola).");
                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("eliminar_load").style.display = "none";
                    eliminar.style.display = "inline";
                })
                .finally(function () {

                });
        }
    }


    //CONDICION PARA QUE EN EL COMBO BOX SELECCIONE "UPDATE" Y EJECUTE SU RESPECTIVO CODIGO
    else if (combobox.value == "Update") {

        //BOTONES Y CAJAS DE TEXTO VISIBLES Y NO VISIBLES PARA LA OPERACION "UPDATE"
        document.getElementById("leer").style.visibility = "visible";
        document.getElementById("eliminar").style.visibility = "hidden";
        document.getElementById("actualizar").style.visibility = "visible";
        document.getElementById("crear").style.visibility = "hidden";

        document.getElementById("cajatexto_id").style.visibility = "visible";
        document.getElementById("cajatexto_nombre").style.visibility = "visible";
        document.getElementById("cajatexto_apellido").style.visibility = "visible";
        document.getElementById("cajatexto_genero").style.visibility = "visible";
        document.getElementById("cajatexto_puesto").style.visibility = "visible";
        document.getElementById("cajatexto_edad").style.visibility = "visible";

        //CAJAS DE TEXTO VACIAS AL MOMENTO DE CAMBIAR DE OPERACIO CRUD
        document.getElementById("cajatexto_nombre").value = "";
        document.getElementById("cajatexto_apellido").value = "";
        document.getElementById("cajatexto_genero").value = "";
        document.getElementById("cajatexto_puesto").value = "";
        document.getElementById("cajatexto_edad").value = "";

        //METODO PARA DAR CLIC EN EL BOTON "ACTUALIZAR" Y SE ACTUALICEN LOS PARAMETROS DE LA BASE DE DATOS
        leer.onclick = () => {
            //DECLARA LA CAJA DE TEXTO PARA EL ID
            let cajatexto_id = document.getElementById("cajatexto_id").value;

            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("leer_load").style.display = "inline";
            leer.style.display = "none";

            // PROMESA PARA EJECUTAR LA OPERACION "READ"
            registros.innerHTML = "";
            axios

                .get("https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado/" + cajatexto_id)

                .then((response) => {

                    let array = response.data;
                    console.log(array);

                    //AGREGA LOS DATOS DE LA OPERACION "GET" A LA TABLA
                    registros.innerHTML =
                        registros.innerHTML +
                        "<tr>" +
                        "<th scope='row'>" + response.data.id + "</th>" +
                        "<td>" + response.data.nombre + "</td>" +
                        "<td>" + response.data.apellido + "</td>" +
                        "<td>" + response.data.genero + "</td>" +
                        "<td>" + response.data.puesto + "</td>" +
                        "<td>" + response.data.edad + "</td>" +
                        "</tr>";


                    //AGREGA LOS DATOS DE LA OPERACION "GET" A LOS CAMPOS DE TEXTO CON EL FIN DE MODIFICARLOS (OPCIONAL)
                    document.getElementById("cajatexto_nombre").value = response.data.nombre;
                    document.getElementById("cajatexto_apellido").value = response.data.apellido;
                    document.getElementById("cajatexto_genero").value = response.data.genero;
                    document.getElementById("cajatexto_puesto").value = response.data.puesto;
                    document.getElementById("cajatexto_edad").value = response.data.edad;

                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("leer_load").style.display = "none";
                    leer.style.display = "inline";


                }).catch(function (e) {
                    console.log(e);
                    alert("El ID que quieres ingresar no existe (Te recomendamos inspeccionar el error en la consola).");
                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("leer_load").style.display = "none";
                    leer.style.display = "inline";
                })
                .finally(function () {

                });


        }


        actualizar.onclick = () => {
            //DECLARA LAS CAJAS DE TEXTO PARA ACTUALIZAR UN NUEVO DATO
            let cajatexto_id = document.getElementById("cajatexto_id").value;
            let cajatexto_nombre = document.getElementById("cajatexto_nombre").value;
            let cajatexto_apellido = document.getElementById("cajatexto_apellido").value;
            let cajatexto_genero = document.getElementById("cajatexto_genero").value;
            let cajatexto_puesto = document.getElementById("cajatexto_puesto").value;
            let cajatexto_edad = document.getElementById("cajatexto_edad").value;

            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("actualizar_load").style.display = "inline";
            actualizar.style.display = "none";

            //PROMESA PARA EJECUTAR LA OPERACION "UPDATE" CON SUS RESPECTIVOS VALORES
            registros.innerHTML = "";
            axios

                .put("https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado/" + cajatexto_id,
                    {
                        'nombre': cajatexto_nombre,
                        'apellido': cajatexto_apellido,
                        'genero': cajatexto_genero,
                        'puesto': cajatexto_puesto,
                        'edad': cajatexto_edad,
                        'id': cajatexto_id

                        //MUESTRA LOS DATOS DEL DATO YA ACTUALIZADO EN LA TABLA
                    }).then((response) => {

                        let array = response.data;

                        registros.innerHTML =
                            registros.innerHTML +
                            "<tr>" +
                            "<th scope='row'>" + response.data.id + "</th>" +
                            "<td>" + response.data.nombre + "</td>" +
                            "<td>" + response.data.apellido + "</td>" +
                            "<td>" + response.data.genero + "</td>" +
                            "<td>" + response.data.puesto + "</td>" +
                            "<td>" + response.data.edad + "</td>" +
                            "</tr>"

                        alert("Dato Actualizado Exitosamente");

                        //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                        document.getElementById("actualizar_load").style.display = "none";
                        actualizar.style.display = "inline";
                    })

                .catch(function (e) {
                    console.log(e);
                    alert("Ocurrio un error al actualizar datos del empleado (Te recomendamos inspeccionar el error en la consola).");
                    //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                    document.getElementById("actualizar_load").style.display = "none";
                    actualizar.style.display = "inline";
                })
                .finally(function () {

                });


        }

    }


    //CONDICION PARA QUE EN EL COMBO BOX SELECCIONE "CREATE" Y EJECUTE SU RESPECTIVO CODIGO
    else if (combobox.value == "Create") {

        //BOTONES Y CAJAS DE TEXTO VISIBLES Y NO VISIBLES PARA LA OPERACION "CREATE"
        document.getElementById("leer").style.visibility = "hidden";
        document.getElementById("eliminar").style.visibility = "hidden";
        document.getElementById("actualizar").style.visibility = "hidden";
        document.getElementById("crear").style.visibility = "visible";


        document.getElementById("cajatexto_id").style.visibility = "visible";
        document.getElementById("cajatexto_nombre").style.visibility = "visible";
        document.getElementById("cajatexto_apellido").style.visibility = "visible";
        document.getElementById("cajatexto_genero").style.visibility = "visible";
        document.getElementById("cajatexto_puesto").style.visibility = "visible";
        document.getElementById("cajatexto_edad").style.visibility = "visible";

        //CAJAS DE TEXTO VACIAS AL MOMENTO DE CAMBIAR DE OPERACIO CRUD
        document.getElementById("cajatexto_id").value = "";
        document.getElementById("cajatexto_nombre").value = "";
        document.getElementById("cajatexto_apellido").value = "";
        document.getElementById("cajatexto_genero").value = "";
        document.getElementById("cajatexto_puesto").value = "";
        document.getElementById("cajatexto_edad").value = "";


        crear.onclick = () => {

            //DECLARA LA CAJAS DE TEXTO PARA AGREGAR UN NUEVO DATO
            let cajatexto_id = document.getElementById("cajatexto_id").value;
            let cajatexto_nombre = document.getElementById("cajatexto_nombre").value;
            let cajatexto_apellido = document.getElementById("cajatexto_apellido").value;
            let cajatexto_genero = document.getElementById("cajatexto_genero").value;
            let cajatexto_puesto = document.getElementById("cajatexto_puesto").value;
            let cajatexto_edad = document.getElementById("cajatexto_edad").value;

            //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
            document.getElementById("crear_load").style.display = "inline";
            crear.style.display = "none";

            // PROMESA PARA EJECUTAR LA OPERACION "CREATE" CON SUS RESPECTIVOS VALORES
            registros.innerHTML = "";
            axios
                .post("https://63ffa62563e89b0913a0b3bd.mockapi.io/itp/apiv1/empleado",
                    {
                        'nombre': cajatexto_nombre,
                        'apellido': cajatexto_apellido,
                        'genero': cajatexto_genero,
                        'puesto': cajatexto_puesto,
                        'edad': cajatexto_edad,
                        'id': cajatexto_id

                        //MUESTRA LOS DATOS DEL DATO YA CREADOS EN LA TABLA
                    }).then((response) => {
                        let array = response.data;

                        registros.innerHTML =
                            registros.innerHTML +
                            "<tr>" +
                            "<th scope='row'>" + response.data.id + "</th>" +
                            "<td>" + response.data.nombre + "</td>" +
                            "<td>" + response.data.apellido + "</td>" +
                            "<td>" + response.data.genero + "</td>" +
                            "<td>" + response.data.puesto + "</td>" +
                            "<td>" + response.data.edad + "</td>" +
                            "</tr>";

                        alert("Dato Creado Exitosamente");

                        //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                        document.getElementById("crear_load").style.display = "none";
                        crear.style.display = "inline";

                    }).catch(function (e) {
                        console.log(e);
                        alert("Ocurrio un error al momento de registrar un empleado nuevo (Te recomendamos inspeccionar el error en la consola).");
                        //CODIGO PARA EL SPINNER "LOAD" DEL BOTON
                        document.getElementById("crear_load").style.display = "none";
                        crear.style.display = "inline";
                    })
                .finally(function () {

                });

        }


    }

}






