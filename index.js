require("dotenv").config();
// Make an import of the contacts.js module in the index.js file and check the functionality of the functions for working with contacts.
const argv = require("yargs").argv; 
const { listContacts, getContactById, addContact, removeContact } = require("./contacts");

// TODO: refactor 
function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list" :
            listContacts();
            break;

        case "get" :
            getContactById(id); 
            break;
        
        case "add" :
            addContact(name, email, phone); 
            break;

        case "remove" :
            removeContact(id); 
            break; 

        default: 
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);

// Code Practice 

// const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
// const target1 = 8;
// const target2 = 38; 
// const target3 = 35; 
// const target4 = 2;


// // function binanrySearch(arr, target) {
// //     const index = arr.indexOf(target)
// //     if (index !== -1) {
// //         console.log(target, "number is present in the array");
// //         return index
// //     } else {
// //         console.log(target, "number is not present")
// //         return -1
// //     }

// // }

// function binanrySearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             console.log(i);
//             return i;
//         } 
        
//         return -1
//     }

// }

// binanrySearch(sortedArray, target1);
// binanrySearch(sortedArray, target2);
// binanrySearch(sortedArray, target3);


/* LESSON 1 NOTES */ 
// fs.readFile(contactsPath).then(data => { //placement of file matters
//     console.log(data.toString());
// })

// fs.writeFile(contactsPath, "hello everybody").then(() => {
//     console.log('file written');
// })

// global.name = "Donnahue";
// global.hello = "Hey";

// console.log(global.name);
// the process keyword = has all the processes that run in your computer
// console.log(process);
// console.log(process.env.APIKEY) //to get your keys in env file
// console.log(process.argv[2]); //arguments variables = reading all the different arguments that you are passing in the command line

// if(process.argv[2] > 17) {
//     console.log("You are allowed");
// } else {
//     console.log("You are not allowed");
// } 


// all functions should realistically be in one file
// you only want to export functions

// when using env, make sure to install dotenv (npm install dotenv)
