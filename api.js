
// Función para crear tarjetas
function creaTarjetaMuseo(titulo, srcImage, contenido, urlMuseo) {
    // Crear un nuevo elemento div
    let tarjeta = document.createElement('div');
    // Agregar la clase 'tarjeta' al nuevo elemento
    tarjeta.classList.add('tarjeta');
    
    // Crear elementos para el título de la tarjeta
    let tituloElemento = document.createElement('h2');
    // Agregar la clase 'titulo' al nuevo elemento
    tituloElemento.classList.add('tituloTarjeta');
    tituloElemento.align = 'center';
    // Crear elementos para el cuerpo de la tarjeta
    let contenidoElemento = document.createElement('div');
    // Agregar la clase 'cuerpo' al nuevo elemento
    contenidoElemento.classList.add('cuerpoTarjeta');
    let divImageElemento = document.createElement('div');
    let imageElemento = document.createElement('img');
    let textoElemento = document.createElement('p');
    let pieElemento = document.createElement('div');
    // Agregar la clase 'pie' al nuevo elemento
    pieElemento.classList.add('pieTarjeta');

    // Agrupamos segun corresponda

    //pieElemento.appendChild(urlTarjeta);
    divImageElemento.append(imageElemento);
    contenidoElemento.appendChild(divImageElemento);
    contenidoElemento.appendChild(textoElemento);
    
    // Establecer el texto para el título y el contenido
    tituloElemento.textContent = titulo;
    textoElemento.textContent = contenido;
    
    imageElemento.src = srcImage;
    divImageElemento.align = 'center';

    // Agregar los elementos de título y contenido a la tarjeta
    tarjeta.appendChild(tituloElemento);
    tarjeta.appendChild(contenidoElemento);
    tarjeta.appendChild(pieElemento);
    
    // Agregar la tarjeta al contenedor del tarjetas
    // Obtén la referencia a la div existente
    let divContenedorTarjetas = document.getElementById('contenedorMuseos');

    divContenedorTarjetas.appendChild(tarjeta);
  }

  function obtenerDatosDeAPI(url) {
    // Utilizamos el método fetch para hacer la solicitud a la API
    fetch(url)
      .then(response => {
        // Verificamos si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        // Parseamos la respuesta como JSON
        return response.json();
      })
      .then(data => {
        // Verificamos que la respuesta sea un arreglo
        if (Array.isArray(data)) {
          // Filtramos solo los elementos con location igual a "Granada"
          const elementosGranada = data.filter(elemento => elemento.location === 'Granada');

          // Iteramos sobre los elementos filtrados e imprimimos el título de cada uno
          elementosGranada.forEach(elemento => {
            creaTarjetaMuseo(elemento.name, 'img/museo.png', elemento.observations, elemento.web);
          });
        } else {
          console.error('La respuesta no es un arreglo válido.');
        }
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }