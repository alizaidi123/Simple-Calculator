import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Please Enter The First Number",
    },
    {
        type: "number",
        name: "num2",
        message: "Please Enter The Second Number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Mult", "Div"],
        message: "Please Select The Operator",
    }
]);
const { num1, num2, operator } = answer;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "Add") {
        result = num1 + num2;
    }
    else if (operator === "Sub") {
        result = num1 - num2;
    }
    else if (operator === "Mult") {
        result = num1 * num2;
    }
    else if (operator === "Div") {
        result = num1 / num2;
    }
    console.log(" Your Result is ", result);
}
else {
    console.log("Please Enter The Valid Input");
}
