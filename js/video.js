// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	console.log("Autoplay is set to" + video.autoplay)
	video.loop = false
	console.log("Loop is set to " +video.loop)

});
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video");
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9
	console.log("speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9
	console.log("Speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
	console.log("Current time is " + video.currentTime);
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("current time is " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("unmute")
		video.muted = false
		this.innerHTML = "Mute"
    }
	else{
		console.log("mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});
document.querySelector("#slider").addEventListener("change", function (){
	console.log("Current value is", video.volume)
	video.volume = this.value/100
	console.log("Current value is", video.volume)
	console.log("Current value is", video.volume)
	console.log(document.querySelector("#volume"))
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function (){
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function (){
	video.classList.remove("oldSchool")
});





