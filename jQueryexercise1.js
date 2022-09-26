//1.Write the necessary to code wait for the DOM to load in jQuery.
$(document).ready(function(){
//2. Select the footer element.
    $("footer");
// 3. select the div with id container.
    $("#container");
// 4.Select all of the lis inside of the ul with a class of nav.
    $(".nav li");
// 5.Select the third li inside of the div with a class of list-container.
    $(".list-container li:nth-child(3)");
// 6. Select only the last li in each uls.
    $("ul li:last-child")
})