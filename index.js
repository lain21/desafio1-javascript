// precio base
let precio = 400000;

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

spaCantidad = document.querySelector(".cantidad")
spaTotal = document.querySelector(".valor-total")
spaTotal.innerHTML = precio * Number(spaCantidad.innerHTML)