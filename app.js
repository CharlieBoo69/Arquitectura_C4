document.getElementById('cedulaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cedula = document.getElementById('cedula').value;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = "Verificando...";

    fetch(`http://localhost:8080/microservicio1?cedula=${cedula}`)
        .then(response => response.json())
        .then(data => {
            if (data.existe) {
                fetch(`http://localhost:8080/microservicio2?cedula=${cedula}`)
                    .then(response => response.json())
                    .then(data => {
                        resultadoDiv.innerHTML = `Puntos en la licencia: ${data.puntos}`;
                    })
                    .catch(error => {
                        resultadoDiv.innerHTML = "Error al verificar los puntos de la licencia.";
                    });
            } else {
                resultadoDiv.innerHTML = "No es un contribuyente del SRI.";
            }
        })
        .catch(error => {
            resultadoDiv.innerHTML = "Error al verificar el contribuyente del SRI.";
        });
});
