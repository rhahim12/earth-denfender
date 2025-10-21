import { Game } from "./Classes/Games.js";

const game = new Game();
let gameName: string = "EarthDefender";
console.log(gameName);

window.onload = main;
function main() {
    
    const CANVAS_WIDTH = 900;
    const CANVAS_HEIGHT = 500;

    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    context.fillStyle = "#141414"  // HexaDecimal Gris foncé
    context.fillRect(
        0, 0,            // [x,y] supérieur gauche
        CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
    );

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


    type Direction = 1 | 0 | -1;

    let direction: Direction = 0;

    
    
    
    
    

    class GameObject {
        image: HTMLImageElement;
        position: Position;
        constructor(image: HTMLImageElement, position: Position) {
            this.image = image;
            this.position = position;
        }
    }
    interface Position {
        x: number,
        y: number

    };


    const nbAliens: number = 10;
    const alienImage: HTMLImageElement = document.querySelector("img.alien");

    const aliens: GameObject[] = [];

    for (let i = 0; i < nbAliens; i++) {
        aliens.push(new GameObject(alienImage, { x: 0, y: 0 }));
    }







    // Je récupère une image qui à pour classe alien
    // querySelector renvoie un Objet de la classe HTMLElement
    // Je précise HTMLImageElement en tant que type de la variable image 
    // pour transtyper la classe HTMLElement en un classe fille HTMLImageElement
    const image: HTMLImageElement = document.querySelector("img.alien");

    let position = {
        x: 0,
        y: 0
    };

    // J'attend que toutes les images soit chargées







    // Je l'affiche
    context.drawImage(
        image,
        position.x,
        position.y,
        image.width,
        image.height
    );



    const star: HTMLImageElement = document.querySelector("img.star");


    let starposition = {
        x: 100,
        y: 100
    }







    setInterval(() => {
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
        for (let i = 0; i < nbAliens; i++) {
            aliens.push(new GameObject(
                alienImage,
                {
                    x: Math.random() * 800,
                    y: 0
                }
            ));
        }

        context.drawImage(
            image,
            position.x,
            position.y,
            image.width,
            image.height


        );
        // position.y += 1;

        context.drawImage(
            player,
            playerPos.x,
            playerPos.y,
            player.width,
            player.height

        )
        playerPos.x += 10 * direction;      // le joueur va à droite)

        context.drawImage(
            star,
            starposition.x,
            starposition.y,
            star.width,
            star.height

        )
        // starposition.x += 10 * direction
    }, 10);

    const player: HTMLImageElement = document.querySelector("img.player");

    const playerPos = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT - 100
    };
    document.addEventListener("keydown", (event) => {
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
    document.addEventListener("keyup", (event) => {
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