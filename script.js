	   function validateForm() {
            var nombre = document.getElementById('nombre').value;
            var apellidos = document.getElementById('apellidos').value;
            var edad = document.getElementById('edad').value;            
            var telefono = document.getElementById('telefono').value;			
			var correo = document.getElementById('correo').value;

            // Validar que los campos no estén vacíos
            if (nombre.trim() === '' || apellidos.trim() === '' || correo.trim() === '' || edad.trim() === '' || telefono.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return false;
            }

            // Validar el formato del correo electrónico
			var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if (!emailRegex.test(correo)) {
                alert('Por favor, introduzca un correo electrónico válido.');
                return false;
            }

             // Almacenar datos en sessionStorage
            sessionStorage.setItem('nombre', nombre);
            sessionStorage.setItem('apellidos', apellidos);
            sessionStorage.setItem('edad', edad);
            sessionStorage.setItem('telefono', telefono);
            sessionStorage.setItem('correo', correo);

            // Si todas las validaciones pasan, el formulario se envía
            const simpleForm = document.getElementById('loginForm');
	        simpleForm.submit();
	        alert('Los datos del formulario se han enviado correctamente');
        }
		
     function validateLogin() {
			var correoLog = document.getElementById('correo').value;
            var passwd = document.getElementById('password').value;
			
			

            // Validar que los campos no estén vacíos
            if (correoLog.trim() === '' || passwd.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return false;
            }

            // Validar el formato del correo electrónico
			var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if (!emailRegex.test(correoLog)) {
                alert('Por favor, introduzca un correo electrónico válido.');
                return false;
            }

            // Si todas las validaciones pasan, el formulario se envía
            const simpleLogin = document.getElementById('Formlogin');
	        simpleLogin.submit();
	        alert('Se ha logeado correctamente');
        }		
		
     function validateContacta() {
		    var nombreCont = document.getElementById('nombre').value;
		    var motivo = document.getElementById('motivo').value;
			var correoCont = document.getElementById('correo').value;
            			

            // Validar que los campos no estén vacíos
            if (nombreCont.trim() === '' || motivo.trim() === '' || correoCont.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return false;
            }

            // Validar el formato del correo electrónico
			var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if (!emailRegex.test(correoCont)) {
                alert('Por favor, introduzca un correo electrónico válido.');
                return false;
            }

            // Si todas las validaciones pasan, el formulario se envía
            const simpleCont = document.getElementById('contactaForm');
	        simpleCont.submit();
	    	alert('Gracias por tu mensaje, ' + nombreCont +'. Pronto nos pondremos en contacto contigo');
        }			
		
     function validaMail() {
		   var correoMail = document.getElementById('correo').value;
            			

            // comprobamos que no esté vacío
            if (correoMail.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return false;
            }

            // Validar el formato del correo electrónico
			var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if (!emailRegex.test(correoMail)) {
                alert('Por favor, introduzca un correo electrónico válido.');
                return false;
            }

            // Si todo es correcto, el formulario se envía
            const simpleMail = document.getElementById('solicitaPass');
	        simpleMail.submit();
		   
		   // Redirigimos a la página principal
            window.location.href = "./index.html";
	    	alert('Recibirá un correo en la cuenta: ' + correoMail);
			

        }					