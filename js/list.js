const main_div = document.getElementById('main-container');

const songlist = [
    {
        id : "0",
        songtitle : "MeriZindgiSawari",
        songartist : "Album",
        pname : "margish"
    },
    {
        id : "1",
        songtitle : "jaaneNahin",
        songartist : "SonuNigam",
        pname : "meha"
    },
    {
        id : "2",
        songtitle : "TeraYaarHoon",
        songartist : "ArijitSingh",
        pname : "dhruvi"
    },
    {
        id : "3",
        songtitle : "TumJaiseBewadon",
        songartist : "RajeevRaja",
        pname : "group"
    }
]

songlist.forEach(element => {
    var newDiv = '<div class="box_container">';
    newDiv += '<div class="img_box">';
    newDiv += '<img src="'+ '../img/'+element.pname+'.jpeg'+'" id="song-img"alt="">';
    newDiv += '</div>';
    newDiv += '<a href="music.html?imgsrc='+element.pname+'&'+element.songtitle+'&'+element.songartist+'&'+element.id+'">'
    newDiv += '<div class="song_content">';
    newDiv += '<h2 id="song-title">'+element.songtitle+'</h2>';
    newDiv += '<p id="song-artist">'+element.songartist+'</p>';
    newDiv += '</div>';
    newDiv += '</a>';
    newDiv += '</div>';

    main_div.insertAdjacentHTML( 'beforeend', newDiv );
});