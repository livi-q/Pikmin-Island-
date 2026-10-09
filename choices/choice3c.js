const nextButtons = document.querySelectorAll("next");
const pop = new Audio('../sfx/pop.mp3')

const bgm =new Audio('../sfx/cutscene.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 0.5;

let pikmin = new Audio('../sfx/hm.mp3');
let disable = true;

const NextText= [
    "",
    "This must be their home!",
    "They're telling you to follow them!",
    "What do you do?"
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
        disable? pikmin.play(): null;
        disable = false

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
        choice.classList.add('anim');
        choice.id="anim"

        choice.innerHTML=`   
        <div class="choice" id = "choice">     
            <a href="../cutscenes/goodEnding.html"><button id= a > A </button></a>
            <a href="../cutscenes/endingNight.html"><button id = b > B </button></a>

            <div class="description" > Follow them </div>
            <div class="description"> Find your own path home</div>
        </div>`

        document.body.appendChild(choice);
        console.log(choice)
    }
});

