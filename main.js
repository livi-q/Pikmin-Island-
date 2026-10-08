window.addEventListener('load', function() { //when it load fade in
    const x = document.getElementById('load');
    x.classList.add('loaded'); //changes class
    console.log(x)
})

window.addEventListener('click', function() { //when it load fade in
    const x = document.getElementById('die');
    x.classList.add('dead'); //changes class
    console.log(x)
    bgm.play();
})
window.addEventListener('keydown', function() { //when it load fade in
    const x = document.getElementById('die');
    x.classList.add('dead'); //changes class
    console.log(x)
    bgm.play();
})
