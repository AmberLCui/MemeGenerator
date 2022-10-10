const formElement = document.querySelector("form");
let img = document.getElementsByTagName("img");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted");

    const memeImg = document.createElement("div");
    const topText = document.createElement("div");
    const bottomText = document.createElement("div");
    const img = document.createElement("img");

    let btn = document.createElement("deleteButton");
    btn.setAttribute("type", "button");

    img.src = document.getElementById("image").value;
    topText.classList.add("top");
    topText.innerText = document.getElementById("top").value;

    bottomText.classList.add("bottom");
    bottomText.innerText = document.getElementById("bottom").value;

    btn.innerText = "Remove";

    memeImg.classList.add("memeImg");
    memeImg.appendChild(topText);
    memeImg.appendChild(bottomText);
    memeImg.appendChild(img);
    memeImg.appendChild(btn);

    let memeFinished = document.getElementById("final");
    memeFinished.appendChild(memeImg);

    document.getElementById("image").value = "";
    document.getElementById("top").value = "";
    document.getElementById("bottom").value = "";

    formElement.reset();

    btn.addEventListener("click", function (e) {
        memeImg.remove();
    })
});