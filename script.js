var displayNumbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var displaySuits = ["diamonds", "clubs", "hearts", "spades"];

var deck = [];

var Card = function(numberStrength, suitStrength) {
    this.suitStrength = suitStrength;
    this.numberStrength = numberStrength;
    this.display = {
        number: displayNumbers[numberStrength - 1],
        suit: displaySuits[suitStrength - 1],
        full: displayNumbers[numberStrength - 1] +" of "+ displaySuits[suitStrength - 1]
    }
}

for (numIndex = 1; numIndex <= 13; numIndex++) {
    for (suitIndex = 1; suitIndex <= 4; suitIndex++) {
        deck.push(
            new Card(numIndex, suitIndex)
        )
    }
}