bgm =new Audio('sfx/Default.mp3');
bgm.play();
bgm.volume = 0.5;


window.addEventListener('load', function() { //when it load fade in
    const x = document.getElementById('load');
    x.classList.add('loaded'); //changes class
    console.log("hi")
})

