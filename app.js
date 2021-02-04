// const keyHit = document.querySelector("#inputkey"); not needed

const header = document.querySelector("h1");
const eventKey = document.querySelector("#eventkey");
const eventCode = document.querySelector("#eventcode");
const eventWhich = document.querySelector("#eventwhich");

document.addEventListener("keydown", () => {
    console.log("interesting");
})

header.addEventListener("keydown", () => {
    header.innerHTML = event.which;
    // console.log(header);
    // header.style.color = "red";
})

eventKey.addEventListener("keydown", () => {
    eventKey.textContent.innerHTML = event.key;
})

eventCode.addEventListener("keydown", () => {
    eventCode.textContent = event.code;
})

eventWhich.addEventListener("keydown", () => {
    eventWhich.textContent = keydown.which;
})

// eventKey.addEventListener()