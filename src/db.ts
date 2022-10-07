import { DataSource } from "typeorm";
import { Predios, Terrenos, Construcciones, Propietarios } from "./Entities";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    port: 5432,
    database: 'Proyecto_Catastro',
    entities: [Predios,Construcciones,Terrenos,Propietarios],
    synchronize: true,
    ssl: false,
    //logging: true,
})