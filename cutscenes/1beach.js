const nextButtons = document.querySelectorAll("next");
pop = new Audio('../sfx/pop.mp3')

bgm =new Audio('../sfx/Tropical.mp3');
bgm.currentTime = 0;
bgm.play();
bgm.volume = 0.5;

pikmin = new Audio('../sfx/pikmin.mp3');

const NextText= [
    "The sun slowly climbs higher in the sky, scorching the white sands with its radiant beams.",
    "Around you, the tide pulls back, unveiling the ocean’s trinkets.",
    "You scurry down with your friends, excited to see what the shore has to offer.",
    "As you try on your new wardrobe, you hear the surf rolling back in and hurry back up the sand.",
    "If only you had gills like your Blue Pikmin friends!"
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
                                If only you had gills like your <span style = "color: rgb(65, 113, 202)">Blue Pikmin</span> friends!
                                <button class="done" id="done">Done</button>  
                            </div>`

            document.body.appendChild(out);
        }
    }

    const btn = justDie.target.closest('.done')

    if(btn){
        const old = document.getElementById("dialogue")
        if(old){old.remove()}
        setTimeout(()=>{window.location.href = "../choices/choice2b.html"},3000);
        
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