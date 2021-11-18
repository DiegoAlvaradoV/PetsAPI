//SE CREA UN ARRAY VACÍO PARA CADA CATEGORIA DE PRODUCTOS
let databasePerros=[];
let databaseGatos=[];
let databaseConejos=[];

//SE LLAMA A LA BASE DE DATOS PARA OBTENER LOS PRODUCTOS A RENDERIZAR
$.ajax("https://my-json-server.typicode.com/DiegoAlvaradoV/pets-api-server/products")
.done((result)=>{
    databasePerros = result.filter(p => p.categoryId == 1);
    databaseGatos = result.filter(p => p.categoryId == 2);
    databaseConejos = result.filter(p => p.categoryId == 3);
}).fail(()=>{
    alert("Error, no se pudieron cargar los datos de los productos.")
})

//SE ALMACENA EN UNA VARIABLE LA SECCIÓN DEL CATÁLOGO POR CATEGORIAS
let seccionesCatalogo = $('#categoriaAPI');

//SE ALMACENA EN UNA VARIABLE EL CONTENEDOR DE LA GALERIA DE PRODUCTOS POR CATEGORIA
let contenedorStore = $('#contenedorStore');

//SE ALMACENA EN UNA VARIABLE CADA CATEGORÍA DEL CATÁLOGO
let productosPerros = $('#productosPerros');
let productosGatos = $('#productosGatos');
let productosConejos = $('#productosConejos');

//SE ALMACENA EN UNA VARIABLE EL NODO DEL CONTENEDOR DEL POPUP
let popup = $('#popup');
//SE ALMACENA EN UNA VARIABLE EL NODO DEL BOTÓN CERRAR EL POPUP
let popupCerrar = $('#popupCerrar');
//SE ALMACENA EN UNA VARIABLE EL NODO DE LA IMÁGEN DEL PRODUCTO DEL POPUP
let popupImg = $('#popupImg');
//SE ALMACENA EN UNA VARIABLE EL NODO DEL NOMBRE DEL PRODUCTO DEL POPUP
let popupNombre = $('#popupNombre');
//SE ALMACENA EN UNA VARIABLE EL NODO DEL PRECIO DEL PRODUCTO DEL POPUP
let popupPrecio = $('#popupPrecio');
//SE ALMACENA EN UNA VARIABLE EL NODO DEL STOCK DEL PRODUCTO DEL POPUP
let popupStock = $('#popupStock');
//SE ALMACENA EN UNA VARIABLE EL NODO DEL STOCK DEL PRODUCTO DEL POPUP
let popupDescription = $('#popupDescription');
//SE ALMACENA UN BOOLEAN POR CADA CATEGORIA QUE ANALIZA SI ESTÁ ACTIVO O NO LA VISUALIZACIÓN DE LOS PRODUCTOS DE ESA CATEGORIA EN CUESTIÓN
let activePerros = false;
let activeGatos = false;
let activeConejos = false;



productosPerros.click(()=>{

    if(activePerros){

        //SE MODIFICAN LOS ESTILOS DE LA SECCIÓN DE PRODUCTOS PARA PERROS
        productosPerros.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        })
        $('#productosPerros__Titulo').css({
            'color' : '#ffffff'
        })

        //SE ESCONDEN LOS PRODUCTOS VISUALIZADOS
        contenedorStore.slideUp();

        //SE DESACTIVAN TODAS LAS CATEGORIAS
        activePerros = false;
        activeConejos = false;
        activeGatos = false;

    }else{

        //SE MODIFICAN LOS ESTILOS DE LAS SECCIONES DEL CATÁLOGO
        productosPerros.css({
            'opacity': '1',
            'filter': 'grayscale(0)'
        })
        $('#productosPerros__Titulo').css({
            'color' : '#E23636'
        })

        productosGatos.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        });
        $('#productosGatos__Titulo').css({
            'color' : '#ffffff'
        })

        productosConejos.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        });
        $('#productosConejos__Titulo').css({
            'color' : '#ffffff'
        })

        //CONTENEDOR DE LA GALERÍA DE PRODUCTOS PARA PERROS
        let contenedorGaleria = $(document.createElement('div'));
        contenedorGaleria.addClass('row galeriaProductos');

        //CONTENEDOR DE LOS PRODUCTOS PARA PERROS
        let contenedorProductos = $(document.createElement('div'));
        contenedorProductos.addClass('row row-cols-1 row-cols-md-4 galeriaProductos__Contenedor');

        /*POR CADA POSICIÓN DEL ARRAY DE OBJETOS CON LOS PRODUCTOS PARA PERROS, SE CREA UNA VARIABLE QUE ALMACENA LA CARTA DEL PRODUCTO
        CON SU INFORMACIÓN Y SE AÑADE AL CONTENEDOR DEL PRODUCTOS PARA PERROS*/
        databasePerros.forEach(databasePerros => {
            let seccionProductos = mostrarProductosPerros(databasePerros);
         contenedorProductos.append(seccionProductos);
        });
        //AGREGAMOS LOS PRODUCTOS AL CONTENEDOR DE LA GALERÍA DE PRODUCTOS PARA PERROS
        contenedorGaleria.append(contenedorProductos);

        contenedorStore.html(contenedorGaleria);

        contenedorStore.slideDown();

        activePerros = true;
        activeGatos = false;
        activeConejos = false;
    }

});


