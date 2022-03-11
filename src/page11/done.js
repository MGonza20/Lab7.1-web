import "../main.scss";
import "../orderDivs.scss";

import imgDone from "../images/misionCumplida.gif";

const {bar} = require("../bar.js");
const {brElement} = require("../brElement.js");

//Colocar body
const body = document.body;

//Hacer un div para colocar elementos
const div = document.createElement('div');

const divTitle = document.createElement('div');

//Crear elemento para colocar titulo
const title = document.createElement('h1');

//Crear elemento para img
const img = document.createElement('img');


//div para colocar pregunta
const divQ = document.createElement('div');
const btnTrip = document.createElement('button');
const imgD = document.createElement('div');

body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Misión cumplida');


div.append(imgD);



img.setAttribute('src', imgDone);
img.setAttribute('width', '400px');
imgD.appendChild(img);


body.append(divQ);
divQ.append(brElement());
divQ.append(btnTrip);
divQ.append(brElement());
divQ.append(brElement());
divQ.append(bar(85));
btnTrip.append("Viajar a NYC");
btnTrip.setAttribute('id', 'tripBtn');


document.getElementById("tripBtn").onclick = function () {
    location.href = "../page12.html";
};


divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
imgD.setAttribute('id', 'divImg');
