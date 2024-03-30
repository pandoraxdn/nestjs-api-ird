import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumnos } from './entity/alumnos.entities';
import { Accesos } from './entity/accesos.entities';
import { CreateAlumnos } from './dto/create-alumnos.dto';
import { UpdateAlumnos } from './dto/update-alumnos.dto';
import { CreateAccesos } from './dto/create-accesos.dto';

@Injectable()
export class AlumnosService {

    constructor(
        @InjectRepository( Alumnos )
        private alumnosRepository: Repository<Alumnos>,
        @InjectRepository( Accesos )
        private accesosRepository: Repository<Accesos>,
    ){}

    async registerAccess( createAcceso: CreateAccesos ){
        try{
            const user: Alumnos = await this.alumnosRepository.findOneBy({
                matricula: createAcceso.matricula,
            });
            const new_register = new Accesos;
            new_register.alumnos = { id_alumno: user.id_alumno } as any;
            return await this.accesosRepository.save(new_register);
        }catch(error){
            return false;
        }

    }

    async listAccess(){
        return await this.accesosRepository
            .createQueryBuilder('accesos')
            .innerJoinAndSelect('accesos.alumnos', 'alumnos')
            /*
            .select("accesos.id_acceso")
            .addSelect("accesos.fecha_ingreso")
            .addSelect("alumnos.nombre")
            .addSelect("alumnos.ap_paterno")
            .addSelect("alumnos.ap_materno")
            .addSelect("alumnos.matricula")
            .addSelect("alumnos.carrera")
            .addSelect("alumnos.image")
            */
            .getMany();
    }

    async login( updateAlumno: UpdateAlumnos ){
        try{
            const user: Alumnos = await this.alumnosRepository.findOneBy({
                matricula: updateAlumno.matricula,
            });
            return ( user.password === updateAlumno.password ) ? user : false;
        }catch( error ){
            return false;
        }
    }

    async create( createAlumno: CreateAlumnos ){
        const new_alumno = this.alumnosRepository.create( createAlumno );
        return await this.alumnosRepository.save( new_alumno );        
    }

    async update( id_alumno: number, updateAlumno: UpdateAlumnos ){
        return await this.alumnosRepository.update( id_alumno, updateAlumno );
    }

    async findAll(){
        return await this.alumnosRepository.find();
    }

    async findOne( id_alumno: number ){
        return await this.alumnosRepository.findBy({ id_alumno });
    }

    async delete( id_alumno: number ){
        return await this.alumnosRepository.delete( id_alumno );
    }
}
