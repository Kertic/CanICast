const CardQuery = require("./Scryfall/CardQuery");
const Deck = require("./GameSimulator/Deck");
const fs = require('fs');


// main but async
(async () => {
    console.log("Hello Hyper");
    let testmsg = "now its hello";
    let res = await CardQuery.GetExact("Island");
    let newDeck = await new Deck(fs.readFileSync('./test_files/bolt.txt', 'utf8'));
    console.log(newDeck.GetUniqueCards());
})();

