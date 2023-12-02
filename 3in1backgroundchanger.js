javascript:(function(){    var effect = prompt("Which effect do you want to apply? (invert, spin, or distort)");    if (effect === "invert") {        document.body.style.filter = "invert(100%)";    } else if (effect === "spin") {        var angle = 0;        var spin = setInterval(function(){            angle += 5;            document.body.style.transform = "rotate("+angle+"deg)";        }, 30);        var stopButton = document.createElement("button");        stopButton.innerHTML = "Stop spinning";        document.body.appendChild(stopButton);        stopButton.style.position = "absolute";        stopButton.style.top = "0px";        stopButton.style.right = "0px";        stopButton.onclick = function() {            clearInterval(spin);            stopButton.style.display = "none";        };    } else if (effect === "distort") {        var head = document.getElementsByTagName(%27head%27)[0];        var css = document.createElement(%27style%27);        css.type = %27text/css%27;        css.innerHTML = %27body { filter: url("data:image/svg+xml,<svg xmlns=\%27http://www.w3.org/2000/svg\%27><filter id=\%27trippy\%27><feTurbulence type=\%27turbulence\%27 baseFrequency=\%270.05\%27 numOctaves=\%273\%27 result=\%27TURB\%27 /><feDisplacementMap in=\%27SourceGraphic\%27 in2=\%27TURB\%27 scale=\%2740\%27 /></filter></svg>#trippy"); }';        head.appendChild(css);    } else {        alert("Invalid effect name.");    }})();
