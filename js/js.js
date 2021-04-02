$( document ).ready(function() {
    //boton para mostrar valores en el div donde se muestra el texto
    $( "#enviar" ).click(function() {
        var valor1 = $('#nombre').val();//donde toma el valor de los inputs
        var valor2 = $('#puesto').val();
        $('#content').append("<p>"+ valor1 + "</p><p>"+valor2+"</p>"); 
    });

     //boton para eliminar valores con el boton de cancelar
    $("#borrar").click(function() { 
        $("#content").empty();
    })

    //Letras negritas
    $("#bold").click(function() { 
        $('#content').toggleClass('bold');

    });

    //letras cursivas
    $("#cursive").click(function() {
        $('#content').toggleClass('cursive');

    });

   //letras subrayadas
   $("#underline").click(function() { 
    $('#content').toggleClass('underline');

    });

    //letras centradas
    $("#center").click(function() { 
        $('#content').addClass('center');

        //elimina otros aligns
        $('#content').removeClass('right');
        $('#content').removeClass('left');
    });

    //letras a la derecha
    $("#right").click(function() { 
        $('#content').addClass('right');

        //elimina otros aligns
        $('#content').removeClass('center');
        $('#content').removeClass('left');
    });

     //letras a la izquierda
     $("#left").click(function() { 
        $('#content').addClass('left');

        //elimina otros aligns
        $('#content').removeClass('center');
        $('#content').removeClass('right');
    })

    //Fuentes tipográficas
    $('select[id$=-status][id^=id_item-]').children().each(function() {    
        var fontFamily = ['Montserrat', 'Open Sans', 'Roboto', 'Arial'];// se agrega los tipos de tipografía para cada option
        $(this).attr('style', 'font-family:' + fontFamily[$(this).val()] + ';');// toma el valor del option y lo agrega en el atributo 
    });
    $('select[id$=-status][id^=id_item-]').change(function() {
        $('#content p').attr('style', $(this).find('option:selected').attr('style'));//valor agregado al div 
    }).change();

    //Colores
    var muestrario;
    var colorPredeterminado = "#097ADC";

    window.addEventListener("load", startup, false);

    function startup() {
        muestrario = document.querySelector("#muestrario");
        muestrario.value = colorPredeterminado;
        muestrario.addEventListener("input", actualizarPrimero, false);
        muestrario.select();
    }
    function actualizarPrimero(event) {
        var p = document.querySelector("div#content");

        if (p) {
            p.style.color = event.target.value;
        }
    }
});

    //Font size

    document.getElementById("size").addEventListener("change", CambioTexto);

    function CambioTexto(){
        var e= document.getElementsByTagName("p");
        var x= document.getElementById("size");
        for (var i = 0; i < e.length; i++){
        if (x.options[x.selectedIndex].text=="")
            {return false}
        e[i].style.fontSize=x.options[x.selectedIndex].text+"px";
     }
    }
 