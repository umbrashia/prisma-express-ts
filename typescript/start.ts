import Inquirer from "inquirer";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// var jj=inquirer
console.log("-------Welcome to user management tool-------");


Inquirer
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
    ])
    .then(async (answers:any) => {
        if(answers.userChoice==="New Entry"){
            await prisma.user.create({data:{
                email:"shantan34@outlook.com",
                name:"shantanu sharma"
            }});
            
            console.log("saved..");
        }else{
            console.log(await prisma.user.findFirst({where:{email:answers.email}}));
        }
    });

