
const { selectLanguage } = require("./language");
const config = require("./config");
const { Client } = require("discord.js-selfbot-v13");
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
    
    const L = await selectLanguage();
    
    console.log("\n" + L.start);
    console.log(L.login);

    const client = new Client({
        ws: {
            properties: {
                os: "Android",
                browser: "Discord Android",
                device: "SM-A515F"
            }
        }
    });

    client.on("ready", async () => {
        console.log("Logged in as:", client.user.tag);

        let user;
        try {
            user = await client.users.fetch(config.targetUser);
        } catch (e) {
            console.log(L.userFetchError || "User fetch failed:", e.message);
            return;
        }

        let dm;
        try {
            dm = await user.createDM();
        } catch (e) {
            console.log(L.dmError || "DM open failed:", e.message);
            return;
        }

        console.log(L.dmOpened || "DM opened with:", user.tag);

        let lastId = null;
        let count = 0;

        while (true) {
            let msgs;
            try {
                msgs = await dm.messages.fetch({ limit: 100, before: lastId });
            } catch (e) {
                console.log(L.fetchError || "Fetch error:", e.message);
                break;
            }

            if (!msgs.size) break;

            for (const msg of msgs.values()) {
                if (msg.author.id !== client.user.id) continue;

                try {
                    await msg.delete();
                    count++;
                    console.log(L.deleted || "Deleted:", msg.id);
                } catch (e) {
                    console.log(L.deleteError || "Delete error:", e.message);
                }

                await wait(config.delay);
            }

            lastId = msgs.last().id;
        }

        console.log(L.finished.replace("{count}", count) || `Finished. Total deleted: ${count}`);
    });

    client.login(config.token);
})();