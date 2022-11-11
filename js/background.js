const arrayImg = [
  "glacier.jpg",
  "mountains.jpg",
  "valais.jpg",
  "building.jpg",
  "Louvre.jpg",
];

const chosenImg = arrayImg[Math.floor(Math.random() * arrayImg.length)];

const pushBgImg = document.createElement("img");

pushBgImg.src = `img/${chosenImg}`;

document.body.appendChild(pushBgImg);
