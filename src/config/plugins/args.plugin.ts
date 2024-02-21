import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

//Provee de formato más amenos para manipular argv sin tener que manipular la data mandada
export const yarg = yargs(hideBin(process.argv))
    .option('b', {                   //Las option define la estructura que deben cumplir lor parámetros del comando bash llamado
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check((arg, options) => {

        if (arg.b < 1) throw 'Error:base must be greater than 0';

        return true;

    })
    .parseSync();


