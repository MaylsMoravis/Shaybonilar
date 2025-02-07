// JSON obyektini "shayboni" nomi bilan yaratamiz
const shayboni = {
    "asos": {
        "h1": "Shayboniylar asoschisi",
        "p": "Shayboniylar sulolasi asoschisi Muhammad Shayboniyxon bo‘lgan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/06/Muhammad_Shaybani.jpg"
    },
    "qachon": {
        "h1": "Shayboniylar davrining boshlanishi",
        "p": "1500-yilda Muhammad Shayboniy Movarounnahrni egalladi.",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyeqtiwlk8YuEWNspAR9nGstWqw72mAmThA&s"
    },
    "egalash": {
        "h1": "Movarounnahrni egallash",
        "p": "Shayboniylar Temuriylardan Movarounnahrni tortib olgan.",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1NPUNmVY_sdMw5YJL04SwmFoIxuNihSjFA&s"
    },
    "poytaxt": {
        "h1": "Poytaxtlar",
        "p": "Shayboniylar davrida poytaxt Samarqand va Buxoro bo‘lgan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Khanate_of_Bukhara_Mawara%27nnahr_%281500-1785%29.png/800px-Khanate_of_Bukhara_Mawara%27nnahr_%281500-1785%29.png"
    },
    "Avlod": {
        "h1": "Chingizxon avlodlari",
        "p": "Shayboniylar Chingizxonning avlodlari hisoblanadi.",
        "img": "https://qvz.uz/wp-content/uploads/2020/01/75c0c1f7b0f7cb1490f28e30cb9fc0b7.jpg"
    },
    "Din": {
        "h1": "Din va madaniyat",
        "p": "Shayboniylar islom dinini qo‘llab-quvvatlagan va madaniyat rivojiga hissa qo‘shgan.",
        "img": "https://arxiv.uz/data/documents/96e59be9-8ba3-496a-a89f-1245b0a33395/page-1.png"
    },
    "vafod": {
        "h1": "Muhammad Shayboniy vafoti",
        "p": "1510-yilda Muhammad Shayboniy Marv jangida vafot etgan.",
        "img": "https://admin.azon.global/storage/625/1706965974.png"
    }
};

document.getElementById("menu").addEventListener("change", function () {
    let container = document.querySelector(".asos");
    let value = this.value;

    // "shayboni" JSON obyektidan ma'lumot olish
    let content = shayboni[value];

    // Agar ma'lumot bo'lsa, ekranga chiqaramiz
    if (content) {
        container.innerHTML = `
            <div style="text-align: center;">
                <img src="${content.img}" alt="${content.h1}">
                <h2>${content.h1}</h2>
                <p>${content.p}</p>
            </div>
        `;
    } else {
        container.innerHTML = ""; // Agar ma'lumot bo'lmasa, bo'sh qoldiramiz
    }
});