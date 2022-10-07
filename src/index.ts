import "reflect-metadata";
import app from './app';
import { AppDataSource } from './db'

async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(9000);
        console.log('listening on port 9000')
        console.log('Database conect')
    } catch (error) {
        console.log(error);
    }
}

main();
