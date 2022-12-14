import {animate} from "./animatePlayer.js";
import {animateBackgrounds} from "./animateBackgrounds.js";
import {setGameSpeed} from "./setGameSpeed.js";

let gameSpeed = 8;

window.addEventListener('load', function(){
    setGameSpeed(gameSpeed);
    animateBackgrounds();
    animate();
});