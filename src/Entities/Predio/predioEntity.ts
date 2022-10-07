import {
    Entity,
    Column,
    PrimaryColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
    OneToMany,
  } from "typeorm";
import { Construcciones } from "../Construcciones/construccionEntity";
import { Terrenos } from "../Terreno/terrenoEntity";
  
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

    @OneToMany(() => Construcciones, (construcciones) => construcciones.predio )
    @JoinColumn({name: 'Construcciones'})
    construcciones: Construcciones[];

    @OneToOne(() => Terrenos)
    @JoinColumn()
    terreno : Terrenos
  
  }