import $ from "jquery"

import "./css/index.css"
import "./css/index.less"
import "bootstrap/dist/css/bootstrap.css"

$(function(){
    $("ul li:odd").css("background-color","#112233");
    $("ul li:even").css("background-color","#123ddd");
    $("ul li").css("color","white");
})

class Person{
    static children = {age:19,name:"涛哥"}
}

console.log(Person.children)
