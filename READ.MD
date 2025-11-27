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

C:\Users\kullanici\Desktop\dm-cleaner klasöründe bir CMD penceresi açıp önce npm install discord.js-selfbot-v13 komutunu çalıştırın. Kurulum tamamlandıktan sonra yine aynı klasörde node cleaner.js yazarak aracı başlatabilirsiniz.

## https://discord.gg/CodeN 

## Discord DM Cleaner

A simple tool created to remove only the messages you have sent in a direct message conversation with a specific user. It does not touch the other person’s messages; it only finds and deletes your own messages one by one.

This project is intended for personal use only.

## Node.js Installation

This tool requires Node.js. If you do not have Node.js installed, you can download it from the official website: https://nodejs.org

After installation, open a terminal and check the installation with the following commands:

node -v
npm -v
If these commands show version numbers, Node.js has been successfully installed.

## Setup and Configuration

After downloading the project, install the required dependencies.
Then open the config.js file and edit the following values:

token: Your Discord user token
targetUser: The ID of the user whose DM messages you want to clean
delay: Delay between delete actions in milliseconds. Do not set it too low.

## Running the Tool

To start the cleaner:

Go to the project folder.
Example on Windows:
C:\Users\kullanici\Desktop\dm-cleaner

Open a CMD window inside this folder and run:
npm install discord.js-selfbot-v13

After the installation completes, start the tool with:
node cleaner.js

## https://discord.gg/CodeN
