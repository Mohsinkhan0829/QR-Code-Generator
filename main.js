let form = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("#size");
let image = document.querySelector("img");
let download = document.querySelector("#download");


const getQr =async (e)=>{
e.preventDefault();
const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`);
image.setAttribute("src" , response.url);
console.log(response)

const downloadQr = ()=>{
    download.setAttribute("href", response.url)
}
    download.addEventListener("click" , downloadQr)

}
form.addEventListener("submit" , getQr)


