const item = document.getElementsByTagName("form")
document.getElementById("show").addEventListener("click", (e) => {
    e.preventDefault()
    item[0].style.scale = 0;
    item[1].style.scale = 1;
})
document.getElementById("hide").addEventListener("click", (e) => {
    e.preventDefault()
    item[0].style.scale = 1;
    item[1].style.scale = 0;

})