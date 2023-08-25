//FUNCION CONSTRUCTORA
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  };
  
  // AGREGAR 
  function agregarAlCarrito(producto) {
    carrito.push(producto);
  }
  
  // ARAY CARRITO
  const carrito = [];
  
  // SOLICITUD AL USUARIO
  while (true) {
      const nombre = prompt("Ingrese el nombre del producto:\n- Remera\n- Buzo\n- Pantalon\nEscriba salir para finalizar:");
      if (nombre.toLowerCase() === "salir") {
          break;
        }        
        const precio = parseFloat(prompt("Ingrese el monto que está dispuesto a pagar:"));

        const producto = new Producto(nombre, precio);
        agregarAlCarrito(producto);
    }
    
    // Mostrar los productos en el carrito
    let carritoInfo = 'Productos en el carrito:\n';
    carrito.forEach(producto => {
        carritoInfo += `${producto.nombre} - $${producto.precio}\n`;
    });
    alert(carritoInfo);
    

    //TOTAL DEL CARRITO
    const total= carrito.reduce((acc, el)=>{
        return acc + el.precio
    }, 0);
    
    alert(`Total del carrito: $${total}`);