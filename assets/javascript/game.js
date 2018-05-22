$(document).ready(function(){

    var wins = 0;
    var losses = 0;
    var randomNum = Math.floor(Math.random()*(102)+19)
    var totalScore = 0;


    $("img").on("click", function(){
        
        $("#crystal1").attr("value",Math.floor(Math.random()*(12)+1));
        $("#crystal2").attr("value",Math.floor(Math.random()*(12)+1));
        $("#crystal3").attr("value",Math.floor(Math.random()*(12)+1));
        $("#crystal4").attr("value",Math.floor(Math.random()*(12)+1));

        console.log(event.target);
    });

   

    $("#crystal1").on("click", function(){
        totalScore = totalScore + $("#crystal1").attr("value");
        console.log(totalScore);
    });
    $("#crystal2").on("click", function(){
        totalScore = totalScore + $("#crystal2").attr("value");
        console.log(totalScore);
    });
    $("#crystal3").on("click", function(){
        totalScore = totalScore + $("#crystal3").attr("value");
        console.log(totalScore);
    });
    $("#crystal4").on("click", function(){
        totalScore = totalScore + $("#crystal4").attr("value");
        console.log(totalScore);
    });
});