// Dados da lista de reprodução
var playlist = [
    {
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        titulo: "SoundHelix Song 1",
        img: "/img/img-1.jpg"
    },
    {
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        titulo: "SoundHelix Song 2",
        img: "/img/img-2.jpg"
    },
    {
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        titulo: "SoundHelix Song 3",
        img: "/img/img-3.jpg"
    },
    {
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        titulo: "SoundHelix Song 4",
        img: "/img/img-4.jpg"
    }

];

// Elementos da interface
var audioPlayer = document.getElementById("audioPlayer");
var tituloMusica = document.getElementById("songTitle");
let ImgMusica = document.getElementById("img");
var playPauseIcone = document.querySelector("#btnPlayPause i");
let rangeAudio = document.querySelector("#rangeAudio");

// Estado do player
var currentSongIndex = 0;
var isPlaying = true;

// Função para atualizar o player
function updatePlayer() {
    audioPlayer.src = playlist[currentSongIndex].src;
    ImgMusica.src = playlist[currentSongIndex].img;
    tituloMusica.innerHTML = playlist[currentSongIndex].titulo;
}


// Função para tocar a próxima música
function nextSong() {
    audioPlayer.pause();
    if (currentSongIndex < playlist.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0;
    }
    updatePlayer();
    audioPlayer.play();
}

//   Função para voltar a última músca

function previousSong() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = playlist.length - 1;
    }
    updatePlayer();
    audioPlayer.play();
}

function playPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime);
        audioPlayer.play();
    }
}


function rangeChange() {
    let valor = rangeAudio.value;
    audioPlayer.currentTime = valor;
}


// Controles do player
audioPlayer.addEventListener("ended", function () {
    nextSong();
});


audioPlayer.addEventListener("play", function () {
    playPauseIcone.classList.remove("bi-play-fill");
    playPauseIcone.classList.add("bi-pause-fill");
});



audioPlayer.addEventListener("pause", function () {
    playPauseIcone.classList.remove("bi-pause-fill");
    playPauseIcone.classList.add("bi-play-fill");
});


audioPlayer.addEventListener("timeupdate", function () {
    let segundos = Number(audioPlayer.currentTime || 0);
    let segundosMaximo = parseInt(audioPlayer.duration || 0);
    rangeAudio.setAttribute("value", segundos)
    rangeAudio.setAttribute("max", segundosMaximo)
});
