
let ham = document.getElementById("hamburger");
let nav = document.getElementById("nav-bar");
function show_tab(){
    let navclass = nav.classList.toggle("show");
}
window.addEventListener('load', function (){
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('cont');

    loadingScreen.style.display = 'none';
    content.style.display = 'block';
})