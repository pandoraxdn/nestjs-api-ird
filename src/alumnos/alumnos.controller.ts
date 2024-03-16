import { 
    Controller ,
    Post,
    Get,
    Delete,
    Put,
    Body,
    ValidationPipe,
    Param
} from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnos } from './dto/create-alumnos.dto';
import { UpdateAlumnos } from './dto/update-alumnos.dto';

@Controller('alumnos')
export class AlumnosController {

    constructor(
        private alumnosService: AlumnosService
    ){}

    @Post()
    async create( @Body( new ValidationPipe() ) createAlumno: CreateAlumnos ){
        return await this.alumnosService.create( createAlumno );
    }

    @Put(':id_alumno')
    async update( @Param('id_alumno') id_alumno: number, @Body( new ValidationPipe() ) updateAlumno: UpdateAlumnos ){
        return await this.alumnosService.update( id_alumno, updateAlumno );      
    }

    @Get()
    async findAll(){
        return await this.alumnosService.findAll();
    }

    @Get(':id_alumno')
    async findOne( @Param('id_alumno') id_alumno: number ){
        return await this.alumnosService.findOne( id_alumno );
    }

    @Delete(':id_alumno')
    async delete( @Param('id_alumno') id_alumno: number ){
        return await this.alumnosService.delete( id_alumno );
    }

}
