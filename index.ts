#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from  "chalk";

console.log(chalk.bold.italic.bgGreenBright("\n \t\t M_Huaifa - Word Counter"));
console.log("=".repeat(60)); 

let answers: {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: " Enter your sentence to count the word: "
        }
    ]
)

const words = answers.Sentence.trim().split(" ")

console.log(words)

console.log(`Your sentence word count is ${words.length}`);
