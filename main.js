
// ================================================================= Arrow =======================================================
const arrowUp = document.querySelector(".fa-angle-double-up");
const arrowDown = document.querySelector (".fa-angle-double-down")
const bonus = document.querySelector(".bonus");

const changeArrow = () => {

    arrowDown.classList.toggle("inactive");
    arrowUp.classList.toggle("inactive");
    bonus.classList.toggle("active");
}


arrowDown.addEventListener('click', changeArrow);
arrowUp.addEventListener('click', changeArrow);

//=================================================================== Slider =======================================================

const slideList = [
{ img: "images/baner1.png"

},
{img: "images/baner2.png"

},
{img: "images/baner3.png"

},
{img: "images/baner4.png"

},
{img: "images/baner5.png"

},
{img: "images/baner6.png"

}]

const image = document.querySelector("img.one");
const dots = [...document.querySelectorAll(".dots span")];
// const pRight = document.querySelector(".dots p.right");
// const pLeft = document.querySelector(".dots p.left");
const dotOne = document.querySelector("span#dot1");
const dotTwo = document.querySelector("span#dot2");
const dotThree = document.querySelector("span#dot3");
const dotFour = document.querySelector("span#dot4");
const dotFive = document.querySelector("span#dot5");
const dotSix = document.querySelector("span#dot6");

//interfejs
const time = 4000;
let active = 0;

//implementacja
const changeDot = () => {
const activeDot = dots.findIndex(dot => dot.classList.contains('act'));
dots[activeDot].classList.remove('act');
dots[active].classList.add('act');
};





const changeSlide = () => {
    active++;
    if (active == slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img
    changeDot();
}

// const changeReverseSlide = () => {
//     active--;
//     if (active < 0) {
//         active = 5;
//     }
//     image.src = slideList[active].img
//     changeDot();
// }

let indexInterval = setInterval(changeSlide, time);
// pRight.addEventListener('click', changeSlide)
// pLeft.addEventListener('click', changeReverseSlide)
dotOne.addEventListener('click', ()=>{
    active = 0;
    clearInterval(indexInterval);
    image.src = slideList[active].img
    changeDot();
    indexInterval = setInterval(changeSlide, time);

})
dotTwo.addEventListener('click', ()=>{
    active = 1;
    clearInterval(indexInterval);
    image.src = slideList[active].img
    changeDot();
    indexInterval = setInterval(changeSlide, time);

    
})
dotThree.addEventListener('click', ()=>{
    active = 2;
    clearInterval(indexInterval);
    image.src = slideList[active].img
    changeDot();
    indexInterval = setInterval(changeSlide, time);


})
dotFour.addEventListener('click', ()=>{
    active = 3;
    clearInterval(indexInterval);
    image.src = slideList[active].img
    changeDot();
    indexInterval = setInterval(changeSlide, time);


})
dotFive.addEventListener('click', ()=>{
    active = 4;
    clearInterval(indexInterval);
    image.src = slideList[active].img
    changeDot();
    indexInterval = setInterval(changeSlide, time);


})
dotSix.addEventListener('click', ()=>{
    active = 5;
    clearInterval(indexInterval);
    image.src = slideList[active].img
    changeDot();
    indexInterval = setInterval(changeSlide, time);


})


