console.log("Connected");
function toggleMenu() {
    console.log("Burger clicked");
    let mobileLinks = document.querySelector('.mobile-links');
    console.log(mobileLinks);
    mobileLinks.style.display = (mobileLinks.style.display === 'flex') ? 'none' : 'flex';
}
