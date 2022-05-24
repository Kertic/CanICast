let CardQuery = require("../Scryfall/CardQuery");
module.exports = class Deck {
    cards = [];

    constructor(deckString) {
        return (async () => {
            let cardList = deckString.split("\n");
            let foundCards = [];
            for (const currentCard in cardList) {
                let lineSplit = cardList[currentCard].split(" ");
                let cleanCardQuantity = parseInt(lineSplit[0].replaceAll("x", "").replaceAll("X", ""));
                let cardName = lineSplit[1];
                let cardData = await CardQuery.GetExact(cardName);
                for (let i = 0; i < cleanCardQuantity; i++) {
                    foundCards.push(cardData.data);
                }
            }
            this.cards = foundCards;
            return this;
        })();
    }

    GetUniqueCards() {
        let uniqueCards = [];
        for (const card in this.cards) {
            let cardName = this.cards[card].name;
            if (!uniqueCards.some(value => value.name === cardName)) {
                uniqueCards.push(this.cards[card]);
            }
        }
        return uniqueCards;
    }
}