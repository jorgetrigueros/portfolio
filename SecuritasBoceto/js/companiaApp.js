
//Slide superior
function bannerCompania() {
    
    var data = { Items :
            [
                 { orden: 1, link: "mision.html",  urlImage: "img/CompaniaBanners/mision.png", title: "Misión, visión y valores" },
                 { orden: 2, link: "cultura.html", urlImage: "img/CompaniaBanners/cultura.png", title: "Cultura" },
                 { orden: 3, link: "securitasmundo.html", urlImage: "img/CompaniaBanners/enelmundo.png", title: "Securitas Direct en el mundo" },
                 { orden: 4, link: "securitasespaña.html", urlImage: "img/CompaniaBanners/SecuritasDirectEspana.png", title: "Securitas Direct España" },
                 { orden: 5, link: "organigrama.html", urlImage: "img/CompaniaBanners/organigrama.png", title: "Organigrama" },
                 { orden: 6, link: "publicaciones.html", urlImage: "img/CompaniaBanners/publicaciones.png", title: "Publicaciones" },
                 { orden: 7, link: "nuestrosvideos.html", urlImage: "img/CompaniaBanners/videos.png", title: "Nuestros videos" },
                 { orden: 8, link: "plantillascorporativas.html", urlImage: "img/CompaniaBanners/PlantillasCorporativas.png", title: "Plantillas corporativas" },
                 { orden: 9, link: "politicascorporativas.html", urlImage: "img/CompaniaBanners/politicascorporativas.png", title: "Políticas corporativas" },
                 { orden: 10, link: "responsabilidadsocialcorporativa.html", urlImage: "img/CompaniaBanners/rsc.png", title: "Responsabilidad Social Corporativa" }
            ]
        };

    $('#companiaTemplate').tmpl(data).appendTo('#compania');

}
