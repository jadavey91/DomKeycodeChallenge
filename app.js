// const keyHit = document.querySelector("#inputkey"); not needed

const header = document.querySelector("h1");
const eventKey = document.querySelector("#eventkey");
const eventCode = document.querySelector("#eventcode");
const eventWhich = document.querySelector("#eventwhich");

document.addEventListener("keydown", () => {
    console.log("interesting");
})

header.addEventListener("keydown", () => {
    header.textContent = event.which;
    console.log(header);
})

eventKey.addEventListener()