$(document).ready(function(){

    $("button").click(function(){

        let dollr=$(".dollr").val()

        let natija=dollr*12465

        $(".som").val(new Intl.NumberFormat("de-DE").format(natija) + "  so'm")
        event.preventDefault();
    })
    
})