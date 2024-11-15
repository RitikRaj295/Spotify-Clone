//initialization of variables
let songIndex=0;
let audioPlay = new Audio('./songs/1.mp3');
let masterPlay=document.querySelector("#masterPlay");
let gif=document.querySelector('.gif');
let myprogressBar=document.querySelector("#myprogressBar");
let songItems= Array.from(document.querySelectorAll('.songItem'))
let menuPlay=Array.from(document.querySelectorAll('.menuPlayBtn'))
let currSongName=document.querySelector('.currentSongName');
let prevBtn=document.querySelector('.prevBtn');
let forwBtn=document.querySelector('.forwBtn');





let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]





songItems.forEach((element,i)=>{
    element.querySelectorAll("img")[0].src=songs[i].coverPath; 
    element.querySelectorAll(".songName")[0].innerText=songs[i].songName; 

})




masterPlay.addEventListener('click',()=>{
    if(audioPlay.paused || audioPlay.currentTime<=0){
      audioPlay.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity=1;
      stopPlays();
      
      

    }
    else{
        audioPlay.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        stopPlays();
        gif.style.opacity=0;



  
    }
})

audioPlay.addEventListener('timeupdate',()=>{
    let progress=parseInt(audioPlay.currentTime/audioPlay.duration*100);
    myprogressBar.value=progress;
   
})
myprogressBar.addEventListener('change',(e)=>{
    myprogressBar.value=e.target.value;
    audioPlay.currentTime= myprogressBar.value *audioPlay.duration/100;
    

})

let stopPlays=()=>{
    menuPlay.forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
        gif.style.opacity=0;



    })
}

let makePlays=()=>{
    menuPlay.forEach((element)=>{
      element.classList.remove('fa-pause')
      element.classList.add('fa-play')
    })
}





menuPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioPlay.paused){
            makePlays();
            songIndex= parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioPlay.src = `./songs/${songIndex+1}.mp3`;
            audioPlay.currentTime=0;
            audioPlay.play();
            masterPlay.classList.add("fa-pause-circle");
            masterPlay.classList.remove("fa-play-circle");
            currSongName.innerText=songs[songIndex].songName;
            gif.style.opacity=1;
        
        }
        else{
            stopPlays();
            audioPlay.pause();
            e.target.classList.add('fa-play');
            e.target.classList.remove('fa-pause');
            masterPlay.classList.add("fa-play-circle");
            masterPlay.classList.remove("fa-pause-circle");
            gif.style.opacity=0;


        }
   

})

})



forwBtn.addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioPlay.src = `./songs/${songIndex+1}.mp3`;
    audioPlay.currentTime=0;
    audioPlay.play();
    currSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    gif.style.opacity=1;


})



prevBtn.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioPlay.src = `./songs/${songIndex+1}.mp3`;
    audioPlay.currentTime=0;
    audioPlay.play();
    currSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    gif.style.opacity=1;


})