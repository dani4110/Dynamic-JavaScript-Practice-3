const user = {
    "age": 27
};

if (user.age >= 18) { console.log("you are of legal age"); }
else {
    console.log("you are not of legal age");
}

let action = "update";

switch (action) {
    case "create":
        console.log("the action of creating will be carried out")

        break;
    case "place":
        console.log("the action of placing will be carried out")

        break;
    case "update":
        console.log("the action of updating will be carried out")

        break;
    case "delete":
        console.log("the action of deleting will be carried out")

        break;

    default:
        console.log("no action was found to execute");

}

let number = 3;

let evennumber = (number % 2) === 0 ? "it's an even number" : "it's not an even number";

console.log(evennumber);



