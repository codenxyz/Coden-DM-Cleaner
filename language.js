const readline = require("readline");
const { LOGS } = require("./logs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function selectLanguage() {
    return new Promise(resolve => {
        console.log("Dil seçin / Select language:");
        console.log("[1] Türkçe");
        console.log("[2] English\n");

        rl.question("Seçiminiz / Your choice: ", answer => {
            let lang = "tr";

            if (answer === "1") lang = "tr";
            else if (answer === "2") lang = "en";
            else console.log("\nGeçersiz seçim, varsayılan Türkçe kullanılacak.\n");

            rl.close();
            resolve(LOGS[lang]);
        });
    });
}

module.exports = { selectLanguage };
