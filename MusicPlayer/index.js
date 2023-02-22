// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");


// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Night Owl",
	artist: "Broke For Free",
	image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fluentu.com%2Fblog%2Fenglish%2Flearn-english-with-songs-3%2F&psig=AOvVaw32HuU_joTC-PG21S_GqP9M&ust=1676385232872000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiAzOPbkv0CFQAAAAAdAAAAABAE",
	path: "./songs/iphone-ringtone-trap-remix-41954-59298.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungama.com%2Falbum%2Fdespacito%2F23625287%2F&psig=AOvVaw1kb9tN3Oeq3lTRysk0SlaP&ust=1676385305884000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiv5Ybckv0CFQAAAAAdAAAAABAE",
	path: "./songs/jawan-srk-hindi-59282-59305.mp3"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungama.com%2Fsong%2Fsola-english-version%2F46424375%2F&psig=AOvVaw1kb9tN3Oeq3lTRysk0SlaP&ust=1676385305884000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiv5Ybckv0CFQAAAAAdAAAAABAR",
	path: "./songs/old-is-gold-song-status-90s-song-status-whatsappstatus-90ssongs-128k-59297-59306.mp3",
},
];



function loadTrack(track_index){
    clearInterval(updateTimer)
    resetValues();

    curr_track.src=track_list[track_index].path
    curr_track.load()

    track_art.style.backgroundImage=`url(${track_list[track_index].image})`
    track_name.innerText=track_list[track_index].name
    track_artist.innerText=track_list[track_index].artist
    now_playing.textContent =`Playing ${track_index+1} of ${track_list.length}`

     
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

   // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);


  function randomcolor(){
    let colors=["green","pink","yellow"]
    let randomnumber=Math.floor(Math.random()*colors.length)
    document.body.style.background = colors[randomnumber];
  }
}

function resetValues(){
    curr_time.innerText="00:00"
    total_duration.innerText="00:00"
    seek_slider.value=0;
}


function playpauseTrack(){
    if(!isPlaying){
        playTrack();
    }else{
        pauseTrack();
    }
}

function playTrack(){
    curr_track.play()
    isPlaying=true;
    playpause_btn.innerHTML=`<i class="fa fa-pause-circle fa-5x"></i>`
}
function pauseTrack(){
    curr_track.pause()
    isPlaying=false;
    playpause_btn.innerHTML=`<i class="fa fa-play-circle fa-5x"></i>`
}

function nextTrack() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
      track_index += 1;
    else track_index = 0;
   
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
  }

  function prevTrack(){
    if(track_index>0){
        track_index -= 1;
    }else{
        track_index=track_list.length-1
    }

    loadTrack(track_index);
    playTrack();
  }

  
function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
   let  seekto = curr_track.duration * (seek_slider.value / 100);
    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
  }

  function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
  }



loadTrack(track_index);