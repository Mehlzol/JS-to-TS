const words = ["Ephiphany", "Vivacious", "Incandescent", "Quintessence", "Zenith"];

const moreThanFiveLetters = words.filter((word) => {
    return word.length > 5; 
});

console.log(moreThanFiveLetters);