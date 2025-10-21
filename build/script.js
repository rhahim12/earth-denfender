import { Game } from "./Classes/Games.js";
var game = new Game();
var gameName = "EarthDefender";
console.log(gameName);
window.onload = main;
function main() {
    var CANVAS_WIDTH = 900;
    var CANVAS_HEIGHT = 500;
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    context.fillStyle = "#141414"; // HexaDecimal Gris foncé
    context.fillRect(0, 0, // [x,y] supérieur gauche
    CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
    );
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var direction = 0;
    var GameObject = /** @class */ (function () {
        function GameObject(image, position) {
            this.image = image;
            this.position = position;
        }
        return GameObject;
    }());
    ;
    var nbAliens = 10;
    var alienImage = document.querySelector("img.alien");
    var aliens = [];
    for (var i = 0; i < nbAliens; i++) {
        aliens.push(new GameObject(alienImage, { x: 0, y: 0 }));
    }
    // Je récupère une image qui à pour classe alien
    // querySelector renvoie un Objet de la classe HTMLElement
    // Je précise HTMLImageElement en tant que type de la variable image 
    // pour transtyper la classe HTMLElement en un classe fille HTMLImageElement
    var image = document.querySelector("img.alien");
    var position = {
        x: 0,
        y: 0
    };
    // J'attend que toutes les images soit chargées
    // Je l'affiche
    context.drawImage(image, position.x, position.y, image.width, image.height);
    var star = document.querySelector("img.star");
    var starposition = {
        x: 100,
        y: 100
    };
    setInterval(function () {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.fillStyle = '#141414';
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //    for(const alien of aliens){
        // context.drawImage(
        // alien.image,
        // alien.position.x,  
        // alien.position.y,
        // alien.image.width,
        // alien.image.height
        // );
        // 
        // 
        // }
        for (var i = 0; i < nbAliens; i++) {
            aliens.push(new GameObject(alienImage, {
                x: Math.random() * 800,
                y: 0
            }));
        }
        context.drawImage(image, position.x, position.y, image.width, image.height);
        // position.y += 1;
        context.drawImage(player, playerPos.x, playerPos.y, player.width, player.height);
        playerPos.x += 10 * direction; // le joueur va à droite)
        context.drawImage(star, starposition.x, starposition.y, star.width, star.height);
        // starposition.x += 10 * direction
    }, 10);
    var player = document.querySelector("img.player");
    var playerPos = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT - 100
    };
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            // Go right
            case "d":
            case "D":
                direction = 1;
                break;
            // Go left
            case "q":
            case "Q":
                direction = -1;
                break;
            default:
                break;
        }
    });
    // Key Released
    document.addEventListener("keyup", function (event) {
        switch (event.key) {
            // Player Stops
            case "d":
            case "D":
            case "q":
            case "Q":
                direction = 0;
                break;
            // 
            default:
                break;
        }
    });
}
