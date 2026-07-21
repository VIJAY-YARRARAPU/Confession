const ui = document.getElementById("ui");

function createAnimation() {

    ui.innerHTML = "";

    const scene = Math.min(window.innerWidth * 0.92, 450);

    // Automatically decide how many words to create
    let totalItems;

    if (scene < 280) {
        totalItems = 36;
    } else if (scene < 340) {
        totalItems = 45;
    } else if (scene < 400) {
        totalItems = 56;
    } else {
        totalItems = 67;
    }

    document.documentElement.style.setProperty("--scene", `${scene}px`);

    for (let i = 1; i <= totalItems; i++) {

        const love = document.createElement("div");
        love.className = "love";
        love.style.setProperty("--i", i);

        love.innerHTML = `
            <div class="love_horizontal">
                <div class="love_vertical">
                    <div class="love_word">I love you</div>
                </div>
            </div>
        `;

        ui.appendChild(love);
    }
}

createAnimation();

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        createAnimation();
    }, 200);

});
