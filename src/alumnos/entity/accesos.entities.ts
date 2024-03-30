import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { Alumnos } from './alumnos.entities';

@Entity()
export class Accesos{

    @PrimaryGeneratedColumn()
    id_acceso:      number;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    fecha_ingreso:  Date;

    @ManyToOne( () => Alumnos, alumnos => alumnos.id_alumno) 
    @JoinTable()
    alumnos: Alumnos;

}