productosGatos.click(()=>{

    if(activeGatos){

        //SE MODIFICAN LOS ESTILOS DE LA SECCIÓN DE PRODUCTOS PARA GATOS
        productosGatos.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        })
        $('#productosGatos__Titulo').css({
            'color' : '#ffffff'
        })

        //SE ESCONDEN LOS PRODUCTOS VISUALIZADOS
        contenedorStore.slideUp();

        //SE DESACTIVAN TODAS LAS CATEGORIAS
        activeGatos = false;
        activePerros = false;
        activeConejos = false;

    }else{

        //SE MODIFICAN LOS ESTILOS DE LAS SECCIONES DEL CATÁLOGO
        productosGatos.css({
            'opacity': '1',
            'filter': 'grayscale(0)'
        })
        $('#productosGatos__Titulo').css({
            'color' : '#E23636'
        })

        productosPerros.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        });
        $('#productosPerros__Titulo').css({
            'color' : '#ffffff'
        })

        productosConejos.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        });
        $('#productosConejos__Titulo').css({
            'color' : '#ffffff'
        })

        //CONTENEDOR DE LA GALERÍA DE PRODUCTOS PARA GATOS
        let contenedorGaleria = $(document.createElement('div'));
        contenedorGaleria.addClass('row galeriaProductos');

        //CONTENEDOR DE LOS PRODUCTOS PARA GATOS
        let contenedorProductos = $(document.createElement('div'));
        contenedorProductos.addClass('row row-cols-1 row-cols-md-4 galeriaProductos__Contenedor');

        /*POR CADA POSICIÓN DEL ARRAY DE OBJETOS CON LOS PRODUCTOS PARA GATOS, SE CREA UNA VARIABLE QUE ALMACENA LA CARTA DEL PRODUCTO
        CON SU INFORMACIÓN Y SE AÑADE AL CONTENEDOR DEL PRODUCTOS PARA GATOS*/
        databaseGatos.forEach(databaseGatos => {
            let seccionProductos = mostrarProductosGatos(databaseGatos);
            contenedorProductos.append(seccionProductos);
        });
        //AGREGAMOS LOS PRODUCTOS AL CONTENEDOR DE LA GALERÍA DE PRODUCTOS PARA GATOS
        contenedorGaleria.append(contenedorProductos);

        contenedorStore.html(contenedorGaleria);

        contenedorStore.slideDown();

        activeGatos = true;
        activePerros = false;
        activeConejos = false;

    }

})


