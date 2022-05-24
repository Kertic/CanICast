const axios = require("axios");

module.exports = class CardQuery {
    static GetExact(cardName) {
        let result = this.MakeRequest('https://api.scryfall.com/cards/named/?exact=', cardName);
        console.log("Exact card found: " + cardName);
        return result;
    }

    static MakeRequest(url, name) {
        let response = async () => {
            return await axios.get(url + name);
        };
        return (async () => {
            return await response();
        })();
    }


}
