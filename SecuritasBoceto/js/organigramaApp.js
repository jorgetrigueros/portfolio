
    google.load('visualization', '1', {packages: ['orgchart']});

    function cargarDatosOrganigrama() {

        var staff = [
                {
                    id: 0,
                    parent: null,
                    title: "Esteban Redondo",
                    description: "DIRECTOR Financiero",
                    phone: "(123) 456-78-90",
                    email: "esteban.redondo@securitasdirect.es",
                    departament: "Financiero",
                    image: "img/organigrama/estebanredondo.png",
                    itemTitleColor: "red"
                },
                {
                    id: 1,
                    parent: null,
                    title: "Mariam Martínez",
                    description: "Assitant Director Financiero",
                    description2: "Administración delegaciones",
                    phone: "(123) 456-78-90",
                    email: "maria.mhermoso@securitasdirect.es",
                    departament: "Financiero",
                    image: "img/organigrama/mariammartinez.png",
                    itemTitleColor: "blue"
                },
                {
                    id: 2,
                    parent: 0,
                    title: "Cristina Gallego",
                    description: "Directora Administración",
                    phone: "(123) 456-78-90",
                    email: "cristina.gallego@securitasdirect.es",
                    departament: "Financiero",
                    image: "img/organigrama/cristinagallego.png",
                    itemTitleColor: "red"
                },
                {
                    id: 3,
                    parent: 2,
                    title: "Milagros Cubero",
                    description: "Jefe Depto. Facturación",
                    phone: "(123) 456-78-90",
                    email: "milagros.cubero@securitasdirect.es",
                    departament: "Financiero",
                    image: "img/organigrama/milagroscubero.png",
                    itemTitleColor: "red"
                },
            {
                id: 4,
                parent: 2,
                title: "Santiago Llorente",
                description: "Jefe Depto. Contabilidad",
                phone: "(123) 456-78-90",
                email: "santiago.llorente@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/santiagollorente.png",
                //equipo: equipoSantiagoLLorente,
                itemTitleColor: "red"
            },
            {
                id: 900,
                parent: 2,
                title: "Usuario demo Intra-1",
                description: "Jefe Depto. Contabilidad",
                phone: "(123) 456-78-90",
                email: "santiago.llorente@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/santiagollorente.png",
                //equipo: equipoSantiagoLLorente,
                itemTitleColor: "red"
            },
            {
                id: 901,
                parent: 2,
                title: "Usuario demo Intra-2",
                description: "Jefe Depto. Contabilidad",
                phone: "(123) 456-78-90",
                email: "santiago.llorente@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/santiagollorente.png",
                //equipo: equipoSantiagoLLorente,                
                itemTitleColor: "red"
            },
            {
                id: 902,
                parent: 2,
                title: "Usuario demo Intra-3",
                description: "Jefe Depto. Contabilidad",
                phone: "(123) 456-78-90",
                email: "santiago.llorente@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/santiagollorente.png",
                //equipo: equipoSantiagoLLorente,
                templateName: "contactTemplate",
                itemTitleColor: "red"
            },
            {
                id: 903,
                parent: 2,
                title: "Usuario demo Intra-4",
                description: "Jefe Depto. Contabilidad",
                phone: "(123) 456-78-90",
                email: "santiago.llorente@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/santiagollorente.png",
                //equipo: equipoSantiagoLLorente,
                itemTitleColor: "red"
            },
            {
                id: 905,
                parent: 2,
                title: "Usuario demo Intra-5",
                description: "Jefe Depto. Contabilidad",
                phone: "(123) 456-78-90",
                email: "santiago.llorente@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/santiagollorente.png",
                //equipo: equipoSantiagoLLorente,
                itemTitleColor: "red"
            },
            {
                id: 5,
                parent: 3,
                title: "Ana Isabel Garrido",
                description: "Jefe Depto. Control de Gestión",
                phone: "(123) 456-78-90",
                email: "anaisabel.garrido@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/AnaIsabelGarrido.png",
                itemTitleColor: "red"
            },
            {
                id: 6,
                parent: 4,
                title: "Cristina Rodriguez",
                description: "Jefe Depto. Alta Mantenim.",
                phone: "(123) 456-78-90",
                email: "cristina.rodriguez@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/CristinaRodriguez.png",
                itemTitleColor: "red"
            },
            {
                id: 7,
                parent: 5,
                title: "Carlos Tomé",
                description: "Jefe Depto. Gestión Cobros",
                description2: "",
                phone: "(123) 456-78-90",
                email: "carlos.tome@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/CarlosTome.png",
                itemTitleColor: "red"
            },
            {
                id: 8,
                parent: 6,
                title: "Cristina Martínez",
                description: "Jefe Depto. Medios de Pago",
                description2: "",
                phone: "(123) 456-78-90",
                email: "cristina.martinez@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/CristinaMartinez.png",
                itemTitleColor: "red"
            },
            {
                id: 9,
                parent: 7,
                title: "Maria Dolores Elena",
                description: "Jefe Depto. Precontencioso",
                description2: "",
                phone: "(123) 456-78-90",
                email: "maruchi.elena@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/MariaDoloresElena.png",
                templateName: "contactTemplate",
                itemTitleColor: "red"
            },
            {
                id: 10,
                parent: 8,
                title: "Andrés Díaz",
                description: "Responsable Dirección de",
                description2: "Proyectos",
                phone: "(123) 456-78-90",
                email: "andres.diaz@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/AndresDiaz.png",
                templateName: "contactTemplate",
                itemTitleColor: "red"
            },
            {
                id: 11,
                parent: 9,
                title: "Rafael Marcos",
                description: "Jefe Depto. Costes",
                description2: "Comunicaciones",
                phone: "(123) 456-78-90",
                email: "rafael.marcos@securitasdirect.es",
                departament: "Financiero",
                image: "img/organigrama/RafaelMarcos.png",
                templateName: "contactTemplate",
                itemTitleColor: "red"
            }
        ]

        var datosOrganigrama = [
            ['Name', 'Manager', 'Tooltip', 'Id']
        ];


        var items = Enumerable.From(staff).Select().ToArray();

        for (i = 0; i < items.length; i++) {

            var id = items[i].id;
            var tooltip = items[i].title;
            var dependeDe = null;

            if (items[i].parent != null) {
                var thisparent = items[i].parent;
                var res = Enumerable.From(staff).Where(function (x) { return x.id == thisparent }).Select(function (x) { return x.title }).ToArray();
                dependeDe = res[0];
            }

            var nombre = items[i].title;
            var imagen = items[i].image;
            var cargo = items[i].description;
            var cargo2 = "";
            if (items[i].description2 != null) {
                cargo2 = items[i].description2;
            }
            var email = items[i].email;
            var phone = items[i].phone;

            /*
            var infoBox = '<div style="min-height:110px;">' +
                            '<div style="height: 24px; background: none repeat scroll 0% 0% #BE2432;"  name="titleBackground">' +
                                '<div style="height: 18px; color:#fff;">' + nombre + '</div>' +
                                '<div style="position: relative; top: 0px; left: 87.6%; height: 18px; display: none;" name="equipo">' +
                                    '<button title="Ver equipo" type="button" data-buttonname="equipo" style="border:1px solid lightgray"><i class="glyphicon glyphicon-info-sign"></i></button>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row clearfix">' +
                                '<div class="col-md-12">' +
                                '<div class="col-md-6">' +
                                    '<img name="photo" src="' + imagen + '" alt="' + nombre + '" style="width:60px;">' +
                                '</div>' +
                                '<div class="col-md-6">' +
                                    '<span style="font-size:1.1em; color:#000;">' + cargo + '</span>' +
                                    '<br><span>' + cargo2 + '</span>' +
                                    '<br><span>' + phone + '</span>' +
                                '</div>' +
                                '</div>' +
                                '<div class="col-md-12">' +
                                    '<span>' + email + '</span>' +
                                '</div>' +
                            '</div>' +
                            '</div>';
            */

            var infoBox = "<div style='width: 204px; height: 115px; border-width: 2px; padding: 0px; margin: 0px;' class='bp-item bp-corner-all bp-cursor-frame'>" +
                                "<div style='top: 2px; left: 2px; width: 98%; height: 24px; background: none repeat scroll 0% 0% red;' class='bp-item bp-corner-all bp-title-frame' name='titleBackground'>" +
                                    "<div style='top: 3px; left: 6px; width:180px; height: 18px;' class='bp-item bp-title' name='title'>Antonio Anguita</div>" +
                                "</div>" +
                            "<div class='col-md-3 colum'>" +
                                "<img style='height:80px; width:70px;' name='photo' src='img/organigrama/estebanredondo.png' alt='Antonio Anguita'>" +
                            "</div>" +
                         "</div>" +
                        
                            "<div class='col-md-8 colum' style='margin-top: 8px; margin-left: 10px;'>" +
                                    "<span class='bp-item-puesto' name='description'>DIRECTOR</span><br>" +
                                    "<span class='bp-item-descripcion' name='description2'>General España</span><br>" +
                                    "<a href='mailto:julio.anguita@securitasdirect.es' class='correo'><img src='img/ico_email.gif' style='border: 0px;' alt='Correo'>&nbsp;julio.anguita</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>";

            var itemData = [
                { v: items[i].title,
                    f: infoBox
                }, dependeDe, tooltip, id
            ];

            datosOrganigrama.push(itemData);
        }

        var data = google.visualization.arrayToDataTable(datosOrganigrama);

        return data;

    }

    function drawVisualization() {

        var data = cargarDatosOrganigrama();
            
        // Create and draw the visualization.
        var chart = new google.visualization.OrgChart(document.getElementById('visualization'));
        chart.draw(data, {allowHtml:true,
                         allowCollapse:false,
                         color:'#dfdfdf',
                         size:'medium'        
        });

        /*
        var chart=new google.visualization.OrgChart(document.getElementById('visualization')).
            draw(data, { allowHtml: true,
                         allowCollapse:false,
                         color:'#dfdfdf',
                         size:'medium'
                       });
        */
        
    }

    google.setOnLoadCallback(drawVisualization);      

    



