var currentPage = 1;


function navigate(page, lista){
    $("#noticias").html(""); //Clear noticias
    //TODO: Refresh data
    //alert(page);
    $('#noticiasTemplate').tmpl(lista).appendTo('#noticias');
}

//Noticias
function noticias() {

    var lstNoticias = { Items :
            [
                {
                    titulo: 'Nuevas iniciativas para el crecimiento de nuestra compañía',
                    fecha: '12/01/2014',
                    cuerpo: '<p class="cuerpo"><img class="img-thumbnail" alt="140x140" src="http://lorempixel.com/140/140/" style="float:left; margin-right:10px;">ANTONIO ANGUITA<br />Director General Espa&ntilde;a<hr class="hrnomargin" /><span class="cuerpo">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. </span></p>'
                },
                {
                    titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    fecha: '19/01/2014',
                    cuerpo: '<div style="text-align:center; margin-bottom:5px;"><img class="img-thumbnail" src="http://lorempixel.com/500/200/" /></div><div><p class="cuerpo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.</p><a href="#" class="cuerpo" style="float:right; padding-right:30px;">Seguir leyendo</a></div>'
                },
                {
                    titulo: 'Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus.',
                    fecha: '01/02/2014',
                    cuerpo: '<div style="text-align:center; margin-bottom:5px;"><img class="img-thumbnail" src="http://lorempixel.com/400/200/" /></div><div><p class="cuerpo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.</p><a href="#" class="cuerpo" style="float:right; padding-right:30px;">Seguir leyendo</a></div>'
                }
            ]
        };

    $('#noticiasTemplate').tmpl(lstNoticias).appendTo('#noticias');

    $('#pagination').bootpag({
        total: lstNoticias.Items.length,
        page: currentPage,
        maxVisible: 2
    }).on('page', function (event, num) {
        navigate(num, lstNoticias);
    });

}




