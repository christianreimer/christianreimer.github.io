let elem_but = document.getElementById("button1");
makeJellyButton(elem_but, reveal, "yes");
elem_but.style.marginBottom = "3vw";

elem_but = document.getElementById("button2");
makeJellyButton(elem_but, reveal, "no");

elem_but = document.getElementById("button3");
makeJellyButton(elem_but, () => { location.reload(); }, undefined);


function makeJellyButton(button, func, cmd) {
    button.addEventListener('click', function () {
        var duration = 0.3, delay = 0.08;
        TweenMax.to(button, duration, { scaleY: 1.6, ease: Expo.easeOut });
        TweenMax.to(button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay });
        TweenMax.to(button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });

        setTimeout(() => { func(cmd); }, 650);
    });
}


function reveal(arg) {
    let elem_toptext = document.getElementById("toptext");

    if (arg === "no") {
        elem_toptext.innerHTML = "Of course they are dirty!";
    } else {
        elem_toptext.innerHTML = "Doesn't matter, they are still dirty!";
    }

    let elem_subtext = document.getElementById("subtext");
    elem_subtext.parentNode.removeChild(elem_subtext);

    let elem_button = document.getElementById("buttondiv");
    elem_button.parentNode.removeChild(elem_button);

    let elem_reveal = document.getElementById("reveal");
    elem_reveal.style.display = "block";

    let elem_reload = document.getElementById("reloaddiv");
    elem_reload.style.visibility = "visible";
}
