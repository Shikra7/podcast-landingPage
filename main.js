const audio = document.querySelector("audio");

audio.addEventListener("play", () => {
  console.log("Audio started playing");
});

audio.addEventListener("pause", () => {
  console.log("Audio paused");
});

audio.addEventListener("ended", () => {
  console.log("Audio ended");
});
