const LOGS = {
    tr: {
        starting: "> DM Temizleyici başlatılıyor...",
        login: "> Hesap doğrulanıyor...",
        openDM: "> DM kanalı açıldı:",
        scanning: "> Mesajlar taranıyor...",
        onlySelf: "> Yalnızca sizin mesajlarınız silinecek.",
        deleted: "- Mesaj silindi",
        finished: "İşlem tamamlandı.",
        total: "Toplam silinen mesaj:"
    },

    en: {
        starting: "> DM Cleaner is starting...",
        login: "> Verifying account...",
        openDM: "> DM channel opened with:",
        scanning: "> Scanning messages...",
        onlySelf: "> Only your messages will be deleted.",
        deleted: "- Message deleted",
        finished: "✔ Process completed.",
        total: "✔ Total deleted messages:"
    }
};

module.exports = { LOGS };
