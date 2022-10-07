import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Predios } from "../Predio/predioEntity";
  
  @Entity()
  export class Construcciones extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    num_pisos: number;
  
    @Column()
    area: number;
  
    @Column()
    direccion: string;

    @Column()
    tipo: string;

    @ManyToOne(() => Predios, (predios) => predios.construcciones)
    predio: Predios;
  
  }