import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
  } from "typeorm";
  
  @Entity()
  export class Terrenos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    area: number;
  
    @Column()
    valor_comercial: number;
  
    @Column()
    fuentes_agua: string;

    @Column()
    tipo: string;

    @Column()
    construcciones: string;
  
  }