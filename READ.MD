## Discord DM Temizleyici

Belirli bir kullanıcıyla olan DM konuşmalarında **kendi gönderdiğiniz mesajları** temizlemek için hazırlanmış basit bir araçtır.  
Karşı tarafın mesajlarına dokunmaz, sadece size ait mesajları bulur ve tek tek siler.

Bu proje tamamen kişisel kullanım içindir.

---

## Node.js Kurulumu

Bu proje Node.js ile çalışır. Eğer bilgisayarınızda Node.js yüklü değilse resmi siteden indirebilirsiniz:

https://nodejs.org

Kurulum tamamlandıktan sonra terminalde aşağıdaki komutlarla kontrol edebilirsiniz:

node -v

npm -v

Bu komutlar sürüm numarası gösteriyorsa Node.js doğru şekilde kurulmuş demektir.

---

## Kurulum ve Yapılandırma

Projeyi indirdikten sonra bağımlılıkları yükleyin:

Ardından `config.js` dosyasını açıp aşağıdaki değerleri düzenleyin:

js
module.exports = {
    token: "BURAYA_TOKEN",
    targetUser: "DM_SILINECEK_KULLANICI_ID",
    delay: 700
};

## Açıklamalar:

token: Discord kullanıcı tokeniniz

targetUser: Mesajlarını temizlemek istediğiniz kullanıcının ID’si

delay: Silme işlemleri arasındaki gecikme (ms). Çok düşük yapmayın.

## Çalıştırma

Aracı başlatmak için:

1) Klasöre girin

İndirdiğiniz klasöre girin. Örnek:

Windows’ta:

C:\Users\kullanici\Desktop\dm-cleaner klasöründe bir CMD penceresi açıp önce npm install komutunu çalıştırın. Kurulum tamamlandıktan sonra yine aynı klasörde node cleaner.js yazarak aracı başlatabilirsiniz.

## https://discord.gg/CodeN 
