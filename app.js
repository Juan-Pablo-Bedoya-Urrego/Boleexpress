// Variables
const carrito = [];
let numElementosCarrito = 0; // Variable para llevar el registro del número de elementos en el carrito

// Función para agregar un evento al carrito
function agregarAlCarrito(id, evento1, tipoboleta, precio) {
	const evento = {
		id: id,
		evento1: evento1,
		tipoboleta: tipoboleta,
		precio: precio
	};

	numElementosCarrito++;
	actualizarContadorCarrito();
	carrito.push(evento);
	actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
	const carritoLista = document.getElementById("carrito-lista");
	const totalPrecio = document.getElementById("total-precio");
	carritoLista.innerHTML = '';
	let total = 0;

	carrito.forEach(evento => {
		const item = document.createElement("li");
		item.innerHTML = `<div class="d-flex justify-content-between">
		<span>${evento.evento1} - $${evento.tipoboleta} - $${evento.precio.toFixed(2)}</span>
		<button class="btn btn-danger" onclick="eliminarDelCarrito('${evento.id}')">Eliminar</button>
	</div>`;
		carritoLista.appendChild(item);
		total += evento.precio;
	});

	totalPrecio.textContent = total.toFixed(2);
}

// Función para eliminar un evento del carrito
function eliminarDelCarrito(id) {
	const indice = carrito.findIndex(evento => evento.id === id);
	if (indice !== -1) {
		carrito.splice(indice, 1);
		actualizarCarrito();
		numElementosCarrito--;
		actualizarContadorCarrito();
	}
}

// Función para proceder al proceso de pago (simulado)
function procederAlPago() {
	if (carrito.length === 0) {
		alert("El carrito está vacío. Agrega helados antes de proceder al pago.");
	} else {
		alert("Proceso de pago simulado. Total a pagar: $" + document.getElementById("total-precio").textContent);
	}
}

const carritoIcon = document.getElementById("carrito-icon");
const carritoContent = document.getElementById("carrito-content");

// Función para mostrar u ocultar el carrito
function toggleCarrito() {
	carritoContent.classList.toggle("d-none");
}

// Event listener para mostrar/ocultar el carrito
carritoIcon.addEventListener("click", toggleCarrito);

function vaciarCarrito() {
	carrito.length = 0; // Esto vacía el array del carrito
	actualizarCarrito(); // Luego, actualiza la vista del carrito
	numElementosCarrito = 0;
	actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
	const contadorCarrito = document.getElementById("contador-carrito");

	// Actualiza el contenido del contador en la barra de navegación
	contadorCarrito.textContent = numElementosCarrito;

	// Puedes ocultar el contador si no hay elementos en el carrito
	if (numElementosCarrito === 0) {
		contadorCarrito.style.display = "none";
	} else {
		contadorCarrito.style.display = "block";
	}
}