import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumnos } from './entity/alumnos.entities';
import { CreateAlumnos } from './dto/create-alumnos.dto';
import { UpdateAlumnos } from './dto/update-alumnos.dto';

@Injectable()
export class AlumnosService {

    constructor(
        @InjectRepository( Alumnos )
        private alumnosRepository: Repository<Alumnos>
    ){}

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
