const button = document.querySelector("button")
const input = document.querySelector("input")
const form = document.querySelector("form")
const container = document.getElementById("container")






//container.style.border = "3px solid red"

container.addEventListener("click", (eo) => {


    switch (true) {
        case eo.target.className === "icon-bin2 icon":
            eo.target.parentElement.parentElement.remove();
            break;
        
        case eo.target.className === "icon-angry icon":
            eo.target.classList.add("dn");
            const heart = `   <span class="icon-heart"></span>`;
            eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");
            eo.target.parentElement.innerHTML += heart;
            break;
    
        case eo.target.className === "icon-heart":
            eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");
            const angry = `   <span class="icon-angry icon"></span>`;
            eo.target.classList.add("dn");
            eo.target.parentElement.innerHTML += angry;
            break;
    
        case eo.target.className === "icon-star-full icon":
            eo.target.classList.add("orange");
            container.prepend(eo.target.parentElement);
            break;
    
        case eo.target.className === "icon-star-full icon orange":
            eo.target.classList.remove("orange");
            break;
    
        default:
            // Handle any other cases or do nothing
            break;
    }
    

})










form.addEventListener("submit", (eo) => {
    eo.preventDefault()
    const task = `<div class="task">
    <span class="icon-star-full icon"></span>
    <p class="task-text" >${input.value}</p>
<div>
    <span class="icon-bin2 icon"></span>
   
    <span class="icon-angry icon"></span>
</div>    


    <!--<span class="icon-heart"></span>--> 
 </div>`


    container.innerHTML += task
    input.value = "     "
})



console.log(input.value)