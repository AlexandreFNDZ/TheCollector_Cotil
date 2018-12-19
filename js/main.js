
$(window).scroll(function(event){
    
    var yOffset = window.pageYOffset;
    var breakpoint = 80;
    if (yOffset > breakpoint){
        $("#navPadrao").removeClass('navNormal');
        $("#navPadrao").addClass('navTransp');
        
        $("#navPadrao2").removeClass('navNormal');
        $("#navPadrao2").addClass('navTransp');
    }
    else{
        $("#navPadrao").removeClass('navTransp');
        $("#navPadrao").addClass('navNormal');
        
        $("#navPadrao2").removeClass('navTransp');
        $("#navPadrao2").addClass('navNormal');
    }
    
});

paginaProduto(0);