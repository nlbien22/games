window.addEventListener('load', function() {
    var button = document.getElementById('button');
    button.addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.play();
    });
}