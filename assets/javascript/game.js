$(document).ready(function(){

    var wins = 0;
    var losses = 0;
    var randomNum = Math.floor(Math.random()*(102)+19)

    $("img").on("click", function() {
        
        $("#crystal1").attr("value",Math.floor(Math.random()*(12)+1));
        $("#crystal2").attr("value",Math.floor(Math.random()*(12)+1));
        $("#crystal3").attr("value",Math.floor(Math.random()*(12)+1));
        $("#crystal4").attr("value",Math.floor(Math.random()*(12)+1));

        console.log(event.target);
    });
});