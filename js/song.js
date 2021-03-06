const music = document.querySelector('audio');
const img = document.querySelector('img')
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress_div = document.getElementById('progress_div');


/** */
const urlstring = window.location.href
const decodeurl = decodeURI(urlstring);
const parameter = decodeurl.split('=')[1]
const imgsrc = parameter.split('&')[0]
const titlecontent = parameter.split('&')[1]
const artistcontent = parameter.split('&')[2]
const id = parameter.split('&')[3]
img.src = "../img/"+imgsrc+".jpeg";
music.src = "../music/patel-"+id+".mp3";
title.textContent = titlecontent;
artist.textContent = artistcontent;
/**/

let progress = document.getElementById('progress');
let current_time = document.getElementById('current_time');
let total_duration = document.getElementById('duration');

const songs = [
    {
        name : "patel-0",
        title : "Meri Zindgi Sawari",
        artist : "Album",
        pname : "margish"
    },
    {
        name : "patel-1",
        title : "jaane Nahin",
        artist : "Sonu Nigam",
        pname : "meha"
    },
    {
        name : "patel-2",
        title : "Tera Yaar Hoon",
        artist : "Arijit Singh",
        pname : "dhruvi"
    },
    {
        name : "patel-3",
        title : "Tum Jaise Bewadon",
        artist : "Rajeev Raja",
        pname : "group"
    },
    {
        name : "patel-4",
        title : "Jaan'Nisaar",
        artist : "Arijit Singh",
        pname : "margish"
    },
    {
        name : "patel-5",
        title : "Yeh Tune Kya Kiya",
        artist : "Javed Bashir",
        pname : "meha"
    },
    {
        name : "patel-6",
        title : "Perfect",
        artist : "Ed Sheeran",
        pname : "dhruvi"
    },
    {
        name : "patel-7",
        title : "Girls Like You",
        artist : "Maroon 5",
        pname : "margish"
    },
    {
        name : "patel-8",
        title : "Agar Tum Saath",
        artist : "Alka Yagnik and Arjit Singh",
        pname : "group"
    },
    {
        name : "patel-9",
        title : "Aabaad Barbaad",
        artist : "Arjit Singh",
        pname : "group"
    },
    {
        name : "patel-10",
        title : "Attention",
        artist : "Charlie Puth",
        pname : "dhruvi"
    },
    {
        name : "patel-11",
        title : "Old vs New",
        artist : "Album",
        pname : "meha"
    },
    {
        name : "patel-12",
        title : "Har Har Gange",
        artist : "Arijit Singh",
        pname : "margish"
    },
    {
        name : "patel-13",
        title : "Sawarne Lage",
        artist : "Tanishk Bagchi, Jubin Nautiyal",
        pname : "meha"
    },
    {
        name : "patel-14",
        title : "Superhero",
        artist : "Unknown Brain",
        pname : "dhruvi"
    },
    {
        name : "patel-15",
        title : "Radha ne Shyam",
        artist : "Sachin-Jigar, Sachin Sanghvi",
        pname : "group"
    }
];

let isPlaying = false;

const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause')
    img.classList.add('anime');
};

const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play')
    img.classList.remove('anime');
};

play.addEventListener('click',() => {
    isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "../music/"+songs.name+".mp3";
    img.src = "../img/"+songs.pname+".jpeg";
}

songIndex = parseInt(id);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

music.addEventListener('timeupdate',(event) => {
    const {currentTime, duration} = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    
    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        total_duration.textContent = `${tot_duration}`;
    }

    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    
    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
});

progress_div.addEventListener('click',(event) => {
    const {duration} = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
})

music.addEventListener('ended',nextSong)

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);