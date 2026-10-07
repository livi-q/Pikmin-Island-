const nextButtons = document.querySelectorAll("next");
pop = new Audio('../sfx/pop.mp3')

bgm =new Audio('../sfx/Garden.mp3');
bgm.currentTime = 0;
// bgm.play();
bgm.volume = 0.5;

const NextText= [
    "Welcome to the island.",
    "Your job is to collect food for your colony!",
    "Work together with other pikmin to explore and collect food.",
    "Remember, don't stay out too late!",
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
        setTimeout(2000);
        window.location.href = "../choices/choice1.html"
    }
});





/* let i = 0
nextButtons.forEach(nextButton => {
    nextButton.addEventListener("click", () => {//when clicked
        i++;
        const old = document.getElementById("dialogue");
        old.remove()
        console.log(i)

        if (i < NextText.length) {

                const out = document.createElement('div');
                out.classList.add('dialogue');

                out.innerHTML=`<div class="viewBox">
                                    <p class="dialogueText">You wake up as a <span style="font-weight: bolder; color: brown;"> red </span> pikmin... </p>
                                    <button class="next" id="next">Next</button>  
                                </div>`

                document.body.appendChild(out);

        } else {

            const out = document.createElement('div');
            out.classList.add('dialogue');

            out.innerHTML=`<div class="viewBox">
                                <p class="dialogueText">You wake up as a <span style="font-weight: bolder; color: brown;"> red </span> pikmin... </p>
                                <button class="next" id="done">Done</button>  
                            </div>`

            document.body.appendChild(out);
        }
    });
}); */