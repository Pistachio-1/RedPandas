jest.autoMockOff();  

const GETMATCH = require("./app.js");
console.log(GETMATCH);

// the following piece of code will handled "unhandledRejection" events
// which can occur when we use jest for testing. The events don't stop the 
// tests from completing successfully but they leave nasty warnings in the test code.
process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
});

describe("getMatch", () => {
    let results = "";
    function callback(results) {
        console.log(results);
    };

    it("calls getMatch with ALLMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLMATCHES, null, callback(results))).toBeDefined();
    });

    it("calls getMatch with CURRENTMATCHES parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.CURRENTMATCHES, null, callback(results))).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES and fifa_code parameter",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, "RUS", callback(results))).toBeDefined();
    });

    it("calls getMatch with COUNTRYMATCHES",() => {
        expect(GETMATCH.getMatch(GETMATCH.COUNTRYMATCHES, null, callback(results))).toThrowError();
    });

    it("calls getMatch with TODAYMATCHES",() => {
        expect(GETMATCH.getMatch(GETMATCH.TODAYMATCHES, null, callback(results))).toBeDefined();
    });

    it("calls getMatch with ALLRESULTS",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLRESULTS, null, callback(results))).toBeDefined();
    });

    it("calls getMatch with RESULTSBYGROUP",() => {
        expect(GETMATCH.getMatch(GETMATCH.RESULTSBYGROUP, null, callback(results))).toBeDefined();
    });

    it("calls getMatch with ALLTEAMS",() => {
        expect(GETMATCH.getMatch(GETMATCH.ALLTEAMS, null, callback(results))).toBeDefined();
    });

    it("calls getMatch with invalid match type", () => {
        expect(GETMATCH.getMatch("invalid", null, callback(results))).toThrowError();
    });

    it("calls getMatch with null type", () => {
        expect(GETMATCH.getMatch(null, null, callback(results))).toThrowError();
    });
});
