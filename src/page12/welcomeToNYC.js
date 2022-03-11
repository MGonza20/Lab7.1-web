import "../main.scss";
import "../orderDivs.scss";

import imgNYC from "../images/ny.png";

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
const imgD = document.createElement('div');


body.append(div);
//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('¡Bienvenid@ a NYC!');
div.append(imgD);


img.setAttribute('src', imgNYC);
img.setAttribute('width', '600px');
imgD.appendChild(img);
imgD.append(brElement());
imgD.append(brElement());
imgD.append(bar(100));

divTitle.setAttribute('id', 'divT');
imgD.setAttribute('id', 'divImg');
