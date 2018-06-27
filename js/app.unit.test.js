jest.autoMockOff();  

const GETMATCH = require("./app.js");
console.log(GETMATCH);

describe("getMatch", () => {
    let callBack = function(results) {
        console.log(results);
    };

    it("calls getMatch with ALLMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLMATCHES, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with CURRENTMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.CURRENTMATCHES, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES and fifa_code parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, "RUS", this.callback)).toBeDefined();
    });

    // it("calls getMatch with COUNTRYMATCHES",() => {
    //     expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, null, this.callback)).toThrowError();
    // });

    it("calls getMatch with TODAYMATCHES",() => {
        expect(GETMATCH.getMatch(GETMATCH.TODAYMATCHES, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with ALLRESULTS",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLRESULTS, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with RESULTSBYGROUP",() => {
        expect(GETMATCH.getMatch(GETMATCH.RESULTSBYGROUP, null, this.callback)).toBeDefined();
    });

    it("calls getMatch with ALLTEAMS",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLTEAMS, null, this.callback)).toBeDefined();
    });
});
