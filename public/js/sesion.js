const body = document.querySelector("body");
const modal = document.getElementById("modal");

modal.innerHTML = "";
        const sessionCaducada = document.createElement("h3");
        const btnVolver = document.createElement("button");
        const btnSalir = document.createElement("button");
        btnSalir.innerHTML = "Salir";
        btnVolver.innerHTML = "Volver";
        sessionCaducada.innerHTML = "Esta saliendo de su sesion";

        modal.showModal();
        modal.appendChild(sessionCaducada);
        modal.appendChild(btnVolver);
        modal.appendChild(btnSalir);

        btnSalir.addEventListener("click", (e)=>{
            if(e.target){
                return window.location.href = "/";
            }
        });

        btnVolver.addEventListener("click", (e)=>{

            if(e.target){

                modal.close();
                const NoVolvio = document.createElement("h1");
                const Inicio = document.createElement("a");
                Inicio.innerHTML = "Ir al inicio";
                NoVolvio.innerHTML = "Ocurrio  un error al querer reenviar  el formulario!!";
                body.appendChild(NoVolvio);
                body.appendChild(Inicio);
                
                Inicio.href = "/";


            }
        })

