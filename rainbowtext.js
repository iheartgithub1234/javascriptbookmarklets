javascript:(function() {    var elements = document.getElementsByTagName("*");    var rainbow = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];    var rainbowIndex = 0;    for (var i = 0; i < elements.length; i++) {        (function(i) {            setInterval(function() {                elements[i].style.color = rainbow[rainbowIndex];                rainbowIndex = (rainbowIndex + 1) % rainbow.length;            }, 50);        })(i);    }})();
