import { DataSource } from "typeorm";
import { Predios, Terrenos } from "./Entities";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    port: 5432,
    database: 'Proyecto_Catastro',
    entities: [Predios,Terrenos],
    synchronize: true,
    ssl: false,
    //logging: true,
})