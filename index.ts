#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

class Player{
    name : string;
    fuel : number;

    constructor(name : string){
        this.name = name;
        this.fuel = 100;
    }

    fuelDecrease(){
        let fuel = this.fuel -25;
        this.fuel = fuel;

    }

    fuelIncrease(){
        this.fuel = 100;
    }
}

class Opponent{
    name : string;
    fuel : number;

    constructor(name : string){
        this.name = name;
        this.fuel = 100;
    }

    fuelDecrease(){
        let fuel = this.fuel -25;
        this.fuel = fuel;

    }

}

let playerName = await inquirer.prompt(
    {
        name: "name",
        type: "input",
        message: "Enter your name:"
    }
)

let opponentName = await inquirer.prompt(
    {
        name: "select",
        type: "list",
        message: "Select your opponent:",
        choices: ["Zombie", "Assasssin", "Skeleton", "Warrior"],
    }
);

let player1 = new Player(playerName.name);
let opponent1 = new Opponent(opponentName.select);

do {
    let opt = await inquirer.prompt(
        {
            name : "options",
            type: "list",
            message: "Select one of the options:",
            choices: ["Attack", "Drink Potion", "Run"]
        }
    )

    if(opponentName.select === "Zombie"){

        if(opt.options === "Attack"){
            let num = Math.floor(Math.random() * 2);
                if(num > 0){
                    player1.fuelDecrease();
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                }

                    if(player1.fuel <= 0){
                        console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
                        process.exit();
                    }

                if(num <= 0){
                    opponent1.fuelDecrease();
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                }
                    if(opponent1.fuel <= 0){
                        console.log(chalk.bold.blue.italic(`Congratulations!! You Won the game!`));
                        process.exit();
                    }
                }


        else if(opt.options === "Drink Potion"){
            player1.fuelIncrease();
            console.log(chalk.bgWhite(chalk.bold.red(`You had healthy potion and your fuel is ${player1.fuel}`)));

        }
        else if(opt.options === "Run"){
            console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
            process.exit();
        }
    }
            
        

    if(opponentName.select === "Assasssin"){
        if(opt.options === "Attack"){
            let num = Math.floor(Math.random() * 2);
                if(num > 0){
                    player1.fuelDecrease();
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                }
                    if(player1.fuel <= 0){
                        console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
                        process.exit();
                    }
                
                if(num <= 0){
                    opponent1.fuelDecrease();
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                }
                    
                if(opponent1.fuel <= 0){
                        console.log(chalk.bold.blue.italic(`Congratulations!! You Won the game!`));
                        process.exit();
                    }
                }
            
                
        else if(opt.options === "Drink Potion"){
            player1.fuelIncrease();
            console.log(chalk.bgWhite(chalk.bold.red(`You had healthy potion and your fuel is ${player1.fuel}`)));
        
        }
        else if(opt.options === "Run"){
            console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
            process.exit();
        }
            
         }
    
    
    if(opponentName.select === "Skeleton"){
        if(opt.options === "Attack"){
            let num = Math.floor(Math.random() * 2);
                if(num > 0){
                    player1.fuelDecrease();
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                }
                    if(player1.fuel <= 0){
                        console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
                        process.exit();
                    }
                
                if(num <= 0){
                    opponent1.fuelDecrease();
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                }
                    if(opponent1.fuel <= 0){
                        console.log(chalk.bold.blue.italic(`Congratulations!! You Won the game!`));
                        process.exit();
                    }
                }
            
                
        else if(opt.options === "Drink Potion"){
            player1.fuelIncrease();
            console.log(chalk.bgWhite(chalk.bold.red(`You had healthy potion and your fuel is ${player1.fuel}`)));
        
        }
        else if(opt.options === "Run"){
            console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
            process.exit();
        }
            
    }
        
    
    
    if(opponentName.select === "Warrior"){
        if(opt.options === "Attack"){
            let num = Math.floor(Math.random() * 2);
                if(num > 0){
                    player1.fuelDecrease();
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                }
                    if(player1.fuel <= 0){
                        console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
                        process.exit();
                    }
                
                if(num <= 0){
                    opponent1.fuelDecrease();
                    console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                    console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
                }
                    if(opponent1.fuel <= 0){
                        console.log(chalk.bold.blue.italic(`Congratulations!! You Won the game!`));
                        process.exit();
                    }
    
                }
        else if(opt.options === "Drink Potion"){
            player1.fuelIncrease();
            console.log(chalk.bgWhite(chalk.bold.red(`You had healthy potion and your fuel is ${player1.fuel}`)));
        
        }
        else if(opt.options === "Run"){
            console.log(chalk.bgRed(chalk.bold.white.italic(`You lost the game. Better luck next time!`)));
            process.exit();
        }
    }
}

while(true);