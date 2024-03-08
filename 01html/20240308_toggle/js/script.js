
// const toggleElm = document.getElementsByClassName("toggle_button")
const toggleElm = document.querySelector("div.toggle_button")

// let changeToggle = true;
// toggleElm[0].addEventListener("click", function(){
//     if(changeToggle == true){
//     toggleElm[0].classList.add("active")
//     changeToggle = false;
//     }else{
//         toggleElm[0].classList.remove("active")
//         changeToggle = true;
//     }
// })

toggleElm.addEventListener("click",function(){
    toggleElm.classList.toggle("active")
})