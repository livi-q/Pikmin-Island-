const nextButtons = document.querySelectorAll("next");
const NextText= [
    "Hi Y/n",
    "welcome to the island.",
    "more specifically jalph love island owned by the the chuds of the green aura and flies"
]

let i = 0
document.addEventListener('click', function(justDie) {
    const nextButton = justDie.target.closest('.next')
    

    if (nextButton) {
        i++;
        const old = document.getElementById("dialogue")
        if(old){old.remove()}
        console.log(i)

        if (i < NextText.length-1) {

                const out = document.createElement('div')
                out.classList.add('dialogue');
                out.id="dialogue"

                out.innerHTML=`<div class="viewBox">
                                    <p class="dialogueText">${NextText[i]}</p>
                                    <button class="next" id="next">Next</button>  
                                </div>`

                document.body.appendChild(out);

        } else {

            const out = document.createElement('div');
            out.classList.add('dialogue');
            out.id="dialogue"

            out.innerHTML=`<div class="viewBox">
                                <p class="dialogueText">${NextText[i]}</p>
                                <button class="done" id="done">Done</button>  
                            </div>`

            document.body.appendChild(out);
        }
    }

    const btn = justDie.target.closest('.done')

    if(btn){
        const old = document.getElementById("dialogue")
        if(old){old.remove()}
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