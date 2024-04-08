#!/urs/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; //$Doller
let myPinCode = 1122;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Code ",
        type: "number",
    },
]);
if (pinAnswer.pin === myPinCode) {
    console.log(`Correct pin code!!!`);
    console.log(`Your Current Balanec Is: ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw Amount", "Check Blance", "Fast Cash"],
        },
    ]);
    // console.log(operationAns);
    if (operationAns.operation === "Withdraw Amount") {
        let amoutAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        myBalance -= amoutAns.amount;
        console.log(`Your Remaining Balanec Is: ${myBalance}`);
        if (operationAns.operation > myBalance) {
            console.log(`insufficient Balance`);
        }
    }
    if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select Amount: ",
                choices: [1000, 2000, 5000, 10000, 20000],
            },
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log(`Your Remaining Balanec Is: ${myBalance}`);
    }
    // }
    else if (operationAns.operation === "Check Blance") {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
}
else {
    console.log(`Incorrect pin Numer!`);
}
