const avatar = document.getElementById('cover-image');
const titleEl = document.getElementById('song-title')
const artistEl = document.getElementById('artist-name')
const timeline = document.getElementById('timeline')
const progress = document.getElementById('progress')
const prevbtn = document.getElementById('prev-btn')
const nextbtn = document.getElementById('next-btn')
const playbtn = document.getElementById('play-btn')
const menu = document.getElementById('menu')
const playlistContainer = document.getElementById('playlist');
const openPlaylistBtn = document.querySelector('.fa-bars'); // The Hamburger icon
const closePlaylistBtn = document.getElementById('close-playlist'); // The 'X' icon
const playlistList = document.getElementById('playlist-songs');


let songs = []
let songIndex = 0;
let isPlaying = false;
let isList = false;
let audio = new Audio();


async function fetchsongs() {
    try{
        const response = await fetch('https://itunes.apple.com/search?term=lofi&media=music&limit=300')
        const data = await response.json();
        songs = data.results.map(track =>({
            title: track.trackName,
            artist: track.artistName,
            cover: track.artworkUrl100.replace('100x100', '400x400'),
            src: track.previewUrl
        }))
        loadSong(songs[songIndex])
        playlistdisplay()
    }catch(error){
        console.error("Error fecthing music", error)
        titleEl.innertext = "Error Loading Music";
    }
}


function playlistdisplay() {
    playlistList.innerHTML = '';

    songs.forEach((song, index) => {
        const item = document.createElement('li');
        
        item.innerText = song.title;
        item.classList.add('song-item');

        item.addEventListener('click', () => {
            songIndex = index; 
            loadSong(songs[songIndex]); 
            playSong(); 
            playlistContainer.classList.remove('active'); 
        });

        playlistList.append(item);
    });
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
    menu()
})
openPlaylistBtn.addEventListener('click', () => {
    playlistContainer.classList.add('active');
});
closePlaylistBtn.addEventListener('click', () => {
    playlistContainer.classList.remove('active');
});
fetchsongs()