jest.autoMockOff();  

const GETMATCH = require("./getmatch");
console.log(GETMATCH);

// the following piece of code will handled "unhandledRejection" events
// which can occur when we use jest for testing. The events don't stop the 
// tests from completing successfully but they leave nasty warnings in the test code.
process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection:', error.message);
});

let results = "";
function callback(results) {
    console.log(JSON.stringify(results).slice(0,100));
};

describe("getMatch", () => {


    it("calls getMatch with ALLMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLMATCHES, null, callback)).toBeDefined();
    });

    it("calls getMatch with CURRENTMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.CURRENTMATCHES, null, callback)).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES and fifa_code parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, "KOR", callback)).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, null, callback)).
        toThrowError("a country match must have a fifa code");
    });

    it("calls getMatch with TODAYMATCHES",() => {
        expect(GETMATCH.getMatch(GETMATCH.TODAYMATCHES, null, callback)).toBeDefined();
    });

    it("calls getMatch with ALLRESULTS",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLRESULTS, null, callback)).toBeDefined();
    });

    it("calls getMatch with RESULTSBYGROUP",() => {
        expect(GETMATCH.getMatch(GETMATCH.RESULTSBYGROUP, null, callback)).toBeDefined();
    });

    it("calls getMatch with ALLTEAMS",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLTEAMS, null, callback)).toBeDefined();
    });

    it("calls getMatch with invalid match type", () => {
        expect(GETMATCH.getMatch("invalid", null, callback)).
        toThrowError("invalid match type: invalid");
    });

    it("calls getMatch with null type", () => {
        expect(GETMATCH.getMatch(null, null, callback)).
        toThrowError("matchtype is undefined or null");
    });
});
