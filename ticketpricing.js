const age = prompt("Please enter your age: ");

if (age <= 12){
    console.log("Children will pay $10 ")
}
else if (age >= 13 && age <= 17){
    console.log("Teenagers will pay $15 ")
}
else{
    console.log("Adults will pay $20 ")
}