$(document).ready(function(){
    console.log("JQuery is loaded");
    $("#burgerArea").on("click", ".burgerBtn", function(event){
        event.preventDefault();
       var id = $(this).val();
       console.log(id);
$.get("/burgers/"+id).then(function(data){
    location.reload();
})
    });
});
