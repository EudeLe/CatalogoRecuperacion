window.addEventListener("load", function() {
    var MiJson;
    //--Archivo Json donde estan guardado todos los productos
    MiJson = {
        "PRODUCTOS": [
            { "Producto": "Zapato cerrado", "Precio": 200.00 },
            { "Producto": "Zapato cerrado", "Precio": 250.00 },
            { "Producto": "Zapato cerrado con plataforma", "Precio": 350.00 },
            { "Producto": "Zapato tipo tennis", "Precio": 275.00 },
            { "Producto": "Botín", "Precio": 210.00 },
            { "Producto": "Tacón bajo abierto", "Precio": 360.00 },
            { "Producto": "Mini tacón", "Precio": 320.00 },
            { "Producto": "Tacón con moña", "Precio": 415.00 },
            { "Producto": "Tacón bajo", "Precio": 350.00 },
            { "Producto": "Tacón abierto", "Precio": 300.00 },
            { "Producto": "Tacón abierto", "Precio": 280.00 },
            { "Producto": "Tacón abierto", "Precio": 350.00 }
        ]
    };

    var indice = 0;
    var i = 0;
    var PRODUCTO = {};
    var productos = []; //insertar un producto al vector
    var precios = []; //Insertar un precio de venta al vector
    var datos = [];

    document.addEventListener("click", function(e) {
        if (e.target.getAttribute("class") == "boton u-full-width button-primary button input agregar-carrito") {
            //obtencion del indice para poder ingresar al archivo Json
            indice = parseInt(e.target.getAttribute("id"));
            //total+=MiJson.PRODUCTOS[indice].Precio;
            //document.getElementById("Total").innerHTML="Total: "+total;
            //fila.innerHTML+='<tr> <td>'+MiJson.PRODUCTOS[indice].Producto +'</td><td>'+MiJson.PRODUCTOS[indice].Precio+'</td><td>'+"mas" +'</td></tr>';
            //alert(MiJson.PRODUCTOS[indice].Precio);
            productos[i] = MiJson.PRODUCTOS[indice].Producto;
            precios[i] = MiJson.PRODUCTOS[indice].Precio;
            for (y = i; y < productos.length; y++) //for que nos sirve para recorrer los vectores y agregarlos a los datos
            {

                //"datos" es un areglo de datos 
                datos.push({
                    "Producto": productos[y],
                    "Precio": precios[y]
                });
            }
            i++;
            PRODUCTO.datos = datos;
            console.log(JSON.stringify(PRODUCTO));
            localStorage.setItem('MisVentas', JSON.stringify((PRODUCTO)));
            alert("Ha elegido los productos a comprar, puede ir a confirmar en el ícono del carrito en la opción "+"carrito :)");
        }
    });




});
