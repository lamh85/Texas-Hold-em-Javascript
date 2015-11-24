var displayNumber = function(strength) {
    return ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"][strength - 1];
}

var displaySuit = function(strength) {
    return ["diamonds", "clubs", "hearts", "spades"][strength - 1];
}

var deck = [];

var Card = function(numberStrength, suitStrength) {
    this.suitStrength   = suitStrength;
    this.numberStrength = numberStrength;
    this.display        = {
                        number:     displayNumber(numberStrength),
                        suit:       displaySuit(suitStrength),
                        full:       displayNumber(numberStrength) +" of "+ displaySuit(suitStrength)
    }
}

for (numIndex = 1; numIndex <= 13; numIndex++) {
    for (suitIndex = 1; suitIndex <= 4; suitIndex++) {
        deck.push(
            new Card(numIndex, suitIndex)
        )
    }
}