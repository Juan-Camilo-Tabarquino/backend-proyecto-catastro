import {
    Entity,
    Column,
    PrimaryColumn,
    BaseEntity,
  } from "typeorm";
  
  @Entity()
  export class Predios extends BaseEntity {
    @PrimaryColumn()
    numero_predial: number;
  
    @Column()
    avaluo: number;
  
    @Column()
    nombre: string;
  
    @Column()
    departamento: string;

    @Column()
    municipio: string;
  
  }