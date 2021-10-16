// initialization
let songIndex = 0;
let audioElement = new Audio('audios/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');
// let songItemPlay= Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songName: "wnejrkjwer", filePath: "audios/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "afdfafas", filePath: "audios/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "reteyrey", filePath: "audios/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "eyeyeryey", filePath: "audios/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "jkasjdk", filePath: "audios/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "huwqeiyn", filePath: "audios/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "jljlojqj", filePath: "audios/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "jkqljwejjl", filePath: "audios/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "jslkdfjljk", filePath: "audios/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "kjksfdkfdsj", filePath: "audios/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((elem) => {
        elem.classList.remove('fa-pause-circle');
        elem.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((elem) => {
    elem.addEventListener('click', (e) => {
        makeAllPlays();
        // songIndex = parseInt(e.target.id);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `audios/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `audios/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `audios/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});




































































