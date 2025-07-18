//import sumData, { techName } from "./calculator.js";

import sumData, { techName as tech } from "./calculator.js";

import { addData, mulData } from "./calculator.js";

let c = 10;
let d = 20;

console.log(sumData(c, d));

console.log(addData(c, d));
console.log(`The Subtraction of ${c} & ${d} ${mulData(c, d)}`);

//console.log(techName);
console.log(tech);
