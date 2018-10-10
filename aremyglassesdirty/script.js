
makeJellyButton(document.getElementById("button1"), "yes");
makeJellyButton(document.getElementById("button2"), "no");


function makeJellyButton(button, cmd) {
    button.addEventListener('click', function() {
    var duration = 0.3, delay = 0.08;
    TweenMax.to(button, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to(button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to(button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });

    setTimeout(function() { reveal(cmd); }, 650);
    });
}


function reveal(arg) {
    let elem_toptext = document.getElementById("toptext");

    if(arg === "no") {
        elem_toptext.innerHTML = "Of course they are dirty!";
    } else {
        elem_toptext.innerHTML = "Dosn't matter, they are still dirty!";
    }

    let elem_subtext = document.getElementById("subtext");
    elem_subtext.parentNode.removeChild(elem_subtext);

    let elem_button = document.getElementById("buttondiv");
    elem_button.parentNode.removeChild(elem_button);

    let elem_reveal = document.getElementById("reveal");
    elem_reveal.style.display = "block";
}
