const videos = [
    "Videos/clip_1.mp4",
    "Videos/clip_2.mp4",
    "Videos/clip_3.mp4",
    "Videos/clip_4.mp4",
    "Videos/clip_5.mp4"
]
var i = 0;
var next = 1;
var prev = videos.length-1;
var backVideo = document.getElementById("back-video");
var video = document.getElementById("forward-video");

video.preload = "auto";

video.addEventListener("ended", onEnd, false);
video.setAttribute("src", videos[i]);
backVideo.setAttribute("src", videos[next]);
video.load();
backVideo.load();
switchVideo();
// setInterval(updateTimestamp, 200);

function backwards() { 
    document.getElementById("black-fade").classList.toggle("transition");
    setTimeout(() => {
        setIndexes(true);
        switchVideo();
        setTimeout(() => {
            document.getElementById("black-fade").classList.toggle("transition");
        }, 100);
    }, 500);
}
function forwards() { 
    document.getElementById("video-buttons").style.visibility = "hidden";
    
    video.play();
}
function updateTimestamp() { //function for debug values
    document.getElementById("videoTime").innerHTML = "video time = " + video.currentTime;
    document.getElementById("prevIndex").innerHTML = "prev index = " + prev;
    document.getElementById("currentIndex").innerHTML = "current index = " + i;
    document.getElementById("nextIndex").innerHTML = "next index = " + next;
}
function setIndexes(doBackwards){
    i += (doBackwards) ? -1 : 1; //decrement or increment i if backwards or not respectively
    i = (i >= videos.length) ? 0 : (i <= -1) ? videos.length-1 : i; //if i is above videos array length, return to start
    next = (i+1 >= videos.length) ? 0 : i+1; // if i+1 is above videos array length, return to start. else next = i+1
    prev = (i-1 <= -1) ? videos.length-1 : i-1 //same as above but in negative direction
}

function onEnd(){
    document.getElementById("video-buttons").style.visibility = "visible";
    setIndexes(false);
    switchVideo();
}

function switchVideo(){
    video.setAttribute("src", videos[i]);
    video.load();
    setTimeout(() => {
        backVideo.setAttribute("src", videos[next]);
        backVideo.load();
    }, 100);
}


// onmousedown = function(e){
//     var viewportW = document.getElementById("video-container").offsetWidth;
//     var viewportH = document.getElementById("video-container").offsetHeight;
//     var calcWidth = (e.clientX / viewportW) * 100
//     var calcHeight = Math.min(((e.clientY / viewportH) / (9/16)) * (100 * (9/16)), 100)
//     console.log("left: " + calcWidth + "vw;", "top: " + calcHeight + "%;")
//     var container = this.document.getElementById("info-container")
//     container.style.left = calcWidth + "vw"
//     container.style.top = calcHeight + "%"
// }