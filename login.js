      //function validar Formulario
	 const validarFormulario = () => {
            let nombre = document.getElementById("nombre").value.trim();
            let password = document.getElementById("password").value.trim();

            if (nombre === "" || password === "") {
                //alert("Por favor complete todos los campos");
                console.log("Por favor complete todos los campos");
                return false;
            }

            return true;
        }
       // Función limpiar Formulario
        const limpiarFormulario = () => {
            document.getElementById("nombre").value = "";
            document.getElementById("password").value = "";
			      document.getElementById("nombre").focus();
        }