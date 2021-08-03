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
    },
    {
        id : "4",
        songtitle : "Jaan'Nisaar",
        songartist : "Arijit Singh",
        pname : "margish"
    },
    {
        id : "5",
        songtitle : "Yeh Tune Kya Kiya",
        songartist : "Javed Bashir",
        pname : "meha"
    },
    {
        id : "6",
        songtitle : "Perfect",
        songartist : "Ed Sheeran",
        pname : "dhruvi"
    },
    {
        id : "7",
        songtitle : "Girls Like You",
        songartist : "Maroon 5",
        pname : "margish"
    },
    {
        id : "8",
        songtitle : "Agar Tum Saath",
        songartist : "Alka Yagnik and Arjit Singh",
        pname : "group"
    },
    {
        id : "9",
        songtitle : "Aabaad Barbaad",
        songartist : "Arjit Singh",
        pname : "group"
    },
    {
        id : "10",
        songtitle : "Attention",
        songartist : "Charlie Puth",
        pname : "dhruvi"
    },
    {
        id : "11",
        songtitle : "Old vs New",
        songartist : "Album",
        pname : "meha"
    },
    {
        id : "12",
        songtitle : "Har Har Gange",
        songartist : "Arijit Singh",
        pname : "margish"
    },
    {
        id : "13",
        songtitle : "Sawarne Lage",
        songartist : "Tanishk Bagchi, Jubin Nautiyal",
        pname : "meha"
    },
    {
        id : "14",
        songtitle : "Superhero",
        songartist : "Unknown Brain",
        pname : "dhruvi"
    },
    {
        id : "15",
        songtitle : "Radha ne Shyam",
        songartist : "Sachin-Jigar, Sachin Sanghvi",
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
        btn.style.top = '7px';
        search_btn.classList.add('fa-search-minus')
        search_btn.classList.remove('fa-search')
        show_text = true;
    }
    else{
        search_text.classList.remove('show')
        btn.style.top = '-5px';
        search_btn.classList.add('fa-search')
        search_btn.classList.remove('fa-search-minus')
        show_text = false;
    }
})    
