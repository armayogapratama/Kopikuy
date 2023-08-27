let time = document.getElementById("times");
let day = new Date();

time.innerHTML = day.toDateString();


const video = document.querySelector('.video');
const videoPopup = document.querySelectorAll('#video-popup');

video.addEventListener('click', function(){
    console.log('click video');

    if(video.classList.contains('open')){
        video.getElementById.remove('#video-popup');
    } else {
        video.getElementById.add('#video-popup');
    }
});