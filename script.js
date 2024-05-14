const checkEven = function(number){
    if (number % 2 === 0) {
        console.log("even number")
    } else {
        console.log("odd number")
    }
}

const checkEvenArrow = number => {
    if (number % 2 === 0) {
        console.log("even number")
    } else {
        console.log("odd number")
    }
}
checkEven(2);
checkEvenArrow(3)