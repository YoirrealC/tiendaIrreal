document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioContacto");
    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); 
        }
    });

    function validarFormulario() {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }

    

        return true;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario');
    const tamaño = document.getElementById('tamaño');
    const cantidad = document.getElementById('cantidad');
  
    formulario.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      const selectedTamaño = tamaño.value;
      const inputCantidad = cantidad.value;
  
      if (selectedTamaño === 'Seleccionar Tamaño') {
        alert('Por favor, selecciona un tamaño.');
        return;
      }
  
      if (!inputCantidad || inputCantidad < 1) {
        alert('La cantidad debe ser mayor o igual a 1.');
        return;
      }
  
      // Si la validación es exitosa, puedes realizar acciones adicionales aquí.
     
  
      alert('Producto agregado al carrito.');
      formulario.reset(); 
    });
  });
  