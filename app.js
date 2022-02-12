const menuBar = document.querySelector(".menu-bar");
const leftBody = document.querySelector(".left-body");
const centerBody = document.querySelector(".center-body");

menuBar.addEventListener("click", () => {
    console.log("click");
    
    if(leftBody.style.display==="block") {
        leftBody.style.display="none";
        leftBody.classList.add("animate__slideInRight");
        leftBody.classList.remove("animate__slideInLeft");
        centerBody.style.display="block";

    } else {
        leftBody.style.display="block";
        leftBody.classList.add("animate__slideInLeft");
        leftBody.classList.remove("animate__slideInRight");
        centerBody.style.display="none";

    }
})