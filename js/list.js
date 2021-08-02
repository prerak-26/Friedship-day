const main_div = document.getElementById('main-container');

const songlist = [
    {
        id : "0",
        songtitle : "Meri Zindgi Sawari",
        songartist : "Album",
        pname : "margish"
    },
    {
        id : "1",
        songtitle : "jaane Nahin",
        songartist : "Sonu Nigam",
        pname : "meha"
    },
    {
        id : "2",
        songtitle : "Tera Yaar Hoon",
        songartist : "Arijit Singh",
        pname : "dhruvi"
    },
    {
        id : "3",
        songtitle : "Tum Jaise Bewadon",
        songartist : "Rajeev Raja",
        pname : "group"
    }
]

songlist.forEach(element => {
    var newDiv = '<div class="box_container">';
    newDiv += '<div class="img_box">';
    newDiv += '<img src="'+ '../img/'+element.pname+'.jpeg'+'" id="song-img"alt="">';
    newDiv += '</div>';
    newDiv += '<a href="music.html?imgsrc='+element.pname+'&'+element.songtitle+'&'+element.songartist+'&'+element.id+'" id="song-detail">'
    newDiv += '<div class="song_content">';
    newDiv += '<h2 id="song-title">'+element.songtitle+'</h2>';
    newDiv += '<p id="song-artist">'+element.songartist+'</p>';
    newDiv += '</div>';
    newDiv += '</a>';
    newDiv += '</div>';

    main_div.insertAdjacentHTML( 'beforeend', newDiv );
});



const search = () => {
    let filter = document.getElementById('myinput').value.toUpperCase();

    let ul = main_div.getElementsByClassName('box_container');

    // let ul = main_div.getElementsByTagName('a');
    
    for ( let i =0 ; i < ul.length ; i++){
        let li = ul[i].getElementsByTagName('h2');
        let text = li[0].textContent || li[0].innerHTML;
        
        if(text.toUpperCase().indexOf(filter) > -1){
            ul[i].style.display = "";
        }
        else{
            ul[i].style.display = "none";
        }
    }
}

const btn = document.getElementById('s_btn')
const search_text = document.getElementById('myinput')
const search_btn = document.getElementById('btn_logo')

let show_text = false;

btn.addEventListener('click',()=>{
    if(!show_text){
        search_text.classList.add('show')
        btn.style.top = '0';
        search_btn.classList.add('fa-search-minus')
        search_btn.classList.remove('fa-search')
        show_text = true;
    }
    else{
        search_text.classList.remove('show')
        btn.style.top = '-15px';
        search_btn.classList.add('fa-search')
        search_btn.classList.remove('fa-search-minus')
        show_text = false;
    }
})    
