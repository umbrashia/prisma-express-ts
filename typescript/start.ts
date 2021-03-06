import Inquirer from "inquirer";
import colors from "colors";
import { PrismaClient } from '@prisma/client'
import inquirer from "inquirer";
const prisma = new PrismaClient();
// var jj=inquirer


(async () => {
    while (true) {
        console.log(colors.cyan("\n--------Welcome to user management tool--------\n"));
        let answers = await Inquirer
            .prompt([
                {
                    name: "userChoice",
                    type: "list",
                    message: "select your choice ?",
                    choices: ["New Entry", "Find One"]
                },
                {
                    name: 'name',
                    type: "input",
                    message: 'What is user full name : '
                }, {
                    name: 'email',
                    type: "input",
                    message: 'What is user email : '
                },
            ]);
        if (answers.userChoice === "New Entry") {
            let response = await prisma.user.create({
                data: {
                    email: answers.email,
                    name: answers.name
                }
            });

            console.log(("saved.."), response);
        } else {
            const data = await prisma.user.findFirst({ where: { email: answers.email } });
            (data) ? console.log(colors.bgGreen("user found : "), data) : console.log(colors.bgRed("no user found..."));

        }
        answers = await inquirer.prompt([{ name: "reInput", type: "confirm", message: "Do you want exit" }]);
        if (answers.reInput)
            break;
    }
})();