productosConejos.click(()=>{

    if(activeConejos){

        //SE MODIFICAN LOS ESTILOS DE LA SECCIÓN DE PRODUCTOS PARA CONEJOS
        productosConejos.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        })
        $('#productosConejos__Titulo').css({
            'color' : '#ffffff'
        })

        //SE ESCONDEN LOS PRODUCTOS VISUALIZADOS
        contenedorStore.slideUp();

        //SE DESACTIVAN TODAS LAS CATEGORIAS
        activeConejos = false;
        activePerros = false;
        activeGatos = false;

    }else{

        //SE MODIFICAN LOS ESTILOS DE LAS SECCIONES DEL CATÁLOGO
        productosConejos.css({
            'opacity': '1',
            'filter': 'grayscale(0)'
        })
        $('#productosConejos__Titulo').css({
            'color' : '#E23636'
        })

        productosPerros.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        });
        $('#productosPerros__Titulo').css({
            'color' : '#ffffff'
        })

        productosGatos.css({
            'opacity': '0.5',
            'filter': 'grayscale(1)'
        });
        $('#productosGatos__Titulo').css({
            'color' : '#ffffff'
        })

        //CONTENEDOR DE LA GALERÍA DE PRODUCTOS PARA CONEJOS
        let contenedorGaleria = $(document.createElement('div'));
        contenedorGaleria.addClass('row galeriaProductos');

        //CONTENEDOR DE LOS PRODUCTOS PRODUCTOS PARA CONEJOS
        let contenedorProductos = $(document.createElement('div'));
        contenedorProductos.addClass('row row-cols-1 row-cols-md-4 galeriaProductos__Contenedor');

        /*POR CADA POSICIÓN DEL ARRAY DE OBJETOS CON LOS PRODUCTOS PARA CONEJOS, SE CREA UNA VARIABLE QUE ALMACENA LA CARTA DEL PRODUCTO
        CON SU INFORMACIÓN Y SE AÑADE AL CONTENEDOR DEL PRODUCTOS PARA CONEJOS*/
        databaseConejos.forEach(databaseConejos => {
            let seccionProductos = mostrarProductosConejos(databaseConejos);
            contenedorProductos.append(seccionProductos);
        });
        //AGREGAMOS LOS PRODUCTOS AL CONTENEDOR DE LA GALERÍA DE PRODUCTOS PARA PERROS
        contenedorGaleria.append(contenedorProductos);

        contenedorStore.html(contenedorGaleria);

        contenedorStore.slideDown();

        activeConejos = true;
        activePerros = false;
        activeGatos = false;

    }

})



//CREAMOS LA FUNCIÓN ENCARGADA DE CREAR LA CARTA DE LOS PRODUCTOS CON SUS DATOS, SOLICITANDO COMO PARÁMETRO LOS PRODUCTOS PARA PERROS
let mostrarProductosPerros = (databasePerros) => {

    //CREAMOS EL CONTENEDOR DE LA CARTA DEL PRODUCTO, AGREGÁNDOLE UN ID
    let contenedorCard = $(document.createElement("div"));
    contenedorCard.attr('id',databasePerros.id);
    contenedorCard.addClass('col-6 col-xs-6 col-sm-4  galeriaProductos__Card');

    //CREAMOS EL CONTENEDOR DE LA IMÁGEN DEL PRODUCTO, EL CÚAL TIENE EN SU INTERIOR LA RESPECTIVA IMÁGEN DELPRODUCTO PARA PERROS Y UN EVENTO CLICK
    let contenedorCardContenedor = $(document.createElement("div"));
    contenedorCardContenedor.addClass('galeriaProductos__CardContenedor');
    contenedorCardContenedor.append(`
    <img src="${databasePerros.img}" class="galeriaProductos__CardImg" alt="Producto Perro">
    `)

    contenedorCardContenedor.click(()=>{
       //ACCEDEMOS AL NODO DE LA IMÁGEN DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS LA IMÁGEN DEL PRODUCTO EN LA CARD CREADA
       popupImg.attr('src',databasePerros.img);
       //ACCEDEMOS AL NODO DEL NOMBRE DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupNombre.html(databasePerros.nombre);
       //ACCEDEMOS AL NODO DEL PRECIO DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupPrecio.html(`$${databasePerros.price}`);
       //ACCEDEMOS AL NODO DEL STOCK DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupStock.html(`Stock: ${databasePerros.stock}`);
       //ACCEDEMOS AL NODO DE LA DESCRIPCIÓN DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupDescription.html(databasePerros.description);
       //SE AÑADE LA FUNCIÓN DE CERRAR EL POPUP
       popupCerrar.click(() => {
        popup.hide();
       })
       popup.show();
    })

    //ALMACENAMOS EN CONTENEDOR DEL PRODUCTO EN EL CONTENEDOR DE SU CARD
    contenedorCard.append(contenedorCardContenedor);

    //EL MÉTODO RETORNARÁ LA TARJETA DEL PRODUCTO Y SUS DATOS
    return(contenedorCard);
 }

 //CREAMOS LA FUNCIÓN ENCARGADA DE CREAR LA CARTA DE LOS PRODUCTOS CON SUS DATOS, SOLICITANDO COMO PARÁMETRO LOS PRODUCTOS PARA GATOS
