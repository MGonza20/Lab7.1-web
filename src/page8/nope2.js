import "../main.scss";
import "../orderDivs.scss";

import imgNope2 from "../images/nope.gif";

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
title.append('Opción incorrecta. Has perdido tu oportunidad');
div.append(imgD);
imgD.append(img);

img.setAttribute('src', imgNope2);
img.setAttribute('width', '320px');


