const nextButtons = document.querySelectorAll("next");
pop = new Audio('../sfx/pop.mp3')

bgm =new Audio('../sfx/Chilly.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 0.5;

pikmin = new Audio('../sfx/pikmin.mp3');

const NextText= [
    "The branches of the trees sparkled, reflecting the sun creating a surreal atmosphere. ",
    "The wind carried chilling promises , reminding you that you shouldn't stay out for long.",
    "You tread through the cold environment, the cold piece of land seeming to span forever. ",
    "You walk for what seems like hours, seeing the same places pass by over and over. ",
    "It's so easy to get lost here!",
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
        setTimeout(()=>{window.location.href = "../choices/choice3c.html"},2000);
    }
});
