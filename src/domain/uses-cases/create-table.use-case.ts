export interface CreateTableUseCase {
    execute: (optiona: CreateTableOptions) => string
}

export interface CreateTableOptions {
    base: number,
    limit?: number
}

export class CreateTable {
    constructor() { //DI dependency injection
    }

    execute({ base, limit }: CreateTableOptions) {
        let outputMessage: string = '';
        for (let index = 1; index <= 10; index++) {
            outputMessage += ` ${base} x ${index} = ${base * index} \n`;
        }

        return outputMessage;
    }
}