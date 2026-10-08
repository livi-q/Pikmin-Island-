const nextButtons = document.querySelectorAll("next");
pop = new Audio('../sfx/pop.mp3')

bgm =new Audio('../sfx/Garden.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 0.5;

pikmin = new Audio('../sfx/pikmin.mp3');

const NextText= [
    "",
    "The water trickled softly, a comforting sound for your little ears.",
    "You jumped from a grey, olden rock, landing onto a another solid one surrounded by the eddying river water.",
    "Up ahead, a dark cavern yawns, water flowing into its mouth.",

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
        setTimeout(()=>{window.location.href = "../choices/#"},2000);
    }
});
