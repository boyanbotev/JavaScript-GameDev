import {animate} from "./animatePlayer.js";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 5;

// Get background images
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

window.addEventListener('load', function(){
    // Get UI elements
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', function(event){
        gameSpeed = event.target.value;
        showGameSpeed.innerHTML = gameSpeed;
    });

    // Reusable layer class
    class Layer {
        constructor(image, speedModifier){
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }

        update(){
            // Set speed to modified speed
            this.speed = gameSpeed * this.speedModifier;
            // Reset x positiuon of layers
            if (this.x <= -this.width){
                this.x = 0;
            }
            // Increment x position to the left
            this.x = Math.floor(this.x - this.speed);
        }

        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    // Initialize layers
    const layer1 = new Layer(backgroundLayer1, 0.075);
    const layer2 = new Layer(backgroundLayer2, 0.15);
    const layer3 = new Layer(backgroundLayer3, 0.3);
    const layer4 = new Layer(backgroundLayer4, 0.6);
    const layer5 = new Layer(backgroundLayer5, 1);

    // Declare layer array
    const layers = [layer1, layer2, layer3, layer4, layer5];

    function animateBackgrounds(){
        // Clear Rect
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Update each layer
        layers.forEach(layer => {
            layer.update();
            layer.draw();
        });

        // Trigger next frame
        requestAnimationFrame(animateBackgrounds);
    }
    animateBackgrounds();
    animate();
});

// Find commonalities between code an refactor

