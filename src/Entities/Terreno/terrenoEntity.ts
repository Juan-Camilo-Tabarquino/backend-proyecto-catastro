import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
  } from "typeorm";
import { Predios } from "../Predio/predioEntity";
  
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

    @OneToOne(() => Predios)
    @JoinColumn()
    predio : Predios
  
  }