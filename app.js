// function toogle() {
//     var nav = document.getElementById("menu");
//     if (nav.style.display === "none") {
//         nav.style.display="block"; 
//         nav.style.transition="all .5s";

//      }

//      else {nav.style.display="none";}

// }

// var togglee = window.matchMedia("(max-width: 767px)")
var nav = document.getElementById("menu");
var unOrder = document.getElementById("menuitems");
var resp = window.matchMedia("(max-width:767px)");

function toogle() {
    if (resp.matches) {
        // nav.style.left = "-100%";

        if (nav.style.left == "-100%") {
            nav.style.left = "0";
        }
        else
            nav.style.left = "-100%";
    }

}

function loader() {
    if (window.innerWidth > 767) {
        nav.style.left = "-100%";

    }
}
window.addEventListener("resize",loader)
    // if (window.innerWidth > 767){
    //     nav.style.left = "-100%";
    //     console.log("pak")

    // }



