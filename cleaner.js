const { Client } = require("discord.js-selfbot-v13");
const config = require("./config");
const wait = ms => new Promise(r => setTimeout(r, ms));

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
        console.log("User fetch failed:", e.message);
        return;
    }

    let dm;
    try {
        dm = await user.createDM();
    } catch (e) {
        console.log("DM open failed:", e.message);
        return;
    }

    console.log("DM opened with:", user.tag);

    let lastId = null;
    let count = 0;

    while (true) {
        let msgs;
        try {
            msgs = await dm.messages.fetch({ limit: 100, before: lastId });
        } catch (e) {
            console.log("Fetch error:", e.message);
            break;
        }

        if (!msgs.size) break;

        for (const msg of msgs.values()) {

            if (msg.author.id !== client.user.id) continue;

            try {
                await msg.delete();
                count++;
                console.log("Deleted:", msg.id);
            } catch (e) {
                console.log("Delete error:", e.message);
            }

            await wait(config.delay);
        }

        lastId = msgs.last().id;
    }

    console.log("Finished. Total deleted:", count);
});

client.login(config.token);
