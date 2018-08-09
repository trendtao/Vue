import $ from "jquery"

import "./css/index.css"
import "./css/index.less"

$(function(){
    $("ul li:odd").css("background-color","#112233");
    $("ul li:even").css("background-color","#123ddd");
    $("ul li").css("color","white");
})