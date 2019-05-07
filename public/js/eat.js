$(document).on("ready", function(){
    $(".delete").on("click", function(){
        console.log("hi");
        $(this).parent.remove();
    });
});