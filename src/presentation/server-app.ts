import { CreateTable } from '../domain/uses-cases/create-table.use-case';
import { SaveFile } from '../domain/uses-cases/save-file.use-case';

/* Archivo que setea configuración inicial de la app */
interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string
}

export class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {

        const table = new CreateTable().execute({ base, limit })
        const wasCreated = new SaveFile().execute({ fileContent: table, fileName, fileDestination });

        if (showTable) console.log(table);

        (wasCreated)
            ?
            console.log('Table was created!')
            :
            console.error('Table was not created!')



    }
}