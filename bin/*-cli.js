import minimist from "minimist"

const args = minimist(process.argv.slice(2));

if (args.h) {
	console.log("Usage: node-rps [SHOT]");
	console.log("Play Rock Paper Scissors (RPS)");
	console.log("  -h, --help      display this help message and exit");
	console.log("  -r, --rules     display the rules and exit");
	console.log("Examples:");
	console.log("  node-rps        Return JSON with single player RPS result.");
	console.log("                  e.g. {player:rock}");
    console.log("  node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
    console.log("                  e.g {player:rock,opponent:scissors,result:win}");
	process.exit(0);
}
