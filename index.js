/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281;
const literToGallon =  0.264;
const kiloToPound =  2.204;

convertBtn.addEventListener("click", conversion);
inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        conversion();
    }
});

function conversion(){
    
    let baseValue = inputEl.value;
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | `;
    lengthEl.textContent +=`${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter`;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | `;
    volumeEl.textContent +=`${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`;
    massEl.textContent =   `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | `;
    massEl.textContent +=  `${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`;
}