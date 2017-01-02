/*Adapted code from http://www.w3schools.com/w3css/w3css_sidenav.asp
 * Concept is simple, tag elements with id="" and control the view
 * with onclick events
 * */

function openNav() {
    document.getElementById("navFrame").style.display = "block";
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("navFrame").className = "w3-col m5 l3 w3-container w3-collapse";

}
function closeNav() {
    document.getElementById("navFrame").style.display = "none";
    document.getElementById("navFrame").className = "w3-col m5 l3 w3-container w3-collapse w3-hide-small";
    document.getElementById("mobileNav").style.display = "block";

}
