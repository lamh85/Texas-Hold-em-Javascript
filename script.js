var displayNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var displaySuits = ["diamonds", "clubs", "hearts", "spades"];

var Card = function(numberStrength, suitStrength) {
    this.suitStrength = suiteStrength;
    this.numberStrength = numberStrength;
    this.display = {
        this.suit = displaySuits[suiteStrength - 1];
        this.number = displayNumbers[numberStrength - 1];
    }
}