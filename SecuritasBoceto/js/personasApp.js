
//Slide superior
function bannerPersonas() {
    
    var data = { Items :
            [
                 { orden: 1, link: "#", urlImage: "img/personas/1_calendarioc.png", urlImageHover: "img/personas/1_calendario_2.png", title: "Calendario" },
                 { orden: 2, link: "#", urlImage: "img/personas/banner2.png", urlImageHover: "img/personas/banner2_hover.png", title: "Beneficios sociales" },
                 { orden: 3, link: "#", urlImage: "img/personas/3_prl.png", urlImageHover: "img/personas/3_prl_2.png", title: "Prevenci&oacuten de riesgos laborales" },
                 { orden: 4, link: "#", urlImage: "img/personas/4_formacion.png", urlImageHover: "img/personas/4_formacion_2.png", title: "Formaci&oacuten y desarrollo" },
                 { orden: 5, link: "#", urlImage: "img/personas/5_puesto.png", urlImageHover: "img/personas/5_puesto_2.png", title: "Cambio de puesto" },
                 { orden: 6, link: "#", urlImage: "img/personas/6_promociones.png", urlImageHover: "img/personas/6_promociones_2.png", title: "Promociones" },
                 { orden: 7, link: "#", urlImage: "img/personas/7_incorporaciones.png", urlImageHover: "img/personas/7_incorporaciones_2.png", title: "Nuevas incorporaciones" },
                 { orden: 8, link: "#", urlImage: "img/personas/8_evaluacion.png", urlImageHover: "img/personas/8_evaluacion_2.png", title: "Evaluaci&oacuten del desempeño" },
                 { orden: 9, link: "#", urlImage: "img/personas/9_igualdad.png", urlImageHover: "img/personas/9_igualdad_2.png", title: "Plan de igualdad" },
                 { orden: 10, link: "#", urlImage: "img/personas/10_encuesta.png", urlImageHover: "img/personas/10_encuesta_2.png", title: "Encuesta de compromiso" },
                 { orden: 11, link: "#", urlImage: "img/personas/11_cuidat.png", urlImageHover: "img/personas/11_cuidat_2.png", title: "CuidaT" },
                 { orden: 12, link: "#", urlImage: "img/personas/12_anuncios.png", urlImageHover: "img/personas/12_anuncios_2.png", title: "Tablón de anuncios" }
            ]
        };

    $('#personasTemplate').tmpl(data).appendTo('#personas');

}
