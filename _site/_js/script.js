window.onload = function () {
    const buttonOfMobile = document.getElementById("btn-mobile");

    function toggleMenu() {
        const nav = document.getElementById("nav");
        const menu = document.querySelector(".menu");
        nav.classList.toggle("active");
        menu.classList.toggle("max-width");
        var animation = nav.classList.contains("active");
        if (animation) {
            document.querySelector("button").innerHTML = "&#x2715";
            document.querySelector("button").style.cursor = "pointer";
        } else {
            document.querySelector("button").innerHTML = "Menu";
        }
    }

    buttonOfMobile.addEventListener("click", toggleMenu);
}