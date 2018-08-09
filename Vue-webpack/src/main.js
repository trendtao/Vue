import $ from "jquery"

$(function(){
    $("ul li:odd").css("background-color","red");
    $("ul li:even").css("background-color","green");
})