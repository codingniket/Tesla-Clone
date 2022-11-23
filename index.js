var header = document.getElementById("header");

var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");

var model = document.getElementById("model");
var speed = document.getElementById("speed");
var range = document.getElementById("range");

ms.onclick = function() 
{
    header.style.backgroundImage = "url(image-1.png)";
    model.innerHTML = "Model S";
    speed.innerHTML = "200 mph";
    range.innerHTML = "390 mi";
}

m3.onclick = function() 
{
    header.style.backgroundImage = "url(image-2.png)";
    model.innerHTML = "Model 3";
    speed.innerHTML = "220 mph";
    range.innerHTML = "410 mi";
}

mx.onclick = function() 
{
    header.style.backgroundImage = "url(image-3.png)";
    model.innerHTML = "Model X";
    speed.innerHTML = "250 mph";
    range.innerHTML = "490 mi";
}

my.onclick = function() 
{
    header.style.backgroundImage = "url(image-4.png)";
    model.innerHTML = "Model Y";
    speed.innerHTML = "250 mph";
    range.innerHTML = "500 mi";
}
