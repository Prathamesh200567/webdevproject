function showOffer() {
    document.getElementById("offer").innerHTML =
        "🎉 Special Offer: Get 20% OFF on all cakes today!";
}

function changeCake() {
    document.getElementById("cakeImage").src =
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600";

    document.querySelector("h2").innerHTML = "Strawberry Cake";
}
