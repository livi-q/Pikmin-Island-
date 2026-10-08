const nextButtons = document.querySelectorAll("next");
const pop = new Audio('../sfx/pop.mp3')

const bgm =new Audio('../sfx/Calm.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 1;

const pikmin = new Audio('../sfx/pikmin.mp3');



const NextText= [
    "",
    "Your friends greet you as you return from your daily expeditions.",
    "The sun sets behind you, casting a warm glow around you.",
    "You hurry inside as the nocturnal creatures begin to stir...",
    "Goodnight, pikmin!"
]

let i = 0
document.addEventListener('click', function(justDie) {
    const nextButton = justDie.target.closest('.next')
    

    if (nextButton) {
        i++;
        const old = document.getElementById("dialogue")
        if(old){old.remove()}
        console.log(i)
        pop.play();
        pikmin.play();

        if (i < NextText.length-1) {

                const out = document.createElement('div')
                out.classList.add('dialogue');
                out.id="dialogue"

                out.innerHTML=`<div class="viewBox">
                                    ${NextText[i]}
                                    <button class="next" id="next">Next</button>  
                                </div>`

                document.body.appendChild(out);

        } else {

            const out = document.createElement('div');
            out.classList.add('dialogue');
            out.id="dialogue"

            out.innerHTML=`<div class="viewBox" style = 'color: rbg(158, 82, 0);'>
                                ${NextText[i]}
                                <button class="done" id="done">Done</button>  
                            </div>`

            document.body.appendChild(out);
        }
    }

    const btn = justDie.target.closest('.done')

    if(btn){
        const old = document.getElementById("dialogue")
        if(old){old.remove()}

        const die = document.createElement('div')
        die.classList.add('die');
        die.id="die";
        die.innerHTML= `<a href="../index.html" style="font-size: x-large; color: antiquewhite;">Good job! \n [Play Again?]</a>`
        document.body.appendChild(die);
        pikmin.pause();
    }
});
