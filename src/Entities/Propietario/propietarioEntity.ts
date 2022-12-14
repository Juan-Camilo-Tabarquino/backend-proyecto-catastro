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
  export class Propietarios extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    telefono: number;
  
    @Column({nullable: true})
    email: string;
  
    @Column()
    direccion: string;

    @Column({nullable: true})
    tipo_documento: string;

    @Column({nullable: true})
    numero_documento: number;

    @Column({nullable: true})
    nombre: string;

    @Column({nullable: true})
    apellidos: string;

    @Column({nullable: true})
    nit: number;

    @Column({nullable: true})
    razon_social: string;

    @ManyToOne(() => Predios, (predios) => predios.construcciones)
    @JoinColumn({name: 'predio'})
    @Column('int')
    predio: Predios;
  
  }