document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos() {
    if (document.readyState == "interactive") {
        leerArchivo();
    }

    function leerArchivo() {
        $.get("config2.conf", function (data) {

            const arrDatos = data.split("\n"); /*los datos convertidos a array, partidos por lineas*/
            const info = [];
            for (let i = 0; i < arrDatos.length; i++) { //for para recorrer el array
                let temp = arrDatos[i].split("="); //
                if (temp[0] == "banco") {
                    info[i]= temp[1];
                }
                if (temp[0] == "usuario") {
                    info[i] = [temp[0], temp[1]];
                }
            }
            console.log(info);

        });
    }
}
