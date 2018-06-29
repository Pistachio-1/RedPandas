const WORLDCUPURL = "https://worldcup.sfg.io/";
const ALLMATCHES = "/matches";
const CURRENTMATCHES = "/matches/current";
const COUNTRYMATCHES = "/matches/country?fifa_code=";
const TODAYMATCHES = "/matches/today";
const ALLRESULTS = "/teams/results";
const RESULTSBYGROUP = "/teams/group_results";
const ALLTEAMS = "/teams/";
const TOMORROWMATCHES = "/matches/tomorrow";

async function getMatch(matchtype, fifa_code) {
    let qstring = WORLDCUPURL;
    switch (matchtype) {
        case null:
        case undefined:
            const no_matchtype_err = "matchtype is undefined or null";
            throw new Error(no_matchtype_err);
        case ALLMATCHES:
        case CURRENTMATCHES:
        case TODAYMATCHES:
        case ALLRESULTS:
        case RESULTSBYGROUP:
        case ALLTEAMS:
        case TOMORROWMATCHES:
            // these are ok
            qstring = qstring.concat(matchtype)
            break;
        case COUNTRYMATCHES:
            if (fifa_code === null) {
                const fifa_err = "a country match must have a fifa code";
                throw new Error(fifa_err);
            }
            qstring = qstring.concat(matchtype + fifa_code);
            break;
        default:
            const err = "invalid match type: " + matchtype;
            throw new Error(err);
    }

    // console.log('qstring: ' + qstring);
    return $.get(qstring);
};