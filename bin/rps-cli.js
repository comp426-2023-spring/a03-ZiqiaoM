#!/usr/bin/env node

import {rps} from '../lib/rpsls.js';
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

if(args.help || args.h) {
	printHelp();
    process.exit(0);
}

if(args.r || args.rules) {
    printRules();
    process.exit(0);

}

var locz = args._length;

switch(locz) {
    case locz == 0:
        console.log(JSON.stringify(rps("none")));
        process.exit(0);
    case locz == 1:
        var player = args._[0].toString().toLowerCase();
        if(player=="rock" || player=="paper" || player=="scissors")
        {
            console.log(JSON.stringify(rps(player)));
            process.exit(0);
        } else {
            console.log("unknown input");
            printHelp();
            printRules();
            process.exit(0);
        }
    default:
        console.log("out of range.");
        printHelp();
        printRules();
        process.exit(0);
}


function printHelp() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}

function printRules() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
}