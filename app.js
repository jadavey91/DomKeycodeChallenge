// const keyHit = document.querySelector("#inputkey"); not needed

const header = document.querySelector("h1");
const eventKey = document.querySelector("#eventkey");
const eventCode = document.querySelector("#eventcode");
const eventWhich = document.querySelector("#eventwhich");

document.addEventListener("keydown", (event) => {
    console.log("interesting");
    header.textContent = event.which;
    eventKey.textContent = event.key;
    eventCode.textContent = event.code;
    eventWhich.textContent = event.which;
})

// header.addEventListener("keydown", (event) => {
//     header.textContent = event.which;
//     // console.log(header);
//     // header.style.color = "red";
// })

// eventKey.addEventListener("keydown", (event) => {
//     eventKey.textContent = event.key;
// })

// eventCode.addEventListener("keydown", (event) => {
//     eventCode.textContent = event.code;
// })

// eventWhich.addEventListener("keydown", (event) => {
//     eventWhich.textContent = event.which;
// })

// eventKey.addEventListener()