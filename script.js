const leafRight = document.querySelector('.leaf.right');
const messageBox = document.getElementById('messageBox');

leafRight.addEventListener('click', () => {
    messageBox.classList.toggle('show');
});


const bgMusic = document.getElementById("bgMusic");
document.addEventListener("click", () => {
    bgMusic.play();
  bgMusic.volume = 0.3;
}, { once: true });



const leafLeft = document.querySelector('.leaf.left');
const gallery = document.getElementById('gallery');

let galleryOpen = false;

leafLeft.addEventListener('click', () => {

    galleryOpen = !galleryOpen;

    if(galleryOpen){
        gallery.classList.add('show');
    } else {
        gallery.classList.remove('show');
    }

});

const leafMiddle = document.querySelector('.leaf.middle');
const spotifyCard = document.getElementById('spotifyCard');
leafMiddle.addEventListener('click', () => {
    spotifyCard.classList.toggle('show');
});