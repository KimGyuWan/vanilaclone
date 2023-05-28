const images = ["pexels1.jpeg", "pexels2.jpeg", "pexels3.jpeg", "pexels4.jpeg", "pexels5.jpeg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);