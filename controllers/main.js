window.onload = function (){

    var li_main = document.querySelector(".li_main");

    li_main.addEventListener("click", function () {
        this.classList.toggle("active");
    })

}