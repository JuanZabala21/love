document.getElementById("pedir-sanvalentin").addEventListener("click", function() {
    var newGifUrl = "https://giphy.com/embed/DirPxXrUHKaCA";
    document.getElementById("giphy-iframe").src = newGifUrl;

    document.getElementById("mensaje-titulo").textContent = "TE AMOOOOOOOOOOOO😍😍🥰🥰";
});

document.getElementById("rechazar-sanvalentin").addEventListener("click", function() {
    var button = document.getElementById("rechazar-sanvalentin");
    var newTop = Math.random() * (window.innerHeight - button.clientHeight);
    var newLeft = Math.random() * (window.innerWidth - button.clientWidth);
    
    var currentTop = button.offsetTop;
    var currentLeft = button.offsetLeft;
    
    var distanceTop = newTop - currentTop;
    var distanceLeft = newLeft - currentLeft;
    
    button.style.transition = "transform 0.5s ease-in-out";
    button.style.transform = "translate(" + distanceLeft + "px, " + distanceTop + "px)";
    
    var newGifUrl = "https://giphy.com/embed/NXgyr1jxOKMDA0ilWO";
    document.getElementById("giphy-iframe").src = newGifUrl;

    document.getElementById("mensaje-titulo").textContent = "Ya no me amas...😔";
});
