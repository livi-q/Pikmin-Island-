bgm =new Audio('sfx/Default.mp3');
bgm.currentTime = 0;

bgm.volume = 0.5;


window.addEventListener('click', function() { //when it load fade in
    const x = document.getElementById('load');
    x.classList.add('loaded'); //changes class
    console.log("hi")
    bgm.play();
})
window.addEventListener('keydown', function() { //when it load fade in
    const x = document.getElementById('load');
    x.classList.add('loaded'); //changes class
    console.log("hi")
    bgm.play();
})


