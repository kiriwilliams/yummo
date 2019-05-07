$(document).on("ready", function(){
    console.log("hi eat.js");
    
    $(".delete").on("click", function(){
        console.log("hi");
        $(this).parent.remove();
    });
    $("#submit").on("click", function(){
        console.log("clicked susbmit");
    });
});