import fs from "fs";

const base: number = 5;
const headerMessage = `
===============================
        Tabla del ${base}
=============================== \n
`;
let outputMessage: string = '';
for (let index = 1; index <= 10; index++) {
    outputMessage += ` ${base} x ${index} = ${base * index} \n`;
}

const outpath: string = './outputs';

fs.mkdirSync(outpath, { recursive: true });

outputMessage = headerMessage + outputMessage;

console.log(outputMessage);
fs.writeFileSync(`${outpath}/table-${base}.txt`, outputMessage);
console.log('File created!');

