import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    port: 5432,
    database: 'Proyecto_Catastro',
    entities: [],
    logging: true,
})