
var context;
var web;
var userid;

function sharePointReady() {

    //context = new SP.ClientContext.get_current();
    //web = context.get_web();
    
    //userid = _spPageContextInfo.userId;
	
}


/* ********************************************************************************************************************* */
/* getMisCompetencias
/* ********************************************************************************************************************* */
function getMisCompetencias(){

    //var query="/_api/web/lists/getbytitle('CompetenciasNivelesTutores')/items/?$select=*,Profesor/Id&$expand=Profesor/Id&$filter=Profesor/Id eq " + userid;
	//var _url=_spPageContextInfo.webAbsoluteUrl + query;    
	
    $(".capapc").hide();
	var lstCompetencias=[];
	
	//Limpiar contenido
	$("#competenciasGrid").html("");

	var ID = 1;
	var titulo = "Vision General (My)";
	var biblioteca = "http://www.visiongeneral.my/library";
	lstCompetencias.push(
		{"ID": ID,
		"Competencia": titulo,
		"Biblioteca": biblioteca
		}
	);

    $('#competenciasGridTemplate').tmpl(lstCompetencias).appendTo('#competenciasGrid');
    $("#competencias").show();
	  	
}

/* ********************************************************************************************************************* */
/* Obtener los alumnos de una competencia.
/* ********************************************************************************************************************* */
function getAlumnosCompetencia(idCompetencia, competencia){
    
    var titulo = ": ";
    $(".capapc").hide();

    if (idCompetencia==null){
        titulo += " Mis Alumnos";
    }
    else{
        titulo += "Alumnos de " + competencia;
    }

    $("#lblTituloPanel").text(titulo);

	//Limpiar contenido
	$("#alumnosGrid").html("");

	var lstAlumnos = [];
    
    if (idCompetencia!=null){
        var ID = 1;
        var alumno="Jorge Trigueros Falque";
	    lstAlumnos.push(
		    {"ID": ID,
		    "Alumno": alumno
		    }
	    );        
    }
    else{
        //TODO:Obtener todos los alumnos
        var ID = 1;
        var alumno="Jorge Trigueros Falque";
	    lstAlumnos.push(
		    {"ID": ID,
		    "Alumno": alumno
		    }
	    );
    }

    $('#alumnosGridTemplate').tmpl(lstAlumnos).appendTo('#alumnosGrid');
    $("#alumnos").show();

}

/* ********************************************************************************************************************* */
/* Obtener los trabajos de un alumno
/* ********************************************************************************************************************* */
function getJobsAlumno(idAlumno, alumno){

    var titulo = ": ";
    $(".capapc").hide();

    if (idAlumno==null){
        titulo += " Documentos Alumnos";
    }
    else{
        titulo += "Documentos del alumno " + alumno;
    }

    $("#lblTituloPanel").text(titulo);

	//Limpiar contenido    
	$("#trabajosGrid").html("");

	var lstTrabajos = [];
    
    if (idAlumno!=null){
        var ID = 1;
        var Titulo="Documento-1";
	    lstTrabajos.push(
		    {"ID": ID,
		    "Titulo": Titulo
		    }
	    );
    }
    else{
        //TODO:Obtener todos los trabajos recibidos
        var ID = 1;
        var Titulo="Documento-1";
	    lstTrabajos.push(
		    {"ID": ID,
		    "Titulo": Titulo
		    }
	    );
		    ID = 2;
		    Titulo = "Documento-2";
	    lstTrabajos.push(
		    {"ID": ID,
		    "Titulo": Titulo
		    }
	    );
    }

    $('#trabajosGridTemplate').tmpl(lstTrabajos).appendTo('#trabajosGrid');
    $("#trabajos").show();
    
}

/* ********************************************************************************************************************* */
/* Actividades de un alumno
/* ********************************************************************************************************************* */
function getActividadesAlumno(idAlumno, alumno){

    var titulo = ": ";
    titulo += " Actividades alumno " + alumno;
    $(".capapc").hide();

    $("#lblTituloPanel").text(titulo);

	//Limpiar contenido    
	$("#actividadesGrid").html("");

    var lstActividades = [];

        var ID = 1;
        var Actividad="Actividad-1";
        var Competencia = "Vision General";
        var creditos = "N/A";
        var disabled = "disabled='disabled'";
        var display = "none";
	    lstActividades.push(
		    {"ID": ID,
		    "Actividad": Actividad,
            "Competencia" : Competencia,
            "disabled" : disabled,
            "Creditos" : creditos,
            "display" : display
		    }
	    );
	    lstActividades.push(
		    {"ID": 2,
		    "Actividad": "Actividad-2",
            "Competencia" : "Vision General",
            "disabled" : "",
            "Creditos" : 10,
            "display" : "block"
		    }
	    );
    $('#actividadesGridTemplate').tmpl(lstActividades).appendTo('#actividadesGrid');
    $("#actividades").show();    
}

function asignarFeedback(idDocumento){
    alert("TODO:Pendiente");
}

function editarcreditos(){
    
}

$(document).ready(function () {

    //SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () { sharePointReady(); });		

    $("#btnMisCompetencias").click(function (event) {
        var titulo = ": " + $(this).attr("title");
        $("#lblTituloPanel").text(titulo);
        getMisCompetencias();
    });

});