let mostrarProductosGatos = (databaseGatos) => {

    //CREAMOS EL CONTENEDOR DE LA CARTA DEL PRODUCTO, AGREGÁNDOLE UN ID
    let contenedorCard = $(document.createElement("div"));
    contenedorCard.attr('id',databaseGatos.id);
    contenedorCard.addClass('col-6 col-xs-6 col-sm-4 galeriaProductos__Card');

    //CREAMOS EL CONTENEDOR DE LA IMÁGEN DEL PRODUCTO, EL CÚAL TIENE EN SU INTERIOR LA RESPECTIVA IMÁGEN DEL PRODUCTO PARA GATOS Y UN EVENTO CLICK
    let contenedorCardContenedor = $(document.createElement("div"));
    contenedorCardContenedor.addClass('galeriaProductos__CardContenedor');
    contenedorCardContenedor.append(`
    <img src="${databaseGatos.img}" class="galeriaProductos__CardImg" alt="Producto Gato" type="button" data-toggle="modal" data-target="#exampleModal">
    `)
    contenedorCardContenedor.click(()=>{

       //ACCEDEMOS AL NODO DE LA IMÁGEN DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS LA IMÁGEN DEL PRODUCTO EN LA CARD CREADA
       popupImg.attr('src',databaseGatos.img);
       //ACCEDEMOS AL NODO DEL NOMBRE DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupNombre.html(databaseGatos.nombre);
       //ACCEDEMOS AL NODO DEL PRECIO DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupPrecio.html(`$${databaseGatos.price}`);
       //ACCEDEMOS AL NODO DEL STOCK DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupStock.html(`Stock: ${databaseGatos.stock}`);
       //ACCEDEMOS AL NODO DE LA DESCRIPCIÓN DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupDescription.html(databaseGatos.description);
       //SE AÑADE LA FUNCIÓN DE CERRAR EL POPUP
       popupCerrar.click(() => {
          popup.hide(() => {
          });
       })
       popup.show();
    })

    //ALMACENAMOS EN CONTENEDOR DEL PRODUCTO EN EL CONTENEDOR DE SU CARD
    contenedorCard.append(contenedorCardContenedor);

    //EL MÉTODO RETORNARÁ LA TARJETA DEL PRODUCTO Y SUS DATOS
    return(contenedorCard);
 }

 //CREAMOS LA FUNCIÓN ENCARGADA DE CREAR LA CARTA DE LOS PRODUCTOS CON SUS DATOS, SOLICITANDO COMO PARÁMETRO LOS PRODUCTOS PARA CONEJOS
let mostrarProductosConejos = (databaseConejos) => {

    //CREAMOS EL CONTENEDOR DE LA CARTA DEL PRODUCTO, AGREGÁNDOLE UN ID
    let contenedorCard = $(document.createElement("div"));
    contenedorCard.attr('id',databaseConejos.id);
    contenedorCard.addClass('col-6 col-xs-6 col-sm-4 galeriaProductos__Card');

    //CREAMOS EL CONTENEDOR DE LA IMÁGEN DEL PRODUCTO, EL CÚAL TIENE EN SU INTERIOR LA RESPECTIVA IMÁGEN DEL PRODUCTO PARA CONEJOS Y UN EVENTO CLICK
    let contenedorCardContenedor = $(document.createElement("div"));
    contenedorCardContenedor.addClass('galeriaProductos__CardContenedor');
    contenedorCardContenedor.append(`
    <img src="${databaseConejos.img}" class="galeriaProductos__CardImg" alt="Producto Conejo" type="button" data-toggle="modal" data-target="#exampleModal">
    `)
    contenedorCardContenedor.click(() => {

       //ACCEDEMOS AL NODO DE LA IMÁGEN DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS LA IMÁGEN DEL PRODUCTO EN LA CARD CREADA
       popupImg.attr('src',databaseConejos.img);
       //ACCEDEMOS AL NODO DEL NOMBRE DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupNombre.html(databaseConejos.nombre);
       //ACCEDEMOS AL NODO DEL PRECIO DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupPrecio.html(`$${databaseConejos.price}`);
       //ACCEDEMOS AL NODO DEL STOCK DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupStock.html(`Stock: ${databaseConejos.stock}`);
       //ACCEDEMOS AL NODO DE LA DESCRIPCIÓN DEL PRODUCTO EN EL POPUP Y LE AÑADIMOS EL NOMBRE DEL PRODUCTO
       popupDescription.html(databaseConejos.description);
       //SE AÑADE LA FUNCIÓN DE CERRAR EL POPUP
       popupCerrar.click(() => {
          popup.hide(() => {
          });
       })
       popup.show();
    })

    //ALMACENAMOS EN CONTENEDOR DEL PRODUCTO EN EL CONTENEDOR DE SU CARD
    contenedorCard.append(contenedorCardContenedor);

    //EL MÉTODO RETORNARÁ LA TARJETA DEL PRODUCTO Y SUS DATOS
    return(contenedorCard);
}