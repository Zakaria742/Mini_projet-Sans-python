
let ham = document.getElementById("hamburger");
let nav = document.getElementById("nav-bar");
function show_tab(){
    let navclass = nav.classList.toggle("show");
}
window.addEventListener('load', function (){
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('cont');
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Ensure it's completely removed
      }, 3000);
      content.style.display = 'grid';
})