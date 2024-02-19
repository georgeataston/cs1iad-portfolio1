const dudududu = new Audio("audio/dudududu.mp3");

window.onload = function() {
    var span = document.getElementsByClassName("max")[0];
    span.addEventListener("click", () => {
        dudududu.play();
        var img = document.getElementsByClassName("mv")[0];
        img.style.display = 'block';
        setTimeout(function() {
            img.style.display = 'none';
        }, 5225);
    });
}