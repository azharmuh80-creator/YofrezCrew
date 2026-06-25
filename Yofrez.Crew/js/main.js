```javascript
// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

});

// PRODUCT MODAL

function openProduct(name, price) {

    document.getElementById("productModal").style.display = "flex";

    document.getElementById("productName").innerText = name;

    document.getElementById("productPrice").innerText =
        "Rp " + price.toLocaleString("id-ID");

    const waLink =
        "https://wa.me/628980349895?text=" +
        encodeURIComponent(
            "Permisi ner, saya mau order " +
            name +
            " harga Rp " +
            price.toLocaleString("id-ID") +
            ". Masih tersedia?"
        );

    document.getElementById("waOrder").href = waLink;
}

function closeProduct() {
    document.getElementById("productModal").style.display = "none";
}

// TUTUP MODAL SAAT KLIK AREA GELAP

window.addEventListener("click", function (e) {

    const modal = document.getElementById("productModal");

    if (e.target === modal) {
        modal.style.display = "none";
    }

});

// TUTUP MENU MOBILE SAAT KLIK LINK

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            nav.style.display = "none";
        }

    });

});
```
