const avatar = document.getElementById('cover-image');
const titleEl = document.getElementById('song-title')
const artistEl = document.getElementById('artist-name')
const timeline = document.getElementById('timeline')
const progress = document.getElementById('progress')
const prevbtn = document.getElementById('prev-btn')
const nextbtn = document.getElementById('next-btn')
const playbtn = document.getElementById('play-btn')
const menu = document.getElementById('menu')


let songs = []
let songIndex = 0;
let isPlaying = false
let audio = new Audio();


async function fetchsongs() {
    try{
        const response = await fetch('https://itunes.apple.com/search?term=lofi&media=music&limit=10')
        const data = await response.json();
        songs = data.results.map(track =>({
            title: track.trackName,
            artist: track.artistName,
            cover: track.artworkUrl100.replace('100x100', '400x400'),
            src: track.previewUrl
        }))
        loadSong(songs[songIndex])
    }catch(error){
        console.error("Error fecthing music", error)
        titleEl.innertext = "Error Loading Music";
    }
}

function loadSong(song){
    titleEl.innerText = song.title;
    artistEl.innerText = song.artist;
    avatar.src = song.cover;
    audio.src = song.src;
}

function toggle() {
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
}

function playSong(){
    isPlaying = true;
    playbtn.classList.replace('fa-play-circle', 'fa-pause-circle');
    avatar.classList.add('playing');
    audio.play();
}

function pauseSong(){
    isPlaying = false;
    playbtn.classList.replace('fa-pause-circle', 'fa-play-circle');
    avatar.classList.add('playing');
    audio.pause();
}

function nextSong(){
    pauseSong();
    songIndex++;
    if (songIndex>songs.length-1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong(){
    pauseSong()
    songIndex--;
    if (songIndex<0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const {duration, currentTime} = e.target;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;

}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX/width) * duration;
}

playbtn.addEventListener('click', toggle)
prevbtn.addEventListener('click', prevSong)
nextbtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgress)
audio.addEventListener('ended', nextSong)
timeline.addEventListener('click', setProgress)
menu.addEventListener('click', (e)=>{
    alert("Feature coming soon!")
})
fetchsongs()