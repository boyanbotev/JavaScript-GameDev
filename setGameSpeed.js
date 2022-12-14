import {updateBackgroundSpeed} from "./animateBackgrounds.js";
import {updatePlayerSpeed} from "./animatePlayer.js";

export function setGameSpeed(gameSpeed){
    // Get UI elements
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;

    // Set initial values
    updateBackgroundSpeed(gameSpeed);
    updatePlayerSpeed(gameSpeed);

    // Get speed from UI
    slider.addEventListener('change', function(event){
        // Update Animation background's speed
        updateBackgroundSpeed(event.target.value);
        showGameSpeed.innerHTML = event.target.value;
        // Update player's speed
        updatePlayerSpeed(event.target.value);
    });
}
