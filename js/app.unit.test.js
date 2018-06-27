const GETMATCH = require("./app.js");
console.log(GETMATCH);

let callBack = function(results) {
    return results;
}

describe("getMatch", () => {
    it("calls getMatch with ALLMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLMATCHES, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with CURRENTMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.CURRENTMATCHES, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES and fifa_code parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, "RUS", this.callback)).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES and no fifa_code parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, null, this.callback)).toBeDefined();
    });
});
