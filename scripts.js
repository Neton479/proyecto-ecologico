const form = document.getElementById("registroForm");
const lista = document.getElementById("listaUsuarios");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const imagenInput = document.getElementById("imagen");

    if (!nombre || !imagenInput.files.length) {
        alert("Por favor, escribe tu nombre y sube una imagen.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const usuarioDiv = document.createElement("div");
        usuarioDiv.classList.add("usuario");

        const img = document.createElement("img");
        img.src = reader.result;

        const nombreP = document.createElement("p");
        nombreP.textContent = nombre;

        usuarioDiv.appendChild(img);
        usuarioDiv.appendChild(nombreP);
        lista.appendChild(usuarioDiv);

        form.reset();
    };

    reader.readAsDataURL(imagenInput.files[0]);
});