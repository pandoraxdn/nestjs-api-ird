import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alumnos{

    @PrimaryGeneratedColumn()
    id_alumno:  number;

    @Column()
    nombre:     string;

    @Column()
    ap_paterno: string;

    @Column()
    ap_materno: string;

    @Column({ type: 'text' })
    image:      string;

    @Column()
    matricula:  string;

    @Column()
    carrera:    string;

    @Column()
    password:   string;
}

