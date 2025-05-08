function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖", "❤️", "💘", "💕"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.querySelector(".heart-rain").appendChild(heart);
  
    setTimeout(() => heart.remove(), 5000);
  }
  
  setInterval(createHeart, 300);
  

  // Auto-play song on first user interaction
window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("song.mp3");
  audio.loop = true;

  const playAudio = () => {
    audio.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
    document.removeEventListener("click", playAudio);
  };

  document.addEventListener("click", playAudio);
});
