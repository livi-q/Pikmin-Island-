const nextButtons = document.querySelectorAll("next");
pop = new Audio('../sfx/pop.mp3')

bgm =new Audio('../sfx/Garden.mp3');
bgm.currentTime = 0;
// bgm.play();
bgm.volume = 0.5;

const NextText= [
    "",
    "They seem to be asking you something.",
    "The pikmin are inviting you to collect food with them!",
    "Where do you want to go?"
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

                out.innerHTML=`<div class="viewBox">
                                    ${NextText[i]}
                                    <button class="next" id="next">Next</button>  
                                </div>`

                document.body.appendChild(out);

        } else {

            const out = document.createElement('div');
            out.classList.add('dialogue');
            out.id="dialogue"

            out.innerHTML=`<div class="viewBox">
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
        
        const choice = document.createElement('div')
        choice.classList.add('choice');
        choice.id="choice"

        choice.innerHTML=`        
        <button> A </button>
        <button> B </button>

        <div class="description"> Go to forest </div>
        <div class="description"> Go to beach </div>`

        document.body.appendChild(choice);
    }
});