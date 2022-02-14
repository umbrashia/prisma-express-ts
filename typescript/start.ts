import Inquirer from "inquirer";
import colors from "colors";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// var jj=inquirer
console.log(colors.cyan("--------Welcome to user management tool--------".trimEnd()));

(async () => {
    while (true) {
        const answers = await Inquirer
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
            (data) ? console.log(("user found : "), data) : console.log(("no user found..."));

        }
    }
})();

