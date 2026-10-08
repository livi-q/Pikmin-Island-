const nextButtons = document.querySelectorAll("next");
const pop = new Audio('../sfx/pop.mp3')

const bgm =new Audio('../sfx/Bad.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 1;

const pikmin = new Audio('../sfx/drown1.mp3');
pikmin.loop=true;
pikmin.play();

const NextText= [
    "",
    "Your tiny arms are useless against the undercurrent pulling you away from the surface...",
    "Your vision is going dark...",
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
        die.innerHTML= `<a href="../home.html" style="font-size: x-large; color: antiquewhite;">[Try Again?]</a>`
        document.body.appendChild(die);
    }
});
