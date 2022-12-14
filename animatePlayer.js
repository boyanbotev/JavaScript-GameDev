let playerState = 'run';
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
let staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
   {
    name: 'idle',
    frames: 7,
   },
   {
    name: 'jump',
    frames: 7,
   },
   {
    name: 'fall',
    frames: 7,
   },
   {
    name: 'run',
    frames: 9,
   },
   {
    name: 'dizzy',
    frames: 11,
   },
   {
    name: 'sit',
    frames: 5,
   },
   {
    name: 'roll',
    frames: 7,
   },
   {
    name: 'bite',
    frames: 7,
   },
   {
    name: 'ko',
    frames: 12,
   },
   {
    name: 'getHit',
    frames: 4,
   },
];

// For each animation state, get location for each frame
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        addFrameLocation(j, index, frames);
    }
    // Add locations to spriteAnimations
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function addFrameLocation(j, index, frames) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
}

export function animate(){
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 200, 325, 
        spriteWidth/2, spriteHeight/2);

    gameFrame++;
    requestAnimationFrame(animate);
    console.log("Animate player");
}

export function updatePlayerSpeed(sf){
    let modifier = 17;
    staggerFrames = modifier/sf;
}