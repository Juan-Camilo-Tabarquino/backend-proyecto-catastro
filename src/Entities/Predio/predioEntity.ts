import {
    Entity,
    Column,
    PrimaryColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Predio extends BaseEntity {
    @PrimaryColumn()
    numero_predial: number;
  
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  
    @Column({ default: true })
    active: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }