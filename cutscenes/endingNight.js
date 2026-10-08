const nextButtons = document.querySelectorAll("next");
const pop = new Audio('../sfx/pop.mp3')

const bgm =new Audio('../sfx/Bad2.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 1;

const pikmin = new Audio('../sfx/burn4.mp3');
pikmin.play();
const pikmin2 = new Audio("../sfx/cry4.mp3")

const NextText= [
    "",
    "Could it be the... Beast everyone was so scared of...?",
    "You stare into the cold pitch black, gazing around you for whoever or whatever made that noise.",
    "A pair of glowing red eyes, staring back at you from a bush.",
    "Before you even could react, it leapt onto you, eating you whole.",
    "Goodbye, pikmin..."
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
        pikmin2.play();

        if (i < NextText.length-1) {

                const out = document.createElement('div')
                out.classList.add('dialogue');
                out.id="dialogue"

                out.innerHTML=`<div class="viewBox" style = 'color: red;'>
                                    ${NextText[i]}
                                    <button class="next" id="next">Next</button>  
                                </div>`

                document.body.appendChild(out);

        } else {

            const out = document.createElement('div');
            out.classList.add('dialogue');
            out.id="dialogue"

            out.innerHTML=`<div class="viewBox" style = 'color: red;'>
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
        die.innerHTML= `<a href="../index.html" style="font-size: x-large; color: antiquewhite;">[Try Again?]</a>`
        document.body.appendChild(die);
        pikmin.pause();
    }
});
