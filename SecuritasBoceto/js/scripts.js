
//Slide superior
function cargarSlide() {
    
    var slider = [
             { orden: 1, urlImage: "http://lorempixel.com/1600/300/sports/1", caption: "First Thumbnail label", description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit." },
             { orden: 2, urlImage: "http://lorempixel.com/1600/300/sports/2", caption: "Second Thumbnail label", description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit." },
             { orden: 3, urlImage: "http://lorempixel.com/1600/300/sports/3", caption: "Third Thumbnail label", description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit." },
             { orden: 4, urlImage: "http://lorempixel.com/1600/300/sports/4", caption: "Four Thumbnail label", description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit." }
    ];

    $('#sliderTemplate').tmpl(slider).appendTo('#carousel-inner');

}

//Menu lateral derecho
function cargarMenu() {
    var itemsMenu = [
        { menuTitle: "Portal del empleado" },
        { menuTitle: "Men&uacute semanal" },
        { menuTitle: "InfoPoint aplicaciones" },
        { menuTitle: "Buscador de empleados" },
        { menuTitle: "Vacantes" },
        { menuTitle: "Solicitudes viajes" },
        { menuTitle: "Solicitud comedor" },
        { menuTitle: "Solicitud/Informaci&oacuten salas" },
        { menuTitle: "Calendario laboral" }
    ];

    $('#menuTemplate').tmpl(itemsMenu).appendTo('#mnuLateralDerecha');
}

//Otras noticias lateral derecho
function otrasNoticias() {

  $('#otrasnoticias').rssfeed('http://feeds.reuters.com/reuters/oddlyEnoughNews', {
    limit: 3,
    content: false,
    dateformat: 'dd/MM/yyyy hh:mm'
  });

    /*
    var noticias = [
        { titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien.", link: "noticias?id=1" },
        { titulo: "Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.", link: "noticias?id=2" },
        { titulo: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.", link: "noticias?id=3" }
    ];

    $('#otrasnoticiasTemplate').tmpl(noticias).appendTo('#otrasnoticias');
    */
}

//Seccion cliente
function cliente() {
    var lstCliente = [
        { titulo: "Mejoramos nuestro clima laboral", urlimagen: "img/loremIpsum.png", noticia: "Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor." },
        { titulo: "In hac habitasse platea dictumst", urlimagen: "img/supersales.png", noticia: "Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor." }
    ];

    $('#clienteTemplate').tmpl(lstCliente).appendTo('#cliente');
}

//Nosotros
function nosotros() {
    var lstNosotros = [
        {
            titulo: 'Nuevas iniciativas para el crecimiento de nuestra compañía',
            entradilla: '<p class="cuerpo"><a href="img/noticia140.jpg" class="gallery"><img class="img-thumbnail" alt="140x140" src="http://lorempixel.com/140/140/" style="float:left; margin-right:10px;"></a>ANTONIO ANGUITA<br />Director General Espa&ntilde;a<hr class="hrnomargin" /><span class="cuerpo">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. </span></p>',
            cuerpo: null
        },
        {
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            entradilla: '<div style="text-align:center; margin-bottom:5px;"><a href="img/noticia200.jpg" class="gallery"><img class="img-thumbnail" src="http://lorempixel.com/400/200/" /></a></div><div><p class="cuerpo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.</p></div>',
            cuerpo: 'Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor.'
        }
    ];
    $('#nosotrosTemplate').tmpl(lstNosotros).appendTo('#nosotros');
    //imageHover();
    $('a.gallery').colorbox();
}


function footer(){
    
    var lstMenu = [
       {
           linkText: 'Portal del empleado',
           url: '/portal'
       },
       {
           linkText: 'Menú semanal',
           url: '/menu'           
       },
       {
           linkText: 'InfoPoint aplicaciones',
           url: '/Infopoint'           
       },
       {
           linkText: 'Menu Item 4',
           url: '/item4'           
       },
       {
           linkText: 'Menu Item 5',
           url: '/item5'           
       }
    ];

    $('#menuPrincipalTemplate').tmpl(lstMenu).appendTo('#menuPrincipal');
}

