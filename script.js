// select element
let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");
// add class to that element
rootEle.classList.add("light-mode");
// rootEle.classList.add("dark-mode");
toggleBtn.children[1].classList.add("displayNone");

function modeToggle(){
    // toggle (add and remove) class on click
    rootEle.classList.toggle("dark-mode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
    console.log(rootEle.classList)
}


// navShadow
window.addEventListener("scroll", ()=>{
    let navbar = document.querySelector("nav");
    if(window.scrollY > 0){
        navbar.classList.add("navShadow");
    }
    else{navbar.classList.remove("navShadow")}
});


// navMenu toggle
let allNavMenuitem = document.querySelectorAll(".navMenuItem");
let navLogo = document.querySelector(".logo");
let hireMe = document.querySelector(".hireMe");

function activeClassFunction(clickEle, addClassEle){
    clickEle.addEventListener("click", ()=>{
        allNavMenuitem.forEach((e) => {
            e.classList.remove("navActive");
        });
        addClassEle.classList.add("navActive");
    });
}

for(let i = 0; i < allNavMenuitem.length; i++){
    activeClassFunction(allNavMenuitem[i], allNavMenuitem[i]);
}
activeClassFunction(navLogo, allNavMenuitem[0]);
activeClassFunction(hireMe, allNavMenuitem[4]);


// animate on scroll
let revealAnimationElements = document.querySelectorAll("li, .name, .heading h1, .projectName");
revealAnimationElements.forEach((revealAnimationElement)=>{
    revealAnimationElement.style = `
    position: relative;
    `
    revealAnimationElement.classList.add("hiddenRevealAnimation");
});

let leftAnimationElements = document.querySelectorAll(".position, #aboutSection .left");
leftAnimationElements.forEach((leftAnimationElement)=>{
    leftAnimationElement.classList.add("hiddenLeftAnimation");
});

let rightAnimationElements = document.querySelectorAll(".circle, #aboutSection .right");
rightAnimationElements.forEach((rightAnimationElement)=>{
    rightAnimationElement.classList.add("hiddenRightAnimation");
});

let upAnimationElements = document.querySelectorAll(".about, .btns button, .links, .skills h1, .projectDesc, input, textarea");
upAnimationElements.forEach((upAnimationElement)=>{
    upAnimationElement.classList.add("hiddenupAnimation");
});

let progressBarAnimationElements = document.querySelectorAll(".progressBar");
progressBarAnimationElements.forEach((progressBarAnimationElement)=>{
    progressBarAnimationElement.classList.add("hiddenProgressBarAnimation");
});

let thumbnailAnimationElements = document.querySelectorAll(".thumbnail");
thumbnailAnimationElements.forEach((thumbnailAnimationElement)=>{
    thumbnailAnimationElement.classList.add("hiddenThumbnailAnimation");
});

function observeFunction(elements, className){
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add(className);
            }
            // for animate every time
            // else{
            //     entry.target.classList.remove(className);
            // }
        });
    });
    elements.forEach((el) => observer.observe(el));
}

observeFunction(revealAnimationElements, "showRevealAnimation");
observeFunction(leftAnimationElements, "showLeftAnimation");
observeFunction(rightAnimationElements, "showRightAnimation");
observeFunction(upAnimationElements, "showUpAnimation");
observeFunction(progressBarAnimationElements, "showProgressBarAnimation");
observeFunction(thumbnailAnimationElements, "showThumbnailAnimation");





