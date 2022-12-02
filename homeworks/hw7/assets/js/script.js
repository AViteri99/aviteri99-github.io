function averageThreeNumbers(a,b,c) {
    let sum = a+b+c;
    let average = (a+b+c) / 3;
    let round = average.toFixed(1);
    return round;
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + " " + noun + "s.";
}
function getRandomNum(max) {
    return Math.floor(Math.random() * (max -0));
}
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x,y,z);
let sentence = createSentence(avg, "penguin")

console.log(sentence);