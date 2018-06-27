const https = require('https');
const express = require("express");
const app = express();
// const jQuery = require("jquery");
// const jsdom = require("jsdom");

const WORLDCUPURL = "https://worldcup.sfg.io/";
const ALLMATCHES = "/matches";
const CURRENTMATCHES = "/matches/current";
const COUNTRYMATCHES = "/matches/country/fifa-code=";
const TODAYMATCHES = "/matches/today";
const ALLRESULTS = "/teams/results";
const RESULTSBYGROUP = "/teams/group_results";
const ALLTEAMS = "/teams/"

let qstring = WORLDCUPURL;

const getServerResults = function (qstring) {
    return (new Promise(function (resolve, reject) {
        let promise, data = '';
        https.get(qstring, (resp) => {

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });
        }).on("error", (err) => {
            resolve(err);
        });
    })
)};


async function getMatch(matchtype, fifa_code) {
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

    console.log('qstring: ' + qstring);
    let results = await getServerResults(qstring);
    console.log(results);
};


getMatch(TODAYMATCHES);

module.exports = {
    ALLMATCHES,
    CURRENTMATCHES,
    COUNTRYMATCHES,
    TODAYMATCHES,
    ALLRESULTS,
    RESULTSBYGROUP,
    ALLTEAMS,
    getMatch
};