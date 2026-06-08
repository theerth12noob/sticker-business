const stickerData = {
    marvel: [{ name: "Chibi Spiderman 🕸️", img: "chibi_spiderman_02_sticker.jpg" }, { name: "Baby Iron Man 🚀", img: "c372b5f259e76332a7f628cb299f73ec.jpg" }, { name: "Cute Captain America 🛡️", img: "capn america.jpg" }, { name: "Tiny Thor ⚡", img: "thor.jpg" }, { name: "Chibi Hulk 💚", img: "hulk.jpg" }, { name: "Baby Groot 🌱", img: "groot.jpg" }, { name: "Chibi Deadpool ⚔️", img: "deadpool.png" }, { name: "Cute Wolverine 🐾", img: "wolverine_sticker.jpg" }, { name: "Black Widow 🕷️", img: "blaxck widow.jpg" }, { name: "Hawkeye 🏹", img: "hawk.jpg" }],
    dc: [{ name: "Chibi Batman 🦇", img: "batman.jpg" }, { name: "Cute Wonder Woman 👑", img: "ww.jpg" }, { name: "Baby Superman 🦸‍♂️", img: "chibi_superman_sticker.jpg" }, { name: "Chibi Flash ⚡", img: "flash.jpg" }, { name: "Tiny Aquaman 🔱", img: "aqua.png" }, { name: "Cute Harley Quinn ♦️", img: "quinn.jpg" }, { name: "Baby Joker 🃏", img: "joke.jpg" }, { name: "Supergirl ✨", img: "girlsuper.jpg" }, { name: "Krypto the Superdog 🐕", img: "krypto.jpg" }],
    "the-boys": [{ name: "Chibi Billy Butcher 🧥", img: "butcher.png" }, { name: "Baby Hughie 👕", img: "hughie.png" }, { name: "Tiny Homelander 🥛", img: "homelander.png" }, { name: "Chibi Soldier Boy 🛡️", img: "soldierboy.png" }, { name: "Cute Starlight ✨", img: "star.jpg" }, { name: "Chibi Black Noir 🥷", img: "noir.jpg" }, { name: "The Deep 🐙", img: "the deep.webp" }],
    dinosaurs: [{ name: "Baby Tea-Rex 🦖🍵", img: "tearex.jpg" }, { name: "Chibi Godzilla 🦖🔥", img: "godzilla.jpg" }, { name: "Cute Triceratops 🦕", img: "trike.jpg" }, { name: "Baby Stegosaurus 🍃", img: "stego.jpg" }, { name: "Chibi King Kong 🦍", img: "kong.jpg" }, { name: "Tiny Pterodactyl 🦅", img: "ptero.jpg" }, { name: "King Ghidorah ⚡🐉", img: "ghid.png" }, { name: "Mothra 🦋", img: "moth.jpg" }, { name: "Rodan 🦅🔥", img: "rod.png" }],
    anime: [{ name: "Chibi Naruto 🍥", img: "naruto.jpg" }, { name: "Cute Nezuko 🎋", img: "nezu.jpg" }, { name: "Baby Goku ☁️", img: "gok.jpg" }, { name: "Chibi Kakashi 👁️", img: "kak.jpg" }, { name: "Joseph Joestar 🏃‍♂️💨", img: "joseph.jpg" }, { name: "Jotaro Kujo 🧢👊", img: "jotaro.jpg" }, { name: "Inosuke Hashibira 🐗⚔️", img: "ino.jpg" }, { name: "Baby Deku 🥦", img: "deku.jpg" }, { name: "Chibi Bakugo 💥", img: "baku.jpg" }, { name: "Ash Ketchum 🧢⚡", img: "ash.png" }, { name: "Prince Vegeta 👑🔥", img: "veg.jpg" }, { name: "Dio Brando 🧛‍♂️⏳", img: "sio.jpg" }, { name: "Zenitsu Agatsuma ⚡😴", img: "zen.jpg" }, { name: "Sasuke Uchiha 👁️⚡", img: "sasu.jpg" }, { name: "Sakura Haruno 🌸👊", img: "saku.webp" }, { name: "Pikachu ⚡🐭", img: "piku.jpg" }, { name: "Tanjiro Kamado 🌊⚔️", img: "tanj.jpg" }],
    movies: [{ name: "Chibi Harry Potter ⚡", img: "harry.jpg" }, { name: "Chibi Hermione Granger 📚", img: "hermione.jpg" }, { name: "Baby Anakin Skywalker 🌌", img: "anakin.jpg" }, { name: "Darth Vader 🔴⚔️", img: "vader.webp" }, { name: "Luke Skywalker ⚔️🟢", img: "luke.jpg" }, { name: "Princess Leia 👑", img: "leia.jpg" }, { name: "Obi-Wan Kenobi 🧘‍♂️🔵", img: "obi wan.jpg" }, { name: "Cute C-3PO 🤖", img: "c3po.jpg" }, { name: "Chibi Chewbacca 🐻", img: "chewie.jpg" }, { name: "Tiny Han Solo 🔫", img: "han.jpg" }, { name: "Master Yoda 🟢✨", img: "yoda.png" }, { name: "Stormtrooper ⚪🛡️", img: "trooper.jpg" }, { name: "Cute R2-D2 🤖⚙️", img: "r2d2.jpg" }, { name: "Padmé Amidala 🌸", img: "padme.png" }, { name: "Emperor Palpatine ⚡⚡", img: "palp.jpg" }, { name: "Tiny Frodo Baggins 💍", img: "frodo.jpg" }, { name: "Chibi Bilbo Baggins 🗺️", img: "bilbo.jpg" }, { name: "Legolas 🏹🍃", img: "legolas.jpg" }, { name: "Gollum 🐟👀", img: "gollum.jpg" }, { name: "The Eye of Sauron 🔥👁️", img: "sauron.jpg" }, { name: "Smaug the Dragon 🐉🔥", img: "smaug.jpg" }, { name: "Dom Toretto 🚗💨", img: "dom.jpg" }, { name: "Baby Paul Atreides 🏜️", img: "paul.jpg" }, { name: "Giant Sandworm 🐛🏜️", img: "sandworm.jpg" }, { name: "Chibi Indiana Jones 🤠🧭", img: "indy.jpg" }]
};

function scrollToSection(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); }

function filterCategory(category) {
    const displayArea = document.getElementById("sticker-display");
    displayArea.innerHTML = "";
    stickerData[category].forEach(sticker => {
        const stickerCard = document.createElement("div");
        stickerCard.classList.add("sticker-item");
        stickerCard.onclick = () => {
            document.getElementById("overlay-img").src = sticker.img;
            document.getElementById("overlay-name").innerText = sticker.name;
            document.getElementById("overlay").style.display = "flex";
        };
        stickerCard.innerHTML = `<img src="${sticker.img}" alt="${sticker.name}"><p>${sticker.name}</p>`;
        displayArea.appendChild(stickerCard);
    });
}

document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const feedbackBox = document.getElementById("formFeedback");
    feedbackBox.classList.remove("hidden");
    this.reset();
    setTimeout(() => feedbackBox.classList.add("hidden"), 4000);
});